function checkLogin(event) {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;
    var usernameInput = document.getElementById("usernameInput");
    var passwordInput = document.getElementById("passwordInput");

    if (username === "") {
        alert("Vui lòng nhập tên đăng nhập.");
        usernameInput.style.border = "2px solid #E50019";
        event.preventDefault();
        return;
    } else {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(username)) {
            alert("Tên đăng nhập phải có định dạng email.");
            usernameInput.style.border = "2px solid #E50019";
            event.preventDefault();
            return;
        } else {
            usernameInput.style.border = "";
        }
    }

    if (password === "") {
        alert("Vui lòng nhập mật khẩu.");
        passwordInput.style.border = "2px solid #E50019";
        event.preventDefault();
        return;
    } else {
        var passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
        if (!passwordRegex.test(password)) {
            alert("Mật khẩu phải có ít nhất 8-20 kí tự, chứa ít nhất một chữ hoa, một chữ thường và một kí tự đặc biệt.");
            passwordInput.style.border = "2px solid #E50019";
            event.preventDefault();
            return;
        } else {
            passwordInput.style.border = "";
        }
    }

    // Chuyển hướng đến trang tong-quan.html nếu tên đăng nhập và mật khẩu đúng
    goToMainPage();
    event.preventDefault(); // Ngăn chặn sự kiện mặc định của form
}

function goToMainPage() {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;

    // Kiểm tra nếu username là "admin@gmail.com" và password là "Hoa@1999"
    if (username === "admin@gmail.com" && password === "Hoa@1999") {
        // Chuyển hướng đến trang tong-quan.html
        window.location.href = "tong-quan.html";
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng.");
    }
}



function closeForm() {
    $('.login-container').addClass('hidden');
}

function togglePassword() {
    var passwordInput = document.getElementById("passwordInput");
    var eyeIcon = document.getElementById("eyeIcon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.src = "source-img/eye-icon-2.png"; 
    } else {
        passwordInput.type = "password";
        eyeIcon.src = "source-img/eye-icon.png"; 
    }
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