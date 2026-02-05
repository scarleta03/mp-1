


let output = document.getElementById("output");

function addme() {
    let input1 = document.getElementById("first-number").value;
    let input2 =document.getElementById("second-number").value;
    input1 = Number(input1);
    input2 = Number(input2);
    let result = input1 + input2;
    output.innerHTML = String (result);
    if(result< 0){
        output.style.color = "red";

    }
    else if(result >= 0){
        output.style.color = "black";
        }

    output.innerHTML = String (result);
}

function subme() {
    let input1 = document.getElementById("first-number").value;
    let input2 =document.getElementById("second-number").value;
    input1 = Number(input1);
    input2 = Number(input2);
    let result = input1 - input2;
    output.innerHTML = String (result);
    if(result< 0){
        output.style.color = "red";

    }
    else if(result >= 0){
        output.style.color = "black";
    }

    output.innerHTML = String (result);
}

function multiply() {
    let input1 = document.getElementById("first-number").value;
    let input2 =document.getElementById("second-number").value;
    input1 = Number(input1);
    input2 = Number(input2);
    let result = input1 * input2;
    output.innerHTML = String (result);
    if(result< 0){
        output.style.color = "red";

    }
    else if(result >= 0){
        output.style.color = "black";
    }

    output.innerHTML = String (result);
}

function power() {
    let input1 = document.getElementById("first-number").value;
    let input2 =document.getElementById("second-number").value;
    input1 = Number(input1);
    input2 = Number(input2);
    let p = input1;
    let pb = p;
    for (let i = 0; i < input2-1 ; i++) {
        p = pb * p;
    }
    output.innerHTML = String(p);

    if(p< 0){
        output.style.color = "red";

    }
    else if(p > 0){
        output.style.color = "black";
    }

    output.innerHTML = String (p);
}

function divide() {
    let input1 = document.getElementById("first-number").value;
    let input2 =document.getElementById("second-number").value;
    input1 = Number(input1);
    input2 = Number(input2);
    let result = input1 / input2;
    output.innerHTML = String (result);
    if(result< 0){
        output.style.color = "red";

    }
    else if(result > 0){
        output.style.color = "black";
    }

    output.innerHTML = String (result);
}


function clearme() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
}



