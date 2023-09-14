function luas() {
    var s = document.getElementById('s').value;
    var luas = s * s;
    var sisi1 = document.getElementsByClassName('sisi1');
    var sisi2 = document.getElementsByClassName('sisi2');
    sisi1[0].innerText = s;
    sisi2[0].innerText = s;
    document.getElementById('luas').innerHTML = luas;
}

function keliling() {
    var s = document.getElementById("s").value;
    var keliling = 4 * s;
    var sisi3 = document.getElementsByClassName("sisi3");
    sisi3[0].innerText = s;
    document.getElementById("keliling").innerHTML = keliling;
}

function reset() {
    document.getElementById("frm").reset();
}