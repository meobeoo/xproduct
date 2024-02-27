document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const btn = document.getElementById('btn');
    const homeContent = document.querySelector('.home_content');
    btn.addEventListener('click', function () {
        sidebar.classList.toggle('thut');
        homeContent.classList.toggle('thut');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("today_radio").checked = true;
    switchTableContent('today_radio');
});


function switchTableContent(radioId) {
    var dataTable = document.getElementById('data-table');
    var tableRows = dataTable.getElementsByTagName('tr');
    console.log('Switching table content for radio: ', radioId);


    while (dataTable.rows.length > 1) {
        dataTable.deleteRow(1);
    }

    switch (radioId) {
        case 'today_radio':
            addDataRow(dataTable, 1, 'SP000001', 'Sản phẩm X-Product web', 'Nhóm sản phẩm 1', '12/12/2023', '12/12/2024', 'Nguyễn Vũ Tuệ Minh', 'done-status', 'Đã hoàn thành');
            addDataRow(dataTable, 2, 'SP000002', 'Sản phẩm X-Product web', 'Nhóm sản phẩm 2', '12/12/2023', '12/12/2024', 'Nguyễn Vũ Tuệ Minh', 'cancel-status', 'Đã huỷ');
            addDataRow(dataTable, 3, 'SP000003', 'Sản phẩm X-Product web', 'Nhóm sản phẩm 1', '12/12/2023', '12/12/2024', 'Nguyễn Vũ Tuệ Minh', 'in-progress-status', 'Đang làm');
            addDataRow(dataTable, 4, 'SP000004', 'Sản phẩm X-Product app', 'Nhóm sản phẩm 2', '12/12/2023', '12/12/2024', 'Nguyễn Vũ Tuệ Minh', 'cancel-status', 'Đã huỷ');
            addDataRow(dataTable, 5, 'SP000005', 'Sản phẩm X-Product app', 'Nhóm sản phẩm 4', '12/12/2023', '12/12/2024', 'Nguyễn Vũ Tuệ Minh', 'cancel-status', 'Đã huỷ');
            addDataRow(dataTable, 6, 'SP000006', 'Sản phẩm X-Product mobile', 'Nhóm sản phẩm 5', '12/12/2023', '12/12/2024', 'Nguyễn Vũ Tuệ Minh', 'done-status', 'Đã hoàn thành');
            addDataRow(dataTable, 7, 'SP000007', 'Sản phẩm X-Product web', 'Nhóm sản phẩm 2', '12/12/2023', '12/12/2024', 'Nguyễn Thị Hiền', 'done-status', 'Đã hoàn thành');
            addDataRow(dataTable, 8, 'SP000008', 'Sản phẩm X-Product app', 'Nhóm sản phẩm 3', '12/12/2023', '12/12/2024', 'Nguyễn Hà Linh', 'done-status', 'Đã hoàn thành');
            addDataRow(dataTable, 9, 'SP000009', 'Sản phẩm X-Product web', 'Nhóm sản phẩm 3', '12/12/2023', '12/12/2024', 'Nguyễn Sinh Hùng', 'done-status', 'Đã hoàn thành');
            addDataRow(dataTable, 10, 'SP000010', 'Sản phẩm X-Product mobile', 'Nhóm sản phẩm 5', '12/12/2023', '12/12/2024', 'Phạm Đức Hoà', 'done-status', 'Đã hoàn thành');
            addDataRow(dataTable, 11, 'SP000001', 'Sản phẩm X-Product web', 'Nhóm sản phẩm 1', '12/12/2023', '12/12/2024', 'Nguyễn Vũ Tuệ Minh', 'done-status', 'Đã hoàn thành');
            addDataRow(dataTable, 12, 'SP000002', 'Sản phẩm X-Product web', 'Nhóm sản phẩm 2', '12/12/2023', '12/12/2024', 'Nguyễn Vũ Tuệ Minh', 'cancel-status', 'Đã huỷ');
            addDataRow(dataTable, 13, 'SP000003', 'Sản phẩm X-Product web', 'Nhóm sản phẩm 1', '12/12/2023', '12/12/2024', 'Nguyễn Vũ Tuệ Minh', 'in-progress-status', 'Đang làm');
            addDataRow(dataTable, 14, 'SP000004', 'Sản phẩm X-Product app', 'Nhóm sản phẩm 2', '12/12/2023', '12/12/2024', 'Nguyễn Vũ Tuệ Minh', 'cancel-status', 'Đã huỷ');
            addDataRow(dataTable, 15, 'SP000005', 'Sản phẩm X-Product app', 'Nhóm sản phẩm 4', '12/12/2023', '12/12/2024', 'Nguyễn Vũ Tuệ Minh', 'cancel-status', 'Đã huỷ');
            addDataRow(dataTable, 16, 'SP000006', 'Sản phẩm X-Product mobile', 'Nhóm sản phẩm 5', '12/12/2023', '12/12/2024', 'Nguyễn Vũ Tuệ Minh', 'done-status', 'Đã hoàn thành');
            addDataRow(dataTable, 17, 'SP000007', 'Sản phẩm X-Product web', 'Nhóm sản phẩm 2', '12/12/2023', '12/12/2024', 'Nguyễn Thị Hiền', 'done-status', 'Đã hoàn thành');
            addDataRow(dataTable, 18, 'SP000008', 'Sản phẩm X-Product app', 'Nhóm sản phẩm 3', '12/12/2023', '12/12/2024', 'Nguyễn Hà Linh', 'done-status', 'Đã hoàn thành');
            addDataRow(dataTable, 19, 'SP000009', 'Sản phẩm X-Product web', 'Nhóm sản phẩm 3', '12/12/2023', '12/12/2024', 'Nguyễn Sinh Hùng', 'done-status', 'Đã hoàn thành');
            addDataRow(dataTable, 20, 'SP000010', 'Sản phẩm X-Product mobile', 'Nhóm sản phẩm 5', '12/12/2023', '12/12/2024', 'Phạm Đức Hoà', 'done-status', 'Đã hoàn thành');
            addDataRow(dataTable, 21, 'SP000001', 'Sản phẩm X-Product web', 'Nhóm sản phẩm 1', '12/12/2023', '12/12/2024', 'Nguyễn Vũ Tuệ Minh', 'done-status', 'Đã hoàn thành');
            addDataRow(dataTable, 22, 'SP000002', 'Sản phẩm X-Product web', 'Nhóm sản phẩm 2', '12/12/2023', '12/12/2024', 'Nguyễn Vũ Tuệ Minh', 'cancel-status', 'Đã huỷ');
            addDataRow(dataTable, 23, 'SP000003', 'Sản phẩm X-Product web', 'Nhóm sản phẩm 1', '12/12/2023', '12/12/2024', 'Nguyễn Vũ Tuệ Minh', 'in-progress-status', 'Đang làm');
            addDataRow(dataTable, 24, 'SP000004', 'Sản phẩm X-Product app', 'Nhóm sản phẩm 2', '12/12/2023', '12/12/2024', 'Nguyễn Vũ Tuệ Minh', 'cancel-status', 'Đã huỷ');
            addDataRow(dataTable, 25, 'SP000005', 'Sản phẩm X-Product app', 'Nhóm sản phẩm 4', '12/12/2023', '12/12/2024', 'Nguyễn Vũ Tuệ Minh', 'cancel-status', 'Đã huỷ');
            addDataRow(dataTable, 26, 'SP000006', 'Sản phẩm X-Product mobile', 'Nhóm sản phẩm 5', '12/12/2023', '12/12/2024', 'Nguyễn Vũ Tuệ Minh', 'done-status', 'Đã hoàn thành');
            addDataRow(dataTable, 27, 'SP000007', 'Sản phẩm X-Product web', 'Nhóm sản phẩm 2', '12/12/2023', '12/12/2024', 'Nguyễn Thị Hiền', 'done-status', 'Đã hoàn thành');
            addDataRow(dataTable, 28, 'SP000008', 'Sản phẩm X-Product app', 'Nhóm sản phẩm 3', '12/12/2023', '12/12/2024', 'Nguyễn Hà Linh', 'done-status', 'Đã hoàn thành');
            addDataRow(dataTable, 29, 'SP000009', 'Sản phẩm X-Product web', 'Nhóm sản phẩm 3', '12/12/2023', '12/12/2024', 'Nguyễn Sinh Hùng', 'done-status', 'Đã hoàn thành');
            addDataRow(dataTable, 30, 'SP000010', 'Sản phẩm X-Product mobile', 'Nhóm sản phẩm 5', '12/12/2023', '12/12/2024', 'Phạm Đức Hoà', 'done-status', 'Đã hoàn thành');
            break;
        case 'yesterday_radio':
            addDataRow(dataTable, 1, 'SP000011', 'Sản phẩm X-Product mobile', 'Nhóm sản phẩm 1', '12/12/2023', '12/12/2024', 'Nguyễn Vũ Tuệ Minh', 'done-status', 'Đã hoàn thành');
            addDataRow(dataTable, 2, 'SP000012', 'Sản phẩm X-Product web', 'Nhóm sản phẩm 2', '12/12/2023', '12/12/2024', 'Phạm Đức Hoà', 'cancel-status', 'Đã huỷ');
            addDataRow(dataTable, 3, 'SP000013', 'Sản phẩm X-Product web', 'Nhóm sản phẩm 3', '12/12/2023', '12/12/2024', 'Nguyễn Vũ Tuệ Minh', 'in-progress-status', 'Đang làm');
            addDataRow(dataTable, 4, 'SP000014', 'Sản phẩm X-Product app', 'Nhóm sản phẩm 2', '12/12/2023', '12/12/2024', 'Nguyễn Vũ Tuệ Minh', 'cancel-status', 'Đã huỷ');
            break;
        case 'this_week_radio':
            break;
        case 'last_week_radio':
            break;
        case 'this_month_radio':
            break;
        case 'last_month_radio':
            break;
        case 'this_year_radio':
            break;
        case 'last_year_radio':
            break;
        case 'other_select_radio':
            break;
        default:
            break;
    }
    updateTotalRows(dataTable);
    updateStatusCount(dataTable);
    updateTotalProducts(dataTable);
}

function updateTotalRows(table) {
    var rows = table.getElementsByTagName("tr");
    var totalRows = rows.length - 1;
    document.getElementById("soluongtongsanpham").innerText = totalRows;
}

function updateStatusCount(table) {
    var rows = table.getElementsByTagName("tr");

    var countInProgress = 0;
    var countDone = 0;
    var countCancelled = 0;

    for (var i = 1; i < rows.length; i++) { // Bắt đầu từ 1 để bỏ qua header
        var statusCell = rows[i].getElementsByTagName("td")[10].innerText;

        if (statusCell.includes("Đang làm")) {
            countInProgress++;
        } else if (statusCell.includes("Đã hoàn thành")) {
            countDone++;
        } else if (statusCell.includes("Đã huỷ")) {
            countCancelled++;
        }
    }

    document.getElementById("soluongsanphamdanglam").innerText = countInProgress;
    document.getElementById("soluongsanphamdahoanthanh").innerText = countDone;
    document.getElementById("soluongsanphamdahuy").innerText = countCancelled;
}

function addDataRow(table, stt, maSanPham, tenSanPham, nhomSanPham, ngayBatDau, ngayKetThuc, nguoiTao, statusClass, statusText) {
    var newRow = table.insertRow(-1);
    newRow.insertCell(0).innerHTML = stt;
    newRow.insertCell(1).innerHTML = '<input type="checkbox" class="checkbox">';
    newRow.insertCell(2).innerHTML = '<button class="detail" onclick="openDetailDiv()"></button>' +
        '<button class="edit" onclick="openEditDiv()"></button>' +
        '<button class="delete" onclick="deleteRow3(this)"></button>';
    newRow.insertCell(3).innerHTML = '<img src="/source-img/icon-xproduct.png" style="width: 40px; height: 40px; border-radius: 5px;">';
    newRow.insertCell(4).innerHTML = maSanPham;
    newRow.insertCell(5).innerHTML = tenSanPham;
    newRow.insertCell(6).innerHTML = nhomSanPham;
    newRow.insertCell(7).innerHTML = ngayBatDau;
    newRow.insertCell(8).innerHTML = ngayKetThuc;
    newRow.insertCell(9).innerHTML = nguoiTao;
    newRow.insertCell(10).innerHTML = '<div class="' + statusClass + '"></div>' + statusText;
}


document.addEventListener("DOMContentLoaded", function () {
    var userManager = document.querySelector(".home_content .user_manager");
    var toggleButton = document.querySelector(".info_button");

    toggleButton.addEventListener("click", function () {
        userManager.classList.toggle("hidden");
    });
});

function goToSupportPage() {
    window.location.href = '/User/Support';
}

function goToNotificationPage() {
    window.location.href = '/User/Notification';
}


function uploadImage() {
    document.getElementById('imageInput').click();
}

function setBackgroundImage() {
    // Lấy đối tượng input chứa file
    var input = document.getElementById('imageInput');

    // Kiểm tra xem có file được chọn hay không
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        // Đọc nội dung của file và thiết lập nó làm background-image cho div
        reader.onload = function (e) {
            document.getElementById('add-photo').style.backgroundImage = 'url(' + e.target.result + ')';
        };

        // Đọc file ảnh dưới dạng URL Data
        reader.readAsDataURL(input.files[0]);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    flatpickr("#DayStart", {
        dateFormat: "d/m/Y",
        defaultDate: "today",
        minDate: "today",
    });
});

function openDayStartDatePicker() {
    flatpickr("#DayStart", {
        dateFormat: "d/m/Y",
        defaultDate: "today",  // Mặc định là ngày hôm nay
        minDate: "today",
        onClose: function (selectedDates, dateStr, instance) {
            // Đóng calendar khi người dùng chọn ngày
            instance.close();
        }
    }).open();
}


document.addEventListener("DOMContentLoaded", function () {
    flatpickr("#DayEnd", {
        dateFormat: "d/m/Y",
        defaultDate: "today",
        minDate: "today",
    });
});

function openDayEndDatePicker() {
    flatpickr("#DayEnd", {
        dateFormat: "d/m/Y",
        defaultDate: "today",  // Mặc định là ngày hôm nay
        minDate: "today",
        onClose: function (selectedDates, dateStr, instance) {
            // Đóng calendar khi người dùng chọn ngày
            instance.close();
        }
    }).open();
}

document.addEventListener("DOMContentLoaded", function () {
    flatpickr("#DayStart2", {
        dateFormat: "d/m/Y",
    });
});

function openDayStartDatePicker2() {
    flatpickr("#DayStart2", {
        dateFormat: "d/m/Y",
        onClose: function (selectedDates, dateStr, instance) {
            instance.close();
        }
    }).open();
}


document.addEventListener("DOMContentLoaded", function () {
    flatpickr("#DayEnd2", {
        dateFormat: "d/m/Y",
    });
});

function openDayEndDatePicker2() {
    flatpickr("#DayEnd2", {
        dateFormat: "d/m/Y",
        onClose: function (selectedDates, dateStr, instance) {
            instance.close();
        }
    }).open();
}

function filterPeople() {
    var input, filter, ul, li, span, i, txtValue;
    input = document.getElementById("search-people");
    filter = input.value.toUpperCase();
    ul = document.querySelector("#list-people ul");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        span = li[i].getElementsByTagName("span")[0];
        txtValue = span.textContent || span.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


var listItems = document.querySelectorAll('li');

listItems.forEach(function (li) {
    li.addEventListener('click', function (event) {
        // Check if the click originated from the checkbox
        if (!event.target.matches('input[type="checkbox"]')) {
            // Find the checkbox inside the clicked <li>
            var checkbox = li.querySelector('input[type="checkbox"]');

            // Toggle the checkbox state (check/uncheck)
            checkbox.checked = !checkbox.checked;
        }
    });
});

// Lưu trữ thông tin vai trò của từng người
const roles = {};

// Lấy danh sách các người từ thẻ ul
const peopleList = document.querySelectorAll('#list-people ul li');

// Lặp qua từng người và thêm sự kiện click
peopleList.forEach(person => {
    person.addEventListener('click', () => {
        // Lấy tên của người được chọn
        const selectedName = person.querySelector('span').innerText;

        // Hiển thị tên người được chọn vào #show-name
        document.getElementById('show-name').innerText = selectedName;

        // Hiển thị #select-role
        document.getElementById('select-role').style.display = 'block';

    });
});





document.getElementById('add-people').addEventListener('click', function () {
    var addNewPeopleDiv = document.getElementById('add-new-people');
    addNewPeopleDiv.classList.remove('hidden');
});

document.getElementById('cancel-button-2').addEventListener('click', function () {
    var addNewPeopleDiv = document.getElementById('add-new-people');
    addNewPeopleDiv.classList.add('hidden');
    resetRoleSelection();
});

document.getElementById('add').addEventListener('click', function () {
    var addNewProduct = document.getElementById('add-new-product');
    var homeContent = document.getElementById('home_content');
    var sidaBar = document.getElementById('sidebar');
    var toolBar = document.getElementById('tool_bar');

    addNewProduct.classList.remove('hidden');
    homeContent.classList.add('darken');
    sidaBar.classList.add('darken');
    toolBar.classList.add('darken');
});

document.getElementById('cancel-button').addEventListener('click', function () {
    var addNewProduct = document.getElementById('add-new-product');
    var homeContent = document.getElementById('home_content');
    var sidaBar = document.getElementById('sidebar');
    var toolBar = document.getElementById('tool_bar');

    addNewProduct.classList.add('hidden');
    homeContent.classList.remove('darken');
    sidaBar.classList.remove('darken');
    toolBar.classList.remove('darken');
    // Lấy tất cả các trường input, textarea, và select trong form
    var formElements = document.querySelectorAll('form input, form textarea, form select');

    // Đặt lại giá trị của mỗi trường về giá trị mặc định hoặc trống (trừ trường disabled)
    formElements.forEach(function (element) {
        if (!element.hasAttribute('disabled')) {
            // Kiểm tra loại của từng trường và đặt lại giá trị tương ứng
            if (element.type === 'text' || element.type === 'textarea') {
                element.value = ''; // Đặt lại giá trị về trống cho input và textarea
            } else if (element.type === 'select-one') {
                element.selectedIndex = 0; // Đặt lại giá trị về lựa chọn đầu tiên cho select
            } else if (element.type === 'file') {
                element.value = ''; // Đặt lại giá trị về trống cho input file
            } else if (element.type === 'checkbox' || element.type === 'radio') {
                element.checked = false; // Đặt lại giá trị về false cho checkbox và radio
            }
        }
    });
    // Xóa tất cả các dòng trong bảng
    var table = document.getElementById('table-people');
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    var table = document.getElementById('table-file');
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
});

document.getElementById('add-people').addEventListener('click', function () {
    var addNewProduct = document.getElementById('add-new-product');
    var addNewPeople = document.getElementById('add-new-people');

    addNewPeople.classList.remove('hidden');
    addNewProduct.classList.add('darken')
});

document.getElementById('cancel-button-2').addEventListener('click', function () {
    var addNewProduct = document.getElementById('add-new-product');
    var addNewPeople = document.getElementById('add-new-people');

    addNewPeople.classList.add('hidden');
    addNewProduct.classList.remove('darken')
});


document.getElementById('save-button').addEventListener('click', function () {
    // Kiểm tra validate trước khi submit form
    var validationResult = validateForm();
    if (validationResult.isValid) {
        document.querySelector('form').submit();
    } else {
        alert(validationResult.message);
    }
});

function validateForm() {
    var isValid = true;
    var errorMessage = 'Vui lòng điền đầy đủ các thông tin bắt buộc.\n';

    // Lấy giá trị các trường
    var productName = document.querySelector('[name="product-name"]').value;
    var productGroup = document.querySelector('[name="product-group"]').value;
    var productSize = document.querySelector('[name="product-size"]').value;
    var dayStart = document.querySelector('[name="DayStart"]').value;
    var dayEnd = document.querySelector('[name="DayEnd"]').value;
    var describeInput = document.getElementById('describe-input').value;
    var imageInput = document.getElementById('imageInput');

    // Kiểm tra xem các trường có đầy đủ thông tin không
    if (productName === '') {
        errorMessage += '- Tên sản phẩm không được trống.\n';
        isValid = false;
    }

    if (productGroup === '') {
        errorMessage += '- Nhóm sản phẩm không được trống.\n';
        isValid = false;
    }

    if (productSize === '') {
        errorMessage += '- Size sản phẩm không được trống.\n';
        isValid = false;
    }

    if (dayStart === '') {
        errorMessage += '- Ngày bắt đầu không được trống.\n';
        isValid = false;
    }

    if (dayEnd === '') {
        errorMessage += '- Ngày kết thúc không được trống.\n';
        isValid = false;
    }

    if (describeInput.trim() === '') {
        errorMessage += '- Mô tả sản phẩm không được trống.\n';
        isValid = false;
    }

    // Kiểm tra xem ảnh đã được chọn hay chưa
    if (!imageInput.files || imageInput.files.length === 0) {
        errorMessage += '- Bạn phải chọn ảnh sản phẩm.\n';
        isValid = false;
    }

    // Chuyển đổi chuỗi ngày thành đối tượng Date
    var startDate = new Date(parseDate(dayStart));
    var endDate = new Date(parseDate(dayEnd));

    // Kiểm tra xem ngày kết thúc có sau ngày bắt đầu không
    if (endDate < startDate) {
        errorMessage += '- Ngày kết thúc phải xảy ra sau ngày bắt đầu.\n';
        isValid = false;
    }

    // Kiểm tra và báo lỗi nếu không có người tham gia trong bảng
    var peopleTableValidation = validatePeopleTable();
    if (!peopleTableValidation.isValid) {
        errorMessage += peopleTableValidation.message;
        isValid = false;
    }

    return {
        isValid: isValid,
        message: errorMessage
    };
}

function validatePeopleTable() {
    var isValid = true;
    var errorMessage = '- Phải có ít nhất 1 người tham gia.\n';

    var table = document.getElementById('table-people');

    if (table.rows.length <= 1) {
        isValid = false;
    }

    return {
        isValid: isValid,
        message: errorMessage
    };
}

// Hàm chuyển đổi chuỗi ngày thành định dạng "mm/dd/yyyy"
function parseDate(input) {
    var parts = input.split('/');
    return parts[1] + '/' + parts[0] + '/' + parts[2];
}

document.getElementById('save-button-3').addEventListener('click', function () {

    var form = document.getElementById('edit-form');
    // Kiểm tra validate trước khi submit form
    var validationResult = validateEditForm();

    if (validationResult.isValid) {
        // Hiển thị hộp thoại xác nhận
        var userConfirmed = confirm("Bạn có chắc chắn muốn thay đổi thông tin?");

        // Kiểm tra xem người dùng đã xác nhận hay chưa
        if (userConfirmed) {
            // Nếu xác nhận, submit form
            form.submit();
            var editProduct = document.getElementById('edit-product');
            var homeContent = document.getElementById('home_content');
            var sidaBar = document.getElementById('sidebar');
            var toolBar = document.getElementById('tool_bar');

            editProduct.classList.add('hidden');
            homeContent.classList.remove('darken');
            sidaBar.classList.remove('darken');
            toolBar.classList.remove('darken');
        } else {
            // Nếu không xác nhận, không làm gì cả hoặc thực hiện hành động khác tùy ý
            alert("Bạn đã hủy thay đổi thông tin.");
        }
    } else {
        alert(validationResult.message);
    }
});


function validateEditForm() {
    var isValid = true;
    var errorMessage = 'Vui lòng điền đầy đủ các thông tin bắt buộc.\n';

    var productGroup = document.querySelector('[name="product-group-2"]').value;
    var productSize = document.querySelector('[name="product-size-2"]').value;
    var dayStart = document.querySelector('[name="DayStart2"]').value;
    var dayEnd = document.querySelector('[name="DayEnd2"]').value;
    var describeInput = document.getElementById('edit-describe-input-detail').value;

    if (productGroup === '') {
        errorMessage += '- Nhóm sản phẩm không được trống.\n';
        isValid = false;
    }

    if (productSize === '') {
        errorMessage += '- Size sản phẩm không được trống.\n';
        isValid = false;
    }

    if (dayStart === '') {
        errorMessage += '- Ngày bắt đầu không được trống.\n';
        isValid = false;
    }

    if (dayEnd === '') {
        errorMessage += '- Ngày kết thúc không được trống.\n';
        isValid = false;
    }

    if (describeInput.trim() === '') {
        errorMessage += '- Mô tả sản phẩm không được trống.\n';
        isValid = false;
    }

    // Chuyển đổi chuỗi ngày thành đối tượng Date
    var startDate = new Date(parseDate(dayStart));
    var endDate = new Date(parseDate(dayEnd));

    // Kiểm tra xem ngày kết thúc có sau ngày bắt đầu không
    if (endDate < startDate) {
        errorMessage += '- Ngày kết thúc phải xảy ra sau ngày bắt đầu.\n';
        isValid = false;
    }

    // Kiểm tra và báo lỗi nếu không có người tham gia trong bảng
    var peopleTableValidation = validateEditPeopleTable();
    if (!peopleTableValidation.isValid) {
        errorMessage += peopleTableValidation.message;
        isValid = false;
    }

    return {
        isValid: isValid,
        message: errorMessage
    };
}

function validateEditPeopleTable() {
    var isValid = true;
    var errorMessage = '- Phải có ít nhất 1 người tham gia.\n';

    var table = document.getElementById('edit-table-people');

    if (table.rows.length <= 1) {
        isValid = false;
    }

    return {
        isValid: isValid,
        message: errorMessage
    };
}




document.getElementById('save-button-2').addEventListener('click', function () {
    if (validateSelection()) {
        addSelectedPeople();
        resetRoleSelection();
        var addNewPeopleDiv = document.getElementById('add-new-people');
        addNewPeopleDiv.classList.add('hidden');
        var addNewProduct = document.getElementById('add-new-product');
        addNewProduct.classList.remove('darken');
    } else {
        alert('Vui lòng chọn ít nhất một người tham gia và một vai trò cho mỗi người.');
    }
});

function resetRoleSelection() {
    var selectedRoles = document.querySelectorAll('#select-role input:checked');

    // Lặp qua danh sách vai trò và hủy chọn
    selectedRoles.forEach(function (role) {
        role.checked = false;
    });
    var selectedPeople = document.querySelectorAll('#list-people input:checked');

    // Lặp qua danh sách người và hủy chọn
    selectedPeople.forEach(function (person) {
        person.checked = false;
    });
}

// Hàm kiểm tra xem người dùng đã chọn ít nhất một người tham gia và một vai trò hay chưa
function validateSelection() {
    var selectedPeople = document.querySelectorAll('#list-people input:checked');
    var selectedRoles = document.querySelectorAll('#select-role input:checked');

    return selectedPeople.length > 0 && selectedRoles.length > 0;
}

// Hàm kiểm tra xem người dùng đã chọn ít nhất một vai trò hay chưa
function validateRoles() {
    var selectedRoles = document.querySelectorAll('#select-role input:checked');
    return selectedRoles.length > 0; // Trả về true nếu có ít nhất một vai trò được chọn, ngược lại trả về false
}

function addSelectedPeople() {
    // Lấy danh sách người được chọn
    var selectedPeople = document.querySelectorAll('#list-people input:checked');

    // Lặp qua danh sách người và thêm vào bảng nếu chưa có trong bảng hoặc vai trò có thay đổi
    selectedPeople.forEach(function (person) {
        var personName = person.nextElementSibling.nextElementSibling.textContent;
        var roles = getSelectedRoles(); // Lấy danh sách vai trò từ danh sách vai trò

        // Kiểm tra xem người có trong bảng không và vai trò có thay đổi không
        if (!isPersonInTable(personName, roles)) {
            // Thêm vào bảng nếu chưa có trong bảng hoặc vai trò có thay đổi
            addToTable(personName, roles);
        }
    });
}

// Lấy danh sách vai trò từ danh sách vai trò
function getSelectedRoles() {
    var roles = [];
    var selectedRoles = document.querySelectorAll('#select-role input:checked');

    // Lặp qua danh sách vai trò và thêm vào mảng
    selectedRoles.forEach(function (role) {
        roles.push(role.nextElementSibling.nextElementSibling.textContent);
    });

    return roles;
}

// Kiểm tra xem người có trong bảng không và vai trò có thay đổi không
function isPersonInTable(personName, roles) {
    var table = document.getElementById('table-people');
    for (var i = 1; i < table.rows.length; i++) {
        var row = table.rows[i];
        var existingPersonName = row.cells[2].textContent; // Ô tên người tham gia
        var existingRoles = row.cells[3].innerHTML; // Ô vai trò

        // Kiểm tra xem người có trong bảng không và vai trò có thay đổi không
        if (existingPersonName === personName && existingRoles === roles.join('<br>')) {
            return true; // Người đã có trong bảng với vai trò không thay đổi
        }
    }

    return false; // Người không có trong bảng hoặc vai trò có thay đổi
}

function addToTable(personName, roles) {
    var table = document.getElementById('table-people');
    var row = table.insertRow(-1);

    var cell1 = row.insertCell(0);
    cell1.textContent = table.rows.length - 1; // STT

    var cell2 = row.insertCell(1);
    cell2.innerHTML = '<button onclick="deleteRow(this)" class="delete-row-btn"></button>'; // Nút xóa

    var cell3 = row.insertCell(2);
    cell3.innerHTML = '<img class="table-img" src="/source-img/avt-people.svg">' + personName; // Tên người tham gia

    var cell4 = row.insertCell(3);
    // Thêm div tương ứng với vai trò vào cell4
    roles.forEach(function (role) {
        if (role === "Vai trò tham gia 1") {
            cell4.innerHTML += '<div class="div-vt-1"></div>' + role + '<br>';
        } else if (role === "Vai trò tham gia 2") {
            cell4.innerHTML += '<div class="div-vt-2"></div>' + role + '<br>';
        } else {
            cell4.innerHTML += role + '<br>'; // Thêm vai trò không phù hợp với điều kiện
        }
    });
}

// Hàm xóa dòng trong bảng
function deleteRow(btn) {
    var table = document.getElementById('table-people');
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);

    // Cập nhật lại số thứ tự (STT) sau khi xóa dòng
    updateRowNumbers(table);
}

// Hàm cập nhật lại số thứ tự (STT) trong bảng
function updateRowNumbers(table) {
    for (var i = 1; i < table.rows.length; i++) {
        var row = table.rows[i];
        row.cells[0].textContent = i; // Cập nhật giá trị STT
    }
}



function openDetailDiv() {
    var productDetailDiv = document.getElementById("product-detail");
    var homeContent = document.getElementById('home_content');
    var sidaBar = document.getElementById('sidebar');
    var toolBar = document.getElementById('tool_bar');

    productDetailDiv.classList.remove('hidden');
    homeContent.classList.add('darken');
    sidaBar.classList.add('darken');
    toolBar.classList.add('darken');
}

document.getElementById('done-button').addEventListener('click', function () {
    var productDetailDiv = document.getElementById("product-detail");
    var homeContent = document.getElementById('home_content');
    var sidaBar = document.getElementById('sidebar');
    var toolBar = document.getElementById('tool_bar');

    productDetailDiv.classList.add('hidden');
    homeContent.classList.remove('darken');
    sidaBar.classList.remove('darken');
    toolBar.classList.remove('darken');
});

document.getElementById('pick-file').addEventListener('click', function () {
    document.getElementById('file-input').click();
});

document.getElementById('file-input').addEventListener('change', function () {
    var files = this.files;
    for (var i = 0; i < files.length; i++) {
        var fileName = files[i].name;
        var fileSize = formatBytes(files[i].size);

        // Tạo một dòng mới trong bảng và cập nhật thông tin file
        var table = document.getElementById('table-file');
        var rowCount = table.rows.length;

        var row = table.insertRow(rowCount);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = rowCount;
        cell2.innerHTML = '<button onclick="deleteRow2(this)" class="delete-row-btn"></button>';
        cell3.innerHTML = fileName;
        cell4.innerHTML = fileSize;
    }
});

// Hàm xóa dòng trong bảng
function deleteRow2(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);

    // Cập nhật lại số thứ tự trong bảng
    var table = document.getElementById('table-file');
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[0].innerHTML = i;
    }
}

function deleteRow4(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);

    // Cập nhật lại số thứ tự trong bảng
    var table = document.getElementById('edit-table-people');
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[0].innerHTML = i;
    }
}

function deleteRow5(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);

    // Cập nhật lại số thứ tự trong bảng
    var table = document.getElementById('edit-table-file');
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[0].innerHTML = i;
    }
}

// Hàm định dạng kích thước file
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Hàm xóa dòng trong bảng sản phẩm
function deleteRow3(btn) {
    // Sử dụng hàm confirm để xác nhận xóa
    var isConfirmed = confirm("Bạn có chắc chắn muốn xóa không?");

    // Nếu người dùng chọn OK trong cửa sổ xác nhận
    if (isConfirmed) {
        var row = btn.parentNode.parentNode;
        row.parentNode.removeChild(row);
        updateTotalRows();

        // Cập nhật lại số thứ tự trong bảng
        var table = document.getElementById('table-file');
        for (var i = 1; i < table.rows.length; i++) {
            table.rows[i].cells[0].innerHTML = i;
        }
    }
    // Nếu người dùng chọn Cancel, không thực hiện việc xóa
}

// Hàm xóa dòng trong bảng sản phẩm
function deleteRow3(btn) {
    // Sử dụng hàm confirm để xác nhận xóa
    var isConfirmed = confirm("Bạn có chắc chắn muốn xóa không?");

    // Nếu người dùng chọn OK trong cửa sổ xác nhận
    if (isConfirmed) {
        var row = btn.parentNode.parentNode;
        row.parentNode.removeChild(row);

        // Cập nhật lại số thứ tự trong bảng
        var table = document.getElementById('table-file');
        for (var i = 1; i < table.rows.length; i++) {
            table.rows[i].cells[0].innerHTML = i;
        }
    }
    // Nếu người dùng chọn Cancel, không thực hiện việc xóa
}


function openEditDiv() {
    var editProduct = document.getElementById('edit-product');
    var homeContent = document.getElementById('home_content');
    var sidaBar = document.getElementById('sidebar');
    var toolBar = document.getElementById('tool_bar');

    editProduct.classList.remove('hidden');
    homeContent.classList.add('darken');
    sidaBar.classList.add('darken');
    toolBar.classList.add('darken');
}

document.getElementById('cancel-button-3').addEventListener('click', function () {
    var editProduct = document.getElementById('edit-product');
    var homeContent = document.getElementById('home_content');
    var sidaBar = document.getElementById('sidebar');
    var toolBar = document.getElementById('tool_bar');

    editProduct.classList.add('hidden');
    homeContent.classList.remove('darken');
    sidaBar.classList.remove('darken');
    toolBar.classList.remove('darken');
});

document.addEventListener("DOMContentLoaded", function () {
    var checkAllCheckbox = document.getElementById("check-all");
    var otherCheckboxes = document.querySelectorAll(".checkbox");
    var deleteButtons = document.querySelectorAll(".delete");
    var dataTable = document.getElementById("data-table");

    checkAllCheckbox.addEventListener("change", function () {
        for (var i = 0; i < otherCheckboxes.length; i++) {
            otherCheckboxes[i].checked = checkAllCheckbox.checked;
        }
    });

    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", function () {
            deleteSelectedRows();
        });
    }

    function deleteSelectedRows() {
        var selectedRows = [];
        for (var i = 0; i < otherCheckboxes.length; i++) {
            if (otherCheckboxes[i].checked) {
                selectedRows.push(otherCheckboxes[i].closest("tr"));
            }
        }

        for (var i = 0; i < selectedRows.length; i++) {
            selectedRows[i].remove();
        }

        updateRowNumbers();
        checkAllCheckbox.checked = areAllCheckboxesChecked();
        updateTotalRows();
        updateStatusCount()

    }

    // Hàm để cập nhật lại số thứ tự trong bảng
    function updateRowNumbers() {
        var rows = document.getElementById("data-table").getElementsByTagName("tr");

        for (var i = 1; i < rows.length; i++) { // Bắt đầu từ 1 để bỏ qua header
            var numberCell = rows[i].getElementsByTagName("td")[0];
            numberCell.innerText = i; // Cập nhật số thứ tự
        }
    }

    for (var i = 0; i < otherCheckboxes.length; i++) {
        otherCheckboxes[i].addEventListener("change", function () {
            checkAllCheckbox.checked = areAllCheckboxesChecked();
        });
    }

    function areAllCheckboxesChecked() {
        for (var i = 0; i < otherCheckboxes.length; i++) {
            if (!otherCheckboxes[i].checked) {
                return false;
            }
        }
        return true;
    }
});

// Hàm để cập nhật tổng số dòng
function updateTotalRows() {
    var rows = document.getElementById("data-table").getElementsByTagName("tr");
    var totalRows = rows.length - 1;
    document.getElementById("soluongtongsanpham").innerText = totalRows;
}

document.addEventListener("DOMContentLoaded", function () {
    updateTotalRows();
});

// Hàm để cập nhật số lượng sản phẩm và trạng thái
function updateStatusCount() {
    // Lấy danh sách tất cả các dòng trong bảng
    var rows = document.getElementById("data-table").getElementsByTagName("tr");

    // Tính số lượng sản phẩm cho mỗi trạng thái
    var countInProgress = 0;
    var countDone = 0;
    var countCancelled = 0;

    for (var i = 1; i < rows.length; i++) { // Bắt đầu từ 1 để bỏ qua header
        var statusCell = rows[i].getElementsByTagName("td")[10].innerText;

        if (statusCell.includes("Đang làm")) {
            countInProgress++;
        } else if (statusCell.includes("Đã hoàn thành")) {
            countDone++;
        } else if (statusCell.includes("Đã huỷ")) {
            countCancelled++;
        }
    }

    // Cập nhật số lượng và hiển thị vào các div tương ứng
    document.getElementById("soluongsanphamdanglam").innerText = countInProgress;
    document.getElementById("soluongsanphamdahoanthanh").innerText = countDone;
    document.getElementById("soluongsanphamdahuy").innerText = countCancelled;
}

document.addEventListener("DOMContentLoaded", function () {
    // Gọi hàm cập nhật số lượng sản phẩm và trạng thái khi trang được tải
    updateStatusCount();
});


document.getElementById('filter-button').addEventListener('click', function () {
    var nameFilter = document.getElementById('search-name').value.toLowerCase();
    var groupFilter = document.getElementById('search-dropdown-group').value.toLowerCase();
    var statusFilter = document.getElementById('dropdown-status').value.toLowerCase();
    var creatorFilter = document.getElementById('search-by-name').value.toLowerCase();

    var rowIndex = 0; // Số thứ tự dòng
    for (var i = 1; i < document.getElementById('data-table').rows.length; i++) {
        var nameColumn4 = document.getElementById('data-table').rows[i].cells[4].innerText.toLowerCase(); // Cột mã sản phẩm
        var nameColumn5 = document.getElementById('data-table').rows[i].cells[5].innerText.toLowerCase(); // Cột tên sản phẩm
        var group = document.getElementById('data-table').rows[i].cells[6].innerText.toLowerCase(); // Cột nhóm sản phẩm
        var status = document.getElementById('data-table').rows[i].cells[10].innerText.toLowerCase(); // Cột trạng thái
        var creator = document.getElementById('data-table').rows[i].cells[9].innerText.toLowerCase(); // Cột người tạo

        var nameMatches = nameColumn4.includes(nameFilter) || nameColumn5.includes(nameFilter);
        var groupMatches = group.includes(groupFilter);
        var statusMatches = status.includes(statusFilter);
        var creatorMatches = creator.includes(creatorFilter);

        // Hiển thị dòng nếu có bất kỳ điều kiện nào khớp
        if (nameMatches && groupMatches && statusMatches && creatorMatches) {
            document.getElementById('data-table').rows[i].style.display = '';
            rowIndex++;
            // Cập nhật số thứ tự
            document.getElementById('data-table').rows[i].cells[0].innerText = rowIndex;
        } else {
            document.getElementById('data-table').rows[i].style.display = 'none';
        }
    }
});



function checkRadio(radioId) {
    var dataTableIds = [
        'data-table',
        'data-table-yesterday',
        'data-table-this-week',
        'data-table-last-week',
        'data-table-this-month',
        'data-table-last-month',
        'data-table-this-year',
        'data-table-last-year',
        'data-table-other-select'
    ];

    for (var i = 0; i < dataTableIds.length; i++) {
        var tableElement = document.getElementById(dataTableIds[i]);

        if (tableElement) {
            tableElement.style.display = 'none';
        } else {
            console.error("Phần tử không tồn tại:", dataTableIds[i]);
        }
    }
}



// Hàm để cập nhật tổng số sản phẩm
function updateTotalProducts(dataTable) {
    var totalProducts = 0;

    // Lấy danh sách tất cả các dòng trong bảng
    var rows = dataTable.getElementsByTagName("tr");

    // Bắt đầu từ 1 để bỏ qua header
    for (var i = 1; i < rows.length; i++) {
        // Tăng tổng số sản phẩm
        totalProducts++;
    }

    // Lấy giá trị số lượng sản phẩm hiển thị mỗi trang
    var dropdown = document.getElementById("dropdown-row-per-page");
    var selectedValue = parseInt(dropdown.value);

    // Hiển thị thông tin kết quả
    var resultInfo = document.getElementById("result-info");
    var startIndex = 1;
    var endIndex = Math.min(startIndex + selectedValue - 1, totalProducts);

    resultInfo.innerText = "Hiển thị kết quả từ " + startIndex + " - " + endIndex + " trên tổng " + totalProducts;
}

