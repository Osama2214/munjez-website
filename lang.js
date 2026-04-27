(function () {
  var KEY = 'munjez-lang';
  var lang = localStorage.getItem(KEY) || 'en';

  var T = {
    en: {
      /* ── Shared ── */
      'back': 'Back to home',
      'contact-support': 'Contact Support',
      'support-cta': 'Still having trouble? Our support team is here to help.',
      /* ── Main nav ── */
      'nav-features': 'Features',
      'nav-screenshots': 'Screenshots',
      'nav-themes': 'Themes',
      'nav-support': 'Support',
      'nav-download': 'Download',
      'nav-dl': '',
      /* ── Hero ── */
      'hero-badge': 'Free Desktop App for Windows & Linux',
      'hero-sub': 'Your Ultimate Productivity App',
      'hero-tagline': 'Tasks, habits, focus sessions — all in one <strong>beautiful, offline-first</strong> desktop app. Built for people who want to get things done.',
      'hero-win': 'Download for Windows',
      'hero-linux': 'Download for Linux',
      /* ── Features ── */
      'feat-label': 'Features',
      'feat-title': 'Everything you need<br>to stay productive',
      'feat-desc': 'A complete productivity suite packed into one fast, beautiful desktop app.',
      'feat-tasks-title': 'Smart Task Management',
      'feat-tasks-desc': 'Organize tasks into folders with priorities and due dates. Set recurring tasks, attach voice notes, files, and images — every detail covered.',
      'feat-cal-title': 'Calendar Integration',
      'feat-cal-desc': 'View your tasks in Year, Month, Week, and Day views. Full Hijri calendar support with drag-and-drop task scheduling across dates.',
      'feat-focus-title': 'Focus Mode (Pomodoro)',
      'feat-focus-desc': 'Stay productive with timed focus sessions and breaks. Color-coded phases keep you in the right mindset — red for focus, green for short breaks, orange for long breaks.',
      'feat-habits-title': 'Habit Tracker',
      'feat-habits-desc': 'Build and maintain daily habits with visual streak tracking. Log each habit every day and watch your consistency grow over time.',
      'feat-stopwatch-title': 'Stopwatch',
      'feat-stopwatch-desc': 'Time anything with precision. Record laps, track splits, and stay on top of your sessions with a clean, distraction-free interface.',
      'feat-sounds-title': 'White Noise & Sounds',
      'feat-sounds-desc': 'Block out distractions with a library of ambient sounds. Mix rain, café, nature, and more to create your perfect focus environment.',
      /* ── Feature tags ── */
      'tag-folders': 'Folders', 'tag-priorities': 'Priorities', 'tag-recurring': 'Recurring Tasks',
      'tag-voice-notes': 'Voice Notes', 'tag-recycle-bin': 'Recycle Bin',
      'tag-4views': '4 Views', 'tag-hijri': 'Hijri Calendar', 'tag-drag-drop': 'Drag & Drop',
      'tag-pomodoro': 'Pomodoro Timer', 'tag-color-phases': 'Color Phases', 'tag-flip-clock': 'Flip Clock Widget',
      'tag-daily-streaks': 'Daily Streaks', 'tag-streak-cal': 'Streak Calendar', 'tag-color-tags': 'Color Tags',
      'tag-lap-times': 'Lap Times', 'tag-milliseconds': 'Milliseconds',
      'tag-rain': 'Rain', 'tag-cafe-noise': 'Café Noise', 'tag-nature': 'Nature Sounds', 'tag-volume-mix': 'Volume Mix',
      /* ── Screenshots ── */
      'ss-label': 'Screenshots',
      'ss-title': 'See it in action',
      'ss-desc': 'Explore every feature through real screenshots of the app.',
      'tab-tasks': 'Tasks',
      'tab-cal': 'Calendar',
      'tab-habits': 'Habits',
      'tab-focus': 'Focus',
      'tab-stopwatch': 'Stopwatch',
      /* ── Focus section ── */
      'focus-label': 'Focus Mode',
      'focus-title': 'Every phase has<br>its own energy',
      'focus-desc': 'Color-coded Pomodoro sessions that put you in the right mindset for every moment of your work day.',
      'focus-time': 'Focus Time',
      'focus-time-desc': 'Deep work mode — stay locked in',
      'short-break': 'Short Break',
      'short-break-desc': 'Quick reset — step away from the screen',
      'long-break': 'Long Break',
      'long-break-desc': "You've earned it — recharge fully",
      /* ── Themes ── */
      'themes-label': 'Themes',
      'themes-title': 'Make it yours',
      'themes-desc': 'Switch between beautiful color themes to match your mood and workflow.',
      /* ── Support (home) ── */
      'sup-label': 'Support',
      'sup-title': "Need help?<br>We've got you",
      'sup-desc': 'Report issues, ask for features, or reach out for help getting Munjez running smoothly.',
      'sup-main-title': 'Get help from the Munjez team',
      'sup-main-desc': 'If you hit a bug or have a feature suggestion that can make Munjez better, open a ticket on GitHub and include a screenshot when possible. We review issues regularly and prioritize fixes based on impact.',
      'sup-btn-bug': 'Report a bug',
      'sup-btn-issues': 'View all issues',
      'sup-btn-email': 'Email support',
      'sup-more': 'Open full Support Center',
      'sup-tips-title': 'Before opening a ticket',
      'sup-tip1': '<strong>Update first:</strong> install the latest release and retry the issue.',
      'sup-tip2': '<strong>Share context:</strong> include your Windows version and what you were doing.',
      'sup-tip3': '<strong>Add media:</strong> attach a screenshot or short clip for faster troubleshooting.',
      /* ── Download (home) ── */
      'dl-label': 'Download',
      'dl-title': 'Ready to get<br><span>things done?</span>',
      'dl-desc': 'Free, fast, and completely offline. No account. No subscription. Just you and your goals.',
      'dl-win': 'Download for Windows',
      'dl-win-sub': 'Windows 10 / 11',
      'dl-linux': 'Download for Linux',
      'dl-linux-sub': 'AppImage · DEB · RPM',
      'dl-no-account': 'No account needed',
      'dl-offline': 'Works offline',
      'dl-free': 'Free forever',
      'dl-count-label': 'downloads so far',
      /* ── Footer ── */
      'footer-privacy': 'Privacy Policy',
      'footer-support': 'Support Center',
      /* ── Windows install ── */
      'win-dl-started': 'Your download has started!',
      'win-hero-title': 'Installing <span>Munjez</span> on Windows',
      'win-hero-desc': "If your browser didn't start the download, click the button below. Once downloaded, run the installer.",
      'win-dl-btn': 'Download again',
      'win-warn': "If Windows shows a security warning — here's how to handle it",
      'win-sc1': 'Browser blocked the download',
      'win-sc2': 'SmartScreen warning appears',
      'win-sc3': "File blocked — can't run at all",
      'win-sc1-s1': 'In <strong>Chrome</strong>: open the downloads bar → click <strong>⋮</strong> next to the file → <strong>Keep</strong>',
      'win-sc1-s2': 'A second prompt appears — click <strong>Keep anyway</strong>',
      'win-sc1-s3': 'In <strong>Edge</strong>: click <strong>...</strong> → <strong>Keep</strong> → <strong>Show more</strong> → <strong>Keep anyway</strong>',
      'win-sc1-s4': 'Run the installer — Windows may then show a SmartScreen warning, follow <strong>Scenario 2</strong> below',
      'win-sc2-s1': 'Click <strong>More info</strong>',
      'win-sc2-s2': 'Click <strong>Run anyway</strong>',
      'win-sc3-s1': 'Right-click the file → click <strong>Show more options</strong>',
      'win-sc3-s2': 'Click <strong>Properties</strong>',
      'win-sc3-s3': 'Check <strong>Unblock</strong> → click <strong>OK</strong>',
      'win-sc3-s4': 'Run the installer again',
      /* ── Linux install ── */
      'lx-title-pre': 'Installing',
      'lx-title-mid': 'on Linux —',
      'lx-dl-started': 'Your download has started!',
      'lx-hero-desc': "If your browser didn't start the download, click the button below.",
      'lx-dl-btn': 'Download again',
      'lx-hint1': 'Download the file using the button above',
      'lx-hint2': 'Right-click the download folder → <span>Open Terminal Here</span>',
      'lx-hint3': 'Run the installation command below',
      'lx-install': 'Installation',
      'lx-trouble': 'Troubleshooting',
      /* ── Linux modal ── */
      'lm-title': 'Download for Linux',
      'lm-ver-label': 'Latest version:',
      'lm-deb-name': '.deb — Ubuntu / Debian',
      'lm-deb-desc': 'Recommended for Ubuntu, Debian, Linux Mint',
      'lm-rpm-name': '.rpm — Fedora / RHEL',
      'lm-rpm-desc': 'Recommended for Fedora, openSUSE, RHEL',
      'lm-img-name': '.AppImage — Universal',
      'lm-img-desc': 'Works on any Linux distro, no install needed',
      'lm-fallback-q': 'Not sure which to pick?',
      'lm-fallback-a': 'Browse all releases',
      'lm-back': 'Back',
      'lm-dl': 'Download',
      /* ── Support page ── */
      'sp-title': 'Support Center',
      'sp-desc': 'Need help with Munjez? Use one of the support channels below, then check quick fixes and FAQ.',
      'sp-contact-title': 'Contact options',
      'sp-contact-desc': 'Choose the fastest way based on your request.',
      'sp-btn-bug': 'Report a bug',
      'sp-btn-issues': 'View all issues',
      'sp-btn-email': 'Email support',
      'sp-tips-title': 'Before contacting support',
      'sp-tip1': 'Install the latest version and test again.',
      'sp-tip2': 'Include your Windows version and what happened step by step.',
      'sp-tip3': 'Add a screenshot or short video when possible.',
      'sp-tip4': 'Mention whether the issue is always reproducible or random.',
      'sp-faq': 'Quick FAQ',
      'sp-q1': 'Does Munjez require an internet connection?',
      'sp-a1': 'No. Munjez is designed to be offline-first and works locally on your device.',
      'sp-q2': 'How can I suggest a new feature?',
      'sp-a2': 'Open a GitHub issue and describe the feature, why it helps, and how you expect it to work.',
      'sp-q3': 'How long does a response usually take?',
      'sp-a3': 'Response times vary, but tickets with clear reproduction steps and media are handled faster.',
      'sp-q4': 'Why does Windows show a security warning when I install Munjez?',
      'sp-a4': 'Munjez is not yet signed with a paid code-signing certificate, so Windows SmartScreen flags it as an unrecognized app. This is normal for independent apps and does <strong>not</strong> mean the app is harmful. To proceed, click <strong>More info</strong> then <strong>Run anyway</strong>. If the file is fully blocked, right-click it → <strong>Properties</strong> → check <strong>Unblock</strong> → <strong>OK</strong>. Full step-by-step instructions are on the <a href="../windows-install/" style="color:var(--accent);text-decoration:none">installation guide page</a>.',
      /* ── Privacy Policy ── */
      'pp-title': 'Privacy Policy',
      'pp-updated': 'Last updated: April 19, 2026',
      'pp-overview-h': 'Overview',
      'pp-overview-p': 'Munjez is an offline-first desktop app focused on productivity. We designed it to keep your data local whenever possible.',
      'pp-data-h': 'Data We Collect',
      'pp-data-p': 'We do not require account creation to use Munjez, and we do not collect personal data from inside the app by default.',
      'pp-local-h': 'Local Data Storage',
      'pp-local-p': 'Your tasks, habits, and app settings are stored locally on your device. You are responsible for managing backups and device security.',
      'pp-crash-h': 'Crash Reports and Diagnostics',
      'pp-crash-p': 'Munjez does not automatically send analytics or diagnostics unless clearly stated in a future release note and explicitly enabled by you.',
      'pp-third-h': 'Third-Party Links',
      'pp-third-p': 'Our website and app may include links to third-party websites (such as GitHub). Their privacy practices are governed by their own policies.',
      'pp-children-h': "Children's Privacy",
      'pp-children-p': 'Munjez is not directed to children under 13, and we do not knowingly collect personal information from children.',
      'pp-changes-h': 'Changes to This Policy',
      'pp-changes-p': 'We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated date.',
      'pp-contact-h': 'Contact',
      'pp-contact-p': 'For privacy questions, contact us at <a class="mail" href="https://mail.google.com/mail/?view=cm&fs=1&to=munjezsupport@gmail.com" target="_blank" rel="noopener noreferrer">munjezsupport@gmail.com</a>.',
      /* ── Uninstall Feedback ── */
      'uf-title': 'Uninstall Feedback',
      'uf-desc': "We're sorry to see you go. Your feedback helps us improve Munjez for future versions.",
      'uf-reason-label': 'Main reason for uninstalling',
      'uf-placeholder': 'Select a reason',
      'uf-opt-placeholder': 'Select a reason',
      'uf-opt-bugs': 'Too many bugs',
      'uf-opt-missing': 'Missing features',
      'uf-opt-perf': 'Performance issues',
      'uf-opt-ui': 'UI/UX not suitable',
      'uf-opt-switch': 'Switching to another app',
      'uf-opt-other': 'Other',
      'uf-reason-error': 'Please select a reason before sending.',
      'uf-comeback-label': 'What could make you come back?',
      'uf-cb-perf': 'Better performance and lower memory usage',
      'uf-cb-mobile': 'Mobile companion app',
      'uf-cb-feat': 'More productivity features',
      'uf-details-label': 'Additional details',
      'uf-details-ph': 'Tell us what happened, what was missing, or what we should improve.',
      'uf-email-label': 'Email (optional)',
      'uf-send': 'Send feedback',
      'uf-email-direct': 'Email directly',
      'uf-note': 'This form sends feedback directly to: munjezsupport@gmail.com',
      'uf-done': 'Thanks for your feedback. We appreciate your time.'
    },
    ar: {
      /* ── Shared ── */
      'back': 'الرئيسية',
      'contact-support': 'تواصل مع الدعم',
      'support-cta': 'هل ما زلت تواجه مشكلة؟ فريق الدعم هنا للمساعدة.',
      /* ── Main nav ── */
      'nav-features': 'المميزات',
      'nav-screenshots': 'لقطات الشاشة',
      'nav-themes': 'السمات',
      'nav-support': 'الدعم',
      'nav-download': 'تنزيل',
      'nav-dl': '',
      /* ── Hero ── */
      'hero-badge': 'تطبيق مجاني لسطح المكتب — \u200fWindows\u200f & \u200fLinux',
      'hero-sub': 'تطبيقك الشامل للإنتاجية',
      'hero-tagline': 'المهام والعادات وجلسات التركيز — كل شيء في تطبيق واحد <strong style="white-space:nowrap">يعمل بلا إنترنت</strong>. مصمَّم لمن يريد الإنجاز.',
      'hero-win': 'تنزيل لـ Windows',
      'hero-linux': 'تنزيل لـ Linux',
      /* ── Features ── */
      'feat-label': 'المميزات',
      'feat-title': 'كل ما تحتاجه<br>لتبقى منتجاً',
      'feat-desc': 'مجموعة إنتاجية متكاملة في تطبيق سطح مكتب سريع وأنيق.',
      'feat-tasks-title': 'إدارة مهام ذكية',
      'feat-tasks-desc': 'نظِّم مهامك في مجلدات بأولويات ومواعيد تسليم. أضف مهاماً متكررة وملاحظات صوتية وملفات وصور — كل التفاصيل في مكان واحد.',
      'feat-cal-title': 'تقويم متكامل',
      'feat-cal-desc': 'اعرض مهامك في طرق عرض سنوية وشهرية وأسبوعية ويومية. دعم كامل للتقويم الهجري مع جدولة المهام بالسحب والإفلات.',
      'feat-focus-title': 'وضع التركيز (Pomodoro)',
      'feat-focus-desc': 'حافظ على إنتاجيتك بجلسات تركيز وفترات راحة منظمة. ألوان مختلفة لكل مرحلة — أحمر للتركيز، وأخضر للاستراحة القصيرة، وبرتقالي للاستراحة الطويلة.',
      'feat-habits-title': 'متتبع العادات',
      'feat-habits-desc': 'كوِّن عادات يومية وتابع تقدمك بصرياً. سجِّل كل عادة يومياً وشاهد ثباتك يتطور مع الوقت.',
      'feat-stopwatch-title': 'ساعة إيقاف',
      'feat-stopwatch-desc': 'قِس الوقت بدقة. سجِّل اللفات والفترات وتابع جلساتك بواجهة نظيفة وخالية من المشتتات.',
      'feat-sounds-title': 'أصوات محيطة',
      'feat-sounds-desc': 'احجب المشتتات بمكتبة أصوات محيطة. امزج صوت المطر والمقهى والطبيعة وغيرها لإنشاء بيئة التركيز المثالية.',
      /* ── Feature tags ── */
      'tag-folders': 'مجلدات', 'tag-priorities': 'أولويات', 'tag-recurring': 'مهام متكررة',
      'tag-voice-notes': 'ملاحظات صوتية', 'tag-recycle-bin': 'سلة المهملات',
      'tag-4views': '٤ طرق عرض', 'tag-hijri': 'التقويم الهجري', 'tag-drag-drop': 'سحب وإفلات',
      'tag-pomodoro': 'مؤقت بومودورو', 'tag-color-phases': 'مراحل ملونة', 'tag-flip-clock': 'ساعة قلابة',
      'tag-daily-streaks': 'سلاسل يومية', 'tag-streak-cal': 'تقويم السلاسل', 'tag-color-tags': 'وسوم ملونة',
      'tag-lap-times': 'أوقات اللفات', 'tag-milliseconds': 'ميلي ثانية',
      'tag-rain': 'مطر', 'tag-cafe-noise': 'ضجيج مقهى', 'tag-nature': 'أصوات الطبيعة', 'tag-volume-mix': 'مزج الصوت',
      /* ── Screenshots ── */
      'ss-label': 'لقطات الشاشة',
      'ss-title': 'شاهده أثناء العمل',
      'ss-desc': 'استعرض كل ميزة من خلال لقطات شاشة حقيقية من التطبيق.',
      'tab-tasks': 'المهام',
      'tab-cal': 'التقويم',
      'tab-habits': 'العادات',
      'tab-focus': 'التركيز',
      'tab-stopwatch': 'ساعة الإيقاف',
      /* ── Focus section ── */
      'focus-label': 'وضع التركيز',
      'focus-title': 'لكل مرحلة<br>طاقتها الخاصة',
      'focus-desc': 'جلسات Pomodoro ملوَّنة تضعك في الذهنية المناسبة لكل لحظة من يوم عملك.',
      'focus-time': 'وقت التركيز',
      'focus-time-desc': 'وضع العمل العميق — ابقَ مركّزاً',
      'short-break': 'استراحة قصيرة',
      'short-break-desc': 'راحة سريعة — ابتعد قليلاً عن الشاشة',
      'long-break': 'استراحة طويلة',
      'long-break-desc': 'استحققتها — أعِد شحنك بالكامل',
      /* ── Themes ── */
      'themes-label': 'السمات',
      'themes-title': 'اجعله على ذوقك',
      'themes-desc': 'بدِّل بين سمات جميلة تتناسب مع مزاجك وأسلوب عملك.',
      /* ── Support (home) ── */
      'sup-label': 'الدعم',
      'sup-title': 'هل تحتاج مساعدة؟<br>نحن هنا',
      'sup-desc': 'أبلِغ عن مشكلة، اقترح ميزة، أو تواصل معنا إذا لم يعمل التطبيق بشكل صحيح.',
      'sup-main-title': 'تواصل مع فريق Munjez',
      'sup-main-desc': 'إذا اكتشفت خللاً أو لديك اقتراح ميزة، افتح تذكرة على GitHub وأضف لقطة شاشة إن أمكن. نراجع المشكلات بانتظام ونحدد الأولويات بحسب الأثر.',
      'sup-btn-bug': 'الإبلاغ عن خلل',
      'sup-btn-issues': 'عرض جميع المشكلات',
      'sup-btn-email': 'مراسلة الدعم',
      'sup-more': 'فتح مركز الدعم الكامل',
      'sup-tips-title': 'قبل فتح تذكرة',
      'sup-tip1': '<strong>حدِّث أولاً:</strong> ثبِّت أحدث إصدار وأعد المحاولة.',
      'sup-tip2': '<strong>شارك السياق:</strong> أذكر إصدار Windows وما كنت تفعله.',
      'sup-tip3': '<strong>أضف وسائط:</strong> أرفق لقطة شاشة أو مقطعاً قصيراً لتسريع الحل.',
      /* ── Download (home) ── */
      'dl-label': 'تنزيل',
      'dl-title': 'مستعد للبدء؟<br><span>أنجز أهدافك</span>',
      'dl-desc': 'مجاني وسريع ويعمل بالكامل بلا إنترنت. بلا حساب. بلا اشتراك. أنت وأهدافك فقط.',
      'dl-win': 'تنزيل لـ Windows',
      'dl-win-sub': 'Windows 10 / 11',
      'dl-linux': 'تنزيل لـ Linux',
      'dl-linux-sub': 'AppImage · DEB · RPM',
      'dl-no-account': 'لا حاجة لحساب',
      'dl-offline': 'يعمل بلا إنترنت',
      'dl-free': 'مجاني للأبد',
      'dl-count-label': 'تنزيل حتى الآن',
      /* ── Footer ── */
      'footer-privacy': 'سياسة الخصوصية',
      'footer-support': 'مركز الدعم',
      /* ── Windows install ── */
      'win-dl-started': 'بدأ التنزيل!',
      'win-hero-title': 'تثبيت <span>Munjez</span> على Windows',
      'win-hero-desc': 'إذا لم يبدأ المتصفح التنزيل تلقائياً، انقر فوق الزر أدناه. بعد اكتمال التنزيل، شغِّل ملف التثبيت.',
      'win-dl-btn': 'تنزيل مرة أخرى',
      'win-warn': 'إذا أظهر Windows تحذيراً أمنياً — إليك كيفية التعامل معه',
      'win-sc1': 'المتصفح أوقف التنزيل',
      'win-sc2': 'ظهور تحذير SmartScreen',
      'win-sc3': 'الملف محظور — لا يمكن تشغيله',
      'win-sc1-s1': 'في <strong>Chrome</strong>: افتح شريط التنزيلات ← انقر فوق <strong>⋮</strong> بجانب الملف ← <strong>Keep</strong>',
      'win-sc1-s2': 'تظهر رسالة تأكيد ثانية — انقر فوق <strong>Keep anyway</strong>',
      'win-sc1-s3': 'في <strong>Edge</strong>: انقر فوق <strong>...</strong> ← <strong>Keep</strong> ← <strong>Show more</strong> ← <strong>Keep anyway</strong>',
      'win-sc1-s4': 'شغِّل ملف التثبيت — قد يظهر تحذير SmartScreen، اتبع <strong>الحالة 2</strong> أدناه',
      'win-sc2-s1': 'انقر فوق <strong>More info</strong>',
      'win-sc2-s2': 'انقر فوق <strong>Run anyway</strong>',
      'win-sc3-s1': 'انقر بزر الماوس الأيمن فوق الملف ← <strong>Show more options</strong>',
      'win-sc3-s2': 'انقر فوق <strong>Properties</strong>',
      'win-sc3-s3': 'ضع علامة في <strong>Unblock</strong> ← انقر فوق <strong>OK</strong>',
      'win-sc3-s4': 'شغِّل ملف التثبيت مرة أخرى',
      /* ── Linux install ── */
      'lx-title-pre': 'تثبيت',
      'lx-title-mid': 'على Linux —',
      'lx-dl-started': 'بدأ التنزيل!',
      'lx-hero-desc': 'إذا لم يبدأ المتصفح التنزيل تلقائياً، انقر فوق الزر أدناه.',
      'lx-dl-btn': 'تنزيل مرة أخرى',
      'lx-hint1': 'نزِّل الملف بالنقر فوق الزر أعلاه',
      'lx-hint2': 'انقر بزر الماوس الأيمن فوق مجلد التنزيلات ← <span>Open Terminal Here</span>',
      'lx-hint3': 'شغِّل أمر التثبيت أدناه',
      'lx-install': 'خطوات التثبيت',
      'lx-trouble': 'حل المشكلات',
      /* ── Linux modal ── */
      'lm-title': 'تنزيل لـ Linux',
      'lm-ver-label': 'أحدث إصدار:',
      'lm-deb-name': '.deb — Ubuntu / Debian',
      'lm-deb-desc': 'موصى به لـ Ubuntu وDebian وLinux Mint',
      'lm-rpm-name': '.rpm — Fedora / RHEL',
      'lm-rpm-desc': 'موصى به لـ Fedora وopenSUSE وRHEL',
      'lm-img-name': '.AppImage — Universal',
      'lm-img-desc': 'يعمل على أي توزيعة Linux، لا يحتاج تثبيتاً',
      'lm-fallback-q': 'لست متأكداً من الاختيار؟',
      'lm-fallback-a': 'تصفح جميع الإصدارات',
      'lm-back': 'رجوع',
      'lm-dl': 'تنزيل',
      /* ── Support page ── */
      'sp-title': 'مركز الدعم',
      'sp-desc': 'هل تحتاج مساعدة مع Munjez؟ استخدم إحدى قنوات الدعم أدناه، ثم راجع الحلول السريعة والأسئلة الشائعة.',
      'sp-contact-title': 'خيارات التواصل',
      'sp-contact-desc': 'اختر الطريقة الأسرع بحسب طلبك.',
      'sp-btn-bug': 'الإبلاغ عن خلل',
      'sp-btn-issues': 'عرض جميع المشكلات',
      'sp-btn-email': 'مراسلة الدعم',
      'sp-tips-title': 'قبل التواصل مع الدعم',
      'sp-tip1': 'ثبِّت أحدث إصدار وأعد المحاولة.',
      'sp-tip2': 'أذكر إصدار Windows وما حدث خطوة بخطوة.',
      'sp-tip3': 'أضف لقطة شاشة أو مقطع فيديو قصير إن أمكن.',
      'sp-tip4': 'وضِّح إذا كانت المشكلة تحدث دائماً أم بصورة عشوائية.',
      'sp-faq': 'الأسئلة الشائعة',
      'sp-q1': 'هل يتطلب Munjez اتصالاً بالإنترنت؟',
      'sp-a1': 'لا. Munjez مصمَّم للعمل بلا إنترنت ويخزِّن بياناتك محلياً على جهازك.',
      'sp-q2': 'كيف أقترح ميزة جديدة؟',
      'sp-a2': 'افتح تذكرة على GitHub وصِف الميزة — سبب أهميتها وكيف تتوقع أن تعمل.',
      'sp-q3': 'كم يستغرق الرد عادةً؟',
      'sp-a3': 'تتفاوت أوقات الرد، لكن التذاكر ذات الخطوات التفصيلية والوسائط تُعالَج بشكل أسرع.',
      'sp-q4': 'لماذا يظهر Windows تحذيراً عند تثبيت Munjez؟',
      'sp-a4': 'Munjez لم يُوقَّع بعد بشهادة توقيع رمز مدفوعة، لذا يصنِّفه SmartScreen تطبيقاً غير معروف. هذا أمر طبيعي للتطبيقات المستقلة ولا يعني أن التطبيق ضار. للمتابعة، انقر فوق <strong>More info</strong> ثم <strong>Run anyway</strong>. إذا كان الملف محظوراً تماماً، انقر بزر الماوس الأيمن فوقه ← <strong>Properties</strong> ← ضع علامة في <strong>Unblock</strong> ← <strong>OK</strong>. التعليمات الكاملة متوفرة في <a href="../windows-install/" style="color:var(--accent);text-decoration:none">صفحة دليل التثبيت</a>.',
      /* ── Privacy Policy ── */
      'pp-title': 'سياسة الخصوصية',
      'pp-updated': 'آخر تحديث: 19 أبريل 2026',
      'pp-overview-h': 'نظرة عامة',
      'pp-overview-p': 'Munjez تطبيق سطح مكتب يعمل بلا إنترنت ومخصص للإنتاجية. صممناه ليبقي بياناتك محلية على جهازك قدر الإمكان.',
      'pp-data-h': 'البيانات التي نجمعها',
      'pp-data-p': 'لا نشترط إنشاء حساب لاستخدام Munjez، ولا نجمع بيانات شخصية من داخل التطبيق بشكل افتراضي.',
      'pp-local-h': 'تخزين البيانات محلياً',
      'pp-local-p': 'تُخزَّن مهامك وعاداتك وإعدادات التطبيق محلياً على جهازك. أنت المسؤول عن إدارة النسخ الاحتياطية وتأمين جهازك.',
      'pp-crash-h': 'تقارير الأعطال والتشخيص',
      'pp-crash-p': 'لا يُرسِل Munjez أي تحليلات أو تقارير تشخيصية تلقائياً، إلا إذا أُعلن عن ذلك صراحةً في ملاحظات إصدار مستقبلي وفعَّلتها أنت بنفسك.',
      'pp-third-h': 'روابط الأطراف الخارجية',
      'pp-third-p': 'قد يتضمن موقعنا وتطبيقنا روابط لمواقع خارجية مثل GitHub. تخضع ممارسات الخصوصية لديها لسياساتها الخاصة.',
      'pp-children-h': 'خصوصية الأطفال',
      'pp-children-p': 'Munjez غير موجَّه للأطفال دون سن 13 عاماً، ولا نجمع بيانات شخصية منهم عن قصد.',
      'pp-changes-h': 'التغييرات على هذه السياسة',
      'pp-changes-p': 'قد نحدِّث هذه السياسة من وقت لآخر. ستنعكس أي تغييرات على هذه الصفحة مع تحديث التاريخ.',
      'pp-contact-h': 'تواصل معنا',
      'pp-contact-p': 'لأي استفسار يتعلق بالخصوصية، تواصل معنا على <a class=\"mail\" href=\"https://mail.google.com/mail/?view=cm&fs=1&to=munjezsupport@gmail.com\" target=\"_blank\" rel=\"noopener noreferrer\">munjezsupport@gmail.com</a>.',
      /* ── Uninstall Feedback ── */
      'uf-title': 'تقييم إلغاء التثبيت',
      'uf-desc': 'نأسف لمغادرتك. تقييمك يساعدنا على تحسين Munjez في الإصدارات القادمة.',
      'uf-reason-label': 'السبب الرئيسي لإلغاء التثبيت',
      'uf-placeholder': 'اختر سبباً',
      'uf-opt-placeholder': 'اختر سبباً',
      'uf-opt-bugs': 'أخطاء كثيرة',
      'uf-opt-missing': 'ميزات مفقودة',
      'uf-opt-perf': 'مشاكل في الأداء',
      'uf-opt-ui': 'الواجهة غير مناسبة',
      'uf-opt-switch': 'الانتقال لتطبيق آخر',
      'uf-opt-other': 'أخرى',
      'uf-reason-error': 'يرجى اختيار سبب قبل الإرسال.',
      'uf-comeback-label': 'ما الذي قد يجعلك تعود؟',
      'uf-cb-perf': 'أداء أفضل واستهلاك أقل للذاكرة',
      'uf-cb-mobile': 'تطبيق مرافق للموبايل',
      'uf-cb-feat': 'ميزات إنتاجية أكثر',
      'uf-details-label': 'تفاصيل إضافية',
      'uf-details-ph': 'أخبرنا بما حدث، أو ما كان ناقصاً، أو ما يجب تحسينه.',
      'uf-email-label': 'البريد الإلكتروني (اختياري)',
      'uf-send': 'إرسال التقييم',
      'uf-email-direct': 'مراسلة مباشرة',
      'uf-note': 'يُرسل هذا النموذج تقييمك مباشرةً إلى: munjezsupport@gmail.com',
      'uf-done': 'شكراً على تقييمك. نقدّر وقتك.'
    }
  };

  function t(key) {
    return T[lang] && T[lang][key] !== undefined ? T[lang][key] : (T.en[key] !== undefined ? T.en[key] : key);
  }

  function apply() {
    var isAr = lang === 'ar';
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      if (!v) return;
      if (v.indexOf('<') !== -1) { el.innerHTML = v; } else { el.textContent = v; }
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n-ph'));
      if (v) el.placeholder = v;
    });
    if (isAr) { loadArabicFont(); } else { document.body.style.fontFamily = ''; }
    var btn = document.getElementById('lang-toggle');
    if (btn) { btn.textContent = isAr ? 'EN' : 'AR'; }
  }

  function loadArabicFont() {
    if (!document.getElementById('ar-font')) {
      var l = document.createElement('link');
      l.id = 'ar-font';
      l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap';
      document.head.appendChild(l);
    }
    document.body.style.fontFamily = '"Cairo", system-ui, sans-serif';
  }

  function toggle() {
    lang = lang === 'en' ? 'ar' : 'en';
    localStorage.setItem(KEY, lang);
    apply();
    setTimeout(function(){ document.dispatchEvent(new Event('langchange')); }, 0);
  }

  function init() {
    var btn = document.getElementById('lang-toggle');
    if (btn) { btn.onclick = toggle; }
    if (lang !== 'en') {
      apply();
      setTimeout(function(){ document.dispatchEvent(new Event('langchange')); }, 0);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.LANG = { t: t, lang: function () { return lang; } };
})();