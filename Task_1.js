sum_button.onclick = function () {
    let a = document.getElementById("number_1").value;
    let b = document.getElementById("number_2").value;
    let maxLen = a.length > b.length ? a.length:b.length;
    let result = ((Number(a)*(10**maxLen))+(Number(b)*(10**maxLen)))/(10**maxLen);
    alert(result);
};