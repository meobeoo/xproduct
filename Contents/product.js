
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

function goToSupportPage() {
    window.location.href = '/User/Support';
}

function goToNotificationPage() {
    window.location.href = '/User/Notification';
}


    