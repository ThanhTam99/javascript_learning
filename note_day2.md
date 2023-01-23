Kieu du lieu

1. Du lieu nguyen thuy - primitive data
    - Number
    - String
    - Boolean
    - Undefined
    - Null
    - Symbol
    => Tạo biến và gán 1 giá trị, máy tính tạo 1 vùng nhớ và khi gán biến đó với giá trị khác thì máy sẽ tạo một vùng nhớ khác và không sửa được giá trị cho vùng nhớ đã tạo trước đó
    var id = Symbol('id') // unique
    var id2 = Symbol('id') // unique
    console.log(id === id2) // false
2. Du lieu phuc tap - complex data
    - Function
    var myFunction = function () {
        alert("Hello")
    }
    myFunction()
    - Object
        1. Object types
        var myObject = {
            name: 'tam',
            age: 18,
            myFunction: function(){
            }
        }
        2. array
        var myArray = [
            'js',
            'php',
            'ruby'
        ]
3. So sánh
    a = 1
    b = '1'
    console.log(a==b) => true, nên use === để so sánh cả kiểu dữ liệu

    Ngoại lệ: console.log(Boolean(document.all)); // false

4. Toan tu &&, toán tử || thì ngược lại
    a = 1
    b = 2
    var result = 'A' && 'B' && null && 'C' => null (thuoc 1 trong 6 falsy cua boolean) đọc value từ bên trái sang
    if (result) log('dung') else log('sai') => sai 