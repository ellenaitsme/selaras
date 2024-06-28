const swiper = new Swiper('.swiper-header', {
    slidesPerView: 2.4,
    centeredSlides: true,
    spaceBetween: 30,
    initialSlide: 1,
    loop: true,
    autoplay: {
        delay: 2300,
        disableOnInteraction: false,
    },
    speed: 1000,
});

const swiper2 = new Swiper('.swiper-comment', {
    slidesPerView: 4.5,
    centeredSlides: true,
    spaceBetween: 30,
    initialSlide: 5,
    loop: true,
});

const swiper3 = new Swiper('.swiper-article', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            const bulletTexts = ['inspirasi', 'pemberdayaan', 'edukasi'];
            return `<div class="${className}">${bulletTexts[index]}</div>`;
        },
    },
    
    on: {
        init: function () {
            // Add active class to the first bullet on initialization
            document.querySelectorAll('.swiper-pagination .swiper-pagination-bullet')[0].classList.add('active');
        },
        slideChange: function () {
            updateActiveBullet();
        }
    }
});

function updateActiveBullet() {
    document.querySelectorAll('.swiper-pagination .swiper-pagination-bullet').forEach((bullet) => {
        bullet.classList.remove('active');
    });
    document.querySelectorAll('.swiper-pagination .swiper-pagination-bullet')[swiper3.activeIndex].classList.add('active');
}

// FAQ
const faqBoxes = document.querySelectorAll('.faq-box');
faqBoxes.forEach(faqBox =>{
    const icon = faqBox.querySelector('.icon');
    const answer = faqBox.querySelector('.answer');

    faqBox.addEventListener('click', () => {
        faqBoxes.forEach(faqBoxOther => {
            const icon2 = faqBoxOther.querySelector('.icon');
            const answer2 = faqBoxOther.querySelector('.answer');

            if (faqBoxOther !== faqBox && icon2.classList.contains('active')) {
                icon2.classList.remove('active');
                answer2.classList.remove('active');
                answer2.style.maxHeight = null;
            }
        });
            
        if(icon.classList.contains('active')) {
            icon.classList.remove('active');
            answer.classList.remove('active');
            answer.style.maxHeight = null;
        } else {
            
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 0.5 + 'rem';
            answer.classList.add('active');
        }
        
    })
})

// FOOTER 
document.getElementById("submit-form").addEventListener("click", function(event) {
    submit(event);
});

function handleGetFormData() {
    var name = document.getElementById("name").value;
    var city = document.getElementById("city").value;
    var email = document.getElementById("email").value;
    var zipCode = document.getElementById("zip-code").value;
    var status = document.getElementById("status").checked;

    return {
        name: name,
        city: city,
        email: email,
        zipCode: zipCode,
        status: status
    };
}

function isNumber(number) {
    return !isNaN(number);
}

function checkboxIsChecked() {
    var statusCheckbox = document.getElementById("status");
    return statusCheckbox.checked;
}

function validateFormData(data) {
    return data != null && isNumber(data.zipCode) && checkboxIsChecked();
}


function submit() {
    event.preventDefault(); 
    var formData = handleGetFormData();

    let isValid = validateFormData(formData);

    
    if (!isValid) {
        document.getElementById('warning').style.display = 'block';
        document.getElementById('warning').innerText = 'Periksa form anda sekali lagi';
    } else {
        document.getElementById('warning').style.display = 'none';
        document.getElementById('warning').innerText = '';
    }
}
ScrollReveal({
    distance: '30px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('#header',{ 
    origin: 'top',
    interval: 100,
});

ScrollReveal().reveal('#community, #faq, #article',{ 
    origin: 'bottom'
});

ScrollReveal().reveal('#training',{ 
    origin: 'left'
});

ScrollReveal().reveal('#about',{ 
    origin: 'right'
});