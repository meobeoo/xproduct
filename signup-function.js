function closeForm() {
    $('.login-container').addClass('hidden');
}

function redirectToLogin() {
    window.location.href = 'index.html';
}

function checkSignup(event) {
    event.preventDefault();

    // Lấy giá trị từ các trường input
    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const phoneNumber = document.getElementById("phonenumberInput").value.trim();
    const password = document.getElementById("passwordInput").value.trim();

    // Kiểm tra và hiển thị thông báo lỗi
    if (name === "") {
        alert("Bạn chưa nhập họ tên.");
        return;
    }
    
    // Sử dụng regular expression để kiểm tra xem tên có chứa số hay không
    if (/\d/.test(name)) {
        alert("Họ tên không được chứa số. Vui lòng nhập lại họ tên.");
        return;
    }
    

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "" || !emailRegex.test(email)) {
        alert("Email không đúng định dạng. Vui lòng nhập lại giá trị.");
        return;
    }

    const phoneNumberRegex = /^\d{10,11}$/;

    if (phoneNumber === "" || !phoneNumberRegex.test(phoneNumber)) {
        alert("Vui lòng nhập số điện thoại hợp lệ.");
        return;
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).*$/;

    if (password === "" || !passwordRegex.test(password)){
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

function validateEmail(email) {
    return emailRegex.test(email);
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