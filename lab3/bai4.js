var arr = ['Kéo', 'Bao', 'Búa'];
var c = [0, 1, 2];
function getValue(x) {
    c = x;
    var s = Math.floor(Math.random() * 3);
    if (x == s) {
        alert("Bạn đã hòa");
    } else if (s == 0 && x == 1) {
        alert("Kéo thắng bao");
        alert("Bạn đã thắng");
    } else if (s == 1 && x == 2) {
        alert("Bao thắng búa");
        alert("Bạn đã thắng");
    } else if (s == 2 && x == 0) {
        alert("Búa thắng kéo");
        alert("Bạn đã thắng");
    } else {
        alert("Bạn đã thua");
    }
}