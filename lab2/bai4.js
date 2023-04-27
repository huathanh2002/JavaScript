var theList = ['Lauren', 'Kevin', true, 35, null, undefined, ['one', 'two']];
console.log(theList);

theList.splice(0, 1); // xóa phần tử đầu tiên
console.log(theList);

theList.pop(); // xóa phần tử cuối cùng
console.log(theList);

theList.splice(0, 0, "FIRST"); //thêm 'FIRST' vào đầu mảng
console.log(theList);

theList.splice(4, 0, "hello world"); //thêm 'hello world' vào vị trí thứ 4 của mảng
console.log(theList);

theList.splice(3, 0, "middle"); // thêm 'middle' vào vị trí thứ 3 của mảng
console.log(theList);

theList.push("LAST"); // thêm 'LAST' vào cuối mảng
console.log(theList);