
function convertMBToBits(number, system="mac") {
    console.log("converting these mb to bits")
    console.log(number)
    let base = 1000

    if (system.toLowerCase() == "win") {
        base = 1024
    }
    
    return ((number * (base * base)) * 8)
}

function convertGBToBits(number, system="mac") {
    let base = 1000

    if (system.toLowerCase() == "win") {
        base = 1024
    }
    
    return ((number * (base * base * base)) * 8)
}

function convertBitsToMB(bits, system="mac") {
    let base = 1000

    if (system.toLowerCase() == "win") {
        base = 1024
    }

    return ((bits / (base * base)) / 8).toFixed(3)
}

function convertBitsToGB(bits, system="mac") {
    console.log("converting these bits into gb")
    console.log(bits)
    let base = 1024

    if (system.toLowerCase() == "win") {
        base = 1024
    }

    return ((bits / (8 * base * base * base))).toFixed(2)
}

function addResult(result, unit) {
    document.querySelector("#result").innerHTML = `In ${unit.toUpperCase()}: ${result}`
}

function calculate() {
    // Get all numbers needed
    let sizeInput = document.querySelector("#size").value;
    let sys = "";
    let outSys = "";
    let bits = -1;
    let inUnit = ""
    
    if (document.getElementById("mac").checked) {
        sys = "mac";
    }
    else if (document.getElementById("win").checked) {
        sys = "win";
    }
    
    if (document.getElementById("mb").checked) {
        bits = convertMBToBits(sizeInput, sys);
        inUnit = "mb"
    }
    else if (document.getElementById("gb").checked) {
        bits = convertGBToBits(sizeInput, sys);
        inUnit = "gb"
    }
    
    if (document.getElementById("out-mac").checked) {
        outSys = "mac";
    }
    else if (document.getElementById("out-win").checked) {
        outSys = "win";
    }

    if (document.getElementById("out-mb").checked) {
        let outMb = convertBitsToMB(bits, outSys);
        addResult(outMb, "mb");
    }
    else if (document.getElementById("out-gb").checked) {
        let outGb = -1
        if (inUnit == "mb") {
            // Make sure output is used as expected
            let tempMb = convertBitsToMB(bits, outSys);
            outGb = (tempMb / 1000).toFixed(4)
        }
        else if (inUnit == "gb") {
            outGb = convertBitsToGB(bits, outSys)
        }

        addResult(outGb, "gb");
    }
}

document.querySelector("#calc").addEventListener("click", calculate)