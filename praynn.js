function testLet() {  
    let x = 1;  

    if (x === 1) {  
        let x = 2;  
        console.log(x);  
    }  

    console.log(x);  
}  

function testConst() {  
    const number = 42;  

    try {  
        number = 99;  
    } catch (err) {  
        console.log("Error:", err.message);  
    }  
}  

function testVar() {  
    var x = 1;  

    if (x === 1) {  
        var x = 2;  
        console.log(x);  
    }  

    console.log(x);  
}  

testVar();  
testLet();  
testConst();