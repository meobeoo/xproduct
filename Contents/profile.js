
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

    toggleButton.addEventListener("click", function () {
        userManager.classList.toggle("hidden");
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
            var url = '@url.Action("Index", "UserController")'; 
            var z = document.getElementById('address').value;

            window.location.href = ;
            // Thêm logic hủy ở đây nếu cần
        } else {
            // Nếu người dùng chọn "Không", không thực hiện hành động gì cả
            // Thêm logic tiếp tục chỉnh sửa ở đây nếu cần
        }
    });
});

document.getElementById('save').addEventListener('click', function () {
    // Lấy giá trị từ các trường input
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;
    var idCard = document.getElementById('idCard').value;

    // Kiểm tra điều kiện và hiển thị thông báo nếu có lỗi
    if (address.trim() === '') {
        alert('Vui lòng nhập địa chỉ.');
        return;
    }

    var genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {
        alert('Vui lòng chọn giới tính.');
        return;
    }

    if (phone.trim() === '') {
        alert('Vui lòng nhập số điện thoại.');
        return;
    } else if (!/^\d{10,12}$/.test(phone)) {
        alert('Số điện thoại không hợp lệ. Vui lòng nhập từ 10 đến 12 chữ số.');
        return;
    }

    if (idCard.trim() === '') {
        alert('Vui lòng nhập số CMND/CCCD.');
        return;
    } else if (!/^\d{9}$|^\d{12}$/.test(idCard)) {
        alert('Số CMND/CCCD không hợp lệ. Vui lòng nhập 9 hoặc 12 chữ số.');
        return;
    }


    // Nếu không có lỗi, có thể thực hiện các hành động khác ở đây
    alert('Lưu thành công!');
    // Thêm logic lưu dữ liệu ở đây nếu cần
});



// Lấy các phần tử button và div của trang
var infoButton = document.querySelector('.info_option');
var workButton = document.querySelector('.info_option_2');
var infoPage = document.getElementById('infoPage');
var workPage = document.getElementById('workPage');

// Hiển thị trang Công việc mặc định
infoPage.classList.add('show');
infoButton.classList.add('active');

// Hàm hiển thị trang Thông tin
function showInfoPage() {
    infoPage.classList.add('show');
    workPage.classList.remove('show');

    // Tùy chỉnh giao diện của các nút
    infoButton.classList.add('active');
    workButton.classList.remove('active');
}
function onFile() {
    $("#image").click();
}
$("#image").on('change', function (evt) {
    const [file] = $("#image")[0].files;
    if (file) {
        $("#id_image").attr('src', URL.createObjectURL(file));
    }
});

// Hàm hiển thị trang Công việc
function showWorkPage() {
    workPage.classList.add('show');
    infoPage.classList.remove('show');

    // Tùy chỉnh giao diện của các nút
    workButton.classList.add('active');
    infoButton.classList.remove('active');
}

// Hàm chuyển hướng đến trang ho-tro.html
function goToSupportPage() {
    window.location.href = 'ho-tro.html';
}

// Hàm chuyển hướng đến trang thong-bao.html
function goToNotificationPage() {
    window.location.href = 'thong-bao.html';
}

document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const homeContent = document.querySelector('.home_content');

    // Load sidebar state from Local Storage on page load
    const sidebarState = localStorage.getItem('sidebarState');
    if (sidebarState === 'thut') {
        sidebar.classList.add('thut');
        homeContent.classList.add('thut');
    }

    // You may want to add more code specific to this page

    // Rest of your code for the new page
});


