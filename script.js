document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        // إخفاء شاشة التمهيد
        document.querySelector('.splash-screen').classList.add('fade-out');

        // إظهار المحتوى الرئيسي
        document.querySelector('.main-content').style.display = 'block';

        // إزالة المحتوى التمهيدي من الواجهة
        document.querySelector('.splash-screen').style.display = 'none';

        // إتاحة التمرير مرة أخرى بعد إخفاء الشاشة التمهيدية
        document.body.style.overflow = 'auto';
    }, 2000); // 2000 مللي ثانية = 2 ثانية

    // تبديل بين وضع النهار والليل
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    sunIcon.addEventListener('click', () => {
        document.body.classList.add('night-mode');
        document.body.classList.remove('day-mode');
    });

    moonIcon.addEventListener('click', () => {
        document.body.classList.add('day-mode');
        document.body.classList.remove('night-mode');
    });

    // تبديل عرض القائمة المنسدلة
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});





// Initial setup: hide the language options
document.addEventListener('DOMContentLoaded', function () {
    const options = document.getElementById('language-options');
    if (options) {
        options.style.display = 'none';
    }
});

// Function to toggle the visibility of the language options
document.getElementById('language-selector').addEventListener('click', function () {
    const options = document.getElementById('language-options');
    if (options.style.display === 'none' || options.style.display === '') {
        options.style.display = 'block';
    } else {
        options.style.display = 'none';
    }
});

// Function to change the language
function changeLanguage(lang) {
    // Change the language attribute of the body
    document.body.setAttribute('lang', lang);

    // Get all elements with language-specific data attributes
    const elements = document.querySelectorAll('[data-en], [data-ar]');

    elements.forEach(element => {
        // Get the text for the selected language
        const textEn = element.getAttribute('data-en');
        const textAr = element.getAttribute('data-ar');

        // Set the text content based on the selected language
        if (lang === 'en') {
            if (textEn) element.textContent = textEn;
        } else if (lang === 'ar') {
            if (textAr) element.textContent = textAr;
        }
    });

    // Optionally, you can update the language selector button or icon here
}


// التأكد من تحميل الصفحة بشكل كامل قبل تنفيذ أي شيفرة جافاسكريبت
document.addEventListener('DOMContentLoaded', () => {
    // تغيير اللغة بناءً على اللغة الافتراضية أو اللغة المفضلة
    changeLanguage(document.body.getAttribute('lang') || 'ar');
});



