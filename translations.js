const translations = {
    om: {
        home: "Fuula Guddichaa",
        about: "Waa'ee Masjiidicha",
        leadership: "Hooggansa",
        waqf: "Qabeenya Waqfii",
        development: "Misooma",
        charity: "Tola Ooltummaa",
        madrasah: "Madrasaa",
        staff: "Hojjattoota",
        lectures: "Darsiilee",
        news: "Odeeffannoo Haaraa",
        welcome_title: "Baga Gara Masjiida Huzeeyfaa Ibnul Yamanii Dhuftan!",
        welcome_desc: "Hawaasa keenyaaf tajaajila amantii, barnootaa fi hawaasummaa kennina.",
        about_page_title: "Waa'ee Masjiida Huzeeyfaa Ibnul Yamanii",
        about_page_desc: "Masjiidni Huzeeyfaa Ibnul Yamanii hawaasa naannichaaf tajaajila amantii, barnoota Islaamaa, fi hojii tola ooltummaa kennuuf kan hundaa'edha. Ergamaan masjiidichaa hawaasa walitti dhiyeessuu, wal gargaarsaa fi beekumsa amantii babal'isuudha.",
        leadership_page_title: "Hooggansa Masjiidichaa",
        leadership_page_desc: "Hooggansi Masjiida Huzeeyfaa Ibnul Yamanii hojiilee amantii, bulchiinsaa fi misooma masjiidichaa qindeessuun hawaasa tajaajiluuf qaamota filatamanii fi hayyoota irraa kan hundaa'edha."
    },
    am: {
        home: "ዋና ገጽ",
        about: "ስለ መስጊዱ",
        leadership: "አስተዳደር",
        waqf: "የወቅፍ ንብረት",
        development: "ልማት",
        charity: "በጎ አድራጎት",
        madrasah: "መድረሳ",
        staff: "ሰራተኞች",
        lectures: "ደርሶች",
        news: "አዳዲስ ዜናዎች",
        welcome_title: "ወደ ሁዘይፋ ኢብኑል የማን መስጊድ በደህና መጡ!",
        welcome_desc: "ለህብረተሰባችን የሃይማኖት፣ የትምህርት እና የማህበራዊ አገልግሎቶችን እንሰጣለን።",
        about_page_title: "ስለ ሁዘይፋ ኢብኑል የማን መስጊድ",
        about_page_desc: "የሁዘይፋ ኢብኑል የማን መስጊድ ለህብረተሰቡ የሃይማኖት፣ የእስልምና ትምህርት እና የበጎ አድራጎት አገልግሎቶችን ለመስጠት የተቋቋመ ነው። የማስጊዱ ዋና ዓላማ ማህበረሰቡን ማቀራረብ፣ መረዳዳት እና የእምነት እውቀትን ማስፋፋት ነው።",
        leadership_page_title: "የመስጊዱ አስተዳደር",
        leadership_page_desc: "የሁዘይፋ ኢብኑል የማን መስጊድ አስተዳደር የሃይማኖት፣ የአስተዳደር እና የልማት ስራዎችን በማስተባበር ህብረተሰቡን ለማገልገል የተመረጡ አካላትን እና ምሁራንን ያካተተ ነው።"
    },
    en: {
        home: "Home",
        about: "About Us",
        leadership: "Leadership",
        waqf: "Waqf",
        development: "Development",
        charity: "Charity",
        madrasah: "Madrasah",
        staff: "Staff",
        lectures: "Lectures",
        news: "News",
        welcome_title: "Welcome to Huzaifa Ibn Al-Yaman Mosque!",
        welcome_desc: "Providing religious, educational, and community services.",
        about_page_title: "About Huzaifa Ibn Al-Yaman Mosque",
        about_page_desc: "Huzaifa Ibn Al-Yaman Mosque is established to provide religious services, Islamic education, and community charity work for the local society. The mission of the mosque is to unite the community, foster mutual support, and spread religious knowledge.",
        leadership_page_title: "Mosque Leadership",
        leadership_page_desc: "The leadership of Huzaifa Ibn Al-Yaman Mosque consists of elected bodies and scholars dedicated to coordinating religious, administrative, and developmental activities to serve the community."
    },
    ar: {
        home: "الرئيسية",
        about: "عن المسجد",
        leadership: "الإدارة",
        waqf: "الوقف",
        development: "التطوير",
        charity: "العمل الخيري",
        madrasah: "المدرسة",
        staff: "الموظفون",
        lectures: "الدروس",
        news: "الأخبار",
        welcome_title: "أهلاً وسهلاً بكم في مسجد حذيفة بن اليمان!",
        welcome_desc: "نقدم الخدمات الدينية والتعليمية والمجتمعية لمجتمعنا.",
        about_page_title: "عن مسجد حذيفة بن اليمان",
        about_page_desc: "تأسس مسجد حذيفة بن اليمان لتقديم الخدمات الدينية والتعليم الإسلامي والعمل الخيري للمجتمع المحلي. تتمثل رسالة المسجد في تقريب أفراد المجتمع، وتعزيز التكافل، ونشر المعرفة الدينية.",
        leadership_page_title: "إدارة المسجد",
        leadership_page_desc: "تتكون قيادة مسجد حذيفة بن اليمان من هيئات منتخبة وعلماء مكرسين لتنسيق الأنشطة الدينية والإدارية والتنموية لخدمة المجتمع."
    }
};

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    if (lang === 'ar') {
        document.body.setAttribute('dir', 'rtl');
    } else {
        document.body.setAttribute('dir', 'ltr');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('langSelect');
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    // Hamburger Menu Toggle
    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    const savedLang = localStorage.getItem('preferredLang') || 'om';
    setLanguage(savedLang);
    
    if (langSelect) {
        langSelect.value = savedLang;
        
        langSelect.addEventListener('change', (e) => {
            const lang = e.target.value;
            localStorage.setItem('preferredLang', lang);
            setLanguage(lang);
        });
    }
});