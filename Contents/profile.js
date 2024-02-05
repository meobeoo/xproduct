
document.addEventListener('DOMContentLoaded', function () {
    // Get the necessary elements
    const sidebar = document.querySelector('.sidebar');
    const btn = document.getElementById('btn');
    const homeContent = document.querySelector('.home_content');

    // Add click event listener to the button
    btn.addEventListener('click', function () {
        // Toggle the 'thut' class on the sidebar
        sidebar.classList.toggle('thut');

        // Toggle the width and left position of homeContent
        homeContent.classList.toggle('thut');

        // You may want to add more styling adjustments or animations as needed
    });
});



document.addEventListener("DOMContentLoaded", function () {
    var userManager = document.querySelector(".home_content .user_manager");
    var toggleButton = document.querySelector(".info_button");

    toggleButton.addEventListener("click", function (event) {
        // Ngăn chặn sự kiện click từ việc lan truyền lên các phần tử cha
        event.stopPropagation();

        userManager.classList.toggle("hidden");
    });

    document.addEventListener('click', function (event) {
        // Kiểm tra xem sự kiện click có xảy ra bên ngoài div không
        if (!userManager.contains(event.target)) {
            // Nếu có, thêm class hidden vào div
            userManager.classList.add('hidden');
        }
    });
});


//$(function () {
//    $("#datepicker input").datepicker({
//        autoclose: true,
//        todayHighlight: true,
//    }).datepicker('update', new Date());

//    $("#select_date").click(function () {
//        e.preventDefault();
//        $("#datepicker input").datepicker("show");
//    });
//});

// document.getElementById('cancel').addEventListener('click', function() {
//     var isConfirmed = confirm("Bạn chưa lưu thông tin. Bạn có thật sự muốn hủy không?");

//     if (isConfirmed) {
//       window.location.href = 'tong-quan.html';
//     } else {

//     }
// });

document.getElementById('cancel').addEventListener('click', function () {
    // Hiển thị cửa sổ hỏi tùy chỉnh với SweetAlert
    Swal.fire({
        title: 'Bạn chưa lưu thông tin.',
        text: 'Bạn có thật sự muốn hủy không?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Có',
        cancelButtonText: 'Không'
    }).then((result) => {
        if (result.value) {
            // Nếu người dùng chọn "Có", thực hiện hành động hủy
            Swal.fire('Bạn đã hủy.', '', 'success');

            window.location.href = '/User/Index';
            // Thêm logic hủy ở đây nếu cần
        } else {
            // Nếu người dùng chọn "Không", không thực hiện hành động gì cả
            // Thêm logic tiếp tục chỉnh sửa ở đây nếu cần
        }
    });
});

document.getElementById('save').addEventListener('click', function (event) {
    // Prevent the default submit behavior
    event.preventDefault();

    // Lấy giá trị từ các trường input
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;
    var idCard = document.getElementById('idCard').value;

    // Kiểm tra điều kiện và hiển thị thông báo nếu có lỗi
    //if (address.trim() === '') {
    //    Swal.fire('Lỗi', 'Vui lòng nhập địa chỉ.', 'error');
    //    return;
    //}
    //if (!/^[a-zA-ZÀ-ỹẠ-ỵĂăÂâĐđÊêÔôƠơƯư\s'0-9'!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(address)) {
    //    Swal.fire('Lỗi', 'Địa chỉ không hợp lệ. Vui lòng nhập đúng định dạng.', 'error');
    //    return;
    //}

    if (phone.trim() === '') {
        Swal.fire('Lỗi', 'Vui lòng nhập số điện thoại.', 'error');
        return;
        event.preventDefault();
    }
    if (!/^(0\d{9})$/.test(phone)) {
        Swal.fire('Lỗi', 'Số điện thoại không hợp lệ. Vui lòng nhập đúng định dạng.', 'error');
        return;
        event.preventDefault();
    }

    //if (idCard.trim() === '') {
    //    Swal.fire('Lỗi', 'Vui lòng nhập số CMND/CCCD.', 'error');
    //    return;
    //}
    if (!/^\d{9}$|^\d{12}$|^$/.test(idCard)) {
        Swal.fire('Lỗi', 'Số CMND/CCCD không hợp lệ. Vui lòng nhập đúng thông tin định dạng.', 'error');
        return;
        event.preventDefault();
    }

    Swal.fire({
        title: 'Thành công',
        text: 'Dữ liệu đã được lưu thành công!',
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'OK',
    }).then((result) => {
        if (result.isConfirmed) {
            document.getElementById('FormProfileUser').submit();
        }
    });
});


// Lấy các phần tử button và div của trang
var infoButton = document.querySelector('.info_option');
var workButton = document.querySelector('.info_option_2');
var infoPage = document.getElementById('infoPage');
var workPage = document.getElementById('workPage');



function onFile() {
    $("#image").click();
}
$("#image").on('change', function (evt) {
    const [file] = $("#image")[0].files;
    if (file) {
        $("#id_image").attr('src', URL.createObjectURL(file));
    }
});

// Hiển thị trang Công việc mặc định
infoPage.classList.add('show');
infoButton.classList.add('active');

function showInfoPage() {

    infoPage.classList.add('show');
    workPage.classList.remove('show');

    // Tùy chỉnh giao diện của các nút
    infoButton.classList.add('active');
    workButton.classList.remove('active');
}
function showWorkPage() {

    workPage.classList.add('show');
    infoPage.classList.remove('show');

    // Tùy chỉnh giao diện của các nút
    workButton.classList.add('active');
    infoButton.classList.remove('active');
}

function goToSupportPage() {
    window.location.href = '/User/Support';
}

function goToNotificationPage() {
    window.location.href = '/User/Notification';
}




function selectRadio(radioId) {
    document.getElementById(radioId).click();
}

document.addEventListener("DOMContentLoaded", function () {
    flatpickr("#NgaySinh", {
        dateFormat: "d/m/Y",
        maxDate: "today",
    });
});