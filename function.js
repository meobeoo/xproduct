function checkSignup(event) {
    event.preventDefault();

    // Lấy giá trị từ các trường input
    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const phoneNumber = document.getElementById("phonenumberInput").value.trim();
    const password = document.getElementById("passwordInput").value.trim();

    // Kiểm tra và hiển thị thông báo lỗi
    if (name === "") {
        alert("Họ tên không đúng định dạng. Vui lòng nhập lại giá trị.");
        return;
    }

    if (email === "" || !validateEmail(email)) {
        alert("Email không đúng định dạng. Vui lòng nhập lại giá trị.");
        return;
    }

    if (phoneNumber === "" || !validatePhoneNumber(phoneNumber)) {
        alert("Vui lòng nhập số điện thoại hợp lệ.");
        return;
    }

    if (password === "" || !validatePasswordFormat(password)){
        alert("Mật khẩu cần có ít nhất 1 chữ cái in hoa, 1 kí tự đặc biệt đặc biệt và 1 chữ số");
        return;
    }

    if (password === "" || password.length < 8) {
        alert("Mật khẩu quá ngắn. Vui lòng nhập mật khẩu có ít nhất 8 kí tự.");
        return;
    }

    if (password === "" || password.length > 20) {
        alert("Mật khẩu quá dài. Vui lòng nhập mật khẩu có tối đa 20 kí tự");
        return;
    }

    if (!document.getElementById("myCheckbox").checked) {
        alert("Bạn chưa đồng ý với điều khoản của chúng tôi.");
        return;
    }

    alert("Bạn đã đăng kí thành công. Mời bạn đăng nhập...");
    window.location.href = 'index.html';
}

function validatePasswordFormat(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).*$/;
    return passwordRegex.test(password);
}

function validatePhoneNumber(phoneNumber) {
    const phoneNumberRegex = /^\d{10,11}$/;
    return phoneNumberRegex.test(phoneNumber);
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

function closeForm() {
    $('.login-container').addClass('hidden');
}

function checkLogin(event) {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;

    if (username === "") {
        document.getElementById("usernameInput").placeholder = "Vui lòng nhập tên đăng nhập.";
        event.preventDefault();
    }

    if (password === "") {
        document.getElementById("passwordInput").placeholder = "Vui lòng nhập mật khẩu.";
        event.preventDefault();
    }
}

function togglePassword() {
    var passwordInput = document.getElementById("passwordInput");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
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

