var trongLuong = prompt("Nhập trọng lượng cơ thể của bạn(kg): ");
var chieuCao = prompt("Nhập chiều cao của bạn(m) :");
var BMI = trongLuong / (chieuCao * chieuCao);

if (BMI < 18.5) {
    alert("Bạn thiếu cân");
} else if (BMI >= 18.5 && BMI < 24.99) {
    alert("Bạn bình thường");
} else if (BMI >= 25 && BMI < 29.99) {
    alert("Bạn thừa cân");
} else if (BMI >= 30) {
    alert("Bạn béo phì");
}