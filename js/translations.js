// Language translations for SVILER Medical Website
const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_products: "Products",
        nav_about: "About Us",
        nav_support: "Support",
        nav_inquire: "Inquire Now",
        
        // Hero Section
        hero_title: "SVILER",
        hero_subtitle: "MEDICAL",
        hero_desc: "Distributor of medical endoscopy products. Delivering precision medical equipment and comprehensive solutions to healthcare providers across the Middle East region.",
        hero_cta_products: "View Products",
        hero_cta_contact: "Contact Us",
        
        // Features
        feature1_title: "Premium Quality",
        feature1_desc: "State-of-the-art endoscopy equipment meeting international standards",
        feature2_title: "Regional Expertise", 
        feature2_desc: "Deep understanding of Middle East healthcare market needs",
        feature3_title: "Full Support",
        feature3_desc: "Comprehensive technical support and training programs",
        feature4_title: "Fast Delivery",
        feature4_desc: "Efficient logistics network across the Middle East",
        
        // Products
        products_title: "Our Products",
        products_subtitle: "High-Quality Endoscopy Equipment",
        products_desc: "We provide a comprehensive range of minimally invasive surgery equipment for gynecology, urology, and general surgery applications.",
        products_gynecology: "Gynecology",
        products_urology: "Urology",
        products_general: "General Surgery",
        
        // Stats
        stat1_number: "500+",
        stat1_label: "Products",
        stat2_number: "15+",
        stat2_label: "Countries Served",
        stat3_number: "10+",
        stat3_label: "Years Experience",
        stat4_number: "24/7",
        stat4_label: "Support",
        
        // CTA
        cta_title: "Ready to Elevate Your Medical Practice?",
        cta_desc: "Contact us today to discuss your endoscopy equipment needs. Our team is ready to provide customized solutions for your healthcare facility.",
        cta_button: "Get in Touch",
        
        // Footer
        footer_desc: "Distributor of medical endoscopy products in Middle East. Integrated solutions provider for minimally invasive surgery.",
        footer_quicklinks: "Quick Links",
        footer_products: "Products",
        footer_contact: "Contact",
        footer_address: "Address",
        footer_email: "Email",
        footer_phone: "Phone",
        footer_rights: "All rights reserved."
    },
    ar: {
        // Navigation
        nav_home: "الرئيسية",
        nav_products: "المنتجات",
        nav_about: "من نحن",
        nav_support: "الدعم",
        nav_inquire: "استفسر الآن",
        
        // Hero Section
        hero_title: "سفيلير",
        hero_subtitle: "طبية",
        hero_desc: "موزع منتجات التنظير الداخلي الطبية. نقدم معدات طبية دقيقة وحلول شاملة لمقدمي الرعاية الصحية في منطقة الشرق الأوسط.",
        hero_cta_products: "عرض المنتجات",
        hero_cta_contact: "اتصل بنا",
        
        // Features
        feature1_title: "جودة عالية",
        feature1_desc: "معدات تنظير داخلية متطورة تلبي المعايير الدولية",
        feature2_title: "خبرة إقليمية",
        feature2_desc: "فهم عميق لاحتياجات سوق الرعاية الصحية في الشرق الأوسط",
        feature3_title: "دعم كامل",
        feature3_desc: "برامج دعم فني وتدريب شاملة",
        feature4_title: "توصيل سريع",
        feature4_desc: "شبكة لوجستية فعالة في جميع أنحاء الشرق الأوسط",
        
        // Products
        products_title: "منتجاتنا",
        products_subtitle: "معدات تنظير داخلية عالية الجودة",
        products_desc: "نقدم مجموعة شاملة من معدات الجراحة طفيفة التوغل لطب النساء والمسالك البولية والتطبيقات الجراحية العامة.",
        products_gynecology: "طب النساء",
        products_urology: "المسالك البولية",
        products_general: "الجراحة العامة",
        
        // Stats
        stat1_number: "+500",
        stat1_label: "منتج",
        stat2_number: "+15",
        stat2_label: "دولة نخدمها",
        stat3_number: "+10",
        stat3_label: "سنوات خبرة",
        stat4_number: "24/7",
        stat4_label: "دعم",
        
        // CTA
        cta_title: "هل أنت مستعد لرفع مستوى ممارستك الطبية؟",
        cta_desc: "اتصل بنا اليوم لمناقشة احتياجاتك من معدات التنظير الداخلي. فريقنا جاهز لتقديم حلول مخصصة لمنشأتك الصحية.",
        cta_button: "تواصل معنا",
        
        // Footer
        footer_desc: "موزع منتجات التنظير الداخلي الطبية في الشرق الأوسط. مزود حلول متكاملة للجراحة طفيفة التوغل.",
        footer_quicklinks: "روابط سريعة",
        footer_products: "المنتجات",
        footer_contact: "اتصل بنا",
        footer_address: "العنوان",
        footer_email: "البريد الإلكتروني",
        footer_phone: "الهاتف",
        footer_rights: "جميع الحقوق محفوظة."
    }
};

// Language switcher function
function setLanguage(lang) {
    // Save language preference
    localStorage.setItem('sviler-lang', lang);
    
    // Set document direction for Arabic
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Update all elements with data-lang attribute
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update language switcher display
    const langBtn = document.getElementById('current-lang');
    if (langBtn) {
        langBtn.textContent = lang === 'ar' ? 'AR' : 'EN';
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('sviler-lang') || 'en';
    setLanguage(savedLang);
    
    // Language switcher click handler
    const langSwitcher = document.getElementById('lang-switcher');
    if (langSwitcher) {
        langSwitcher.addEventListener('click', function(e) {
            e.preventDefault();
            const currentLang = localStorage.getItem('sviler-lang') || 'en';
            const newLang = currentLang === 'en' ? 'ar' : 'en';
            setLanguage(newLang);
        });
    }
});
