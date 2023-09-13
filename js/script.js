function luas() {
    var s = document.getElementById('s').value;
    var luas = s * s;
    document.getElementById('luas').innerHTML = luas;
}

function keliling() {
    var s = document.getElementById("s").value;
    var keliling = 4 * s;
    document.getElementById("keliling").innerHTML = keliling;
}

function reset(){
    document.getElementById("frm").reset();
}