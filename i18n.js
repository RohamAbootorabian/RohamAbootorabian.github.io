/* Translation strings.
   Keys map to data-i18n attributes in index.html:
     data-i18n         -> textContent
     data-i18n-html    -> innerHTML (for strings containing markup)
     data-i18n-aria    -> aria-label
     data-i18n-alt     -> alt
     data-i18n-content -> content (meta tags)
   Every string here is authored by hand — nothing is machine-translated.
   Product names, languages, and libraries stay in Latin script, which is
   standard practice in Persian technical writing. */

const TRANSLATIONS = {
  en: {
    'meta.title': 'Roham Abootorabian — Python Developer',
    'meta.desc': 'Roham Abootorabian — Computer Science student at Amirkabir University of Technology. Python developer building desktop apps, network tools, and database-driven software.',

    'skip': 'Skip to content',
    'nav.top': 'Back to top',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.work': 'Projects',
    'nav.contact': 'Contact',

    'lang.label': 'Fa',
    'lang.switch': 'Switch to Persian',
    'theme.toDark': 'Switch to dark theme',
    'theme.toLight': 'Switch to light theme',

    'hero.eyebrow': 'Open to software engineering internships',
    'hero.title': 'Hi, I\'m <span class="accent">Roham</span>.<br>I build software with Python.',
    'hero.lead': 'Third-year Computer Science student at Amirkabir University of Technology (Tehran Polytechnic), GPA 18/20. I work in Python and object-oriented design — building real-time networked apps, desktop GUIs, and database-driven tools.',
    'hero.cta1': 'See my projects',
    'hero.cta2': 'Get in touch',

    'about.title': 'About',
    'about.p1': 'I\'m a Computer Science student in Tehran, focused on Python and object-oriented programming. Most of what I\'ve built so far came out of university coursework and personal curiosity: a real-time messenger using sockets and threading, a Unix-like virtual file system, an ATM simulator with a bilingual interface, and a library management system written in C.',
    'about.p2': 'I\'m comfortable across the stack a small project needs — designing the database layer, wiring up the logic, and building the interface people actually touch. I\'m currently looking for an internship where I can work on real systems alongside people who\'ve built them before.',
    'about.eduTitle': 'Education',
    'about.degree': 'BSc, Computer Science',
    'about.school': 'Amirkabir University of Technology<br>(Tehran Polytechnic)',
    'about.eduMeta': '2024 – present · GPA 18/20',
    'about.courseTitle': 'Coursework',
    'about.langTitle': 'Languages',

    'course.ds': 'Data Structures',
    'course.algo': 'Algorithm Design',
    'course.ap': 'Advanced Programming',
    'course.sd': 'Software Design',
    'course.ai': 'Artificial Intelligence',
    'course.cs': 'Computer Systems',

    'lang.fa': 'Persian — native',
    'lang.en': 'English — professional',

    'skills.title': 'Skills',
    'skills.langs': 'Languages',
    'skills.frameworks': 'Frameworks & libraries',
    'skills.web': 'Web & front-end',
    'skills.db': 'Databases',
    'skills.tools': 'Tools & concepts',
    'web.responsive': 'Responsive design',
    'web.a11y': 'Accessibility (WCAG)',
    'web.rtl': 'RTL & localization',
    'web.tokens': 'Design systems',
    'skill.oop': 'OOP',
    'skill.socket': 'Socket programming',
    'skill.thread': 'Threading',
    'skill.ai': 'AI / Machine learning',

    'work.title': 'Projects',
    'work.view': 'View on GitHub',
    'work.live': 'Live site',
    'work.source': 'Source',

    'p5.meta': 'Personal project · 2026',
    'p5.desc': 'This site. Built from scratch with plain HTML, CSS and JavaScript — no framework and no build step. Fully bilingual in English and Persian with a right-to-left layout flip, light and dark themes, a token-based design system, and hand-drawn SVG artwork. Every colour pair meets <strong>WCAG AA contrast</strong> and the whole site weighs about 100&nbsp;KB.',
    'p5.aria': 'View the portfolio source on GitHub (opens in a new tab)',
    'p5.ariaLive': 'Open the live portfolio site (opens in a new tab)',
    'p5.alt': 'Personal Portfolio Website: a bilingual portfolio built with plain HTML, CSS and JavaScript. Features listed are English and Persian with RTL, light and dark themes, WCAG AA accessibility, and no frameworks, shown beside a browser split between a light left-to-right view and a dark right-to-left view.',

    'tag.sockets': 'Sockets',
    'tag.threading': 'Threading',
    'tag.tree': 'Tree structures',
    'tag.gui': 'GUI design',
    'tag.validation': 'Form validation',
    'tag.fileio': 'File I/O',
    'tag.roles': 'Role-based access',

    'p1.meta': 'Team project · Amirkabir University · 2024',
    'p1.desc': 'A real-time messaging app in Python combining socket programming, threading, a PyQt5 interface, and SQLite storage — with user authentication, concurrent chat, and persistent message history. <strong>My part:</strong> designing and implementing the <code>DatabaseManager</code> layer for users and messages, plus the UI.',
    'p1.aria': 'View Simple Messenger on GitHub (opens in a new tab)',
    'p1.alt': 'Simple Messenger: a real-time messaging app built with Python and PyQt. Features listed are sign up and log in, real-time messaging, message history, and modular architecture, shown beside a mockup of the chat interface.',

    'p2.meta': 'Course project · Amirkabir University · 2024',
    'p2.desc': 'A Unix-like virtual file system with a command-line interface, built in Python around four core classes (<code>VirtualFileSystem</code>, <code>Directory</code>, <code>File</code>, <code>CommandPrompt</code>). Supports <code>mkdir</code>, <code>rm</code>, <code>cp</code>, <code>mv</code>, <code>cd</code>, <code>ls</code> and more, with absolute and relative path resolution and in-place file editing.',
    'p2.aria': 'View Virtual File System on GitHub (opens in a new tab)',
    'p2.alt': 'Virtual File System: a Unix-like file system with a command-line interface. Features listed are Unix-style commands, directory tree structure, absolute and relative paths, and in-place file editing, shown beside a terminal window running mkdir, cd, touch, ls and cat.',

    'p3.meta': 'Personal project · 2024',
    'p3.desc': 'An ATM simulator built with Python and PyQt6, featuring a bilingual Persian/English interface. Implements balance enquiry, account-to-account transfers with form validation on card number and available funds, PIN changes, and cash withdrawal.',
    'p3.aria': 'View SmartBankATM on GitHub (opens in a new tab)',
    'p3.alt': 'SmartBankATM: a desktop ATM simulator built with Python and PyQt6, in Persian and English. Features listed are balance enquiry, account transfers, form validation, and PIN change and withdrawal, shown beside an ATM screen mockup.',

    'p4.meta': 'Course project · Amirkabir University · 2024',
    'p4.desc': 'A role-based library system written in C. Librarians can add, edit, delete and browse books and approve or reject borrow requests; students can search the catalogue and submit requests. All data persists to text files through a custom file I/O layer.',
    'p4.aria': 'View Library Management System on GitHub (opens in a new tab)',
    'p4.alt': 'Library Management System: a role-based library system written in C. Features listed are librarian and student roles, add, edit and delete books, borrow request approval, and persistent file storage, shown beside a book catalogue mockup.',

    'contact.title': 'Get in touch',
    'contact.lead': 'I\'m looking for a software engineering internship and I\'m happy to talk about any of the projects above. Email is the best way to reach me.',
    'contact.location': 'Based in Tehran, Iran',
    'social.gh': 'GitHub profile (opens in a new tab)',
    'social.li': 'LinkedIn profile (opens in a new tab)',
    'social.tg': 'Telegram (opens in a new tab)',
    'social.tgLabel': 'Telegram',

    'footer': '&copy; <span id="year"></span> Roham Abootorabian. Built from scratch, no frameworks.'
  },

  fa: {
    'meta.title': 'روهام ابوترابیان — توسعه‌دهنده‌ی Python',
    'meta.desc': 'روهام ابوترابیان — دانشجوی علوم کامپیوتر دانشگاه صنعتی امیرکبیر. توسعه‌دهنده‌ی Python با تمرکز بر برنامه‌های دسکتاپ، ابزارهای شبکه و نرم‌افزارهای مبتنی بر پایگاه‌داده.',

    'skip': 'رفتن به محتوا',
    'nav.top': 'بازگشت به بالا',
    'nav.about': 'درباره من',
    'nav.skills': 'مهارت‌ها',
    'nav.work': 'پروژه‌ها',
    'nav.contact': 'تماس با من',

    'lang.label': 'En',
    'lang.switch': 'تغییر زبان به انگلیسی',
    'theme.toDark': 'تغییر به حالت تاریک',
    'theme.toLight': 'تغییر به حالت روشن',

    'hero.eyebrow': 'آماده‌ی همکاری به‌عنوان کارآموز مهندسی نرم‌افزار',
    'hero.title': 'سلام، من <span class="accent">روهام</span> هستم.<br>با Python نرم‌افزار می‌سازم.',
    'hero.lead': 'دانشجوی سال سوم علوم کامپیوتر دانشگاه صنعتی امیرکبیر (پلی‌تکنیک تهران) با معدل ۱۸. با Python و طراحی شیءگرا کار می‌کنم و برنامه‌های شبکه‌ای بلادرنگ، رابط‌های گرافیکی دسکتاپ و ابزارهای مبتنی بر پایگاه‌داده می‌سازم.',
    'hero.cta1': 'دیدن پروژه‌ها',
    'hero.cta2': 'تماس با من',

    'about.title': 'درباره‌ی من',
    'about.p1': 'دانشجوی علوم کامپیوتر در تهران هستم و تمرکزم روی Python و برنامه‌نویسی شیءگراست. بیشتر چیزهایی که تا امروز ساخته‌ام از دل پروژه‌های درسی و کنجکاوی شخصی بیرون آمده‌اند: یک پیام‌رسان بلادرنگ با سوکت و Threading، یک سیستم فایل مجازی شبیه به یونیکس، یک شبیه‌ساز خودپرداز با رابط دوزبانه، و یک سیستم مدیریت کتابخانه به زبان C.',
    'about.p2': 'با همه‌ی لایه‌هایی که یک پروژه‌ی کوچک لازم دارد راحتم — طراحی لایه‌ی پایگاه‌داده، پیاده‌سازی منطق برنامه، و ساخت رابطی که کاربر واقعاً با آن کار می‌کند. در حال حاضر دنبال یک فرصت کارآموزی هستم تا روی سیستم‌های واقعی و در کنار افرادی که پیش‌تر آن‌ها را ساخته‌اند کار کنم.',
    'about.eduTitle': 'تحصیلات',
    'about.degree': 'کارشناسی علوم کامپیوتر',
    'about.school': 'دانشگاه صنعتی امیرکبیر<br>(پلی‌تکنیک تهران)',
    'about.eduMeta': '۱۴۰۳ تا کنون · معدل ۱۸ از ۲۰',
    'about.courseTitle': 'دروس گذرانده‌شده',
    'about.langTitle': 'زبان‌ها',

    'course.ds': 'ساختمان داده',
    'course.algo': 'طراحی الگوریتم',
    'course.ap': 'برنامه‌نویسی پیشرفته',
    'course.sd': 'طراحی نرم‌افزار',
    'course.ai': 'هوش مصنوعی',
    'course.cs': 'اصول سیستم‌های کامپیوتری',

    'lang.fa': 'فارسی — زبان مادری',
    'lang.en': 'انگلیسی — سطح حرفه‌ای',

    'skills.title': 'مهارت‌ها',
    'skills.langs': 'زبان‌های برنامه‌نویسی',
    'skills.frameworks': 'فریم‌ورک‌ها و کتابخانه‌ها',
    'skills.web': 'وب و فرانت‌اند',
    'skills.db': 'پایگاه‌داده',
    'skills.tools': 'ابزارها و مفاهیم',
    'web.responsive': 'طراحی واکنش‌گرا',
    'web.a11y': 'دسترس‌پذیری (WCAG)',
    'web.rtl': 'راست‌چین و چندزبانه',
    'web.tokens': 'سیستم طراحی',
    'skill.oop': 'برنامه‌نویسی شیءگرا',
    'skill.socket': 'سوکت‌نویسی',
    'skill.thread': 'Threading',
    'skill.ai': 'هوش مصنوعی / یادگیری ماشین',

    'work.title': 'پروژه‌ها',
    'work.view': 'مشاهده در GitHub',
    'work.live': 'مشاهده‌ی سایت',
    'work.source': 'سورس‌کد',

    'p5.meta': 'پروژه‌ی شخصی · ۱۴۰۵',
    'p5.desc': 'همین سایت. از صفر با HTML، CSS و JavaScript خالص ساخته شده — بدون فریم‌ورک و بدون مرحله‌ی build. کاملاً دوزبانه (فارسی و انگلیسی) با چیدمان راست‌چین، تم روشن و تاریک، سیستم طراحی مبتنی بر توکن، و تصاویر SVG دست‌ساز. همه‌ی ترکیب‌های رنگی استاندارد <strong>کنتراست WCAG AA</strong> را رعایت می‌کنند و حجم کل سایت حدود ۱۰۰ کیلوبایت است.',
    'p5.aria': 'مشاهده‌ی سورس‌کد سایت در GitHub (در تب جدید باز می‌شود)',
    'p5.ariaLive': 'باز کردن نسخه‌ی زنده‌ی سایت (در تب جدید باز می‌شود)',
    'p5.alt': 'وب‌سایت شخصی: یک نمونه‌کار دوزبانه ساخته‌شده با HTML، CSS و JavaScript خالص. قابلیت‌های فهرست‌شده: فارسی و انگلیسی با چیدمان راست‌چین، تم روشن و تاریک، دسترس‌پذیری WCAG AA و بدون فریم‌ورک، در کنار مرورگری که نیمه‌ی روشن چپ‌چین و نیمه‌ی تاریک راست‌چین را نشان می‌دهد.',

    'tag.sockets': 'سوکت',
    'tag.threading': 'Threading',
    'tag.tree': 'ساختار درختی',
    'tag.gui': 'طراحی رابط گرافیکی',
    'tag.validation': 'اعتبارسنجی فرم',
    'tag.fileio': 'مدیریت فایل',
    'tag.roles': 'دسترسی مبتنی بر نقش',

    'p1.meta': 'پروژه‌ی تیمی · دانشگاه صنعتی امیرکبیر · ۱۴۰۳',
    'p1.desc': 'یک اپلیکیشن پیام‌رسان بلادرنگ با Python، ترکیبی از سوکت‌نویسی، Threading، رابط گرافیکی PyQt5 و پایگاه‌داده‌ی SQLite — شامل احراز هویت کاربران، گفت‌وگوی هم‌زمان و ذخیره‌ی تاریخچه‌ی پیام‌ها. <strong>نقش من:</strong> طراحی و پیاده‌سازی لایه‌ی <code>DatabaseManager</code> برای مدیریت کاربران و پیام‌ها، و توسعه‌ی رابط کاربری.',
    'p1.aria': 'مشاهده‌ی Simple Messenger در GitHub (در تب جدید باز می‌شود)',
    'p1.alt': 'Simple Messenger: اپلیکیشن پیام‌رسان بلادرنگ ساخته‌شده با Python و PyQt. قابلیت‌های فهرست‌شده: ثبت‌نام و ورود، پیام‌رسانی بلادرنگ، تاریخچه‌ی پیام‌ها و معماری ماژولار، در کنار نمایی از رابط گفت‌وگو.',

    'p2.meta': 'پروژه‌ی درسی · دانشگاه صنعتی امیرکبیر · ۱۴۰۳',
    'p2.desc': 'یک سیستم فایل مجازی شبیه به یونیکس با رابط خط فرمان، نوشته‌شده با Python بر پایه‌ی چهار کلاس اصلی (<code>VirtualFileSystem</code>، <code>Directory</code>، <code>File</code> و <code>CommandPrompt</code>). از دستورهای <code>mkdir</code>، <code>rm</code>، <code>cp</code>، <code>mv</code>، <code>cd</code>، <code>ls</code> و بیشتر پشتیبانی می‌کند، همراه با پردازش مسیرهای مطلق و نسبی و ویرایش محتوای فایل‌ها.',
    'p2.aria': 'مشاهده‌ی Virtual File System در GitHub (در تب جدید باز می‌شود)',
    'p2.alt': 'Virtual File System: سیستم فایلی شبیه به یونیکس با رابط خط فرمان. قابلیت‌های فهرست‌شده: دستورهای یونیکسی، ساختار درختی دایرکتوری‌ها، مسیرهای مطلق و نسبی و ویرایش فایل، در کنار پنجره‌ی ترمینالی که دستورهای mkdir، cd، touch، ls و cat را اجرا می‌کند.',

    'p3.meta': 'پروژه‌ی شخصی · ۱۴۰۳',
    'p3.desc': 'یک شبیه‌ساز دستگاه خودپرداز ساخته‌شده با Python و PyQt6، با رابط کاربری دوزبانه‌ی فارسی و انگلیسی. شامل مشاهده‌ی موجودی، انتقال وجه بین حساب‌ها همراه با اعتبارسنجی شماره کارت و موجودی، تغییر رمز عبور و برداشت وجه.',
    'p3.aria': 'مشاهده‌ی SmartBankATM در GitHub (در تب جدید باز می‌شود)',
    'p3.alt': 'SmartBankATM: شبیه‌ساز خودپرداز دسکتاپ ساخته‌شده با Python و PyQt6، به فارسی و انگلیسی. قابلیت‌های فهرست‌شده: مشاهده‌ی موجودی، انتقال وجه، اعتبارسنجی فرم و تغییر رمز و برداشت وجه، در کنار نمایی از صفحه‌ی خودپرداز.',

    'p4.meta': 'پروژه‌ی درسی · دانشگاه صنعتی امیرکبیر · ۱۴۰۳',
    'p4.desc': 'یک سیستم مدیریت کتابخانه به زبان C با معماری مبتنی بر نقش کاربری. کتابداران می‌توانند کتاب‌ها را اضافه، ویرایش، حذف و مرور کنند و درخواست‌های امانت را تأیید یا رد کنند؛ دانشجویان هم می‌توانند در فهرست جست‌وجو کرده و درخواست امانت ثبت کنند. همه‌ی داده‌ها از طریق یک لایه‌ی مدیریت فایل در فایل‌های متنی ذخیره می‌شوند.',
    'p4.aria': 'مشاهده‌ی Library Management System در GitHub (در تب جدید باز می‌شود)',
    'p4.alt': 'Library Management System: سیستم مدیریت کتابخانه‌ی مبتنی بر نقش، نوشته‌شده به زبان C. قابلیت‌های فهرست‌شده: نقش‌های کتابدار و دانشجو، افزودن و ویرایش و حذف کتاب، تأیید درخواست امانت و ذخیره‌سازی پایدار در فایل، در کنار نمایی از فهرست کتاب‌ها.',

    'contact.title': 'تماس با من',
    'contact.lead': 'دنبال یک فرصت کارآموزی در مهندسی نرم‌افزار هستم و با کمال میل درباره‌ی هر کدام از پروژه‌های بالا صحبت می‌کنم. بهترین راه ارتباط، ایمیل است.',
    'contact.location': 'ساکن تهران، ایران',
    'social.gh': 'پروفایل GitHub (در تب جدید باز می‌شود)',
    'social.li': 'پروفایل LinkedIn (در تب جدید باز می‌شود)',
    'social.tg': 'Telegram (در تب جدید باز می‌شود)',
    'social.tgLabel': 'Telegram',

    'footer': '&copy; <span id="year"></span> روهام ابوترابیان. ساخته‌شده از صفر، بدون فریم‌ورک.'
  }
};
