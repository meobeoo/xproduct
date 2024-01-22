function closeForm() {
    $('.login-container').addClass('hidden');
}

function redirectToLogin() {
    window.location.href = 'index.html';
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateForm() {
    const emailInput = document.getElementById("input-mail").value;
    if (emailInput.trim() === "" || !validateEmail(emailInput)) {
        alert("Vui lòng nhập một địa chỉ email hợp lệ.");
        return false;
    }

    return true;
}

$(document).ready(function () {
    $('.fade').slick({
        dots: true,      
        arrows: false,      
        infinite: true,
        dotsClass: 'slick-dots-bottom',
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,       
        autoplaySpeed: 1000  
    });

    // Sự kiện được kích hoạt sau khi slide thay đổi
    $('.fade').on('afterChange', function(event, slick, currentSlide){
        // Lấy index của slide hiện tại
        var currentSlideIndex = currentSlide;

        // Loại bỏ màu trắng từ tất cả các dấu chấm
        $('.slick-dots-bottom button').css('background-color', '#707070');

        // Tô màu trắng dấu chấm tương ứng với slide hiện tại
        $('.slick-dots-bottom button').eq(currentSlideIndex).css('background-color', '#ffffff');
    });
});