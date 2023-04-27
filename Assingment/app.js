//khai báo biến mảng ảnh
var mangAnh = [];
var currentIndex = 0;
var autoslide;
for (var i = 0; i <= 7; i++) {
    mangAnh[i] = new Image();
    mangAnh[i].src = "img/anh" + i + ".jpg";
}
auto();
//hàm chạy tự động
function auto() {
    document.getElementById("anh").src = mangAnh[currentIndex].src;//hiển thị ảnh

    if (currentIndex == 7) { //kiểm tra nếu đang ở ảnh 5
        currentIndex = 0;//lập tức quay vể ảnh 0
    } else {
        currentIndex++//ảnh tiếp theo 
    }
    autoslide = setTimeout(auto, 1500); //xét tự động chạy 1 giây
}

//thiết lập vị trí ảnh
function TroLai() {//biến lùi 
    clearTimeout(autoslide);
    if (currentIndex == 0) {//nếu ảnh hiện tại là ảnh đầu sẽ chuyển sang ảnh cuối
        currentIndex = mangAnh.length - 1;
    } else {//xét nếu ko phải ảnh đầu thì chuyển sang ảnh lùi về trước đó
        currentIndex--;
    }
    document.getElementById("anh").src = mangAnh[currentIndex].src; //hiển thị ảnh mới lùi về
}
function NEXT() {//biến tiến
    clearTimeout(autoslide);//dừng chạy tự động
    if (currentIndex == mangAnh.length - 1) {//nếu hiện tại đang là ảnh cuối sẽ chuyển sang ảnh đầu
        currentIndex = 0;
    } else {//xét nếu ko phải ảnh cuối thì chuyển sang ảnh tiếp theo
        currentIndex++;
    }
    document.getElementById("anh").src = mangAnh[currentIndex].src;//hiển thị ảnh mới tiếp theo
}
function anhDau() {
    currentIndex = 0; // Thiết lập lại vị trí hiện tại của ảnh
    document.getElementById("anh").src = mangAnh[currentIndex].src; // Hiển thị ảnh đầu tiên
    clearTimeout(autoslide); // Dừng chế độ tự động
}
function anhCuoi() {
    currentIndex = mangAnh.length - 1; // Thiết lập lại vị trí hiện tại của ảnh
    document.getElementById("anh").src = mangAnh[currentIndex].src; // Hiển thị ảnh cuối cùng
    clearTimeout(autoslide);
}