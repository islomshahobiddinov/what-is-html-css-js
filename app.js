let activePage = null;
let activeTopic = null;
let synth = window.speechSynthesis;
let utterance = null;
let isPlaying = false;
let selectedVoiceName = localStorage.getItem('selectedVoice') || null;

// Ovozlar yuklanishini kuting
function loadVoices() {
  return new Promise(resolve => {
    const voices = synth.getVoices();
    if (voices.length > 0) { resolve(voices); return; }
    synth.addEventListener('voiceschanged', () => resolve(synth.getVoices()), { once: true });
    setTimeout(() => resolve(synth.getVoices()), 1500);
  });
}

loadVoices().then(() => {
  populateVoiceSelect();
});

// voiceschanged har safar qayta to'ldirish (ba'zi brauzerlarda)
synth.addEventListener('voiceschanged', populateVoiceSelect);

// Sahifani boshlash
function initPage(page) {
  activePage = page;
  renderTopics(SITE_DATA[page]);
  showEmptySidebar();
}

// Mavzular gridini yaratish
function renderTopics(data) {
  const grid = document.getElementById('topicsGrid');
  if (!grid) return;
  grid.innerHTML = data.topics.map((topic, i) => `
    <button class="topic-btn" id="btn-${topic.id}" onclick="selectTopic('${topic.id}')">
      <span class="topic-btn-icon">${topic.icon}</span>
      <div class="topic-btn-text">
        <div class="topic-btn-title">${topic.title}</div>
        <div class="topic-btn-num">Mavzu ${i + 1}</div>
      </div>
    </button>
  `).join('');
}

// Mavzuni tanlash
function selectTopic(topicId) {
  stopVoice();
  const topic = SITE_DATA[activePage].topics.find(t => t.id === topicId);
  if (!topic) return;

  activeTopic = topic;
  document.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById(`btn-${topicId}`);
  if (btn) btn.classList.add('active');

  showTopicContent(topic);
  document.getElementById('app').classList.add('right-open');
}

// O'ng panelni to'ldirish
function showTopicContent(topic) {
  document.getElementById('sidebarEmpty').style.display = 'none';
  const contentEl = document.getElementById('sidebarContent');
  contentEl.style.display = 'flex';

  document.getElementById('topicTitle').textContent = topic.title;
  const bodyEl = document.getElementById('topicBody');
  bodyEl.innerHTML = topic.content;
  bodyEl.scrollTop = 0;

  // Ovoz tanlash ro'yxatini yangilash
  populateVoiceSelect();
}

// O'ng panelni yopish
function closeSidebar() {
  stopVoice();
  document.getElementById('app').classList.remove('right-open');
  document.getElementById('sidebarEmpty').style.display = 'flex';
  document.getElementById('sidebarContent').style.display = 'none';
  document.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('active'));
  activeTopic = null;
}

function showEmptySidebar() {
  const e = document.getElementById('sidebarEmpty');
  const c = document.getElementById('sidebarContent');
  if (e) e.style.display = 'flex';
  if (c) c.style.display = 'none';
}

// ─── OVOZ TANLASH ───

function populateVoiceSelect() {
  const select = document.getElementById('voiceSelect');
  if (!select) return;

  const voices = synth.getVoices();
  if (voices.length === 0) {
    select.innerHTML = '<option>Ovozlar yuklanmoqda...</option>';
    return;
  }

  // Har bir ovoz uchun option yaratish
  select.innerHTML = voices.map((v, i) => {
    const langFlag = getLangFlag(v.lang);
    const label = `${langFlag} ${v.name}`;
    return `<option value="${i}">${label}</option>`;
  }).join('');

  // Saqlangan yoki standart ovozni tanlash
  if (selectedVoiceName) {
    const savedIdx = voices.findIndex(v => v.name === selectedVoiceName);
    if (savedIdx >= 0) {
      select.value = savedIdx;
      return;
    }
  }

  // Standart ovoz: uz > ru > en > birinchi
  const uzIdx = voices.findIndex(v => v.lang.startsWith('uz'));
  const ruIdx = voices.findIndex(v => v.lang.startsWith('ru'));
  const enIdx = voices.findIndex(v => v.lang.startsWith('en'));
  const defaultIdx = uzIdx >= 0 ? uzIdx : ruIdx >= 0 ? ruIdx : enIdx >= 0 ? enIdx : 0;

  select.value = defaultIdx;
  selectedVoiceName = voices[defaultIdx]?.name || null;
}

function getLangFlag(lang) {
  const flags = {
    'uz': '🇺🇿', 'ru': '🇷🇺', 'en': '🇬🇧', 'de': '🇩🇪',
    'fr': '🇫🇷', 'es': '🇪🇸', 'it': '🇮🇹', 'tr': '🇹🇷',
    'ar': '🇸🇦', 'zh': '🇨🇳', 'ja': '🇯🇵', 'ko': '🇰🇷'
  };
  const code = lang.split('-')[0].toLowerCase();
  return flags[code] || '🌐';
}

function changeVoice() {
  const select = document.getElementById('voiceSelect');
  if (!select) return;

  const voices = synth.getVoices();
  const chosen = voices[parseInt(select.value)];
  if (!chosen) return;

  selectedVoiceName = chosen.name;
  localStorage.setItem('selectedVoice', chosen.name);

  // Agar o'ynayotgan bo'lsa, qayta boshlash
  if (isPlaying) {
    stopVoice();
    startVoice();
  }
}

// ─── OVOZ O'YNATISH ───

function toggleVoice() {
  isPlaying ? stopVoice() : startVoice();
}

function startVoice() {
  if (!activeTopic) return;

  const bodyEl = document.getElementById('topicBody');
  const cleanText = bodyEl.innerText || bodyEl.textContent;
  if (!cleanText.trim()) return;

  synth.cancel();

  utterance = new SpeechSynthesisUtterance();
  utterance.text = activeTopic.title + '. ' + cleanText;
  utterance.rate = 0.92;
  utterance.pitch = 1.05;
  utterance.volume = 1;

  // Tanlangan ovozni ishlatish
  const voices = synth.getVoices();
  const chosenVoice = voices.find(v => v.name === selectedVoiceName)
    || voices.find(v => v.lang.startsWith('uz'))
    || voices.find(v => v.lang.startsWith('ru'))
    || voices.find(v => v.lang.startsWith('en'))
    || voices[0];

  if (chosenVoice) {
    utterance.voice = chosenVoice;
    utterance.lang = chosenVoice.lang;
  }

  utterance.onstart = () => { isPlaying = true; updateVoiceBtn(true); };
  utterance.onend   = () => { isPlaying = false; updateVoiceBtn(false); };
  utterance.onerror = () => { isPlaying = false; updateVoiceBtn(false); };

  synth.speak(utterance);
}

function stopVoice() {
  synth.cancel();
  isPlaying = false;
  updateVoiceBtn(false);
}

function updateVoiceBtn(playing) {
  const btn = document.getElementById('voiceBtn');
  if (!btn) return;
  if (playing) {
    btn.classList.add('playing');
    btn.innerHTML = `<span class="voice-pulse"></span><span class="voice-text">To'xtatish</span>`;
  } else {
    btn.classList.remove('playing');
    btn.innerHTML = `<span>🔊</span><span class="voice-text">Tinglash</span>`;
  }
}

window.addEventListener('beforeunload', () => synth.cancel());
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSidebar(); });
