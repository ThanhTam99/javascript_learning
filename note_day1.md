1. Command block: /**
2. Built-in function: hàm js build sẵn
    1. Alert
    2. Console
    3. Confirm
    4. Prompt
    5. Set timeout
    6. Set interval
    // Chay 1 lan 1 doan code
    setTimeout(function () {
        alert("Test")
    }, 1000)
    // Chay lien tuc 1 doan code
    setInterval(function () {
        console.log("This is log");
    },3000)

3. Toan tu
    1. Arithmetic: * / + - ** % ++ --
    2. Assignment =
    3. Comparison: > < ==
    4. Logical: && || 

    var a = 0
    // In truoc + sau
    console.log(a++); // 0
    console.log(a); // 1

    // In truoc + sau
    console.log(++a); // 2
    console.log(a); // 2

    var num = 6
    // var output = num++ * 2 + --num * 2 // 6 * 2 + 6 * 2
    var output = ++num * 2 - num-- * 2 // 7 * 2 - 7 * 2
    console.log(output);

4. Boolean
    var age = 16
    var canBuyAlcohol = age >=18
    console.log(canBuyAlcohol)

5. Js variable type
    1. 0
    2. false
    3. '' - ""
    4. undefined
    5. NaN
    6. null
    Trong if(convert to bool va khac 6 type tren thi se luon la true)