var a = Number(prompt("Toán hạng a: "));
var b = Number(prompt("Toán hạng b: "));
var o = prompt("Toán tử: ");
switch (o) {
    case '+':
        var kq = a + b;
        alert("Tổng: " + kq);
        break;
    case '-':
        var kq = a - b;
        alert("Hiệu: " + kq);
        break;
    case '*':
        var kq = a * b;
        alert("Tích " + kq);
        break;
    case '/':
        var kq = a / b;
        alert("Thương: " + kq);
        break;
    default:
        alert(o + " không phải là toán tử");
        break;
}