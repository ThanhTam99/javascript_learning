1. Hàm:
    - Một khối mã
    - Làm một việc cụ thể
2. Loại hàm
    - Built - in
    - Tự định nghĩa
3. Tính chất:
    - Không thực thi khi được định nghĩa
    - Được thực thi khi gọi
    - Có thể nhận tham số
    - Có thể trả về giá trị
4. Tham số:
    - Định nghĩa
    - Kiểu dữ liệu
    - Tính private
    - 1 tham số
    - Nhiều tham số
5. Truyền tham số
    - 1 tham số
    - nhiều tham số
6. Argument
    - Đối tượng aguments
    - Giới thiệu vòng for
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