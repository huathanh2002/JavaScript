
var a = null; b = null; o = null;
function toanHang(x) {
    if (a == null) a = x;
    else { b = x; }
}
function toanTu(x) {
    o = x;
}
function ketQua() {
    switch (o) {
        case '+': alert(a + b);
            break;
        case '-': alert(a - b);
            break;
        case '*': alert(a * b);
            break;
        case '/': alert(a / b);
            break;
    }
    a = b = o = null;
}
function lam_lai() {
    a = null;
    b = null;
    o = null;
}

