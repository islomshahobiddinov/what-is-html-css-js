const SITE_DATA = {

  html: {
    title: "HTML",
    fullName: "HyperText Markup Language",
    icon: "🌐",
    desc: "Veb-sahifalar yaratishning asosi — belgilash tili",
    color: "html",
    topicsCount: 10,
    topics: [
      {
        id: "html-nima",
        icon: "📖",
        title: "HTML nima?",
        content: `
<h3>HTML haqida</h3>
<p>HTML (HyperText Markup Language) — bu veb-sahifalarni yaratish uchun ishlatiladigan <strong>belgilash tilidir</strong>. U 1991-yilda mashhur olim Tim Berners-Li tomonidan ixtiro qilingan. HTML dasturlash tili emas — u ma'lumotlarning tuzilishini va ko'rinishini belgilaydi.</p>
<p>Brauzer (Chrome, Firefox, Edge) HTML kodini o'qib, uni foydalanuvchiga ko'rinadigan veb-sahifaga aylantiradi. Ya'ni HTML — bu brauzer bilan gaplashadigan til.</p>

<h3>HTML faylning tuzilishi</h3>
<p>Har bir HTML fayli <code>.html</code> kengaytmasiga ega bo'ladi va quyidagi asosiy tuzilishga ega:</p>
<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="uz"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Mening sahifam&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Salom, Dunyo!&lt;/h1&gt;
    &lt;p&gt;Bu mening birinchi veb-sahifam.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code><span class="code-lang">html</span></pre>

<h3>Asosiy qismlar</h3>
<ul>
  <li><strong>&lt;!DOCTYPE html&gt;</strong> — bu HTML5 hujjati ekanligini bildiradi</li>
  <li><strong>&lt;html&gt;</strong> — barcha HTML kodining bosh elementi</li>
  <li><strong>&lt;head&gt;</strong> — sahifa haqida meta-ma'lumotlar (foydalanuvchi ko'rmaydi)</li>
  <li><strong>&lt;title&gt;</strong> — brauzer yorlig'ida ko'rinadigan sarlavha</li>
  <li><strong>&lt;body&gt;</strong> — sahifada ko'rinadigan barcha kontent shu yerda</li>
</ul>

<div class="info-box">💡 HTML, CSS va JavaScript — veb-dasturlashning uch asosiy ustuni. HTML — tuzilish, CSS — ko'rinish, JavaScript — harakat uchun javob beradi.</div>

<h3>HTML tarixi</h3>
<p>HTML 1991-yildan beri rivojlanib kelmoqda. Hozirda <strong>HTML5</strong> eng yangi versiya bo'lib, video, audio, canvas kabi zamonaviy imkoniyatlarni qo'shdi. HTML5 2014-yilda rasman standart sifatida tasdiqlangan.</p>
        `
      },
      {
        id: "html-elementlar",
        icon: "🧩",
        title: "HTML elementlari",
        content: `
<h3>Element nima?</h3>
<p>HTML elementi — bu <strong>ochiluvchi teg</strong>, <strong>kontent</strong> va <strong>yopiluvchi teg</strong>dan iborat to'liq birlikdir. Masalan: <code>&lt;p&gt;Bu matn&lt;/p&gt;</code></p>

<h3>Element tuzilishi</h3>
<pre><code class="language-html">&lt;tagname atribut="qiymat"&gt;Kontent&lt;/tagname&gt;
    ↑              ↑           ↑          ↑
  Teg nomi     Atribut      Kontent   Yopiluvchi teg</code><span class="code-lang">html</span></pre>

<h3>Bo'sh elementlar</h3>
<p>Ba'zi elementlarda yopiluvchi teg bo'lmaydi. Ularga <strong>bo'sh (void) elementlar</strong> deyiladi:</p>
<div class="tag-list">
  <span class="tag">&lt;br&gt;</span>
  <span class="tag">&lt;hr&gt;</span>
  <span class="tag">&lt;img&gt;</span>
  <span class="tag">&lt;input&gt;</span>
  <span class="tag">&lt;link&gt;</span>
  <span class="tag">&lt;meta&gt;</span>
</div>

<h3>Asosiy elementlar</h3>
<pre><code class="language-html">&lt;!-- Sarlavhalar (h1 eng katta, h6 eng kichik) --&gt;
&lt;h1&gt;Birinchi darajali sarlavha&lt;/h1&gt;
&lt;h2&gt;Ikkinchi darajali sarlavha&lt;/h2&gt;
&lt;h3&gt;Uchinchi darajali sarlavha&lt;/h3&gt;

&lt;!-- Paragraf --&gt;
&lt;p&gt;Bu oddiy matn paragraf.&lt;/p&gt;

&lt;!-- Qo'yma matn --&gt;
&lt;strong&gt;Qalin matn&lt;/strong&gt;
&lt;em&gt;Qiyshiq matn&lt;/em&gt;
&lt;u&gt;Tagiga chizilgan matn&lt;/u&gt;

&lt;!-- Gorizontal chiziq --&gt;
&lt;hr&gt;

&lt;!-- Yangi qator --&gt;
&lt;br&gt;</code><span class="code-lang">html</span></pre>

<h3>Ichma-ich elementlar</h3>
<p>HTML elementlari bir-birining ichiga joylashishi mumkin. Lekin to'g'ri joylashish tartibiga rioya qilish kerak:</p>
<pre><code class="language-html">&lt;!-- To'g'ri --&gt;
&lt;p&gt;Bu &lt;strong&gt;muhim&lt;/strong&gt; ma'lumot.&lt;/p&gt;

&lt;!-- Noto'g'ri (yopilish tartibi buzilgan) --&gt;
&lt;p&gt;Bu &lt;strong&gt;muhim&lt;/p&gt;&lt;/strong&gt;</code><span class="code-lang">html</span></pre>

<div class="info-box">⚠️ Elementlarni to'g'ri yopish juda muhim! Yopilmagan elementlar sahifaning buzilishiga olib keladi.</div>
        `
      },
      {
        id: "html-teglar",
        icon: "🏷️",
        title: "HTML teglar",
        content: `
<h3>Teg nima?</h3>
<p>Teglar — HTML kodining asosiy qurilish bloklari. Ular burchakli qavslar <code>&lt; &gt;</code> ichida yoziladi. Har bir teg o'ziga xos ma'no va vazifaga ega.</p>

<h3>Matn teglari</h3>
<pre><code class="language-html">&lt;h1&gt;Asosiy sarlavha&lt;/h1&gt;
&lt;h2&gt;Kichik sarlavha&lt;/h2&gt;
&lt;p&gt;Paragraf matni&lt;/p&gt;
&lt;span&gt;Qatorli element&lt;/span&gt;
&lt;strong&gt;Qalin (muhim) matn&lt;/strong&gt;
&lt;em&gt;Qiyshiq (ta'kidlangan) matn&lt;/em&gt;
&lt;mark&gt;Belgilangan matn&lt;/mark&gt;
&lt;del&gt;O'chirilgan matn&lt;/del&gt;
&lt;sub&gt;Pastki indeks&lt;/sub&gt;
&lt;sup&gt;Yuqori indeks&lt;/sup&gt;</code><span class="code-lang">html</span></pre>

<h3>Ro'yxat teglari</h3>
<pre><code class="language-html">&lt;!-- Tartibsiz ro'yxat --&gt;
&lt;ul&gt;
    &lt;li&gt;Olma&lt;/li&gt;
    &lt;li&gt;Nok&lt;/li&gt;
    &lt;li&gt;Shaftoli&lt;/li&gt;
&lt;/ul&gt;

&lt;!-- Tartibli ro'yxat --&gt;
&lt;ol&gt;
    &lt;li&gt;Birinchi qadam&lt;/li&gt;
    &lt;li&gt;Ikkinchi qadam&lt;/li&gt;
    &lt;li&gt;Uchinchi qadam&lt;/li&gt;
&lt;/ol&gt;</code><span class="code-lang">html</span></pre>

<h3>Blok va qatorli teglar</h3>
<p><strong>Blok teglar</strong> — yangi qatordan boshlanadi va to'liq kenglikni egallaydi:</p>
<div class="tag-list">
  <span class="tag">&lt;div&gt;</span>
  <span class="tag">&lt;p&gt;</span>
  <span class="tag">&lt;h1-h6&gt;</span>
  <span class="tag">&lt;ul&gt;</span>
  <span class="tag">&lt;ol&gt;</span>
  <span class="tag">&lt;li&gt;</span>
  <span class="tag">&lt;table&gt;</span>
  <span class="tag">&lt;form&gt;</span>
</div>
<p><strong>Qatorli teglar</strong> — qator ichida joylashadi:</p>
<div class="tag-list">
  <span class="tag">&lt;span&gt;</span>
  <span class="tag">&lt;a&gt;</span>
  <span class="tag">&lt;img&gt;</span>
  <span class="tag">&lt;strong&gt;</span>
  <span class="tag">&lt;em&gt;</span>
  <span class="tag">&lt;input&gt;</span>
  <span class="tag">&lt;label&gt;</span>
</div>

<div class="info-box">💡 <strong>&lt;div&gt;</strong> va <strong>&lt;span&gt;</strong> — universal konteyner teglar. div blok, span esa qatorli element hisoblanadi.</div>
        `
      },
      {
        id: "html-atributlar",
        icon: "⚙️",
        title: "HTML atributlar",
        content: `
<h3>Atribut nima?</h3>
<p>Atributlar — HTML elementlariga qo'shimcha ma'lumot beradi. Ular ochiluvchi teg ichida <code>ism="qiymat"</code> shaklida yoziladi.</p>

<pre><code class="language-html">&lt;teg ism1="qiymat1" ism2="qiymat2"&gt;Kontent&lt;/teg&gt;</code><span class="code-lang">html</span></pre>

<h3>Global atributlar</h3>
<p>Bu atributlar barcha elementlarda ishlatilishi mumkin:</p>
<pre><code class="language-html">&lt;!-- id — elementni noyob identifikator bilan belgilash --&gt;
&lt;p id="kirish"&gt;Kirish matni&lt;/p&gt;

&lt;!-- class — CSS va JS uchun guruh nomi --&gt;
&lt;div class="karta"&gt;Karta&lt;/div&gt;

&lt;!-- style — to'g'ridan-to'g'ri CSS qo'llash --&gt;
&lt;p style="color: red; font-size: 18px;"&gt;Qizil matn&lt;/p&gt;

&lt;!-- title — sichqon ustida ko'rinadigan maslahat --&gt;
&lt;button title="Bosing!"&gt;Havola&lt;/button&gt;

&lt;!-- lang — til belgisi --&gt;
&lt;html lang="uz"&gt;</code><span class="code-lang">html</span></pre>

<h3>Maxsus atributlar</h3>
<pre><code class="language-html">&lt;!-- href — havola manzili --&gt;
&lt;a href="https://google.com"&gt;Google&lt;/a&gt;

&lt;!-- src — rasm manzili --&gt;
&lt;img src="rasm.jpg" alt="Rasm tavsifi"&gt;

&lt;!-- type — input turi --&gt;
&lt;input type="email" placeholder="Email kiriting"&gt;

&lt;!-- disabled — elementni o'chirish --&gt;
&lt;button disabled&gt;Bosilmaydi&lt;/button&gt;

&lt;!-- target — havolani qayerda ochish --&gt;
&lt;a href="..." target="_blank"&gt;Yangi tabda ochish&lt;/a&gt;</code><span class="code-lang">html</span></pre>

<h3>data-* atributlari</h3>
<p>O'zingiz belgilaydigan maxsus atributlar. JavaScript orqali o'qiladi:</p>
<pre><code class="language-html">&lt;button data-mahsulot-id="42" data-narx="50000"&gt;
    Savatga qo'shish
&lt;/button&gt;</code><span class="code-lang">html</span></pre>

<div class="info-box">🔑 <strong>id</strong> sahifada takrorlanmasligi kerak — noyob bo'ladi. <strong>class</strong> esa bir nechta elementda takrorlanishi mumkin.</div>
        `
      },
      {
        id: "html-formalar",
        icon: "📝",
        title: "HTML formalar",
        content: `
<h3>Forma nima?</h3>
<p>HTML formalar — foydalanuvchidan ma'lumot olish uchun ishlatiladi. Login, ro'yxatdan o'tish, qidiruv, buyurtma — bularning barchasi forma orqali ishlaydi.</p>

<h3>Asosiy forma tuzilishi</h3>
<pre><code class="language-html">&lt;form action="/yuborish" method="POST"&gt;
    &lt;label for="ism"&gt;Ismingiz:&lt;/label&gt;
    &lt;input type="text" id="ism" name="ism" required&gt;

    &lt;label for="email"&gt;Email:&lt;/label&gt;
    &lt;input type="email" id="email" name="email"&gt;

    &lt;button type="submit"&gt;Yuborish&lt;/button&gt;
&lt;/form&gt;</code><span class="code-lang">html</span></pre>

<h3>Input turlari</h3>
<pre><code class="language-html">&lt;input type="text"&gt;        &lt;!-- Oddiy matn --&gt;
&lt;input type="email"&gt;       &lt;!-- Email --&gt;
&lt;input type="password"&gt;    &lt;!-- Parol (yashirin) --&gt;
&lt;input type="number"&gt;      &lt;!-- Raqam --&gt;
&lt;input type="tel"&gt;         &lt;!-- Telefon --&gt;
&lt;input type="date"&gt;        &lt;!-- Sana --&gt;
&lt;input type="checkbox"&gt;    &lt;!-- Belgilash qutisi --&gt;
&lt;input type="radio"&gt;       &lt;!-- Radio tugma --&gt;
&lt;input type="file"&gt;        &lt;!-- Fayl yuklash --&gt;
&lt;input type="color"&gt;       &lt;!-- Rang tanlash --&gt;
&lt;input type="range"&gt;       &lt;!-- Siljitgich --&gt;
&lt;input type="search"&gt;      &lt;!-- Qidiruv --&gt;</code><span class="code-lang">html</span></pre>

<h3>Boshqa forma elementlari</h3>
<pre><code class="language-html">&lt;!-- Ko'p qatorli matn --&gt;
&lt;textarea rows="5" cols="40"&gt;&lt;/textarea&gt;

&lt;!-- Tanlash ro'yxati --&gt;
&lt;select name="shahar"&gt;
    &lt;option value="toshkent"&gt;Toshkent&lt;/option&gt;
    &lt;option value="samarqand"&gt;Samarqand&lt;/option&gt;
    &lt;option value="buxoro"&gt;Buxoro&lt;/option&gt;
&lt;/select&gt;

&lt;!-- Tugmalar --&gt;
&lt;button type="submit"&gt;Yuborish&lt;/button&gt;
&lt;button type="reset"&gt;Tozalash&lt;/button&gt;
&lt;button type="button"&gt;Oddiy tugma&lt;/button&gt;</code><span class="code-lang">html</span></pre>

<h3>Validatsiya atributlari</h3>
<pre><code class="language-html">&lt;input type="text" required&gt;                  &lt;!-- Majburiy --&gt;
&lt;input type="text" minlength="3" maxlength="50"&gt;  &lt;!-- Uzunlik --&gt;
&lt;input type="number" min="0" max="100"&gt;        &lt;!-- Diapazon --&gt;
&lt;input type="text" pattern="[A-Za-z]+"&gt;        &lt;!-- Naqsh --&gt;</code><span class="code-lang">html</span></pre>
        `
      },
      {
        id: "html-jadvallar",
        icon: "📊",
        title: "HTML jadvallar",
        content: `
<h3>Jadval nima?</h3>
<p>HTML jadvallari — ma'lumotlarni qatorlar va ustunlar shaklida ko'rsatish uchun ishlatiladi. Ular <code>&lt;table&gt;</code> tegi bilan boshlanadi.</p>

<h3>Jadval tuzilishi</h3>
<pre><code class="language-html">&lt;table border="1"&gt;
    &lt;!-- Jadval sarlavhasi --&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th&gt;Ism&lt;/th&gt;
            &lt;th&gt;Yosh&lt;/th&gt;
            &lt;th&gt;Shahar&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;!-- Jadval tanasi --&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;td&gt;Alisher&lt;/td&gt;
            &lt;td&gt;22&lt;/td&gt;
            &lt;td&gt;Toshkent&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;Malika&lt;/td&gt;
            &lt;td&gt;25&lt;/td&gt;
            &lt;td&gt;Samarqand&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
    &lt;!-- Jadval pastki qismi --&gt;
    &lt;tfoot&gt;
        &lt;tr&gt;
            &lt;td colspan="3"&gt;Jami: 2 ta foydalanuvchi&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tfoot&gt;
&lt;/table&gt;</code><span class="code-lang">html</span></pre>

<h3>Jadval teglari</h3>
<ul>
  <li><code>&lt;table&gt;</code> — Jadvalning asosiy elementi</li>
  <li><code>&lt;thead&gt;</code> — Jadval sarlavha qismi</li>
  <li><code>&lt;tbody&gt;</code> — Jadval asosiy qismi</li>
  <li><code>&lt;tfoot&gt;</code> — Jadval pastki qismi</li>
  <li><code>&lt;tr&gt;</code> — Jadval qatori (table row)</li>
  <li><code>&lt;th&gt;</code> — Sarlavha katakchasi (qalin va markazda)</li>
  <li><code>&lt;td&gt;</code> — Oddiy katakcha (table data)</li>
</ul>

<h3>Katakchalarni birlashtirish</h3>
<pre><code class="language-html">&lt;!-- colspan — ustunlarni birlashtirish --&gt;
&lt;td colspan="2"&gt;Ikki ustunni egallaydi&lt;/td&gt;

&lt;!-- rowspan — qatorlarni birlashtirish --&gt;
&lt;td rowspan="3"&gt;Uch qatorni egallaydi&lt;/td&gt;</code><span class="code-lang">html</span></pre>

<div class="info-box">💡 Hozirgi zamonaviy veb-dasturlashda jadvallar faqat haqiqiy jadval ma'lumotlari uchun ishlatiladi. Sahifa tartibini yaratish uchun esa CSS Flexbox yoki Grid ishlatiladi.</div>
        `
      },
      {
        id: "html-havolalar",
        icon: "🔗",
        title: "HTML havolalar",
        content: `
<h3>Havola nima?</h3>
<p>Havolalar (links) — foydalanuvchini bir sahifadan boshqasiga o'tkazadi. HTML da havolalar <code>&lt;a&gt;</code> tegi (anchor — langar) bilan yaratiladi.</p>

<h3>Asosiy havola</h3>
<pre><code class="language-html">&lt;!-- Tashqi havola --&gt;
&lt;a href="https://google.com"&gt;Google ga o'ting&lt;/a&gt;

&lt;!-- Ichki sahifaga havola --&gt;
&lt;a href="haqida.html"&gt;Biz haqimizda&lt;/a&gt;

&lt;!-- Yangi tabda ochish --&gt;
&lt;a href="https://youtube.com" target="_blank" rel="noopener"&gt;
    YouTube (yangi tabda)
&lt;/a&gt;</code><span class="code-lang">html</span></pre>

<h3>Target qiymatlari</h3>
<ul>
  <li><code>_self</code> — Joriy tabda ochadi (standart)</li>
  <li><code>_blank</code> — Yangi tabda ochadi</li>
  <li><code>_parent</code> — Ota-freymda ochadi</li>
  <li><code>_top</code> — Butun oynada ochadi</li>
</ul>

<h3>Maxsus havolalar</h3>
<pre><code class="language-html">&lt;!-- Email havola --&gt;
&lt;a href="mailto:info@example.com"&gt;Xat yuborish&lt;/a&gt;

&lt;!-- Telefon havola --&gt;
&lt;a href="tel:+998901234567"&gt;+998 90 123-45-67&lt;/a&gt;

&lt;!-- Sahifa ichidagi bo'limga o'tish --&gt;
&lt;a href="#kirish"&gt;Kirish bo'limiga o'tish&lt;/a&gt;
...
&lt;section id="kirish"&gt;
    &lt;h2&gt;Kirish&lt;/h2&gt;
&lt;/section&gt;

&lt;!-- Fayl yuklab olish --&gt;
&lt;a href="hujjat.pdf" download&gt;PDF yuklab olish&lt;/a&gt;</code><span class="code-lang">html</span></pre>

<h3>Rasm havola</h3>
<pre><code class="language-html">&lt;!-- Rasm tugma sifatida --&gt;
&lt;a href="https://example.com"&gt;
    &lt;img src="logo.png" alt="Logo"&gt;
&lt;/a&gt;</code><span class="code-lang">html</span></pre>

<div class="info-box">🔒 <code>target="_blank"</code> ishlatganda doim <code>rel="noopener noreferrer"</code> qo'shing — bu xavfsizlik uchun muhim.</div>
        `
      },
      {
        id: "html-rasmlar",
        icon: "🖼️",
        title: "HTML rasmlar va media",
        content: `
<h3>Rasm qo'shish</h3>
<p>HTML da rasmlar <code>&lt;img&gt;</code> tegi orqali qo'shiladi. Bu bo'sh (yopilmaydigan) element.</p>

<pre><code class="language-html">&lt;img src="rasm.jpg" alt="Rasm tavsifi" width="400" height="300"&gt;</code><span class="code-lang">html</span></pre>

<h3>Muhim atributlar</h3>
<ul>
  <li><strong>src</strong> — rasm fayl yo'li yoki URL manzili</li>
  <li><strong>alt</strong> — rasm yuklanmasa ko'rinadigan matn (SEO va accessibility uchun muhim)</li>
  <li><strong>width / height</strong> — rasm o'lchami (piksel yoki %)</li>
  <li><strong>loading</strong> — "lazy" qo'yilsa rasm ko'ringanda yuklanadi</li>
  <li><strong>title</strong> — sichqon ustida ko'rinadigan matn</li>
</ul>

<h3>Rasm formatlari</h3>
<ul>
  <li><strong>JPEG/JPG</strong> — fotosuratlar uchun (kichik hajm)</li>
  <li><strong>PNG</strong> — shaffof fon kerak bo'lganda</li>
  <li><strong>SVG</strong> — vektorli grafikalar (logo, ikonkalar)</li>
  <li><strong>WebP</strong> — zamonaviy format (JPEG dan 30% kichik)</li>
  <li><strong>GIF</strong> — animatsiyali rasmlar</li>
</ul>

<h3>Figure va Figcaption</h3>
<pre><code class="language-html">&lt;figure&gt;
    &lt;img src="tog.jpg" alt="Tog' manzarasi" loading="lazy"&gt;
    &lt;figcaption&gt;Chimyon tog'lari, O'zbekiston&lt;/figcaption&gt;
&lt;/figure&gt;</code><span class="code-lang">html</span></pre>

<h3>Video va Audio</h3>
<pre><code class="language-html">&lt;!-- Video --&gt;
&lt;video controls width="640" height="360"&gt;
    &lt;source src="video.mp4" type="video/mp4"&gt;
    &lt;source src="video.webm" type="video/webm"&gt;
    Brauzeringiz videoni qo'llab-quvvatlamaydi.
&lt;/video&gt;

&lt;!-- Audio --&gt;
&lt;audio controls&gt;
    &lt;source src="musiqa.mp3" type="audio/mpeg"&gt;
    Brauzeringiz audioni qo'llab-quvvatlamaydi.
&lt;/audio&gt;</code><span class="code-lang">html</span></pre>

<div class="info-box">♿ <code>alt</code> atributini hech qachon bo'sh qoldirmang! Ko'zi ojiz foydalanuvchilar uchun ekran o'quvchi dasturlar shu matnni o'qiydi.</div>
        `
      },
      {
        id: "html-semantik",
        icon: "🏗️",
        title: "Semantik HTML",
        content: `
<h3>Semantik HTML nima?</h3>
<p>Semantik HTML — teglarning ma'nosiga ega bo'lishi. Ya'ni teg faqat ko'rinish uchun emas, balki ma'no uchun ishlatilishi. Bu SEO, accessibility va kod o'qilishini yaxshilaydi.</p>

<h3>Semantik vs No'semantik</h3>
<pre><code class="language-html">&lt;!-- No'semantik (ma'nosiz) --&gt;
&lt;div id="sarlavha"&gt;Mening saytim&lt;/div&gt;
&lt;div id="menyum"&gt;
    &lt;div&gt;Bosh sahifa&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Semantik (ma'noli) --&gt;
&lt;header&gt;Mening saytim&lt;/header&gt;
&lt;nav&gt;
    &lt;a&gt;Bosh sahifa&lt;/a&gt;
&lt;/nav&gt;</code><span class="code-lang">html</span></pre>

<h3>Asosiy semantik teglar</h3>
<pre><code class="language-html">&lt;header&gt;    &lt;!-- Sahifa yoki bo'lim sarlavhasi --&gt;
&lt;nav&gt;       &lt;!-- Navigatsiya linklari --&gt;
&lt;main&gt;      &lt;!-- Sahifaning asosiy mazmuni --&gt;
&lt;article&gt;   &lt;!-- Mustaqil maqola yoki kontent --&gt;
&lt;section&gt;   &lt;!-- Sahifaning bo'limi --&gt;
&lt;aside&gt;     &lt;!-- Yon panel (sidebar) --&gt;
&lt;footer&gt;    &lt;!-- Sahifa pastki qismi --&gt;
&lt;figure&gt;    &lt;!-- Rasm + izoh konteyneri --&gt;
&lt;time&gt;      &lt;!-- Vaqt yoki sana --&gt;
&lt;address&gt;   &lt;!-- Kontakt ma'lumotlari --&gt;</code><span class="code-lang">html</span></pre>

<h3>Sahifa tuzilishi misoli</h3>
<pre><code class="language-html">&lt;body&gt;
    &lt;header&gt;
        &lt;h1&gt;Mening blogim&lt;/h1&gt;
        &lt;nav&gt;
            &lt;a href="/"&gt;Bosh sahifa&lt;/a&gt;
            &lt;a href="/haqida"&gt;Haqida&lt;/a&gt;
        &lt;/nav&gt;
    &lt;/header&gt;

    &lt;main&gt;
        &lt;article&gt;
            &lt;h2&gt;Maqola sarlavhasi&lt;/h2&gt;
            &lt;time datetime="2025-01-15"&gt;15 Yanvar 2025&lt;/time&gt;
            &lt;p&gt;Maqola matni...&lt;/p&gt;
        &lt;/article&gt;

        &lt;aside&gt;
            &lt;h3&gt;Yon panel&lt;/h3&gt;
        &lt;/aside&gt;
    &lt;/main&gt;

    &lt;footer&gt;
        &lt;p&gt;© 2025 Mening blogim&lt;/p&gt;
    &lt;/footer&gt;
&lt;/body&gt;</code><span class="code-lang">html</span></pre>

<div class="info-box">🔍 Google va boshqa qidiruv tizimlari semantik HTML ni yaxshi tushunadi va qidiruvda yuqori o'rin beradi. Semantik HTML — yaxshi SEO ning asosi!</div>
        `
      },
      {
        id: "html5",
        icon: "🚀",
        title: "HTML5 yangiliklari",
        content: `
<h3>HTML5 nima?</h3>
<p>HTML5 — HTML ning eng yangi va hozirgi kunda ishlatilayotgan versiyasi. 2014-yilda W3C tomonidan rasman tasdiqlangan. Ko'plab yangi elementlar, API lar va imkoniyatlar qo'shildi.</p>

<h3>Yangi semantik elementlar</h3>
<div class="tag-list">
  <span class="tag">&lt;header&gt;</span>
  <span class="tag">&lt;footer&gt;</span>
  <span class="tag">&lt;nav&gt;</span>
  <span class="tag">&lt;main&gt;</span>
  <span class="tag">&lt;article&gt;</span>
  <span class="tag">&lt;section&gt;</span>
  <span class="tag">&lt;aside&gt;</span>
  <span class="tag">&lt;figure&gt;</span>
  <span class="tag">&lt;figcaption&gt;</span>
  <span class="tag">&lt;time&gt;</span>
  <span class="tag">&lt;mark&gt;</span>
  <span class="tag">&lt;details&gt;</span>
  <span class="tag">&lt;summary&gt;</span>
  <span class="tag">&lt;dialog&gt;</span>
</div>

<h3>Media elementlari</h3>
<pre><code class="language-html">&lt;!-- Audio (HTML5 dan) --&gt;
&lt;audio controls autoplay loop&gt;
    &lt;source src="audio.mp3" type="audio/mpeg"&gt;
&lt;/audio&gt;

&lt;!-- Video (HTML5 dan) --&gt;
&lt;video controls muted autoplay&gt;
    &lt;source src="video.mp4" type="video/mp4"&gt;
&lt;/video&gt;

&lt;!-- Canvas — rasm chizish uchun --&gt;
&lt;canvas id="rasm" width="400" height="300"&gt;&lt;/canvas&gt;</code><span class="code-lang">html</span></pre>

<h3>Yangi forma imkoniyatlari</h3>
<pre><code class="language-html">&lt;input type="date"&gt;          &lt;!-- Sana tanlash --&gt;
&lt;input type="color"&gt;         &lt;!-- Rang tanlash --&gt;
&lt;input type="range"&gt;         &lt;!-- Siljitgich --&gt;
&lt;input type="search"&gt;        &lt;!-- Qidiruv --&gt;
&lt;input type="tel"&gt;           &lt;!-- Telefon --&gt;
&lt;input type="url"&gt;           &lt;!-- URL --&gt;
&lt;input placeholder="Yozing" autofocus&gt;</code><span class="code-lang">html</span></pre>

<h3>Muhim HTML5 API lari</h3>
<ul>
  <li><strong>Geolocation API</strong> — foydalanuvchi joylashuvini aniqlash</li>
  <li><strong>localStorage</strong> — brauzerda ma'lumot saqlash</li>
  <li><strong>Web Workers</strong> — fonda kod ishlatish</li>
  <li><strong>WebSocket</strong> — real-vaqt aloqa</li>
  <li><strong>Drag and Drop</strong> — sudrab tashlash</li>
  <li><strong>Canvas API</strong> — grafikalar chizish</li>
</ul>

<div class="info-box">✅ Hozirda barcha zamonaviy brauzerlar HTML5 ni to'liq qo'llab-quvvatlaydi. HTML5 ishlatishdan cho'chimang!</div>
        `
      }
    ]
  },

  css: {
    title: "CSS",
    fullName: "Cascading Style Sheets",
    icon: "🎨",
    desc: "Veb-sahifalarni chiroyli ko'rsatish uchun uslub tili",
    color: "css",
    topicsCount: 10,
    topics: [
      {
        id: "css-nima",
        icon: "🎨",
        title: "CSS nima?",
        content: `
<h3>CSS haqida</h3>
<p>CSS (Cascading Style Sheets) — veb-sahifalarning ko'rinishini boshqaruvchi tildir. HTML tuzilishni yaratsa, CSS unga rang, shrift, joylashuv va animatsiya beradi.</p>
<p>"Cascading" so'zi — uslublar ustma-ust qo'llanilishini bildiradi. Ya'ni bir elementga bir nechta uslub qo'llanilsa, qoidalarga ko'ra biri ustun keladi.</p>

<h3>CSS ni HTML ga ulash usullari</h3>
<pre><code class="language-html">&lt;!-- 1. Tashqi fayl (eng yaxshi usul) --&gt;
&lt;link rel="stylesheet" href="styles.css"&gt;

&lt;!-- 2. Ichki style (head ichida) --&gt;
&lt;style&gt;
    p { color: blue; }
&lt;/style&gt;

&lt;!-- 3. To'g'ridan-to'g'ri elementda --&gt;
&lt;p style="color: blue;"&gt;Matn&lt;/p&gt;</code><span class="code-lang">html</span></pre>

<h3>CSS qoidasi tuzilishi</h3>
<pre><code class="language-css">selektor {
    xususiyat: qiymat;
    xususiyat: qiymat;
}

/* Misol */
p {
    color: #333;
    font-size: 16px;
    line-height: 1.6;
}</code><span class="code-lang">css</span></pre>

<h3>Izohlar yozish</h3>
<pre><code class="language-css">/* Bu CSS izohi */
/* Izohlar /* ichma-ich */ bo'lmaydi */

p {
    color: red; /* Matn rangi */
}</code><span class="code-lang">css</span></pre>

<div class="info-box">💡 CSS — "Cascading" ya'ni sharsharasimon. Ota-element uslubi farzand elementlarga o'tishi ham shu nomdan kelib chiqadi.</div>

<h3>CSS versiyalari</h3>
<p>CSS hozirda <strong>CSS3</strong> versiyasida ishlaydi. CSS3 animatsiya, gradient, flexbox, grid va boshqa ko'plab zamonaviy imkoniyatlarni qo'shdi. CSS versiyalari endi modul asosida chiqariladi.</p>
        `
      },
      {
        id: "css-selektorlar",
        icon: "🎯",
        title: "CSS selektorlar",
        content: `
<h3>Selektor nima?</h3>
<p>Selektor — CSS qaysi elementga uslub qo'llanilishini belgilaydi. CSS ning eng muhim qismi.</p>

<h3>Asosiy selektorlar</h3>
<pre><code class="language-css">/* Element selektori */
p { color: blue; }

/* Class selektori (. bilan) */
.karta { background: white; }

/* ID selektori (# bilan) */
#sarlavha { font-size: 24px; }

/* Universal selektor (* barcha elementlar) */
* { margin: 0; padding: 0; }

/* Atribut selektori */
input[type="email"] { border: 2px solid blue; }
a[href^="https"] { color: green; }  /* https bilan boshlangan */
a[href$=".pdf"] { color: red; }      /* .pdf bilan tugagan */</code><span class="code-lang">css</span></pre>

<h3>Kombinatsion selektorlar</h3>
<pre><code class="language-css">/* Guruh (vergul) — ikkalasiga ham */
h1, h2, h3 { font-family: Arial; }

/* Avlod (bo'shliq) — div ichidagi barcha p */
div p { color: gray; }

/* Bevosita farzand (>) — div ning to'g'ri farzand p */
div > p { font-weight: bold; }

/* Qo'shni (+ ) — h2 dan keyingi p */
h2 + p { font-size: 18px; }

/* Ukalar (~) — h2 dan keyingi barcha p */
h2 ~ p { color: #555; }</code><span class="code-lang">css</span></pre>

<h3>Pseudo-class selektorlar</h3>
<pre><code class="language-css">a:hover { color: red; }          /* Sichqon ustida */
a:active { color: green; }        /* Bosilganda */
a:visited { color: purple; }      /* Tashrif buyurilgan */
input:focus { border: blue; }     /* Fokusda */

li:first-child { font-weight: bold; }  /* Birinchi */
li:last-child { color: red; }          /* Oxirgi */
li:nth-child(2) { background: #eee; }  /* Ikkinchi */
li:nth-child(odd) { background: #f9f9f9; } /* Toq */</code><span class="code-lang">css</span></pre>

<h3>Pseudo-element selektorlar</h3>
<pre><code class="language-css">p::first-line { font-weight: bold; }    /* Birinchi qator */
p::first-letter { font-size: 2em; }     /* Birinchi harf */
p::before { content: "→ "; }            /* Oldiga qo'shish */
p::after { content: " ←"; }             /* Keyiniga qo'shish */
::selection { background: yellow; }     /* Belgilangan matn */</code><span class="code-lang">css</span></pre>

<div class="info-box">⚡ CSS specificity (aniqlik): ID (100) > Class (10) > Element (1). Aniqroq selektor ustun keladi.</div>
        `
      },
      {
        id: "css-rang-fon",
        icon: "🌈",
        title: "Rang va fon",
        content: `
<h3>Ranglar</h3>
<p>CSS da ranglarni belgilashning bir necha usuli bor:</p>
<pre><code class="language-css">/* Rang nomlari */
color: red;
color: blue;
color: transparent;

/* HEX kodi */
color: #ff0000;      /* Qizil */
color: #333;         /* Qoʻngʻir */
color: #fff;         /* Oq */

/* RGB */
color: rgb(255, 0, 0);        /* Qizil */
color: rgba(255, 0, 0, 0.5);  /* Shaffof qizil */

/* HSL */
color: hsl(0, 100%, 50%);       /* Qizil */
color: hsla(0, 100%, 50%, 0.5); /* Shaffof qizil */

/* CSS o'zgaruvchilar bilan */
color: var(--asosiy-rang);</code><span class="code-lang">css</span></pre>

<h3>Matn rangi va fon rangi</h3>
<pre><code class="language-css">p {
    color: #333;             /* Matn rangi */
    background-color: #f5f5f5;  /* Fon rangi */
    background: #f5f5f5;     /* Qisqartma */
}</code><span class="code-lang">css</span></pre>

<h3>Fon rasmi</h3>
<pre><code class="language-css">div {
    background-image: url('fon.jpg');
    background-size: cover;      /* To'liq qoplash */
    background-position: center; /* Markazda */
    background-repeat: no-repeat; /* Takrorlamaslik */
    background-attachment: fixed; /* Scroll paytida qotib turish */

    /* Qisqartma */
    background: url('fon.jpg') center/cover no-repeat;
}</code><span class="code-lang">css</span></pre>

<h3>Gradientlar</h3>
<pre><code class="language-css">/* Chiziqli gradient */
background: linear-gradient(to right, #ff6b6b, #4ecdc4);
background: linear-gradient(45deg, blue, red);

/* Aylana gradient */
background: radial-gradient(circle, #ff6b6b, #4ecdc4);

/* Ko'p rang */
background: linear-gradient(to right, #f093fb, #f5576c, #4facfe);</code><span class="code-lang">css</span></pre>

<h3>Opacity (shaffoflik)</h3>
<pre><code class="language-css">div {
    opacity: 0.5;   /* 0 = to'liq shaffof, 1 = to'liq ko'rinadi */
}

/* Faqat fon shaffof bo'lsin */
background: rgba(0, 0, 0, 0.5);</code><span class="code-lang">css</span></pre>

<div class="info-box">🎨 Eng mashhur rang tanlovchi vositalar: coolors.co, color.adobe.com. Ular uyg'un rang palitrasini topishga yordam beradi.</div>
        `
      },
      {
        id: "css-matn",
        icon: "✍️",
        title: "Matn uslublari",
        content: `
<h3>Shrift xususiyatlari</h3>
<pre><code class="language-css">p {
    /* Shrift oilasi */
    font-family: 'Inter', Arial, sans-serif;

    /* Shrift o'lchami */
    font-size: 16px;    /* Piksel */
    font-size: 1rem;    /* Root element dan nisbiy */
    font-size: 1.2em;   /* Ota-elementdan nisbiy */

    /* Qalinlik */
    font-weight: 400;     /* Normal */
    font-weight: 700;     /* Qalin */
    font-weight: bold;    /* Xuddi 700 */

    /* Qiyshiqlik */
    font-style: italic;
    font-style: normal;

    /* Qisqartma */
    font: italic bold 18px/1.5 'Inter', sans-serif;
}</code><span class="code-lang">css</span></pre>

<h3>Matn xususiyatlari</h3>
<pre><code class="language-css">p {
    /* Hizalanish */
    text-align: left;    /* Chap */
    text-align: center;  /* Markaz */
    text-align: right;   /* O'ng */
    text-align: justify; /* Ikki tarafdan tekislash */

    /* Bezatish */
    text-decoration: underline;    /* Tag chiziq */
    text-decoration: line-through; /* O'rtasidan chiziq */
    text-decoration: none;         /* Yo'q */

    /* Qator balandligi */
    line-height: 1.6;   /* 1.5-1.8 o'qilishi uchun ideal */

    /* Harf oralig'i */
    letter-spacing: 2px;

    /* So'z oralig'i */
    word-spacing: 5px;

    /* Katta-kichik harf */
    text-transform: uppercase;    /* BARCHA KATTA */
    text-transform: lowercase;    /* barcha kichik */
    text-transform: capitalize;   /* Har So'z Boshi Katta */

    /* Matn soyasi */
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}</code><span class="code-lang">css</span></pre>

<h3>Google Fonts ishlatish</h3>
<pre><code class="language-html">&lt;!-- HTML head da --&gt;
&lt;link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet"&gt;</code><span class="code-lang">html</span></pre>
<pre><code class="language-css">/* CSS da */
body {
    font-family: 'Inter', sans-serif;
}</code><span class="code-lang">css</span></pre>

<h3>Matnni kesish</h3>
<pre><code class="language-css">/* Bir qatorda ko'rsatib, ... qo'yish */
p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}</code><span class="code-lang">css</span></pre>

<div class="info-box">📏 <code>rem</code> ni <code>px</code> ga nisbatan afzal ko'ring. rem brauzer sozlamalariga mos keladi va accessibility ni yaxshilaydi.</div>
        `
      },
      {
        id: "css-box-model",
        icon: "📦",
        title: "Quti modeli (Box Model)",
        content: `
<h3>Box Model nima?</h3>
<p>CSS da har bir element to'rtburchakli "quti" deb qaraladi. Box Model — bu qutining tuzilishini tushunadigan asosiy tushuncha.</p>

<h3>Box Model tarkibi</h3>
<pre><code class="language-css">div {
    /* Kontent o'lchami */
    width: 300px;
    height: 200px;

    /* Ichki bo'shliq (kontent va chegara orasida) */
    padding: 20px;           /* Barcha tomondan */
    padding: 10px 20px;      /* Yuqori-pastki | O'ng-chap */
    padding: 5px 10px 15px 20px; /* Yuqori | O'ng | Pastki | Chap */

    /* Chegara */
    border: 2px solid #ccc;
    border-radius: 8px;      /* Burchaklarni yumaloqlash */

    /* Tashqi bo'shliq (elementlar orasida) */
    margin: 20px;
    margin: auto; /* Markazlashtirish */
}</code><span class="code-lang">css</span></pre>

<h3>box-sizing xususiyati</h3>
<pre><code class="language-css">/* Standart: width = faqat kontent */
/* Haqiqiy kenglik = width + padding + border */
.standart {
    box-sizing: content-box; /* default */
    width: 300px;
    padding: 20px;
    border: 2px solid;
    /* Haqiqiy kenglik: 300 + 40 + 4 = 344px */
}

/* border-box: width = kontent + padding + border */
.qulay {
    box-sizing: border-box;
    width: 300px;
    padding: 20px;
    border: 2px solid;
    /* Haqiqiy kenglik: 300px (o'zgarmaydi) */
}

/* Barcha elementlarga qo'llash (tavsiya etiladi) */
* {
    box-sizing: border-box;
}</code><span class="code-lang">css</span></pre>

<h3>Margin muammosi (collapse)</h3>
<pre><code class="language-css">/* Ikki elementning margin lari qo'shilmaydi,
   katta bo'lgan tanlaydi */
.yuqori { margin-bottom: 30px; }
.pastki { margin-top: 20px; }
/* Oradagi masofa: 30px (30+20 emas) */</code><span class="code-lang">css</span></pre>

<h3>Display xususiyati</h3>
<pre><code class="language-css">div { display: block; }    /* Yangi qatordan, to'liq kenglik */
span { display: inline; }  /* Qator ichida, o'lcham yo'q */
div { display: inline-block; } /* Qator ichida, lekin o'lcham bor */
div { display: none; }     /* Ko'rinmaydi, joy egallaydi emas */
div { display: flex; }     /* Flexbox */
div { display: grid; }     /* Grid */</code><span class="code-lang">css</span></pre>

<div class="info-box">⭐ <code>* &#123; box-sizing: border-box; &#125;</code> — har doim CSS faylingizning boshiga qo'ying. Bu juda ko'p muammolarni hal qiladi!</div>
        `
      },
      {
        id: "css-flexbox",
        icon: "↔️",
        title: "CSS Flexbox",
        content: `
<h3>Flexbox nima?</h3>
<p>Flexbox (Flexible Box Layout) — elementlarni bir o'q bo'ylab joylashtirish uchun CSS moduli. Gorizontal yoki vertikal joylashtirish, tekislash va bo'shliq boshqaruvini osonlashtiradi.</p>

<h3>Asosiy tushunchalar</h3>
<pre><code class="language-css">.konteyner {
    display: flex; /* Flexbox yoqiladi */

    /* O'q yo'nalishi */
    flex-direction: row;          /* Gorizontal (default) */
    flex-direction: column;       /* Vertikal */
    flex-direction: row-reverse;  /* Teskari gorizontal */

    /* O'rash */
    flex-wrap: nowrap;  /* Bir qatorda (default) */
    flex-wrap: wrap;    /* Ko'p qatorda */

    /* Asosiy o'q bo'ylab tekislash */
    justify-content: flex-start;    /* Chap */
    justify-content: flex-end;      /* O'ng */
    justify-content: center;        /* Markaz */
    justify-content: space-between; /* Oralarida bo'shliq */
    justify-content: space-around;  /* Atrofida bo'shliq */
    justify-content: space-evenly;  /* Teng bo'shliq */

    /* Kross o'q bo'ylab tekislash */
    align-items: flex-start;
    align-items: flex-end;
    align-items: center;
    align-items: stretch;  /* (default) */
}</code><span class="code-lang">css</span></pre>

<h3>Flex elementlar xususiyatlari</h3>
<pre><code class="language-css">.element {
    /* O'sish koeffitsienti */
    flex-grow: 1;   /* Bo'sh joyni oladi */

    /* Kichrayish koeffitsienti */
    flex-shrink: 0; /* Kichraymaydi */

    /* Boshlang'ich o'lcham */
    flex-basis: 200px;

    /* Qisqartma: grow shrink basis */
    flex: 1 0 200px;
    flex: 1;         /* flex: 1 1 0 */

    /* Alohida tekislash */
    align-self: center;

    /* Tartib */
    order: 2;        /* Kichik son — avval */
}</code><span class="code-lang">css</span></pre>

<h3>Amaliy misol — Navigatsiya</h3>
<pre><code class="language-css">nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 60px;
    background: #333;
}

nav .logo { color: white; font-weight: bold; }

nav .links {
    display: flex;
    gap: 20px;
    list-style: none;
}</code><span class="code-lang">css</span></pre>

<div class="info-box">💡 <strong>gap</strong> xususiyati flex elementlar orasiga avtomatik bo'shliq qo'yadi — margin ishlatishdan qulayroq!</div>
        `
      },
      {
        id: "css-grid",
        icon: "⊞",
        title: "CSS Grid",
        content: `
<h3>CSS Grid nima?</h3>
<p>CSS Grid — ikki o'lchamli (gorizontal va vertikal) tartib berish tizimi. Flexbox bir o'q bo'ylab ishlasa, Grid ikki o'q bo'ylab ishlaydi. Murakkab sahifa tuzilmalarini yaratish uchun ideal.</p>

<h3>Grid yaratish</h3>
<pre><code class="language-css">.konteyner {
    display: grid;

    /* Ustunlar */
    grid-template-columns: 200px 1fr 200px;   /* 3 ustun */
    grid-template-columns: repeat(3, 1fr);    /* 3 teng ustun */
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Responsive */

    /* Qatorlar */
    grid-template-rows: 60px 1fr 60px;

    /* Oraliq */
    gap: 20px;          /* Gorizontal va vertikal */
    column-gap: 20px;   /* Faqat ustun oralig'i */
    row-gap: 10px;      /* Faqat qator oralig'i */
}</code><span class="code-lang">css</span></pre>

<h3>Elementlarni joylashtirish</h3>
<pre><code class="language-css">.element {
    /* Ustun oralig'i */
    grid-column: 1 / 3;       /* 1 dan 3 gacha */
    grid-column: 1 / -1;      /* Barcha ustunlar */
    grid-column: span 2;      /* 2 ustun egallash */

    /* Qator oralig'i */
    grid-row: 1 / 3;          /* 1 dan 3 gacha */
}</code><span class="code-lang">css</span></pre>

<h3>Grid Areas — nom berish</h3>
<pre><code class="language-css">.konteyner {
    display: grid;
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
    grid-template-columns: 200px 1fr 1fr;
    grid-template-rows: 60px 1fr 60px;
}

header { grid-area: header; }
.sidebar { grid-area: sidebar; }
main { grid-area: main; }
footer { grid-area: footer; }</code><span class="code-lang">css</span></pre>

<h3>Tekislash</h3>
<pre><code class="language-css">.konteyner {
    justify-items: center;  /* Gorizontal tekislash */
    align-items: center;    /* Vertikal tekislash */
    place-items: center;    /* Ikkalasi birga */
}

.element {
    justify-self: end;    /* Element uchun gorizontal */
    align-self: start;    /* Element uchun vertikal */
}</code><span class="code-lang">css</span></pre>

<div class="info-box">🏆 Sahifa tuzilmasi uchun Grid, kichik komponentlar uchun Flexbox — bu eng mashhur yondashuv. Ikkalasini birga ishlatish mumkin!</div>
        `
      },
      {
        id: "css-animatsiya",
        icon: "✨",
        title: "CSS animatsiyalar",
        content: `
<h3>Transition (o'tish)</h3>
<p>Transition — xususiyat o'zgarganda silliq animatsiya yaratadi.</p>
<pre><code class="language-css">button {
    background: blue;
    color: white;
    /* xususiyat | vaqt | tezlik | kechikish */
    transition: background 0.3s ease, transform 0.2s;
}

button:hover {
    background: darkblue;
    transform: scale(1.05);
}</code><span class="code-lang">css</span></pre>

<h3>Tezlik funksiyalari</h3>
<pre><code class="language-css">transition-timing-function: ease;        /* Sekin → Tez → Sekin */
transition-timing-function: linear;      /* Bir xil tezlik */
transition-timing-function: ease-in;     /* Sekindan tezga */
transition-timing-function: ease-out;    /* Tezdan sekiniga */
transition-timing-function: ease-in-out; /* Sekin → Tez → Sekin */
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); /* O'zlashtirilgan */</code><span class="code-lang">css</span></pre>

<h3>Transform</h3>
<pre><code class="language-css">div {
    transform: translateX(50px);      /* Gorizontal siljish */
    transform: translateY(-20px);     /* Vertikal siljish */
    transform: translate(50px, -20px); /* Ikkalasi */

    transform: rotate(45deg);          /* Burish */
    transform: scale(1.5);             /* Kattalashtirish */
    transform: scale(0.8);             /* Kichraytirish */

    transform: skewX(20deg);           /* Qiya qilish */
}</code><span class="code-lang">css</span></pre>

<h3>Keyframe animatsiyalar</h3>
<pre><code class="language-css">/* Animatsiya kadrlarini belgilash */
@keyframes toʻlqin {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-20px); }
    100% { transform: translateY(0); }
}

/* Elementga qo'llash */
.element {
    animation: toʻlqin 2s ease-in-out infinite;
    /* nom | vaqt | tezlik | qaytarish */
}

@keyframes tushish {
    from { opacity: 0; transform: translateY(-30px); }
    to   { opacity: 1; transform: translateY(0); }
}

.kirish {
    animation: tushish 0.5s ease-out;
}</code><span class="code-lang">css</span></pre>

<div class="info-box">⚡ <code>transform</code> va <code>opacity</code> animatsiyalari GPU orqali ishlaydi — eng tez va silliq animatsiyalar uchun aynan shu ikki xususiyatdan foydalaning.</div>
        `
      },
      {
        id: "css-ozgaruvchilar",
        icon: "🔧",
        title: "CSS o'zgaruvchilar",
        content: `
<h3>CSS o'zgaruvchilari (Custom Properties)</h3>
<p>CSS o'zgaruvchilari — qayta ishlatiladigan qiymatlarni saqlash imkonini beradi. Kod yozishni osonlashtiradi va sayt dizaynini o'zgartirishni soddallashtiradi.</p>

<h3>E'lon qilish va ishlatish</h3>
<pre><code class="language-css">/* O'zgaruvchilarni :root da e'lon qilish (global) */
:root {
    --asosiy-rang: #4f46e5;
    --matn-rangi: #333;
    --fon-rangi: #f5f5f5;
    --chegara: 1px solid #ddd;
    --radius: 8px;
    --soya: 0 4px 6px rgba(0,0,0,0.1);
    --shrift: 'Inter', sans-serif;
}

/* Ishlatish */
button {
    background: var(--asosiy-rang);
    color: white;
    border-radius: var(--radius);
    box-shadow: var(--soya);
    font-family: var(--shrift);
}

/* Standart qiymat bilan */
color: var(--mavjud-emas, red); /* Agar --mavjud-emas yo'q bo'lsa, red */</code><span class="code-lang">css</span></pre>

<h3>Lokal o'zgaruvchilar</h3>
<pre><code class="language-css">/* Faqat .karta va uning farzandlarida ishlaydi */
.karta {
    --karta-fon: white;
    --karta-chegara: #eee;
    background: var(--karta-fon);
    border: 1px solid var(--karta-chegara);
}</code><span class="code-lang">css</span></pre>

<h3>Tungi rejim</h3>
<pre><code class="language-css">:root {
    --fon: #ffffff;
    --matn: #333333;
}

@media (prefers-color-scheme: dark) {
    :root {
        --fon: #1a1a1a;
        --matn: #ffffff;
    }
}

body {
    background: var(--fon);
    color: var(--matn);
}</code><span class="code-lang">css</span></pre>

<h3>JavaScript bilan ishlash</h3>
<pre><code class="language-javascript">// CSS o'zgaruvchisini o'qish
const rang = getComputedStyle(document.documentElement)
    .getPropertyValue('--asosiy-rang');

// CSS o'zgaruvchisini o'zgartirish
document.documentElement.style
    .setProperty('--asosiy-rang', '#ff0000');</code><span class="code-lang">javascript</span></pre>

<div class="info-box">🎨 CSS o'zgaruvchilari — tema tizimlarini yaratishning eng qulay usuli. Bir joyda o'zgartirsa, butun sayt o'zgaradi!</div>
        `
      },
      {
        id: "css-responsive",
        icon: "📱",
        title: "Responsive dizayn",
        content: `
<h3>Responsive dizayn nima?</h3>
<p>Responsive (moslashuvchan) dizayn — sahifaning barcha qurilma o'lchamlarida (telefon, planshet, kompyuter) to'g'ri ko'rinishini ta'minlaydi.</p>

<h3>Viewport meta tegi</h3>
<pre><code class="language-html">&lt;!-- HTML head da bo'lishi shart! --&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code><span class="code-lang">html</span></pre>

<h3>Media Queries</h3>
<pre><code class="language-css">/* Mobil birinchi yondashuv (tavsiya etiladi) */

/* Asosiy uslublar = Mobil */
.konteyner { width: 100%; padding: 10px; }

/* Planshet (768px dan katta) */
@media (min-width: 768px) {
    .konteyner { max-width: 750px; margin: 0 auto; }
}

/* Kompyuter (1024px dan katta) */
@media (min-width: 1024px) {
    .konteyner { max-width: 960px; }
}

/* Katta ekran (1280px dan katta) */
@media (min-width: 1280px) {
    .konteyner { max-width: 1200px; }
}</code><span class="code-lang">css</span></pre>

<h3>Moslashuvchan o'lchamlar</h3>
<pre><code class="language-css">/* % — ota-elementga nisbatan */
img { width: 100%; }

/* vw/vh — brauzer oynasiga nisbatan */
.qahramonlik { height: 100vh; }     /* Butun ekran balandligi */
h1 { font-size: 5vw; }              /* Ekran kengligiga bog'liq */

/* min/max */
.kontent { max-width: 800px; width: 100%; }

/* clamp — min, ideal, max */
p { font-size: clamp(14px, 2vw, 18px); }

/* rem — brauzer asosiy shriftiga nisbatan */
p { font-size: 1rem; }    /* odatda 16px */</code><span class="code-lang">css</span></pre>

<h3>Moslashuvchan rasmlar</h3>
<pre><code class="language-css">img {
    max-width: 100%;
    height: auto;    /* Nisbatni saqlaydi */
}</code><span class="code-lang">css</span></pre>

<h3>Breakpoint nuqtalar</h3>
<ul>
  <li><strong>320px</strong> — Kichik telefon</li>
  <li><strong>480px</strong> — Katta telefon</li>
  <li><strong>768px</strong> — Planshet</li>
  <li><strong>1024px</strong> — Kichik kompyuter</li>
  <li><strong>1280px</strong> — Standart kompyuter</li>
  <li><strong>1536px+</strong> — Katta ekran</li>
</ul>

<div class="info-box">📱 "Mobile First" — avval mobil uchun yozing, keyin kattaroq ekranlar uchun kengaytiring. Bu zamonaviy veb-dasturlashning standart yondashuvi.</div>
        `
      }
    ]
  },

  js: {
    title: "JavaScript",
    fullName: "JavaScript — veb ning dasturlash tili",
    icon: "⚡",
    desc: "Veb-sahifalarni interaktiv va dinamik qiluvchi dasturlash tili",
    color: "js",
    topicsCount: 10,
    topics: [
      {
        id: "js-nima",
        icon: "⚡",
        title: "JavaScript nima?",
        content: `
<h3>JavaScript haqida</h3>
<p>JavaScript (JS) — veb-dasturlashning asosiy dasturlash tili. Brendan Eich tomonidan 1995-yilda 10 kunda yaratilgan. HTML va CSS bilan birga veb texnologiyasining uchinchi ustunini tashkil etadi.</p>
<ul>
  <li><strong>HTML</strong> — sahifa tuzilishi (skeleton)</li>
  <li><strong>CSS</strong> — ko'rinish va dizayn (teri va kiyim)</li>
  <li><strong>JavaScript</strong> — harakat va mantiq (mushak va miya)</li>
</ul>

<h3>JS nima qila oladi?</h3>
<ul>
  <li>Tugmalar bosilganda amallar bajarish</li>
  <li>Server dan ma'lumot olish (API)</li>
  <li>Forma ma'lumotlarini tekshirish</li>
  <li>Animatsiyalar yaratish</li>
  <li>Brauzerda ma'lumot saqlash</li>
  <li>Real-vaqt ilovalar (chat, o'yinlar)</li>
</ul>

<h3>Birinchi dastur</h3>
<pre><code class="language-javascript">// Konsolga chiqarish
console.log("Salom, Dunyo!");

// Oynada xabar ko'rsatish
alert("Xush kelibsiz!");

// Foydalanuvchidan ma'lumot olish
const ism = prompt("Ismingiz nima?");
console.log("Salom, " + ism + "!");

// Hisob-kitob
const natija = 5 + 3;
console.log(natija); // 8</code><span class="code-lang">javascript</span></pre>

<h3>JS ni HTML ga ulash</h3>
<pre><code class="language-html">&lt;!-- 1. Tashqi fayl (tavsiya etiladi) --&gt;
&lt;script src="app.js" defer&gt;&lt;/script&gt;

&lt;!-- 2. Ichki (body oxirida) --&gt;
&lt;script&gt;
    console.log("Salom!");
&lt;/script&gt;</code><span class="code-lang">html</span></pre>

<div class="info-box">🔑 <code>defer</code> atributi sahifa to'liq yuklanganidan keyin JS ni ishga tushiradi. Bu muhim — aks holda HTML elementlari topilmaydi.</div>

<h3>JavaScript ishlaydi</h3>
<p>JavaScript brauzer ichidagi V8 (Chrome), SpiderMonkey (Firefox) kabi <strong>JavaScript dvigatellari</strong> orqali ishlaydi. Node.js yordamida server tomonida ham ishlatilishi mumkin.</p>
        `
      },
      {
        id: "js-ozgaruvchilar",
        icon: "📦",
        title: "O'zgaruvchilar",
        content: `
<h3>O'zgaruvchi nima?</h3>
<p>O'zgaruvchi — ma'lumotni vaqtincha saqlash uchun ishlatiladigan quticha. JS da uch kalit so'z bilan e'lon qilinadi.</p>

<h3>var, let, const</h3>
<pre><code class="language-javascript">// var — eski usul (endi kam ishlatiladi)
var ism = "Alisher";

// let — o'zgaruvchan qiymat uchun
let yosh = 22;
yosh = 23; // O'zgartirish mumkin

// const — o'zgarmas qiymat uchun
const PI = 3.14159;
// PI = 3; // XATO! O'zgartirish mumkin emas</code><span class="code-lang">javascript</span></pre>

<h3>let va const farqi</h3>
<pre><code class="language-javascript">// let — qayta tayinlash mumkin
let hisoblagich = 0;
hisoblagich++;    // 1
hisoblagich = 10; // Mumkin

// const — qayta tayinlash mumkin emas
const RANGLAR = ['qizil', 'yashil', 'ko\'k'];
RANGLAR.push('sariq'); // Mumkin (massiv o'zgaradi)
// RANGLAR = []; // XATO! Referans o'zgarmaydi</code><span class="code-lang">javascript</span></pre>

<h3>Nomlash qoidalari</h3>
<pre><code class="language-javascript">// To'g'ri nomlar
let foydalanuvchiIsmi = "Ali";    // camelCase (tavsiya)
let MAKSIMAL_QIYMAT = 100;         // UPPER_CASE (konstantlar)
let _yashirin = "maxfiy";          // _ bilan boshlash
let $element = document.body;     // $ bilan boshlash

// Noto'g'ri nomlar
// let 1sonchi = 1;     // Raqam bilan boshlanmaydi
// let my-var = 1;      // Chiziqcha bo'lmaydi
// let let = 1;         // Kalit so'z ishlatilmaydi</code><span class="code-lang">javascript</span></pre>

<h3>Ko'p o'zgaruvchi e'lon qilish</h3>
<pre><code class="language-javascript">let a = 1, b = 2, c = 3;

// Destructuring
const [x, y, z] = [10, 20, 30];
console.log(x); // 10

const {ism, yosh} = {ism: "Ali", yosh: 25};
console.log(ism); // Ali</code><span class="code-lang">javascript</span></pre>

<div class="info-box">✅ Zamonaviy JS da: o'zgarmasa <code>const</code>, o'zgarsa <code>let</code>, <code>var</code> dan foydalanmang. Bu yaxshi amaliyot.</div>
        `
      },
      {
        id: "js-turlar",
        icon: "🗂️",
        title: "Ma'lumot turlari",
        content: `
<h3>JavaScript ma'lumot turlari</h3>
<p>JS da 8 ta ma'lumot turi mavjud: 7 ta primitiv va 1 ta ob'ekt.</p>

<h3>Primitiv turlar</h3>
<pre><code class="language-javascript">// 1. String — matn
let ism = "Alisher";
let salom = 'Salom!';
let shablon = \`Mening ismim \${ism}\`; // Template literal

// 2. Number — son (butun va kasr)
let butun = 42;
let kasr = 3.14;
let salbiy = -100;
let cheksiz = Infinity;
let noto'g'ri = NaN; // Not a Number

// 3. Boolean — mantiqiy
let to'g'ri = true;
let noto'g'ri2 = false;

// 4. null — ataylab bo'sh
let qiymat = null;

// 5. undefined — e'lon qilingan, lekin qiymat berilmagan
let noma'lum;
console.log(noma'lum); // undefined

// 6. BigInt — juda katta sonlar
let kattaSon = 9007199254740991n;

// 7. Symbol — noyob identifikator
let id = Symbol("id");</code><span class="code-lang">javascript</span></pre>

<h3>Ob'ekt turi</h3>
<pre><code class="language-javascript">// Ob'ekt
let odam = { ism: "Ali", yosh: 25 };

// Massiv
let sonlar = [1, 2, 3, 4, 5];

// Funksiya
function salom() { return "Salom!"; }</code><span class="code-lang">javascript</span></pre>

<h3>typeof operatori</h3>
<pre><code class="language-javascript">typeof "salom"     // "string"
typeof 42          // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object" (tarixiy xato!)
typeof {}          // "object"
typeof []          // "object"
typeof function(){} // "function"</code><span class="code-lang">javascript</span></pre>

<h3>Tur o'zgartirish</h3>
<pre><code class="language-javascript">// String ga aylantirish
String(42)        // "42"
(42).toString()   // "42"

// Songa aylantirish
Number("42")      // 42
parseInt("42px")  // 42
parseFloat("3.14px") // 3.14

// Mantiqiyga aylantirish
Boolean(1)    // true
Boolean(0)    // false
Boolean("")   // false
Boolean("hi") // true</code><span class="code-lang">javascript</span></pre>

<div class="info-box">⚠️ <code>==</code> (bo'sh tenglik) turni o'zgartiradi: <code>"5" == 5</code> true. <code>===</code> (qat'iy tenglik) turni ham tekshiradi: <code>"5" === 5</code> false. Har doim <code>===</code> ishlating!</div>
        `
      },
      {
        id: "js-funksiyalar",
        icon: "⚙️",
        title: "Funksiyalar",
        content: `
<h3>Funksiya nima?</h3>
<p>Funksiya — qayta ishlatiladigan kod bloki. Muayyan vazifani bajaradi, kerak bo'lganda chaqiriladi.</p>

<h3>Funksiya turlari</h3>
<pre><code class="language-javascript">// 1. Funksiya e'loni (hoisting bor)
function qo'shish(a, b) {
    return a + b;
}
console.log(qo'shish(3, 5)); // 8

// 2. Funksiya ifodasi
const ayirish = function(a, b) {
    return a - b;
};

// 3. Strelka funksiyasi (Arrow function) — ES6
const ko'paytirish = (a, b) => a * b;
const salom = ism => \`Salom, \${ism}!\`;
const pi = () => 3.14;</code><span class="code-lang">javascript</span></pre>

<h3>Parametr va argument</h3>
<pre><code class="language-javascript">// Standart qiymat
function kutib_olish(ism = "Mehmon") {
    return \`Xush kelibsiz, \${ism}!\`;
}
kutib_olish("Ali");   // "Xush kelibsiz, Ali!"
kutib_olish();        // "Xush kelibsiz, Mehmon!"

// Rest parametr (qolgan barcha argumentlar)
function yig'indi(...sonlar) {
    return sonlar.reduce((jami, son) => jami + son, 0);
}
yig'indi(1, 2, 3, 4); // 10

// Destructuring parametr
function chop({ism, yosh}) {
    console.log(\`\${ism} — \${yosh} yosh\`);
}
chop({ism: "Kamola", yosh: 20});</code><span class="code-lang">javascript</span></pre>

<h3>Callback funksiyalar</h3>
<pre><code class="language-javascript">// Funksiya parametr sifatida
function bajar(fn) {
    fn();
}

bajar(() => console.log("Bajarildi!"));

// Massiv metodlari bilan
const sonlar = [1, 2, 3, 4, 5];
const juftlar = sonlar.filter(n => n % 2 === 0); // [2, 4]
const ikkilangan = sonlar.map(n => n * 2); // [2, 4, 6, 8, 10]</code><span class="code-lang">javascript</span></pre>

<h3>Closure (yopiq doira)</h3>
<pre><code class="language-javascript">function hisoblagich() {
    let son = 0;
    return () => {
        son++;
        return son;
    };
}

const +1 = hisoblagich();
ortir(); // 1
ortir(); // 2
ortir(); // 3</code><span class="code-lang">javascript</span></pre>

<div class="info-box">🎯 Strelka funksiyalari qisqa yozuv uchun ajoyib. Lekin <code>this</code> xususiyati bilan ishlashda an'anaviy funksiyalardan farq qiladi.</div>
        `
      },
      {
        id: "js-shartlar",
        icon: "🔀",
        title: "Shartli operatorlar",
        content: `
<h3>if-else</h3>
<p>Shartli operatorlar — dasturning qanday yo'l tanlashini boshqaradi.</p>
<pre><code class="language-javascript">const yosh = 18;

if (yosh >= 18) {
    console.log("Voyaga yetgan");
} else if (yosh >= 13) {
    console.log("O'smir");
} else {
    console.log("Bola");
}</code><span class="code-lang">javascript</span></pre>

<h3>Qisqartirilgan yozuv</h3>
<pre><code class="language-javascript">// Uchlik operator (ternary)
const xabar = yosh >= 18 ? "Katta" : "Kichik";

// Mantiqiy VA (&&)
const foydalanuvchi = { ism: "Ali" };
foydalanuvchi && console.log(foydalanuvchi.ism); // Ali

// Null tekshiruv (??)
const nomi = null ?? "Noma'lum"; // "Noma'lum"

// Optional chaining (?.)
const uzunlik = foydalanuvchi?.manzil?.ko'cha?.length;</code><span class="code-lang">javascript</span></pre>

<h3>switch-case</h3>
<pre><code class="language-javascript">const kun = "Dushanba";

switch (kun) {
    case "Dushanba":
    case "Seshanba":
    case "Chorshanba":
    case "Payshanba":
    case "Juma":
        console.log("Ish kuni");
        break;
    case "Shanba":
    case "Yakshanba":
        console.log("Dam olish kuni");
        break;
    default:
        console.log("Noma'lum kun");
}</code><span class="code-lang">javascript</span></pre>

<h3>Mantiqiy operatorlar</h3>
<pre><code class="language-javascript">// && — VA (ikkalasi ham true bo'lsa)
true && true   // true
true && false  // false

// || — YOKI (biri true bo'lsa)
false || true  // true
false || false // false

// ! — INKOR (teskarisiga)
!true   // false
!false  // true

// Taqqoslash operatorlari
5 === 5   // true (qat'iy tenglik)
5 !== 3   // true
5 > 3     // true
5 >= 5    // true
3 < 5     // true</code><span class="code-lang">javascript</span></pre>

<h3>Truthy va Falsy qiymatlar</h3>
<pre><code class="language-javascript">// Falsy qiymatlar (false sifatida qaraladi)
false, 0, "", null, undefined, NaN

// Truthy qiymatlar (true sifatida qaraladi)
true, 1, "salom", [], {}, function(){}</code><span class="code-lang">javascript</span></pre>

<div class="info-box">💡 <code>??</code> (nullish coalescing) faqat <code>null</code> yoki <code>undefined</code> ni tekshiradi. <code>||</code> esa barcha falsy qiymatlarni tekshiradi.</div>
        `
      },
      {
        id: "js-tsikllar",
        icon: "🔄",
        title: "Tsikllar (Loops)",
        content: `
<h3>Tsikl nima?</h3>
<p>Tsikl — bir xil kodni qayta-qayta bajarish imkonini beradi. Ko'p ma'lumotlar bilan ishlashda juda kerakli.</p>

<h3>for tsikli</h3>
<pre><code class="language-javascript">// Klassik for
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// Orqaga sanash
for (let i = 5; i > 0; i--) {
    console.log(i); // 5, 4, 3, 2, 1
}

// Massiv ustida
const mevalar = ["olma", "nok", "shaftoli"];
for (let i = 0; i < mevalar.length; i++) {
    console.log(mevalar[i]);
}</code><span class="code-lang">javascript</span></pre>

<h3>while va do-while</h3>
<pre><code class="language-javascript">// while — avval tekshiradi, keyin bajaradi
let son = 1;
while (son <= 5) {
    console.log(son);
    son++;
}

// do-while — avval bajaradi, keyin tekshiradi
let x = 0;
do {
    console.log(x);
    x++;
} while (x < 3);</code><span class="code-lang">javascript</span></pre>

<h3>for...of va for...in</h3>
<pre><code class="language-javascript">// for...of — massiv va iterabllar uchun
const ranglar = ["qizil", "yashil", "ko'k"];
for (const rang of ranglar) {
    console.log(rang);
}

// String ustida ham ishlaydi
for (const harf of "Salom") {
    console.log(harf); // S, a, l, o, m
}

// for...in — ob'ekt kalitlari uchun
const odam = { ism: "Ali", yosh: 25, shahar: "Toshkent" };
for (const kalit in odam) {
    console.log(\`\${kalit}: \${odam[kalit]}\`);
}</code><span class="code-lang">javascript</span></pre>

<h3>break va continue</h3>
<pre><code class="language-javascript">for (let i = 0; i < 10; i++) {
    if (i === 5) break;    // Tsikldan chiqish
    if (i % 2 === 0) continue; // Keyingiga o'tish
    console.log(i); // 1, 3
}</code><span class="code-lang">javascript</span></pre>

<h3>forEach va boshqa massiv metodlari</h3>
<pre><code class="language-javascript">const sonlar = [1, 2, 3, 4, 5];

sonlar.forEach(n => console.log(n));
const ikkilangan = sonlar.map(n => n * 2);
const juftlar = sonlar.filter(n => n % 2 === 0);
const yig'indi = sonlar.reduce((jami, n) => jami + n, 0);
const topildi = sonlar.find(n => n > 3); // 4</code><span class="code-lang">javascript</span></pre>

<div class="info-box">🚀 Massivlar uchun <code>forEach</code>, <code>map</code>, <code>filter</code>, <code>reduce</code> metodlari ko'p hollarda <code>for</code> tsiklidan qulay va o'qilishi oson.</div>
        `
      },
      {
        id: "js-massivlar",
        icon: "📋",
        title: "Massivlar",
        content: `
<h3>Massiv nima?</h3>
<p>Massiv — bir nechta qiymatni tartib bilan saqlaydi. Qiymatlar 0 dan boshlanadigan indeks bilan olinadi.</p>

<h3>Massiv yaratish</h3>
<pre><code class="language-javascript">// Literal usul (tavsiya)
const ranglar = ["qizil", "yashil", "ko'k"];
const sonlar = [1, 2, 3, 4, 5];
const aralash = [1, "salom", true, null, { ism: "Ali" }];

// Konstruktor usul
const bo'sh = new Array(3); // [undefined, undefined, undefined]

// Indeks bilan olish
console.log(ranglar[0]); // "qizil"
console.log(ranglar[2]); // "ko'k"
console.log(ranglar.at(-1)); // "ko'k" (oxirgi)</code><span class="code-lang">javascript</span></pre>

<h3>Asosiy metodlar</h3>
<pre><code class="language-javascript">const m = [1, 2, 3];

// Qo'shish
m.push(4);       // Oxirga: [1, 2, 3, 4]
m.unshift(0);    // Boshiga: [0, 1, 2, 3, 4]

// O'chirish
m.pop();         // Oxirini: [0, 1, 2, 3]
m.shift();       // Boshini: [1, 2, 3]

// Uzunlik
m.length;        // 3

// Qidirish
m.includes(2);   // true
m.indexOf(2);    // 1
m.find(n => n > 1); // 2
m.findIndex(n => n > 1); // 1

// Birlashtirish
[1,2].concat([3,4]); // [1,2,3,4]
[...[1,2], ...[3,4]]; // [1,2,3,4] (spread)</code><span class="code-lang">javascript</span></pre>

<h3>Muhim metodlar</h3>
<pre><code class="language-javascript">const mevalar = ["Olma", "Nok", "Shaftoli", "Gilos"];

// Tartiblash
mevalar.sort(); // ["Gilos", "Nok", "Olma", "Shaftoli"]
[3,1,4,1,5].sort((a,b) => a - b); // [1,1,3,4,5]

// Teskari qilish
mevalar.reverse();

// Kesish
mevalar.slice(1, 3); // ["Nok", "Shaftoli"]

// O'zgartirish
mevalar.splice(1, 1, "Anor"); // 1-dan 1ta o'chir, "Anor" qo'sh

// Massivga aylantirish
"a,b,c".split(","); // ["a","b","c"]
["a","b"].join("-"); // "a-b"

// Tekislash (flatten)
[[1,2],[3,4]].flat(); // [1,2,3,4]</code><span class="code-lang">javascript</span></pre>

<h3>Destructuring</h3>
<pre><code class="language-javascript">const [birinchi, ikkinchi, ...qolgan] = [1, 2, 3, 4, 5];
console.log(birinchi); // 1
console.log(qolgan);   // [3, 4, 5]

// Almashtiruv
let a = 1, b = 2;
[a, b] = [b, a]; // a=2, b=1</code><span class="code-lang">javascript</span></pre>

<div class="info-box">⚡ <code>map</code>, <code>filter</code>, <code>reduce</code> — funksional dasturlashning asosi. Ularni yaxshi bilish siz yozadigan kodni juda osonlashtiradi.</div>
        `
      },
      {
        id: "js-ob'ektlar",
        icon: "🎁",
        title: "Ob'ektlar",
        content: `
<h3>Ob'ekt nima?</h3>
<p>Ob'ekt — kalit-qiymat juftlari to'plami. Real dunyodagi narsalarni modellashtirish uchun ishlatiladi.</p>

<h3>Ob'ekt yaratish</h3>
<pre><code class="language-javascript">// Literal usul (eng ko'p ishlatiladigan)
const talaba = {
    ism: "Kamola",
    familiya: "Yusupova",
    yosh: 20,
    shahar: "Toshkent",
    fanlar: ["Matematika", "Fizika"],
    // Metod (funksiya-xususiyat)
    salom() {
        return \`Men \${this.ism}\`;
    }
};

// Qiymatlarni olish
console.log(talaba.ism);         // "Kamola"
console.log(talaba["familiya"]); // "Yusupova"

// O'zgartirish
talaba.yosh = 21;
talaba.email = "kamola@mail.uz"; // Yangi xususiyat

// O'chirish
delete talaba.shahar;

// Metodni chaqirish
talaba.salom(); // "Men Kamola"</code><span class="code-lang">javascript</span></pre>

<h3>Ob'ekt metodlari</h3>
<pre><code class="language-javascript">const odam = { ism: "Ali", yosh: 25, shahar: "Buxoro" };

// Kalitlar
Object.keys(odam);    // ["ism", "yosh", "shahar"]

// Qiymatlar
Object.values(odam);  // ["Ali", 25, "Buxoro"]

// Juftlar
Object.entries(odam); // [["ism","Ali"], ["yosh",25], ...]

// Nusxa
const yangi = Object.assign({}, odam);
const yangi2 = { ...odam }; // Spread (tavsiya)

// Yangi xususiyat bilan nusxa
const kengaytirilgan = { ...odam, kasb: "Dasturchi" };</code><span class="code-lang">javascript</span></pre>

<h3>Destructuring</h3>
<pre><code class="language-javascript">const { ism, yosh, shahar = "Toshkent" } = odam;
console.log(ism);   // "Ali"

// Nomni o'zgartirish
const { ism: talabaNomi } = odam;

// Funksiya parametrida
function chop({ ism, yosh }) {
    console.log(\`\${ism}, \${yosh} yosh\`);
}
chop(odam);</code><span class="code-lang">javascript</span></pre>

<h3>Class (sinf)</h3>
<pre><code class="language-javascript">class Talaba {
    constructor(ism, yosh) {
        this.ism = ism;
        this.yosh = yosh;
    }

    salom() {
        return \`Salom! Men \${this.ism}, \${this.yosh} yoshman.\`;
    }
}

const ali = new Talaba("Ali", 20);
ali.salom(); // "Salom! Men Ali, 20 yoshman."</code><span class="code-lang">javascript</span></pre>

<div class="info-box">📌 <code>this</code> — ob'ektning o'ziga ishora qiladi. Strelka funksiyalari o'z <code>this</code> iga ega emas — shu sababli metodlarda an'anaviy funksiya yozing.</div>
        `
      },
      {
        id: "js-dom",
        icon: "🌐",
        title: "DOM bilan ishlash",
        content: `
<h3>DOM nima?</h3>
<p>DOM (Document Object Model) — brauzer HTML ni ob'ektlar daraxtiga aylantiradi. JavaScript bu daraxt bilan ishlaydi: elementlarni topadi, o'zgartiradi, qo'shadi yoki o'chiradi.</p>

<h3>Elementlarni topish</h3>
<pre><code class="language-javascript">// ID bo'yicha (1 ta element)
const sarlavha = document.getElementById("sarlavha");

// CSS selektor bo'yicha (birinchi topilgan)
const tugma = document.querySelector(".tugma");
const kirish = document.querySelector("#kirish");

// Barcha mos elementlar (NodeList)
const barcha = document.querySelectorAll(".karta");
const teglar = document.querySelectorAll("p");

// Eski usullar
document.getElementsByClassName("klass");
document.getElementsByTagName("p");</code><span class="code-lang">javascript</span></pre>

<h3>Elementlarni o'zgartirish</h3>
<pre><code class="language-javascript">const el = document.querySelector("#xabar");

// Matn o'zgartirish
el.textContent = "Yangi matn"; // Xavfsiz
el.innerHTML = "&lt;b&gt;Qalin matn&lt;/b&gt;"; // HTML qo'llash

// CSS o'zgartirish
el.style.color = "red";
el.style.fontSize = "20px";
el.style.display = "none";

// Class boshqarish
el.classList.add("faol");
el.classList.remove("yashirin");
el.classList.toggle("tanlangan");
el.classList.contains("faol"); // true/false

// Atribut boshqarish
el.setAttribute("href", "https://example.com");
el.getAttribute("href");
el.removeAttribute("disabled");</code><span class="code-lang">javascript</span></pre>

<h3>Hodisalar (Events)</h3>
<pre><code class="language-javascript">const tugma = document.querySelector("#tugma");

// Hodisa tinglash
tugma.addEventListener("click", function() {
    alert("Tugma bosildi!");
});

// Strelka funksiya
tugma.addEventListener("click", () => {
    console.log("Bosildi!");
});

// Hodisa ob'ekti
tugma.addEventListener("click", (e) => {
    console.log(e.target);        // Bosilgan element
    console.log(e.clientX);       // Sichqon X koordinati
    e.preventDefault();           // Standart amal bekor
});

// Hodisa turlari
// click, dblclick, mouseover, mouseout
// keydown, keyup, keypress
// submit, change, input, focus, blur
// load, DOMContentLoaded, resize, scroll</code><span class="code-lang">javascript</span></pre>

<h3>Element yaratish</h3>
<pre><code class="language-javascript">// Yangi element yaratish
const yangiDiv = document.createElement("div");
yangiDiv.textContent = "Yangi element";
yangiDiv.classList.add("karta");

// Sahifaga qo'shish
document.body.appendChild(yangiDiv);
document.body.prepend(yangiDiv);   // Boshiga
document.body.removeChild(yangiDiv); // O'chirish</code><span class="code-lang">javascript</span></pre>

<div class="info-box">🔑 <code>DOMContentLoaded</code> hodisasi HTML to'liq yuklanganidan keyin ishlaydi. Script ni body oxiriga yoki <code>defer</code> bilan yuklang.</div>
        `
      },
      {
        id: "js-es6",
        icon: "🆕",
        title: "ES6+ yangiliklari",
        content: `
<h3>ES6 nima?</h3>
<p>ES6 (ECMAScript 2015) — JavaScript ning muhim yangilanishi. Ko'plab zamonaviy yozuv usullari shu versiyadan kiritilgan. Undan keyin ES7, ES8... har yil yangi imkoniyatlar qo'shilmoqda.</p>

<h3>Template Literals (shablon satrlar)</h3>
<pre><code class="language-javascript">const ism = "Dilnoza";
const yosh = 23;

// Eski usul
const xabar1 = "Salom, " + ism + "! Siz " + yosh + " yoshsiz.";

// ES6 Template Literal
const xabar2 = \`Salom, \${ism}! Siz \${yosh} yoshsiz.\`;
const hisob = \`2 + 2 = \${2 + 2}\`; // Ifodalar ham mumkin</code><span class="code-lang">javascript</span></pre>

<h3>Destructuring</h3>
<pre><code class="language-javascript">// Massiv destructuring
const [a, b, ...qolgan] = [1, 2, 3, 4, 5];

// Ob'ekt destructuring
const { ism, yosh, kasb = "Talaba" } = odam;

// Funksiya parametrida
const chop = ({ ism, yosh }) => \`\${ism} (\${yosh})\`;</code><span class="code-lang">javascript</span></pre>

<h3>Spread va Rest</h3>
<pre><code class="language-javascript">// Spread — tarqatish
const a = [1, 2, 3];
const b = [0, ...a, 4]; // [0, 1, 2, 3, 4]
const obj2 = { ...obj1, yangiXususiyat: true };

// Rest — yig'ish
function yig'indi(...sonlar) { return sonlar.reduce((a,b) => a+b); }
yig'indi(1, 2, 3, 4); // 10</code><span class="code-lang">javascript</span></pre>

<h3>Promise va async/await</h3>
<pre><code class="language-javascript">// Promise
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// async/await (yangi va qulay usul)
async function malumotOlish() {
    try {
        const javob = await fetch("https://api.example.com/data");
        const ma'lumot = await javob.json();
        console.log(ma'lumot);
    } catch (xato) {
        console.error("Xato:", xato);
    }
}</code><span class="code-lang">javascript</span></pre>

<h3>Modules (ES Modules)</h3>
<pre><code class="language-javascript">// export.js
export const PI = 3.14;
export function qo'shish(a, b) { return a + b; }
export default class Hisoblash { }

// import.js
import Hisoblash, { PI, qo'shish } from './export.js';
import * as Hammasi from './export.js';</code><span class="code-lang">javascript</span></pre>

<h3>Optional Chaining va Nullish Coalescing</h3>
<pre><code class="language-javascript">// Optional chaining (?.)
const ism = foydalanuvchi?.profil?.ism;

// Nullish coalescing (??)
const nom = qiymat ?? "Standart qiymat";

// Logical Assignment
x ||= 5;  // x = x || 5
x &&= 10; // x = x && 10
x ??= 7;  // x = x ?? 7</code><span class="code-lang">javascript</span></pre>

<div class="info-box">🌟 ES6+ xususiyatlarini o'zlashtiring — ular kodni 2-3 marta qisqartiradi va o'qilishini yaxshilaydi. Zamonaviy JS kod deyarli hammasi shu xususiyatlardan foydalanadi.</div>
        `
      }
    ]
  },

  react: {
    title: "React",
    fullName: "React — UI kutubxonasi",
    icon: "⚛️",
    desc: "Facebook tomonidan yaratilgan komponent asosidagi UI kutubxonasi",
    color: "react",
    topicsCount: 10,
    topics: [
      {
        id: "react-nima",
        icon: "⚛️",
        title: "React nima?",
        content: `
<h3>React haqida</h3>
<p>React — Facebook (hozirgi Meta) tomonidan 2013-yilda yaratilgan ochiq manbali JavaScript kutubxonasi. U foydalanuvchi interfeyslari (UI) ni yaratish uchun mo'ljallangan. React to'liq framework emas — faqat UI qatlami uchun javob beradi.</p>

<h3>React nima uchun kerak?</h3>
<ul>
  <li><strong>Komponentlar</strong> — UI ni qayta ishlatiladigan bo'laklarga bo'lish</li>
  <li><strong>Virtual DOM</strong> — sahifani tez va samarali yangilash</li>
  <li><strong>Bir tomonlama ma'lumot oqimi</strong> — kod tartibli va bashorat qilinadigan</li>
  <li><strong>Katta ekotizim</strong> — juda ko'p kutubxona va toollar</li>
</ul>

<h3>Virtual DOM nima?</h3>
<p>Oddiy DOM bilan ishlash sekin. React avval o'zgarishlarni xotirada (Virtual DOM) hisoblaydi, keyin faqat o'zgargan qismlarni haqiqiy DOM ga qo'llaydi — bu juda tez ishlaydi.</p>

<h3>React o'rnatish</h3>
<pre><code class="language-bash"># Yangi React loyiha yaratish (Vite bilan — tavsiya)
npm create vite@latest mening-loyiham -- --template react
cd mening-loyiham
npm install
npm run dev

# Yoki Create React App (eski usul)
npx create-react-app mening-loyiham
cd mening-loyiham
npm start</code><span class="code-lang">bash</span></pre>

<h3>Loyiha tuzilishi</h3>
<pre><code class="language-bash">mening-loyiham/
├── src/
│   ├── App.jsx        # Asosiy komponent
│   ├── main.jsx       # Kirish nuqtasi
│   └── components/    # Komponentlar papkasi
├── public/
├── index.html
└── package.json</code><span class="code-lang">bash</span></pre>

<div class="info-box">⚛️ React — dunyodagi eng mashhur frontend kutubxona. Stack Overflow so'rovnomasida yillar davomida eng ko'p ishlatiladigan framework/kutubxona sifatida e'tirof etilgan.</div>
        `
      },
      {
        id: "react-jsx",
        icon: "📝",
        title: "JSX sintaksis",
        content: `
<h3>JSX nima?</h3>
<p>JSX (JavaScript XML) — JavaScript ichida HTML-ga o'xshash kod yozish imkonini beruvchi sintaksis kengaytmasi. Brauzer JSX ni tushunmaydi — Babel uni oddiy JavaScript ga aylantiradi.</p>

<h3>JSX asoslari</h3>
<pre><code class="language-jsx">// Oddiy JSX
const element = &lt;h1&gt;Salom, Dunyo!&lt;/h1&gt;;

// JavaScript ifodalar {} ichida yoziladi
const ism = "Alisher";
const element = &lt;h1&gt;Salom, {ism}!&lt;/h1&gt;;

// Hisob-kitob
const element = &lt;p&gt;2 + 2 = {2 + 2}&lt;/p&gt;;

// Funksiya chaqirish
const element = &lt;p&gt;{getGreeting()}&lt;/p&gt;;</code><span class="code-lang">jsx</span></pre>

<h3>JSX qoidalari</h3>
<pre><code class="language-jsx">// 1. Bitta ildiz element (root) bo'lishi kerak
// Noto'g'ri:
return (
  &lt;h1&gt;Sarlavha&lt;/h1&gt;
  &lt;p&gt;Paragraf&lt;/p&gt;
);

// To'g'ri (div yoki Fragment bilan o'rash):
return (
  &lt;div&gt;
    &lt;h1&gt;Sarlavha&lt;/h1&gt;
    &lt;p&gt;Paragraf&lt;/p&gt;
  &lt;/div&gt;
);

// Fragment — qo'shimcha div qo'shmasdan
return (
  &lt;&gt;
    &lt;h1&gt;Sarlavha&lt;/h1&gt;
    &lt;p&gt;Paragraf&lt;/p&gt;
  &lt;/&gt;
);</code><span class="code-lang">jsx</span></pre>

<h3>HTML va JSX farqlari</h3>
<pre><code class="language-jsx">// class → className (class JS da reserved word)
&lt;div className="konteyner"&gt;...&lt;/div&gt;

// for → htmlFor
&lt;label htmlFor="email"&gt;Email:&lt;/label&gt;

// style — ob'ekt sifatida (camelCase)
&lt;p style={{ color: 'red', fontSize: '16px' }}&gt;Matn&lt;/p&gt;

// Barcha teglar yopilishi kerak
&lt;img src="rasm.jpg" alt="Rasm" /&gt;
&lt;input type="text" /&gt;
&lt;br /&gt;</code><span class="code-lang">jsx</span></pre>

<h3>Shartli ko'rsatish</h3>
<pre><code class="language-jsx">// && operatori
const element = (
  &lt;div&gt;
    {isLoggedIn && &lt;p&gt;Xush kelibsiz!&lt;/p&gt;}
  &lt;/div&gt;
);

// Uchlik operator
const element = (
  &lt;div&gt;
    {isLoggedIn ? &lt;p&gt;Kirgan&lt;/p&gt; : &lt;p&gt;Kirmagan&lt;/p&gt;}
  &lt;/div&gt;
);</code><span class="code-lang">jsx</span></pre>

<div class="info-box">💡 JSX shunchaki sintaksis shakar. <code>&lt;h1&gt;Salom&lt;/h1&gt;</code> aslida <code>React.createElement('h1', null, 'Salom')</code> ga aylanadi.</div>
        `
      },
      {
        id: "react-komponentlar",
        icon: "🧩",
        title: "Komponentlar",
        content: `
<h3>Komponent nima?</h3>
<p>Komponent — qayta ishlatiladigan UI bo'lagi. React ilovasi juda ko'p kichik komponentlardan tashkil topadi. Har bir komponent o'z mantiqiga, holatiga va ko'rinishiga ega.</p>

<h3>Funksional komponent</h3>
<pre><code class="language-jsx">// Oddiy funksional komponent
function Salom() {
  return &lt;h1&gt;Salom, Dunyo!&lt;/h1&gt;;
}

// Arrow function ko'rinishida
const Salom = () =&gt; {
  return &lt;h1&gt;Salom, Dunyo!&lt;/h1&gt;;
};

// Qisqa yozuv
const Salom = () =&gt; &lt;h1&gt;Salom, Dunyo!&lt;/h1&gt;;

// Ishlatish
function App() {
  return (
    &lt;div&gt;
      &lt;Salom /&gt;
      &lt;Salom /&gt;
    &lt;/div&gt;
  );
}</code><span class="code-lang">jsx</span></pre>

<h3>Komponent nomi katta harf bilan boshlanadi</h3>
<pre><code class="language-jsx">// To'g'ri — katta harf bilan (React komponenti)
&lt;Tugma /&gt;
&lt;Karta /&gt;
&lt;NavBar /&gt;

// Noto'g'ri — kichik harf bilan (HTML teg deb qaraladi)
&lt;tugma /&gt;  // HTML &lt;tugma&gt; tegi izlaydi</code><span class="code-lang">jsx</span></pre>

<h3>Murakkab komponent misoli</h3>
<pre><code class="language-jsx">function MahsulotKartasi() {
  return (
    &lt;div className="karta"&gt;
      &lt;img src="telefon.jpg" alt="Telefon" /&gt;
      &lt;h2&gt;Aqlli telefon&lt;/h2&gt;
      &lt;p&gt;Narxi: 5,000,000 so'm&lt;/p&gt;
      &lt;button&gt;Savatga qo'shish&lt;/button&gt;
    &lt;/div&gt;
  );
}

function App() {
  return (
    &lt;div className="mahsulotlar"&gt;
      &lt;MahsulotKartasi /&gt;
      &lt;MahsulotKartasi /&gt;
      &lt;MahsulotKartasi /&gt;
    &lt;/div&gt;
  );
}</code><span class="code-lang">jsx</span></pre>

<h3>Faylga ajratish</h3>
<pre><code class="language-jsx">// Tugma.jsx
function Tugma() {
  return &lt;button className="btn"&gt;Bosing&lt;/button&gt;;
}
export default Tugma;

// App.jsx
import Tugma from './Tugma';

function App() {
  return &lt;Tugma /&gt;;
}</code><span class="code-lang">jsx</span></pre>

<div class="info-box">🏗️ Yaxshi komponent: bitta vazifani bajaradi, kichik va tushunarli, qayta ishlatilishi mumkin. Agar komponent 100 qatordan oshsa — uni ajrating!</div>
        `
      },
      {
        id: "react-props",
        icon: "📨",
        title: "Props",
        content: `
<h3>Props nima?</h3>
<p>Props (properties) — ota-komponentdan farzand-komponentga ma'lumot uzatish usuli. Props o'zgarmas (read-only) — farzand komponent uni o'zgartira olmaydi.</p>

<h3>Props uzatish</h3>
<pre><code class="language-jsx">// Ota komponent
function App() {
  return (
    &lt;div&gt;
      &lt;Salom ism="Alisher" yosh={22} /&gt;
      &lt;Salom ism="Malika" yosh={20} /&gt;
    &lt;/div&gt;
  );
}

// Farzand komponent
function Salom(props) {
  return (
    &lt;p&gt;
      Salom, {props.ism}! Siz {props.yosh} yoshsiz.
    &lt;/p&gt;
  );
}

// Yoki destructuring bilan
function Salom({ ism, yosh }) {
  return &lt;p&gt;Salom, {ism}! Siz {yosh} yoshsiz.&lt;/p&gt;;
}</code><span class="code-lang">jsx</span></pre>

<h3>Props turlari</h3>
<pre><code class="language-jsx">function Misol({
  matn,           // String
  son,            // Number
  mantiq,         // Boolean
  massiv,         // Array
  ob'ekt,         // Object
  funksiya,       // Function
  element         // JSX element
}) {
  return &lt;div&gt;{matn}&lt;/div&gt;;
}

// Ishlatish
&lt;Misol
  matn="Salom"
  son={42}
  mantiq={true}
  massiv={[1, 2, 3]}
  ob'ekt={{ ism: "Ali" }}
  funksiya={() =&gt; alert("Salom!")}
  element={&lt;span&gt;Ichki element&lt;/span&gt;}
/&gt;</code><span class="code-lang">jsx</span></pre>

<h3>Standart props qiymatlari</h3>
<pre><code class="language-jsx">function Tugma({ matn = "Bosing", rang = "blue", onClick }) {
  return (
    &lt;button
      style={{ background: rang }}
      onClick={onClick}
    &gt;
      {matn}
    &lt;/button&gt;
  );
}

// Ishlatish
&lt;Tugma /&gt;                    {/* "Bosing", blue */}
&lt;Tugma matn="Saqlash" /&gt;    {/* "Saqlash", blue */}
&lt;Tugma matn="O'chirish" rang="red" /&gt;</code><span class="code-lang">jsx</span></pre>

<h3>children prop</h3>
<pre><code class="language-jsx">function Karta({ sarlavha, children }) {
  return (
    &lt;div className="karta"&gt;
      &lt;h2&gt;{sarlavha}&lt;/h2&gt;
      &lt;div className="karta-tana"&gt;
        {children}
      &lt;/div&gt;
    &lt;/div&gt;
  );
}

// Ishlatish
&lt;Karta sarlavha="Mening kartam"&gt;
  &lt;p&gt;Bu children prop orqali keladi&lt;/p&gt;
  &lt;button&gt;Tugma&lt;/button&gt;
&lt;/Karta&gt;</code><span class="code-lang">jsx</span></pre>

<div class="info-box">📌 Props — ma'lumot bir yo'nalishda (ota → farzand) oqadi. Farzanddan otaga ma'lumot yuborish uchun funksiyani prop sifatida uzating.</div>
        `
      },
      {
        id: "react-state",
        icon: "💾",
        title: "State (useState)",
        content: `
<h3>State nima?</h3>
<p>State — komponentning o'zgaruvchan ma'lumoti. State o'zgarganda React komponentni qayta render qiladi. Props tashqaridan kelsa, state komponentning ichki ma'lumotidir.</p>

<h3>useState Hook</h3>
<pre><code class="language-jsx">import { useState } from 'react';

function Hisoblagich() {
  // [qiymat, o'zgartiruvchi] = useState(boshlang'ich_qiymat)
  const [son, setSon] = useState(0);

  return (
    &lt;div&gt;
      &lt;p&gt;Son: {son}&lt;/p&gt;
      &lt;button onClick={() =&gt; setSon(son + 1)}&gt;+1&lt;/button&gt;
      &lt;button onClick={() =&gt; setSon(son - 1)}&gt;-1&lt;/button&gt;
      &lt;button onClick={() =&gt; setSon(0)}&gt;Nol&lt;/button&gt;
    &lt;/div&gt;
  );
}</code><span class="code-lang">jsx</span></pre>

<h3>Turli xil state turlari</h3>
<pre><code class="language-jsx">function Misol() {
  const [matn, setMatn] = useState('');          // String
  const [son, setSon] = useState(0);             // Number
  const [korsatilsin, setKorsatilsin] = useState(false); // Boolean
  const [massiv, setMassiv] = useState([]);      // Array
  const [foydalanuvchi, setFoydalanuvchi] = useState({   // Object
    ism: '',
    email: ''
  });

  return &lt;div&gt;...&lt;/div&gt;;
}</code><span class="code-lang">jsx</span></pre>

<h3>Massiv state</h3>
<pre><code class="language-jsx">function Ro'yxat() {
  const [elementlar, setElementlar] = useState(['Olma', 'Nok']);
  const [yangi, setYangi] = useState('');

  const qo'shish = () =&gt; {
    if (yangi.trim()) {
      setElementlar([...elementlar, yangi]); // Spread bilan yangi massiv
      setYangi('');
    }
  };

  const o'chirish = (index) =&gt; {
    setElementlar(elementlar.filter((_, i) =&gt; i !== index));
  };

  return (
    &lt;div&gt;
      &lt;input
        value={yangi}
        onChange={e =&gt; setYangi(e.target.value)}
        placeholder="Yangi element"
      /&gt;
      &lt;button onClick={qo'shish}&gt;Qo'shish&lt;/button&gt;
      &lt;ul&gt;
        {elementlar.map((el, i) =&gt; (
          &lt;li key={i}&gt;
            {el} &lt;button onClick={() =&gt; o'chirish(i)}&gt;✕&lt;/button&gt;
          &lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}</code><span class="code-lang">jsx</span></pre>

<h3>Ob'ekt state</h3>
<pre><code class="language-jsx">function Forma() {
  const [forma, setForma] = useState({ ism: '', email: '' });

  const o'zgartir = (e) =&gt; {
    setForma({
      ...forma,                    // Eski qiymatlarni saqlash
      [e.target.name]: e.target.value // Faqat o'zgarganini yangilash
    });
  };

  return (
    &lt;form&gt;
      &lt;input name="ism" value={forma.ism} onChange={o'zgartir} /&gt;
      &lt;input name="email" value={forma.email} onChange={o'zgartir} /&gt;
    &lt;/form&gt;
  );
}</code><span class="code-lang">jsx</span></pre>

<div class="info-box">⚠️ State ni to'g'ridan-to'g'ri o'zgartirmang! <code>state.son = 5</code> emas, <code>setState(5)</code> ishlating. Aks holda React o'zgarishni ko'rmaydi va qayta render qilmaydi.</div>
        `
      },
      {
        id: "react-useeffect",
        icon: "🔄",
        title: "useEffect",
        content: `
<h3>useEffect nima?</h3>
<p>useEffect — komponent render bo'lgandan keyin "yon ta'sirlar" (side effects) bajarish uchun hook. API dan ma'lumot olish, timer o'rnatish, DOM bilan ishlash — bularning barchasi useEffect ichida qilinadi.</p>

<h3>Asosiy ishlatish</h3>
<pre><code class="language-jsx">import { useState, useEffect } from 'react';

function Misol() {
  const [son, setSon] = useState(0);

  // Har render da ishlaydi
  useEffect(() =&gt; {
    document.title = \`Son: \${son}\`;
  });

  // Faqat bir marta (komponent paydo bo'lganda)
  useEffect(() =&gt; {
    console.log('Komponent paydo bo'ldi!');
  }, []); // Bo'sh massiv = bir martagina

  // son o'zgarganda ishlaydi
  useEffect(() =&gt; {
    console.log('Son o'zgardi:', son);
  }, [son]); // Dependency array

  return &lt;button onClick={() =&gt; setSon(son + 1)}&gt;{son}&lt;/button&gt;;
}</code><span class="code-lang">jsx</span></pre>

<h3>API dan ma'lumot olish</h3>
<pre><code class="language-jsx">function Foydalanuvchilar() {
  const [foydalanuvchilar, setFoydalanuvchilar] = useState([]);
  const [yuklanmoqda, setYuklanmoqda] = useState(true);

  useEffect(() =&gt; {
    async function malumotOlish() {
      try {
        const javob = await fetch('https://jsonplaceholder.typicode.com/users');
        const ma'lumot = await javob.json();
        setFoydalanuvchilar(ma'lumot);
      } catch (xato) {
        console.error(xato);
      } finally {
        setYuklanmoqda(false);
      }
    }

    malumotOlish();
  }, []); // Faqat bir marta

  if (yuklanmoqda) return &lt;p&gt;Yuklanmoqda...&lt;/p&gt;;

  return (
    &lt;ul&gt;
      {foydalanuvchilar.map(f =&gt; (
        &lt;li key={f.id}&gt;{f.name}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</code><span class="code-lang">jsx</span></pre>

<h3>Tozalash (Cleanup)</h3>
<pre><code class="language-jsx">useEffect(() =&gt; {
  // Timer o'rnatish
  const intervalId = setInterval(() =&gt; {
    console.log('Tiklanmoqda...');
  }, 1000);

  // Komponent o'chirilganda tozalash
  return () =&gt; {
    clearInterval(intervalId); // Timer o'chiriladi
  };
}, []);

// Event listener uchun
useEffect(() =&gt; {
  const handler = () =&gt; console.log('Oyna o'lchami o'zgardi');
  window.addEventListener('resize', handler);

  return () =&gt; window.removeEventListener('resize', handler);
}, []);</code><span class="code-lang">jsx</span></pre>

<div class="info-box">🔑 Dependency array (ikkinchi argument) juda muhim: bo'sh [] = bir marta, [qiymat] = qiymat o'zgarganda, yo'q = har doim. Noto'g'ri ishlatilsa cheksiz loop hosil bo'ladi!</div>
        `
      },
      {
        id: "react-hodisalar",
        icon: "🖱️",
        title: "Hodisalar (Events)",
        content: `
<h3>React da hodisalar</h3>
<p>React hodisalari HTML hodisalariga o'xshash, lekin camelCase formatida yoziladi va funksiya sifatida uzatiladi (string emas).</p>

<h3>Asosiy hodisalar</h3>
<pre><code class="language-jsx">function HodisaMisol() {
  // onClick
  const bosing = () =&gt; alert('Bosildi!');

  // onSubmit
  const yuborish = (e) =&gt; {
    e.preventDefault(); // Standart yuklanishni to'xtatish
    console.log('Forma yuborildi');
  };

  // onChange
  const o'zgartirish = (e) =&gt; {
    console.log('Qiymat:', e.target.value);
  };

  return (
    &lt;form onSubmit={yuborish}&gt;
      &lt;input onChange={o'zgartirish} /&gt;
      &lt;button onClick={bosing}&gt;Bosing&lt;/button&gt;
      &lt;button type="submit"&gt;Yuborish&lt;/button&gt;
    &lt;/form&gt;
  );
}</code><span class="code-lang">jsx</span></pre>

<h3>Hodisa va state birga</h3>
<pre><code class="language-jsx">function Qidiruv() {
  const [qidiruv, setQidiruv] = useState('');
  const [natijalar, setNatijalar] = useState([]);

  const qidirish = (e) =&gt; {
    const qiymat = e.target.value;
    setQidiruv(qiymat);

    // Natijalarni filtrlash
    const filtrlangan = mahsulotlar.filter(m =&gt;
      m.nomi.toLowerCase().includes(qiymat.toLowerCase())
    );
    setNatijalar(filtrlangan);
  };

  return (
    &lt;div&gt;
      &lt;input
        type="search"
        value={qidiruv}
        onChange={qidirish}
        placeholder="Qidirish..."
      /&gt;
      &lt;ul&gt;
        {natijalar.map(m =&gt; &lt;li key={m.id}&gt;{m.nomi}&lt;/li&gt;)}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}</code><span class="code-lang">jsx</span></pre>

<h3>Klaviatura hodisalari</h3>
<pre><code class="language-jsx">function InputMisol() {
  const [matn, setMatn] = useState('');

  const klaviatura = (e) =&gt; {
    if (e.key === 'Enter') {
      console.log('Enter bosildi:', matn);
    }
    if (e.key === 'Escape') {
      setMatn('');
    }
  };

  return (
    &lt;input
      value={matn}
      onChange={e =&gt; setMatn(e.target.value)}
      onKeyDown={klaviatura}
    /&gt;
  );
}</code><span class="code-lang">jsx</span></pre>

<h3>Asosiy hodisalar ro'yxati</h3>
<div class="tag-list">
  <span class="tag">onClick</span>
  <span class="tag">onChange</span>
  <span class="tag">onSubmit</span>
  <span class="tag">onKeyDown</span>
  <span class="tag">onKeyUp</span>
  <span class="tag">onMouseEnter</span>
  <span class="tag">onMouseLeave</span>
  <span class="tag">onFocus</span>
  <span class="tag">onBlur</span>
  <span class="tag">onScroll</span>
</div>

<div class="info-box">💡 Hodisa handlerlari onClick={bosing} shaklida yozing — onClick={bosing()} emas! Qavslar qo'yilsa, render paytida darhol chaqiriladi.</div>
        `
      },
      {
        id: "react-shartli-render",
        icon: "🔀",
        title: "Shartli render",
        content: `
<h3>Shartli render nima?</h3>
<p>Shartli render — ma'lum shartga qarab turli JSX ko'rsatish. React da bu JavaScript ning oddiy shartli operatorlari orqali amalga oshiriladi.</p>

<h3>if-else bilan</h3>
<pre><code class="language-jsx">function Xabar({ kirgan }) {
  if (kirgan) {
    return &lt;h1&gt;Xush kelibsiz!&lt;/h1&gt;;
  }
  return &lt;h1&gt;Iltimos, kiring.&lt;/h1&gt;;
}

// Ishlatish
&lt;Xabar kirgan={true} /&gt;
&lt;Xabar kirgan={false} /&gt;</code><span class="code-lang">jsx</span></pre>

<h3>&& operatori</h3>
<pre><code class="language-jsx">function Panel({ xabarlar }) {
  return (
    &lt;div&gt;
      &lt;h2&gt;Bosh sahifa&lt;/h2&gt;

      {/* Faqat xabarlar bo'lganda ko'rsatish */}
      {xabarlar.length &gt; 0 && (
        &lt;p&gt;Sizda {xabarlar.length} ta yangi xabar bor.&lt;/p&gt;
      )}

      {/* Yuklanmoqda holati */}
      {yuklanmoqda && &lt;div className="spinner"&gt;Yuklanmoqda...&lt;/div&gt;}
    &lt;/div&gt;
  );
}</code><span class="code-lang">jsx</span></pre>

<h3>Uchlik operator (ternary)</h3>
<pre><code class="language-jsx">function Tugma({ yuklanmoqda, onClick }) {
  return (
    &lt;button onClick={onClick} disabled={yuklanmoqda}&gt;
      {yuklanmoqda ? 'Yuklanmoqda...' : 'Yuborish'}
    &lt;/button&gt;
  );
}

// Murakkab uchlik
function Holat({ holat }) {
  return (
    &lt;span className={holat === 'faol' ? 'yashil' : 'kulrang'}&gt;
      {holat === 'faol' ? '✅ Faol' : '⬤ Nofaol'}
    &lt;/span&gt;
  );
}</code><span class="code-lang">jsx</span></pre>

<h3>switch bilan</h3>
<pre><code class="language-jsx">function Ogohlantirish({ tur }) {
  switch (tur) {
    case 'muvaffaqiyat':
      return &lt;div className="yashil"&gt;✅ Muvaffaqiyat!&lt;/div&gt;;
    case 'xato':
      return &lt;div className="qizil"&gt;❌ Xato yuz berdi!&lt;/div&gt;;
    case 'ogohlantirish':
      return &lt;div className="sariq"&gt;⚠️ Diqqat!&lt;/div&gt;;
    default:
      return null; // Hech narsa ko'rsatmaslik
  }
}</code><span class="code-lang">jsx</span></pre>

<div class="info-box">⚠️ <code>0 && &lt;Komponent /&gt;</code> — noto'g'ri! 0 ko'rsatiladi. <code>!!(son) && &lt;Komponent /&gt;</code> yoki <code>son &gt; 0 && &lt;Komponent /&gt;</code> ishlating.</div>
        `
      },
      {
        id: "react-royxatlar",
        icon: "📋",
        title: "Ro'yxatlar va Keys",
        content: `
<h3>Ro'yxatlarni render qilish</h3>
<p>React da massivlarni ro'yxat sifatida ko'rsatish uchun <code>.map()</code> metodi ishlatiladi. Har bir element noyob <code>key</code> prop ga ega bo'lishi kerak.</p>

<h3>Asosiy misol</h3>
<pre><code class="language-jsx">function MevalarRo'yxati() {
  const mevalar = ['Olma', 'Nok', 'Shaftoli', 'Gilos'];

  return (
    &lt;ul&gt;
      {mevalar.map((meva, index) =&gt; (
        &lt;li key={index}&gt;{meva}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</code><span class="code-lang">jsx</span></pre>

<h3>Ob'ektlar massivi</h3>
<pre><code class="language-jsx">function FoydalanuvchilarRo'yxati() {
  const foydalanuvchilar = [
    { id: 1, ism: 'Alisher', kasb: 'Dasturchi' },
    { id: 2, ism: 'Malika', kasb: 'Dizayner' },
    { id: 3, ism: 'Bobur', kasb: 'Muhandis' },
  ];

  return (
    &lt;div&gt;
      {foydalanuvchilar.map(f =&gt; (
        &lt;div key={f.id} className="karta"&gt;
          &lt;h3&gt;{f.ism}&lt;/h3&gt;
          &lt;p&gt;{f.kasb}&lt;/p&gt;
        &lt;/div&gt;
      ))}
    &lt;/div&gt;
  );
}</code><span class="code-lang">jsx</span></pre>

<h3>Key prop haqida</h3>
<pre><code class="language-jsx">// Noto'g'ri — key yo'q
{elementlar.map(el =&gt; &lt;li&gt;{el.nomi}&lt;/li&gt;)}

// Yomon — index ishlatish (tartib o'zgarsa muammo)
{elementlar.map((el, i) =&gt; &lt;li key={i}&gt;{el.nomi}&lt;/li&gt;)}

// To'g'ri — noyob ID ishlatish
{elementlar.map(el =&gt; &lt;li key={el.id}&gt;{el.nomi}&lt;/li&gt;)}</code><span class="code-lang">jsx</span></pre>

<h3>Filtrlash va saralash</h3>
<pre><code class="language-jsx">function MahsulotlarRo'yxati({ mahsulotlar, qidiruv }) {
  const filtrlangan = mahsulotlar
    .filter(m =&gt; m.nomi.toLowerCase().includes(qidiruv.toLowerCase()))
    .sort((a, b) =&gt; a.narx - b.narx);

  if (filtrlangan.length === 0) {
    return &lt;p&gt;Hech narsa topilmadi.&lt;/p&gt;;
  }

  return (
    &lt;ul&gt;
      {filtrlangan.map(m =&gt; (
        &lt;li key={m.id}&gt;
          {m.nomi} — {m.narx.toLocaleString()} so'm
        &lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</code><span class="code-lang">jsx</span></pre>

<div class="info-box">🔑 <code>key</code> prop React ga har bir element qaysi ekanligini aniqlashga yordam beradi. Noyob, o'zgarmas qiymat bo'lishi kerak — ideal holda ma'lumotlar bazasidagi ID.</div>
        `
      },
      {
        id: "react-hooks",
        icon: "🪝",
        title: "Asosiy Hooks",
        content: `
<h3>Hook nima?</h3>
<p>Hooks — funksional komponentlarga state va boshqa React imkoniyatlarini qo'shuvchi maxsus funksiyalar. Ular har doim "use" bilan boshlanadi.</p>

<h3>useState — holat boshqarish</h3>
<pre><code class="language-jsx">import { useState } from 'react';

function Hisoblagich() {
  const [qiymat, setQiymat] = useState(0);
  return &lt;button onClick={() =&gt; setQiymat(q =&gt; q + 1)}&gt;{qiymat}&lt;/button&gt;;
}</code><span class="code-lang">jsx</span></pre>

<h3>useEffect — yon ta'sirlar</h3>
<pre><code class="language-jsx">import { useEffect } from 'react';

useEffect(() =&gt; { /* ishlaydi */ }, []);      // Bir marta
useEffect(() =&gt; { /* ishlaydi */ }, [dep]);   // dep o'zgarganda
useEffect(() =&gt; { /* ishlaydi */ });          // Har render da</code><span class="code-lang">jsx</span></pre>

<h3>useRef — DOM ga murojaat</h3>
<pre><code class="language-jsx">import { useRef } from 'react';

function InputFokus() {
  const inputRef = useRef(null);

  const fokuslashtirish = () =&gt; {
    inputRef.current.focus(); // DOM elementga to'g'ridan-to'g'ri murojaat
  };

  return (
    &lt;div&gt;
      &lt;input ref={inputRef} placeholder="Matn kiriting" /&gt;
      &lt;button onClick={fokuslashtirish}&gt;Fokus&lt;/button&gt;
    &lt;/div&gt;
  );
}</code><span class="code-lang">jsx</span></pre>

<h3>useContext — global state</h3>
<pre><code class="language-jsx">import { createContext, useContext, useState } from 'react';

// Context yaratish
const TemaContext = createContext('kunduz');

// Provider — qiymatni o'rash
function App() {
  const [tema, setTema] = useState('kunduz');
  return (
    &lt;TemaContext.Provider value={{ tema, setTema }}&gt;
      &lt;SarlavhaPaneli /&gt;
    &lt;/TemaContext.Provider&gt;
  );
}

// Istagan joyda ishlatish
function SarlavhaPaneli() {
  const { tema, setTema } = useContext(TemaContext);
  return (
    &lt;button onClick={() =&gt; setTema(t =&gt; t === 'kunduz' ? 'tun' : 'kunduz')}&gt;
      Joriy tema: {tema}
    &lt;/button&gt;
  );
}</code><span class="code-lang">jsx</span></pre>

<h3>useMemo va useCallback</h3>
<pre><code class="language-jsx">import { useMemo, useCallback } from 'react';

// useMemo — qimmat hisob-kitobni keshlash
const hisob = useMemo(() =&gt; {
  return kattaMassiv.filter(el =&gt; el &gt; 1000).length;
}, [kattaMassiv]); // faqat kattaMassiv o'zgarganda qayta hisoblanadi

// useCallback — funksiyani keshlash
const bosing = useCallback(() =&gt; {
  doSomething(id);
}, [id]);</code><span class="code-lang">jsx</span></pre>

<div class="info-box">🪝 Hooks qoidalari: faqat funksional komponentlar yoki boshqa hooklar ichida ishlating. Tsikl, shartli operatorlar yoki oddiy funksiyalar ichida CHAQIRMANG.</div>
        `
      }
    ]
  },

  tailwind: {
    title: "Tailwind CSS",
    fullName: "Tailwind CSS — Utility-first CSS framework",
    icon: "🌊",
    desc: "Utility klasslar bilan tez va moslashuvchan dizayn yaratish uchun CSS framework",
    color: "tw",
    topicsCount: 10,
    topics: [
      {
        id: "tw-nima",
        icon: "🌊",
        title: "Tailwind CSS nima?",
        content: `
<h3>Tailwind CSS haqida</h3>
<p>Tailwind CSS — 2017-yilda Adam Wathan tomonidan yaratilgan "utility-first" CSS framework. Bootstrap kabi tayyor komponentlar bermaydi — buning o'rniga kichik, maqsadli CSS klasslari beradi va siz ularni birlashtirish orqali dizayn yaratasiz.</p>

<h3>Tailwind vs Bootstrap</h3>
<pre><code class="language-html">&lt;!-- Bootstrap: tayyor komponent --&gt;
&lt;button class="btn btn-primary btn-lg"&gt;Bosing&lt;/button&gt;

&lt;!-- Tailwind: utility klasslar bilan qurilgan --&gt;
&lt;button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"&gt;
  Bosing
&lt;/button&gt;</code><span class="code-lang">html</span></pre>

<h3>Tailwind afzalliklari</h3>
<ul>
  <li><strong>Tez ishlab chiqish</strong> — CSS fayl yozmasdan dizayn qilish</li>
  <li><strong>Kichik hajm</strong> — ishlatilmagan klasslar build paytida o'chiriladi (PurgeCSS)</li>
  <li><strong>Moslashuvchan</strong> — har qanday dizaynni yaratish mumkin</li>
  <li><strong>Responsive</strong> — qurilish ichida responsive dizayn</li>
  <li><strong>Dark mode</strong> — o'rnatilgan qorong'u rejim</li>
</ul>

<h3>O'rnatish</h3>
<pre><code class="language-bash"># npm bilan
npm install -D tailwindcss
npx tailwindcss init

# CDN bilan (faqat prototip uchun)
&lt;script src="https://cdn.tailwindcss.com"&gt;&lt;/script&gt;</code><span class="code-lang">bash</span></pre>

<h3>tailwind.config.js</h3>
<pre><code class="language-javascript">/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}</code><span class="code-lang">javascript</span></pre>

<div class="info-box">🌊 Tailwind dunyoning eng mashhur CSS frameworklaridan biri. Ko'plab yirik kompaniyalar (GitHub, Shopify, Vercel) Tailwind ishlatadi.</div>
        `
      },
      {
        id: "tw-ranglar",
        icon: "🎨",
        title: "Ranglar va Typography",
        content: `
<h3>Rang tizimi</h3>
<p>Tailwind 100 dan 900 gacha shkala bo'yicha 22 ta asosiy rang beradi. Har bir rang 11 ta to'yinganlik darajasiga ega.</p>

<pre><code class="language-html">&lt;!-- Matn rangi --&gt;
&lt;p class="text-red-500"&gt;Qizil matn&lt;/p&gt;
&lt;p class="text-blue-700"&gt;To'q ko'k matn&lt;/p&gt;
&lt;p class="text-gray-400"&gt;Kulrang matn&lt;/p&gt;
&lt;p class="text-white"&gt;Oq matn&lt;/p&gt;
&lt;p class="text-black"&gt;Qora matn&lt;/p&gt;

&lt;!-- Fon rangi --&gt;
&lt;div class="bg-green-100"&gt;Och yashil fon&lt;/div&gt;
&lt;div class="bg-purple-600"&gt;Binafsha fon&lt;/div&gt;
&lt;div class="bg-yellow-400"&gt;Sariq fon&lt;/div&gt;

&lt;!-- Chegara rangi --&gt;
&lt;div class="border border-red-500"&gt;Qizil chegara&lt;/div&gt;</code><span class="code-lang">html</span></pre>

<h3>Asosiy ranglar</h3>
<div class="tag-list">
  <span class="tag">slate</span>
  <span class="tag">gray</span>
  <span class="tag">red</span>
  <span class="tag">orange</span>
  <span class="tag">yellow</span>
  <span class="tag">green</span>
  <span class="tag">blue</span>
  <span class="tag">indigo</span>
  <span class="tag">purple</span>
  <span class="tag">pink</span>
  <span class="tag">cyan</span>
  <span class="tag">teal</span>
</div>

<h3>Typography (Matn)</h3>
<pre><code class="language-html">&lt;!-- Shrift o'lchami --&gt;
&lt;p class="text-xs"&gt;Juda kichik (12px)&lt;/p&gt;
&lt;p class="text-sm"&gt;Kichik (14px)&lt;/p&gt;
&lt;p class="text-base"&gt;Asosiy (16px)&lt;/p&gt;
&lt;p class="text-lg"&gt;Katta (18px)&lt;/p&gt;
&lt;p class="text-xl"&gt;Juda katta (20px)&lt;/p&gt;
&lt;p class="text-2xl"&gt;2x katta (24px)&lt;/p&gt;
&lt;p class="text-4xl"&gt;4x katta (36px)&lt;/p&gt;

&lt;!-- Qalinlik --&gt;
&lt;p class="font-thin"&gt;Ingichka (100)&lt;/p&gt;
&lt;p class="font-normal"&gt;Oddiy (400)&lt;/p&gt;
&lt;p class="font-semibold"&gt;Yarim qalin (600)&lt;/p&gt;
&lt;p class="font-bold"&gt;Qalin (700)&lt;/p&gt;
&lt;p class="font-black"&gt;Juda qalin (900)&lt;/p&gt;

&lt;!-- Hizalanish --&gt;
&lt;p class="text-left"&gt;Chapga&lt;/p&gt;
&lt;p class="text-center"&gt;Markazga&lt;/p&gt;
&lt;p class="text-right"&gt;O'ngga&lt;/p&gt;</code><span class="code-lang">html</span></pre>

<div class="info-box">🎨 Tailwind rang sistemasi: rang-shkala formatida. Masalan: <code>blue-500</code> — o'rtacha ko'k. 100 = och, 900 = to'q. 500 standart qiymat hisoblanadi.</div>
        `
      },
      {
        id: "tw-spacing",
        icon: "📐",
        title: "Spacing (Bo'shliqlar)",
        content: `
<h3>Tailwind spacing tizimi</h3>
<p>Tailwind 4px asosidagi spacing tizimiga ega. 1 birlik = 4px. Margin, padding, width, height uchun bir xil shkaladan foydalaniladi.</p>

<h3>Padding</h3>
<pre><code class="language-html">&lt;!-- Barcha tomondan --&gt;
&lt;div class="p-4"&gt;16px barcha tomondan&lt;/div&gt;
&lt;div class="p-8"&gt;32px barcha tomondan&lt;/div&gt;

&lt;!-- Gorizontal va vertikal --&gt;
&lt;div class="px-6 py-3"&gt;24px gorizontal, 12px vertikal&lt;/div&gt;

&lt;!-- Alohida tomonlar --&gt;
&lt;div class="pt-4"&gt;16px yuqoridan (top)&lt;/div&gt;
&lt;div class="pr-4"&gt;16px o'ngdan (right)&lt;/div&gt;
&lt;div class="pb-4"&gt;16px pastdan (bottom)&lt;/div&gt;
&lt;div class="pl-4"&gt;16px chapdan (left)&lt;/div&gt;</code><span class="code-lang">html</span></pre>

<h3>Margin</h3>
<pre><code class="language-html">&lt;!-- Barcha tomondan --&gt;
&lt;div class="m-4"&gt;16px margin barcha tomondan&lt;/div&gt;

&lt;!-- Gorizontal va vertikal --&gt;
&lt;div class="mx-auto"&gt;Gorizontal markazlashtirish&lt;/div&gt;
&lt;div class="my-8"&gt;32px yuqori va pastdan&lt;/div&gt;

&lt;!-- Alohida tomonlar --&gt;
&lt;div class="mt-4 mb-2 ml-6 mr-3"&gt;Har xil margin&lt;/div&gt;

&lt;!-- Salbiy margin --&gt;
&lt;div class="-mt-4"&gt;-16px yuqoridan&lt;/div&gt;</code><span class="code-lang">html</span></pre>

<h3>O'lchamlar (Width & Height)</h3>
<pre><code class="language-html">&lt;!-- Fikslangan o'lcham --&gt;
&lt;div class="w-32 h-16"&gt;128px keng, 64px baland&lt;/div&gt;
&lt;div class="w-64 h-64"&gt;256x256 px&lt;/div&gt;

&lt;!-- Foizli --&gt;
&lt;div class="w-1/2"&gt;50% keng&lt;/div&gt;
&lt;div class="w-full"&gt;100% keng&lt;/div&gt;
&lt;div class="h-screen"&gt;100vh baland&lt;/div&gt;
&lt;div class="h-full"&gt;100% baland&lt;/div&gt;

&lt;!-- Min/Max --&gt;
&lt;div class="max-w-lg"&gt;Maksimal 512px&lt;/div&gt;
&lt;div class="min-h-screen"&gt;Kamida ekran balandligi&lt;/div&gt;</code><span class="code-lang">html</span></pre>

<h3>Spacing shkala</h3>
<pre><code class="language-html">p-0  → 0px
p-1  → 4px
p-2  → 8px
p-3  → 12px
p-4  → 16px
p-5  → 20px
p-6  → 24px
p-8  → 32px
p-10 → 40px
p-12 → 48px
p-16 → 64px
p-20 → 80px
p-24 → 96px</code><span class="code-lang">html</span></pre>

<div class="info-box">📐 Tailwind spacing — 4px asosida qurilgan. Bu standart dizayn sistemalari bilan mos keladi va hamma joyda bir xil ko'rinish ta'minlaydi.</div>
        `
      },
      {
        id: "tw-flexbox",
        icon: "↔️",
        title: "Flexbox",
        content: `
<h3>Tailwind bilan Flexbox</h3>
<p>Tailwind Flexbox xususiyatlarini utility klasslar orqali beradi. Birma-bir CSS yozishdan ko'ra ancha qulay.</p>

<h3>Asosiy flex klasslar</h3>
<pre><code class="language-html">&lt;!-- Flex konteyner --&gt;
&lt;div class="flex"&gt;Gorizontal flex&lt;/div&gt;
&lt;div class="flex flex-col"&gt;Vertikal flex&lt;/div&gt;
&lt;div class="inline-flex"&gt;Qatorli flex&lt;/div&gt;

&lt;!-- Yo'nalish --&gt;
&lt;div class="flex flex-row"&gt;→ Gorizontal (standart)&lt;/div&gt;
&lt;div class="flex flex-col"&gt;↓ Vertikal&lt;/div&gt;
&lt;div class="flex flex-row-reverse"&gt;← Teskari&lt;/div&gt;

&lt;!-- O'rash --&gt;
&lt;div class="flex flex-wrap"&gt;Ko'p qatorli&lt;/div&gt;
&lt;div class="flex flex-nowrap"&gt;Bir qatorli (standart)&lt;/div&gt;</code><span class="code-lang">html</span></pre>

<h3>justify-content</h3>
<pre><code class="language-html">&lt;div class="flex justify-start"&gt;Chapga&lt;/div&gt;
&lt;div class="flex justify-center"&gt;Markazga&lt;/div&gt;
&lt;div class="flex justify-end"&gt;O'ngga&lt;/div&gt;
&lt;div class="flex justify-between"&gt;Oralig'i teng&lt;/div&gt;
&lt;div class="flex justify-around"&gt;Atrofi teng&lt;/div&gt;
&lt;div class="flex justify-evenly"&gt;Hammasi teng&lt;/div&gt;</code><span class="code-lang">html</span></pre>

<h3>align-items</h3>
<pre><code class="language-html">&lt;div class="flex items-start"&gt;Yuqoriga&lt;/div&gt;
&lt;div class="flex items-center"&gt;Markazga&lt;/div&gt;
&lt;div class="flex items-end"&gt;Pastga&lt;/div&gt;
&lt;div class="flex items-stretch"&gt;Cho'zilib (standart)&lt;/div&gt;</code><span class="code-lang">html</span></pre>

<h3>Amaliy misol — Navigatsiya</h3>
<pre><code class="language-html">&lt;nav class="flex items-center justify-between px-6 py-4 bg-white shadow"&gt;
  &lt;div class="text-xl font-bold text-blue-600"&gt;
    Logo
  &lt;/div&gt;

  &lt;ul class="flex gap-6 list-none"&gt;
    &lt;li&gt;&lt;a href="#" class="text-gray-600 hover:text-blue-600"&gt;Bosh sahifa&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#" class="text-gray-600 hover:text-blue-600"&gt;Haqida&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#" class="text-gray-600 hover:text-blue-600"&gt;Aloqa&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;

  &lt;button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"&gt;
    Kirish
  &lt;/button&gt;
&lt;/nav&gt;</code><span class="code-lang">html</span></pre>

<h3>gap (oraliq)</h3>
<pre><code class="language-html">&lt;div class="flex gap-4"&gt;4*4=16px oraliq&lt;/div&gt;
&lt;div class="flex gap-x-6 gap-y-2"&gt;Gorizontal 24px, vertikal 8px&lt;/div&gt;</code><span class="code-lang">html</span></pre>

<div class="info-box">💡 <code>flex items-center justify-center</code> — elementni markazlashtirish uchun klassik kombinatsiya. Bu Tailwind da eng ko'p ishlatiladigan pattern.</div>
        `
      },
      {
        id: "tw-grid",
        icon: "⊞",
        title: "Grid",
        content: `
<h3>Tailwind bilan Grid</h3>
<p>Tailwind Grid xususiyatlari yordamida ikki o'lchamli tartiblar yaratish juda oson. CSS Grid ning barcha kuchliligi utility klasslar orqali.</p>

<h3>Grid asoslari</h3>
<pre><code class="language-html">&lt;!-- Grid konteyner --&gt;
&lt;div class="grid grid-cols-3"&gt;3 ustun&lt;/div&gt;
&lt;div class="grid grid-cols-4"&gt;4 ustun&lt;/div&gt;
&lt;div class="grid grid-cols-12"&gt;12 ustun&lt;/div&gt;

&lt;!-- Oraliq --&gt;
&lt;div class="grid grid-cols-3 gap-4"&gt;16px oraliq&lt;/div&gt;
&lt;div class="grid grid-cols-3 gap-x-6 gap-y-4"&gt;Turli oraliq&lt;/div&gt;</code><span class="code-lang">html</span></pre>

<h3>span — ustun egallash</h3>
<pre><code class="language-html">&lt;div class="grid grid-cols-6 gap-4"&gt;
  &lt;div class="col-span-6 bg-blue-200"&gt;To'liq kenglik&lt;/div&gt;
  &lt;div class="col-span-4 bg-green-200"&gt;4 ustun&lt;/div&gt;
  &lt;div class="col-span-2 bg-red-200"&gt;2 ustun&lt;/div&gt;
  &lt;div class="col-span-3 bg-yellow-200"&gt;Yarmi&lt;/div&gt;
  &lt;div class="col-span-3 bg-purple-200"&gt;Yarmi&lt;/div&gt;
&lt;/div&gt;</code><span class="code-lang">html</span></pre>

<h3>Amaliy misol — Karta panjarasi</h3>
<pre><code class="language-html">&lt;div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"&gt;
  &lt;div class="bg-white rounded-xl shadow-md p-6"&gt;
    &lt;h3 class="text-lg font-semibold text-gray-800"&gt;Karta 1&lt;/h3&gt;
    &lt;p class="text-gray-500 mt-2"&gt;Karta tavsifi...&lt;/p&gt;
    &lt;button class="mt-4 text-blue-600 hover:underline"&gt;Ko'proq &rarr;&lt;/button&gt;
  &lt;/div&gt;

  &lt;div class="bg-white rounded-xl shadow-md p-6"&gt;
    &lt;h3 class="text-lg font-semibold text-gray-800"&gt;Karta 2&lt;/h3&gt;
    &lt;p class="text-gray-500 mt-2"&gt;Karta tavsifi...&lt;/p&gt;
    &lt;button class="mt-4 text-blue-600 hover:underline"&gt;Ko'proq &rarr;&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code><span class="code-lang">html</span></pre>

<h3>place-items — markazlashtirish</h3>
<pre><code class="language-html">&lt;!-- Markazlashtirish --&gt;
&lt;div class="grid place-items-center h-screen"&gt;
  &lt;div&gt;Bu element markazda!&lt;/div&gt;
&lt;/div&gt;</code><span class="code-lang">html</span></pre>

<div class="info-box">🏆 Grid bilan Flexbox birga: qoida shunday — sahifa tuzilishi uchun Grid, kichik komponentlar ichidagi joylashuv uchun Flexbox.</div>
        `
      },
      {
        id: "tw-responsive",
        icon: "📱",
        title: "Responsive dizayn",
        content: `
<h3>Tailwind Responsive tizimi</h3>
<p>Tailwind "Mobile First" yondashuvini ishlatadi. Asosiy klasslar barcha o'lchamlar uchun ishlaydi, prefikslar orqali kattaroq ekranlar uchun qo'shiladi.</p>

<h3>Breakpoint prefikslari</h3>
<pre><code class="language-html">&lt;!-- Breakpoint shkala --&gt;
sm:   640px dan katta
md:   768px dan katta
lg:   1024px dan katta
xl:   1280px dan katta
2xl:  1536px dan katta</code><span class="code-lang">html</span></pre>

<h3>Asosiy misol</h3>
<pre><code class="language-html">&lt;!-- Mobil: 1 ustun, Planshet: 2 ustun, Kompyuter: 3 ustun --&gt;
&lt;div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"&gt;
  &lt;div&gt;Karta 1&lt;/div&gt;
  &lt;div&gt;Karta 2&lt;/div&gt;
  &lt;div&gt;Karta 3&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Matn o'lchami responsive --&gt;
&lt;h1 class="text-2xl md:text-4xl lg:text-6xl font-bold"&gt;
  Responsive sarlavha
&lt;/h1&gt;

&lt;!-- Ko'rinish/yashirish --&gt;
&lt;div class="hidden md:block"&gt;
  Faqat md va undan kattada ko'rinadi
&lt;/div&gt;

&lt;div class="block md:hidden"&gt;
  Faqat mobildan ko'rinadi
&lt;/div&gt;</code><span class="code-lang">html</span></pre>

<h3>Responsive navigatsiya</h3>
<pre><code class="language-html">&lt;nav class="flex flex-col md:flex-row items-start md:items-center
            justify-between p-4 bg-white"&gt;
  &lt;span class="text-xl font-bold"&gt;Logo&lt;/span&gt;

  &lt;!-- Mobilda vertikal, kattada gorizontal --&gt;
  &lt;ul class="flex flex-col md:flex-row gap-2 md:gap-6 mt-4 md:mt-0"&gt;
    &lt;li&gt;&lt;a href="#"&gt;Bosh sahifa&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Xizmatlar&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Aloqa&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</code><span class="code-lang">html</span></pre>

<h3>Responsive padding va margin</h3>
<pre><code class="language-html">&lt;div class="p-4 md:p-8 lg:p-16"&gt;
  &lt;!-- Mobil: 16px, Planshet: 32px, Kompyuter: 64px --&gt;
  Kontent
&lt;/div&gt;</code><span class="code-lang">html</span></pre>

<div class="info-box">📱 Mobile First: avval kichik ekran uchun yozing (prefikssiz), keyin katta ekranlar uchun prefikslar bilan kengaytiring. Bu eng to'g'ri yondashuv!</div>
        `
      },
      {
        id: "tw-hover-focus",
        icon: "🖱️",
        title: "Hover, Focus va holat klasslar",
        content: `
<h3>Interaktiv holat klasslar</h3>
<p>Tailwind hover, focus, active va boshqa holatlarga prefikslar orqali CSS yozmay uslub berish imkonini beradi.</p>

<h3>hover:</h3>
<pre><code class="language-html">&lt;!-- Hover holati --&gt;
&lt;button class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"&gt;
  Tugma
&lt;/button&gt;

&lt;a class="text-blue-500 hover:text-blue-800 hover:underline"&gt;
  Havola
&lt;/a&gt;

&lt;div class="bg-white hover:bg-gray-50 hover:shadow-lg transition"&gt;
  Karta
&lt;/div&gt;</code><span class="code-lang">html</span></pre>

<h3>focus:</h3>
<pre><code class="language-html">&lt;input
  class="border border-gray-300 rounded px-3 py-2
         focus:outline-none focus:border-blue-500
         focus:ring-2 focus:ring-blue-200"
  placeholder="Email kiriting"
/&gt;

&lt;button
  class="bg-green-500 text-white px-4 py-2 rounded
         focus:outline-none focus:ring-4 focus:ring-green-300"
&gt;
  Yuborish
&lt;/button&gt;</code><span class="code-lang">html</span></pre>

<h3>active: va disabled:</h3>
<pre><code class="language-html">&lt;button class="bg-blue-500 active:bg-blue-900 text-white px-4 py-2 rounded"&gt;
  Bosing (active holat)
&lt;/button&gt;

&lt;button
  class="bg-gray-300 text-gray-500 px-4 py-2 rounded cursor-not-allowed"
  disabled
&gt;
  O'chirilgan
&lt;/button&gt;</code><span class="code-lang">html</span></pre>

<h3>transition va animatsiya</h3>
<pre><code class="language-html">&lt;!-- Silliq o'tish --&gt;
&lt;button class="bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out
               text-white px-4 py-2 rounded transform hover:scale-105"&gt;
  Animatsiya
&lt;/button&gt;

&lt;!-- Barcha tranzisiyalar --&gt;
&lt;div class="transition-all duration-300"&gt;...&lt;/div&gt;

&lt;!-- Faqat rang --&gt;
&lt;div class="transition-colors duration-200"&gt;...&lt;/div&gt;

&lt;!-- Faqat transform --&gt;
&lt;div class="transition-transform hover:scale-110 hover:rotate-3"&gt;...&lt;/div&gt;</code><span class="code-lang">html</span></pre>

<h3>group hover</h3>
<pre><code class="language-html">&lt;!-- Ota element hover bo'lganda farzandni o'zgartirish --&gt;
&lt;div class="group bg-white rounded-xl p-6 hover:bg-blue-600 transition"&gt;
  &lt;h3 class="text-gray-800 group-hover:text-white font-bold"&gt;Sarlavha&lt;/h3&gt;
  &lt;p class="text-gray-500 group-hover:text-blue-200"&gt;Tavsif...&lt;/p&gt;
&lt;/div&gt;</code><span class="code-lang">html</span></pre>

<div class="info-box">✨ <code>transition duration-300</code> ko'pgina holatlarda silliq ko'rinish beradi. Tailwind animatsiyalar uchun <code>animate-spin</code>, <code>animate-pulse</code>, <code>animate-bounce</code> klasslarini ham beradi.</div>
        `
      },
      {
        id: "tw-chegara-soya",
        icon: "🔲",
        title: "Chegara va soya",
        content: `
<h3>Chegara (Border)</h3>
<pre><code class="language-html">&lt;!-- Chegara qalinligi --&gt;
&lt;div class="border"&gt;1px chegara&lt;/div&gt;
&lt;div class="border-2"&gt;2px chegara&lt;/div&gt;
&lt;div class="border-4"&gt;4px chegara&lt;/div&gt;
&lt;div class="border-8"&gt;8px chegara&lt;/div&gt;

&lt;!-- Faqat bitta tomon --&gt;
&lt;div class="border-t"&gt;Faqat yuqori&lt;/div&gt;
&lt;div class="border-b-2"&gt;Pastdan 2px&lt;/div&gt;
&lt;div class="border-l-4 border-blue-500"&gt;Chapdan 4px ko'k&lt;/div&gt;

&lt;!-- Chegara rangi --&gt;
&lt;div class="border-2 border-red-500"&gt;Qizil chegara&lt;/div&gt;
&lt;div class="border border-gray-200"&gt;Och kulrang chegara&lt;/div&gt;

&lt;!-- Chegara uslubi --&gt;
&lt;div class="border-2 border-dashed border-blue-400"&gt;Nuqtali&lt;/div&gt;
&lt;div class="border-2 border-dotted"&gt;Puentir&lt;/div&gt;</code><span class="code-lang">html</span></pre>

<h3>Border Radius (Yumaloq burchaklar)</h3>
<pre><code class="language-html">&lt;div class="rounded-none"&gt;0px&lt;/div&gt;
&lt;div class="rounded-sm"&gt;2px&lt;/div&gt;
&lt;div class="rounded"&gt;4px&lt;/div&gt;
&lt;div class="rounded-md"&gt;6px&lt;/div&gt;
&lt;div class="rounded-lg"&gt;8px&lt;/div&gt;
&lt;div class="rounded-xl"&gt;12px&lt;/div&gt;
&lt;div class="rounded-2xl"&gt;16px&lt;/div&gt;
&lt;div class="rounded-3xl"&gt;24px&lt;/div&gt;
&lt;div class="rounded-full"&gt;50% (aylana)&lt;/div&gt;

&lt;!-- Alohida burchaklar --&gt;
&lt;div class="rounded-t-xl"&gt;Yuqori burchaklar&lt;/div&gt;
&lt;div class="rounded-br-2xl"&gt;O'ng pastki burchak&lt;/div&gt;</code><span class="code-lang">html</span></pre>

<h3>Box Shadow (Soya)</h3>
<pre><code class="language-html">&lt;div class="shadow-sm"&gt;Kichik soya&lt;/div&gt;
&lt;div class="shadow"&gt;Oddiy soya&lt;/div&gt;
&lt;div class="shadow-md"&gt;O'rtacha soya&lt;/div&gt;
&lt;div class="shadow-lg"&gt;Katta soya&lt;/div&gt;
&lt;div class="shadow-xl"&gt;Juda katta soya&lt;/div&gt;
&lt;div class="shadow-2xl"&gt;Eng katta soya&lt;/div&gt;
&lt;div class="shadow-none"&gt;Soyasiz&lt;/div&gt;

&lt;!-- Ichki soya --&gt;
&lt;div class="shadow-inner"&gt;Ichki soya&lt;/div&gt;</code><span class="code-lang">html</span></pre>

<h3>Karta komponenti misoli</h3>
<pre><code class="language-html">&lt;div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100
            hover:shadow-xl transition-shadow duration-300"&gt;
  &lt;div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4"&gt;
    &lt;span class="text-blue-600 text-xl"&gt;⭐&lt;/span&gt;
  &lt;/div&gt;
  &lt;h3 class="font-bold text-gray-800 text-lg mb-2"&gt;Xizmat nomi&lt;/h3&gt;
  &lt;p class="text-gray-500 text-sm"&gt;Xizmat tavsifi bu yerda...&lt;/p&gt;
&lt;/div&gt;</code><span class="code-lang">html</span></pre>

<div class="info-box">🎨 Zamonaviy dizaynda <code>rounded-xl shadow-md</code> kombinatsiyasi eng ko'p ishlatiladigan karta uslubi. <code>hover:shadow-xl transition</code> qo'shib, silliq interaktivlik bering.</div>
        `
      },
      {
        id: "tw-dark-mode",
        icon: "🌙",
        title: "Dark Mode",
        content: `
<h3>Tailwind Dark Mode</h3>
<p>Tailwind CSS o'rnatilgan dark mode qo'llab-quvvatlashiga ega. <code>dark:</code> prefiksi yordamida tun rejimi uchun uslublar beriladi.</p>

<h3>Sozlash</h3>
<pre><code class="language-javascript">// tailwind.config.js
module.exports = {
  darkMode: 'class', // yoki 'media'
  // ...
}</code><span class="code-lang">javascript</span></pre>

<h3>Ikki rejim: class va media</h3>
<pre><code class="language-html">&lt;!-- 'media' rejim: OS sozlamasiga qarab avtomatik --&gt;
&lt;!-- 'class' rejim: &lt;html&gt; ga 'dark' klassi qo'shilganda ishlaydi --&gt;</code><span class="code-lang">html</span></pre>

<h3>dark: prefiksi bilan uslub berish</h3>
<pre><code class="language-html">&lt;div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-8"&gt;
  &lt;h1 class="text-2xl font-bold text-gray-800 dark:text-white"&gt;
    Sarlavha
  &lt;/h1&gt;
  &lt;p class="text-gray-600 dark:text-gray-300"&gt;
    Kunduz va tun rejimida ishlaydi.
  &lt;/p&gt;
  &lt;button class="bg-blue-600 dark:bg-blue-400 text-white px-4 py-2 rounded"&gt;
    Tugma
  &lt;/button&gt;
&lt;/div&gt;</code><span class="code-lang">html</span></pre>

<h3>JavaScript bilan rejim almashtirish</h3>
<pre><code class="language-javascript">// Rejim almashtiruvi
const tugma = document.getElementById('tema-tugma');

tugma.addEventListener('click', () =&gt; {
  document.documentElement.classList.toggle('dark');

  // localStorage da saqlash
  const tunRejimi = document.documentElement.classList.contains('dark');
  localStorage.setItem('tema', tunRejimi ? 'tun' : 'kunduz');
});

// Sahifa yuklanganda saqlangan rejimni yuklash
const saqlangan = localStorage.getItem('tema');
if (saqlangan === 'tun') {
  document.documentElement.classList.add('dark');
}</code><span class="code-lang">javascript</span></pre>

<h3>To'liq dark mode misoli</h3>
<pre><code class="language-html">&lt;body class="bg-gray-50 dark:bg-gray-900 transition-colors duration-300"&gt;
  &lt;nav class="bg-white dark:bg-gray-800 shadow border-b border-gray-200 dark:border-gray-700"&gt;
    &lt;div class="flex items-center justify-between px-6 py-4"&gt;
      &lt;span class="font-bold text-gray-800 dark:text-white"&gt;Logo&lt;/span&gt;
      &lt;button id="tema-tugma"
              class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white"&gt;
        🌙
      &lt;/button&gt;
    &lt;/div&gt;
  &lt;/nav&gt;
&lt;/body&gt;</code><span class="code-lang">html</span></pre>

<div class="info-box">🌙 Dark mode foydalanuvchi tajribasini yaxshilaydi va ko'zni charchashdan saqlaydi. <code>transition-colors duration-300</code> qo'shib, rejim almashishini silliq qiling.</div>
        `
      },
      {
        id: "tw-komponentlar",
        icon: "🧩",
        title: "Komponentlar yaratish",
        content: `
<h3>Tailwind bilan komponentlar</h3>
<p>Tailwind utility klasslar bilan ishlash dastlab ko'p ko'rinishi mumkin. Ammo ularni komponentlarga ajratish, @apply ishlatish yoki JavaScript asosidagi frameworklarda class birlashtirish orqali tartibli kod yoziladi.</p>

<h3>Tugma komponenti</h3>
<pre><code class="language-html">&lt;!-- Asosiy tugma --&gt;
&lt;button class="bg-blue-600 hover:bg-blue-700 active:bg-blue-800
               text-white font-semibold px-6 py-3 rounded-xl
               transition duration-200 shadow-md hover:shadow-lg
               focus:outline-none focus:ring-2 focus:ring-blue-400"&gt;
  Asosiy tugma
&lt;/button&gt;

&lt;!-- Ikkinchi darajali tugma --&gt;
&lt;button class="border-2 border-blue-600 text-blue-600 hover:bg-blue-600
               hover:text-white font-semibold px-6 py-3 rounded-xl
               transition duration-200"&gt;
  Ikkinchi tugma
&lt;/button&gt;

&lt;!-- Xavfli tugma --&gt;
&lt;button class="bg-red-600 hover:bg-red-700 text-white font-semibold
               px-6 py-3 rounded-xl transition duration-200"&gt;
  O'chirish
&lt;/button&gt;</code><span class="code-lang">html</span></pre>

<h3>Input komponenti</h3>
<pre><code class="language-html">&lt;div class="flex flex-col gap-1"&gt;
  &lt;label class="text-sm font-medium text-gray-700"&gt;
    Email manzil
  &lt;/label&gt;
  &lt;input
    type="email"
    placeholder="email@misol.uz"
    class="border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800
           focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100
           placeholder:text-gray-400 transition"
  /&gt;
  &lt;p class="text-xs text-gray-500"&gt;Haqiqiy email kiriting&lt;/p&gt;
&lt;/div&gt;</code><span class="code-lang">html</span></pre>

<h3>Xabar (Alert) komponenti</h3>
<pre><code class="language-html">&lt;!-- Muvaffaqiyat --&gt;
&lt;div class="flex items-center gap-3 bg-green-50 border border-green-200
            text-green-800 px-4 py-3 rounded-lg"&gt;
  &lt;span&gt;✅&lt;/span&gt;
  &lt;p class="text-sm font-medium"&gt;Muvaffaqiyatli saqlandi!&lt;/p&gt;
&lt;/div&gt;

&lt;!-- Xato --&gt;
&lt;div class="flex items-center gap-3 bg-red-50 border border-red-200
            text-red-800 px-4 py-3 rounded-lg"&gt;
  &lt;span&gt;❌&lt;/span&gt;
  &lt;p class="text-sm font-medium"&gt;Xatolik yuz berdi!&lt;/p&gt;
&lt;/div&gt;</code><span class="code-lang">html</span></pre>

<h3>@apply bilan CSS da saqlash</h3>
<pre><code class="language-css">/* styles.css */
@layer components {
  .btn-asosiy {
    @apply bg-blue-600 hover:bg-blue-700 text-white
           font-semibold px-6 py-3 rounded-xl
           transition duration-200;
  }

  .karta {
    @apply bg-white rounded-2xl shadow-md p-6
           border border-gray-100 hover:shadow-lg transition;
  }
}</code><span class="code-lang">css</span></pre>

<div class="info-box">🧩 Tailwind bilan React/Vue/Angular ishlashda har bir komponent alohida fayl bo'ladi — shu sababli uzun klasslar muammo tug'dirmaydi. <code>clsx</code> yoki <code>cn</code> kutubxonalari ham klasslarni boshqarishga yordam beradi.</div>
        `
      }
    ]
  }
};
