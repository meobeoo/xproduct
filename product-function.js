
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