# معلوماتية حيوية وأكثر

موقع تعليمي لترجمة دروس المعلوماتية الحيوية (وحقول معلوماتية أخرى) إلى العربية، مبني بإطار [Astro](https://astro.build) ومستضاف على GitHub Pages.

## البنية

```
src/
  content/
    lessons/      # ملفات الدروس (Markdown + frontmatter)
    dictionary/    # ملفات القاموس (مصطلح إنجليزي + تعريف عربي)
    config.ts      # تعريف مخطط المجموعتين أعلاه
  layouts/
    BaseLayout.astro
  pages/
    index.astro          # الصفحة الرئيسية (Hero + DNA تفاعلي)
    lessons/index.astro  # قائمة الدروس
    lessons/[slug].astro # صفحة الدرس الفردي (مسار ديناميكي)
    dictionary.astro     # صفحة القاموس
    about.astro          # عن المشروع
  styles/
    global.css
.github/workflows/deploy.yml   # نشر تلقائي عبر GitHub Actions
```

## قبل الدفع إلى GitHub

في ملف `astro.config.mjs`، حدّث القيمتين التاليتين:

```js
site: 'https://YOUR_USERNAME.github.io',
base: '/REPO_NAME/',   // إذا كان الاسم USERNAME.github.io فقط، استخدم base: '/'
```

## أوامر سطر الأوامر (Command Line) للدفع من Google Drive إلى GitHub

1. افتح الطرفية (Terminal) داخل مجلد المشروع على Google Drive (أو بعد تنزيله محليًا إذا كان الدفع مباشرة من Drive غير مدعوم في بيئتك):

```bash
cd path/to/bioinfo-arabic
```

2. تهيئة مستودع Git جديد (مرة واحدة فقط):

```bash
git init
git branch -M main
```

3. إضافة كل الملفات وأول Commit:

```bash
git add .
git commit -m "الإصدار الأول: الصفحة الرئيسية والدروس والقاموس"
```

4. إنشاء مستودع جديد على GitHub (عبر الموقع أو GitHub CLI)، ثم ربطه:

```bash
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

5. تفعيل GitHub Pages:
   - اذهب إلى **Settings → Pages** في مستودعك على GitHub.
   - اختر **Source: GitHub Actions**.
   - عند أول Push، سيعمل الملف `.github/workflows/deploy.yml` تلقائيًا لبناء الموقع ونشره.

6. لأي تعديل لاحق:

```bash
git add .
git commit -m "وصف التعديل"
git push
```

## التطوير محليًا (اختياري قبل النشر)

```bash
npm install
npm run dev       # تشغيل محلي على http://localhost:4321
npm run build     # بناء نسخة الإنتاج في dist/
npm run preview   # معاينة نسخة الإنتاج محليًا
```

## ملاحظة عن العمل من Google Drive

Google Drive لا يُعامل كمستودع Git مباشرة (لا يدعم `.git` بشكل موثوق عبر المزامنة السحابية).
الأسلوب الموصى به:
- استخدم Drive كنسخة احتياطية / مساحة تحرير للملفات (Markdown، الصور، إلخ).
- زامن أو انسخ نسخة العمل الفعلية إلى مجلد محلي على جهازك لتنفيذ أوامر `git` فيه.
- بدلاً من ذلك، يمكنك استخدام إضافة "Google Drive for Desktop" لجعل مجلد Drive يظهر كمسار محلي عادي (`~/Google Drive/bioinfo-arabic`) وتشغيل أوامر Git من داخله مباشرة — هذا يعمل بشكل عام، لكن تجنب فتح الموقع في محررين متزامنين في نفس الوقت لمنع تعارض الملفات.
