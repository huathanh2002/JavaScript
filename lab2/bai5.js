var a = prompt("nhập số dự đoán :");
var x = 10 + Math.round(Math.random() * 5);

if (a == x) {
    alert("Chúc Mừng bạn đã đoán đúng");
} else 
if (a < x) {
    alert("Số của bạn nhỏ hơn số bí mật");
} else {
    alert("Số của bạn lớn hơn số bí mật");
}