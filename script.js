// Supabase Configuration
const SUPABASE_URL = 'https://yjkgipivctdhezwvfwjx.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_wgNooZL5_9oxf_0Mg2RmGw_m78N-O5m';

const { createClient } = supabase;
const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

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
        about_page_desc: "Masjiidni Huzeeyfaa Ibnul Yamanii hawaasa naannichaaf tajaajila amantii, barnoota Islaamaa, fi hojii tola ooltummaa kennuuf kan hundaa'edha.",
        leadership_page_title: "Hooggansa Masjiidichaa",
        leadership_page_desc: "Hooggansi masjiidichaa hojiilee amantii, bulchiinsaa fi misooma masjiidichaa qindeessuun hawaasa tajaajila.",
        waqf_page_title: "Qabeenya Waqfii Masjiidichaa",
        waqf_page_desc: "Qabeenyi waqfii masjiidichaa tajaajila yeroo dheeraaf masjiidicha fi hawaasa keenya deeggaruuf qabeeyyii sassaabamanidha.",
        development_page_title: "Pirojektoota Misooma Masjiidichaa",
        development_page_desc: "Mali fi pirojektoonni misoomaa masjiidichaa, bu'uuraalee misoomaa babal'isuu fi tajaajila hawaasummaa fooyyessuuf karoorfaman.",
        charity_page_title: "Hojii Tola Ooltummaa (Sadaqaa)",
        charity_page_desc: "Sagantaan tola ooltummaa masjiidichaa karaa harka qalleeyyii, yatiimota fi warra rakkataniif gargaarsa itti kennamuudha.",
        madrasah_page_title: "Barnoota Madrasaa",
        madrasah_page_desc: "Madrasaan keenya barnoota diinii, Qur'aanaa fi afaan Arabaa daa'immanii fi dargaggootaaf barsiisuuf kan hundaa'edha.",
        staff_page_title: "Koreewwanii fi Hojjattoota",
        staff_page_desc: "Koreewwanii fi hojjattoota masjiida kana keessatti guyyaa guyyaan hawaasa keenyaaf tajaajila kennan.",
        lectures_page_title: "Darsiilee fi Sagantaalee Da'awaa",
        lectures_page_desc: "Sagantaa da'awaa, darsiilee torbeewwanii fi haasawa juma'aa (Khuxbaa) masjiidicha keessatti kennaman.",
        news_page_title: "Odeeffannoo fi Beeksisa Haaraa",
        news_page_desc: "Odeeffannoo yeroo yeroon masjiidicha irraa bahu, beeksisaa fi taateewwan haaraa hawaasa keenyaaf darban."
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
        about_page_desc: "የሁዘይፋ ኢብኑል የማን መስጊድ ለህብረተሰቡ የሃይማኖት፣ የእስልምና ትምህርት እና የበጎ አድራጎት አገልግሎቶችን ለመስጠት የተቋቋመ ነው።",
        leadership_page_title: "የመስጊዱ አስተዳደር",
        leadership_page_desc: "የመስጊዱ አስተዳደር የሃይማኖት፣ የአስተዳደር እና የልማት ስራዎችን በማስተባበር ህብረተሰቡን ያገለግላል።",
        waqf_page_title: "የመስጊዱ የወቅፍ ንብረት",
        waqf_page_desc: "የመስጊዱ የወቅፍ ንብረት መስጊዱንና ህብረተሰባችንን ለረጅም ጊዜ እንዲደግፉ የተሰበሰቡ ቋሚ ንብረቶች ናቸው።",
        development_page_title: "የመስጊዱ ልማት ፕሮጀክቶች",
        development_page_desc: "በመስጊዱ እየተከናወኑ ያሉ የልማት ፕሮጀክቶች የመሠረተ ልማት ማስፋፊያን እና ማህበራዊ አገልግሎቶችን ለማሻሻል የታቀዱ ናቸው።",
        charity_page_title: "የበጎ አድራጎት ስራዎች",
        charity_page_desc: "የመስጊዱ የበጎ አድራጎት መርሃ ግብር ለችግረኞች፣ ለየቲሞች እና እርዳታ ለሚሹ ወገኖች ድጋፍ የሚሰጥበት ነው።",
        madrasah_page_title: "የመድረሳ ትምህርት",
        madrasah_page_desc: "መድረሳችን ለህፃናት እና ወጣቶች የሃይማኖት፣ የቁርኣን እና የአረብኛ ቋንቋ ትምህርቶችን ለመስጠት የተቋቋመ ነው።",
        staff_page_title: "ኮሚቴዎች እና ሰራተኞች",
        staff_page_desc: "በዚህ መስጊድ ውስጥ በየቀኑ ለማህበረሰባችን አገልግሎት የሚሰጡ ኮሚቴዎች እና ሰራተኞች።",
        lectures_page_title: "ደርሶች እና የዳዕዋ ፕሮግራሞች",
        lectures_page_desc: "በመስጊዱ ውስጥ የሚሰጡ የዳዕዋ ፕሮግራሞች፣ ሳምንታዊ ደርሶች እና የጁምዓ ኹጥባዎች።",
        news_page_title: "አዳዲስ ዜናዎች እና ማስታወቂያዎች",
        news_page_desc: "ከመስጊዱ በየወቅቱ የሚወጡ መረጃዎች፣ ማስታወቂያዎች እና አዳዲስ ክስተቶች።"
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
        about_page_desc: "Huzaifa Ibn Al-Yaman Mosque is established to provide religious services, Islamic education, and community charity work.",
        leadership_page_title: "Mosque Leadership",
        leadership_page_desc: "The mosque's leadership coordinates religious, administrative, and developmental activities to serve the community.",
        waqf_page_title: "Mosque Waqf Properties",
        waqf_page_desc: "The waqf properties are permanent assets collected to support the mosque and our community for the long term.",
        development_page_title: "Mosque Development Projects",
        development_page_desc: "Development projects designed to expand infrastructure and improve community services.",
        charity_page_title: "Charity Work",
        charity_page_desc: "The mosque's charity program provides support to the needy, orphans, and those in distress.",
        madrasah_page_title: "Madrasah Education",
        madrasah_page_desc: "Our madrasah is established to teach religious studies, Quran, and Arabic language to children and youth.",
        staff_page_title: "Committees and Staff",
        staff_page_desc: "Committees and staff members who provide daily services in this mosque for our community.",
        lectures_page_title: "Lectures & Da'wah Programs",
        lectures_page_desc: "Da'wah programs, weekly lectures, and Friday sermons given at the mosque.",
        news_page_title: "Latest News & Announcements",
        news_page_desc: "Periodic information, announcements, and recent events from the mosque."
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
        about_page_desc: "تأسس مسجد حذيفة بن اليمان لتقديم الخدمات الدينية والتعليم الإسلامي والعمل الخيري للمجتمع المحلي.",
        leadership_page_title: "إدارة المسجد",
        leadership_page_desc: "تنسق قيادة المسجد الأنشطة الدينية والإدارية والتنموية لخدمة المجتمع.",
        waqf_page_title: "أوقاف المسجد",
        waqf_page_desc: "أوقاف المسجد هي أصول دائمة تم جمعها لدعم المسجد ومجتمعنا على المدى الطويل.",
        development_page_title: "مشاريع تطوير المسجد",
        development_page_desc: "مشاريع تطويرية مصممة لتوسيع البنية التحتية وتحسين الخدمات المجتمعية.",
        charity_page_title: "العمل الخيري",
        charity_page_desc: "يقدم برنامج المسجد الخيري الدعم للمحتاجين والأيتام والمتضررين.",
        madrasah_page_title: "التعليم في المدرسة",
        madrasah_page_desc: "تأسست مدرستنا لتعليم الدراسات الدينية والقرآن واللغة العربية للأطفال والشباب.",
        staff_page_title: "اللجان والموظفون",
        staff_page_desc: "اللجان والموظفون الذين يقدمون خدمات يومية في هذا المسجد لمجتمعنا.",
        lectures_page_title: "الدروس وبرامج الدعوة",
        lectures_page_desc: "برامج الدعوة والدروس الأسبوعية وخطب الجمعة التي تقام في المسجد.",
        news_page_title: "أحدث الأخبار والإعلانات",
        news_page_desc: "المعلومات الدورية والإعلانات والأحداث الأخيرة من المسجد."
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

    reloadAllData(lang);
}

async function translateText(text, targetLang) {
    if (!text || targetLang === 'om') return text;
    try {
        const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=om|${targetLang}`);
        const data = await res.json();
        if (data && data.responseData && data.responseData.translatedText) {
            return data.responseData.translatedText;
        }
    } catch (err) {
        console.error("Translation error:", err);
    }
    return text;
}

async function fetchPostsByCategory(categoryName, containerId, currentLang) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const { data, error } = await _supabase
        .from('posts')
        .select('*')
        .eq('category', categoryName)
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Rakkoon uumameera:', error);
        container.innerHTML = '<p>Odeeffannoo fiduu hin dandaʼamne.</p>';
        return;
    }

    if (data.length === 0) {
        container.innerHTML = '<p>Odeeffannoon ammaaf hin jiru.</p>';
        return;
    }

    let htmlContent = '';
    for (let post of data) {
        let title = await translateText(post.title, currentLang);
        let content = await translateText(post.content, currentLang);

        htmlContent += `
            <div class="post-card" style="background: #fff; padding: 20px; margin-bottom: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <h3>${title}</h3>
                <p>${content}</p>
                ${post.image_url ? `<img src="${post.image_url}" alt="Image" style="max-width:100%; border-radius:5px; margin-top:10px;">` : ''}
            </div>
        `;
    }
    container.innerHTML = htmlContent;
}

async function fetchStaff(containerId, currentLang) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const { data, error } = await _supabase
        .from('staff')
        .select('*')
        .order('created_at', { ascending: true });

    if (error) {
        console.error('Rakkoon hojjattoota fiduu uumameera:', error);
        container.innerHTML = '<p>Hojjattoota fiduu hin dandaʼamne.</p>';
        return;
    }

    if (data.length === 0) {
        container.innerHTML = '<p>Hojjattoonni galmaaʼan hin jiran.</p>';
        return;
    }

    let htmlContent = '';
    for (let person of data) {
        let name = await translateText(person.name, currentLang);
        let position = await translateText(person.position, currentLang);

        htmlContent += `
            <div class="staff-card" style="background: #fff; padding: 15px; margin-bottom: 15px; border-radius: 8px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                ${person.image_url ? `<img src="${person.image_url}" alt="${person.name}" style="width:100px; height:100px; border-radius:50%; object-fit:cover; margin-bottom:10px;">` : ''}
                <h3>${name}</h3>
                <p style="color: #1b4d3e; font-weight: bold;">${position}</p>
                ${person.phone ? `<p>📞 ${person.phone}</p>` : ''}
            </div>
        `;
    }
    container.innerHTML = htmlContent;
}

function reloadAllData(lang) {
    fetchPostsByCategory('about', 'about-container', lang);
    fetchPostsByCategory('leadership', 'leadership-container', lang);
    fetchPostsByCategory('waqf', 'waqf-container', lang);
    fetchPostsByCategory('development', 'development-container', lang);
    fetchPostsByCategory('charity', 'charity-container', lang);
    fetchPostsByCategory('madrasah', 'madrasah-container', lang);
    fetchPostsByCategory('news', 'news-container', lang);
    fetchPostsByCategory('lectures', 'lectures-container', lang);
    fetchStaff('staff-container', lang);
}

window.addEventListener('DOMContentLoaded', () => {
    // --- HAMBURGER MENU FIX ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            navList.classList.toggle('active');
        });

        // Menuuicha alaa yeroo tuqan akka cufamu
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !navList.contains(e.target)) {
                navList.classList.remove('active');
            }
        });
    }
    // --------------------------

    // HTML keessatti lang switcher select tag class="lang-switcher" qabaate ykn id="langSelect" ta'uu danda'a
    const langSelect = document.querySelector('.lang-switcher select') || document.getElementById('langSelect');
    const savedLang = localStorage.getItem('preferredLang') || 'om';
    
    if (langSelect) {
        langSelect.value = savedLang;
        langSelect.addEventListener('change', (e) => {
            const lang = e.target.value;
            localStorage.setItem('preferredLang', lang);
            setLanguage(lang);
        });
    }

    setLanguage(savedLang);
});