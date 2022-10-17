var siteName = document.getElementById("nameBook");
var siteurl = document.getElementById("urlSite");
var btn = document.getElementById('btn');
var bookMarker;
var upd;

(function () {

    if (localStorage.getItem("data1") == null) {
        bookMarker = [];
    } else {
        bookMarker = JSON.parse(localStorage.getItem("data1"));
        display(bookMarker);
    }
})();

function addProduct() {
    var Product = {
        name: siteName.value,
        url: siteurl.value,
    };

    bookMarker.push(Product);
    localStorage.setItem("data1", JSON.stringify(bookMarker));
    display(bookMarker)
    showMessage()
    clearForm()
}


function display(list) {
    var box = ``;
    for (var i = 0; i < list.length; i++) {
        box += `<div class=" row py-4 my-2 row_table">
        <div class=" col-lg-6">
            <h2 class=" fs-4 fw-bold ">${list[i].name}</h2>
        </div>
        <div class="  col-lg-6">
            <a class=" btn btn-primary me-2 " href="${list[i].url}" target="_blank" >visit</a>
            <button onclick=delFun(${i}) class=" btn btn-danger btndelete me-2">Delete</button>
        </div>
    </div>`;
    }

    tableRow.innerHTML = box
}


function delFun(index) {
    bookMarker.splice(index, 1);
    localStorage.setItem("data1", JSON.stringify(bookMarker));
    display(bookMarker);
}

function clearForm() {
    siteName.value = "";
    siteurl.value = "";
}



