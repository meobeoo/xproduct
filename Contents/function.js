function checkSignup(event) {
    /*event.preventDefault();*/

    // Lấy giá trị từ các trường input
    const name = document.getElementById("FullName").value.trim();
    const email = document.getElementById("Email").value.trim();
    const phoneNumber = document.getElementById("Sdt").value.trim();
    const password = document.getElementById("Password").value.trim();

    // Kiểm tra và hiển thị thông báo lỗi
    if (name, email, password, phoneNumber === "") {
        alert("Vui lòng nhập lại giá trị.");
        return false
    }

    var checkname = /^[a-zA-ZÀ-ỹẠ-ỵĂăÂâĐđÊêÔôƠơƯư\s']+$/;
    if (!name.match(checkname)) {
        alert("Tên không đúng định dạng vui lòng nhập lại");
        return false
    }

    var checkemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(checkemail)) {
        alert("Email không đúng định dạng. Vui lòng nhập lại giá trị.");
        return false
    }

    var checknumber = /^0\d{9}$/;
    if (!phoneNumber.match(checknumber)) {
        alert("Vui lòng nhập số điện thoại hợp lệ.");
        return false
    }

    var checkpassword = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).*$/;
    if (!password.match(checkpassword)) {
        alert("Mật khẩu cần có ít nhất 1 chữ cái in hoa, 1 kí tự đặc biệt đặc biệt và 1 chữ số");
        return false
    }

    if (password.length < 8) {
        alert("Mật khẩu quá ngắn. Vui lòng nhập mật khẩu có ít nhất 8 kí tự.");
        return false
    }

    if (password.length > 20) {
        alert("Mật khẩu quá dài. Vui lòng nhập mật khẩu có tối đa 20 kí tự");
        return false
    }

     if (!document.getElementById("myCheckbox").checked) {
         alert("Bạn chưa đồng ý với điều khoản của chúng tôi.");
         return false
    }
    alert("Bạn đã chắc chắn với thông tin tạo mới tài khoản?");
   /* window.location.href = '/login/index';*/
    return true;
}

//function validateFullname(name) {
//    const fullNamRegex = /^[a-zA-ZÀ-ỹẠ-ỵĂăÂâĐđÊêÔôƠơƯư\s']+$/;
//    return fullNamRegex.test(name);
//}
//function validatePasswordFormat(password) {
//    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).*$/;
//    return passwordRegex.test(password);
//}
//function validatePhoneNumber(phoneNumber) {
//    const phoneNumberRegex = /^\d{10,11}$/;
//    return phoneNumberRegex.test(phoneNumber);
//}

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

    $('#FormRegister').on('submit', (e) => {
        checkSignup(e);
    })
    $('#FormLogin').on('submit', (e) => {
        checkLogin(e);
    })
});

function closeForm() {
    $('.login-container').addClass('hidden');
}

function checkLogin(event) {

    var username = document.getElementById("Email").value.trim();
    var password = document.getElementById("Password").value.trim();
    //var username = document.forms["loginForm"]["Email"].value;
    //var password = document.forms["loginForm"]["Password"].value;

    if (username === "") {
        document.getElementById("Email").placeholder = "Vui lòng nhập tên đăng nhập.";
        event.preventDefault();
    }

    if (password === "") {
        document.getElementById("Password").placeholder = "Vui lòng nhập mật khẩu.";
        event.preventDefault();
    }
}

function togglePassword() {
    var passwordInput = document.getElementById("passwordInput");
    var eyeIcon = document.getElementById("eyeIcon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.src = "~/source-img/eye-icon-2.png";
    } else {
        passwordInput.type = "password";
        eyeIcon.src = "~/source-img/eye-icon.png";
    }
}

function redirectToLogin() {
    window.location.href = 'Index.cshtml';
}

//function validateEmail(email) {
//    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//    return emailRegex.test(email);
//}

function validateForm() {
    const emailInput = document.getElementById("Email").value;
    if (emailInput.trim() === "" || !validateEmail(emailInput)) {
        alert("Vui lòng nhập một địa chỉ email hợp lệ.");
        return false;
    }

    return true;
}
function closeForm() {
    $('.login-container').addClass('hidden');
}

