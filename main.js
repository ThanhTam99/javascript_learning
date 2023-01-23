// Chứa tham số
function showDialog(message, message2) {
    console.log(message, message2);
}
// Chứa đối số
showDialog('Hi', 'Các Bạn')

// Đối tượng arguments của hàm console log trong function
function writeLog(){
    console.log(arguments);
}
writeLog('Test1', 'Test2') // => in ra 1 arguments chứa 2 phần tử kiểu mảng

// Dùng for of
function writeForOfLog(){
    var myString = ''
    for (var param of arguments) {
        myString += `${param} - `
    }
    console.log(myString)
}
writeForOfLog('Log1', 'Log2')