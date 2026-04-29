function caixinha9() {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let total = Number(numero1) + Number(numero2);
    let caixa = document.getElementById("resultado");
    caixa.value = total;
}
    