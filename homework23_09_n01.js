function calc(a,b,c){
    if (c == "/"){
        if (b === 0) {
            console.log("На ноль делить нельзя")
        }
        else {
            console.log(a/b)
        }
    }
    else if (c == "*"){
        console.log(a*b)
    }
    else if (c == "-"){
        console.log(a-b)
    }
    else {
        console.log(a+b)
    }
}
calc(2,0.7,"*");