let rahat = 20;
let panos = 0;


document.getElementById("pelaaja-rahat").innerHTML = rahat;
document.getElementById("pelaaja-panos").innerHTML = panos;

function laitaPanos(arvo)   {
    if(panos == 0){
        panos=arvo;
    document.getElementById("pelaaja-panos").innerHTML = panos;   
    rahat = rahat - arvo;
    document.getElementById("pelaaja-rahat").innerHTML = rahat;
    }
}

function pelaa()    {
    if(panos == 0){
        alert("Laita panos")
        return;
    }
    let rullaNumero1 = Math.randomInt(1, 5)
    document.getElementById("rulla1").src = "kuvat/hedelma" + rullaNumero1 +".png";
    let rullaNumero2 = Math.randomInt(1, 5)
    document.getElementById("rulla2").src = "kuvat/hedelma" + rullaNumero2 +".png";
    let rullaNumero3 = Math.randomInt(1, 5)
    document.getElementById("rulla3").src = "kuvat/hedelma" + rullaNumero3 +".png";
    if(rullaNumero1 == rullaNumero2 && rullaNumero1 == rullaNumero3)    {
        rahat += panos * 3;
        document.getElementById("pelaaja-rahat").innerHTML = rahat;
        alert("Voitto");
    }else{
    panos = 0;
    document.getElementById("pelaaja-panos").innerHTML = panos;
    }
    if(rahat == 0 && panos == 0){
        alert("Rahat loppui");
        document.location.reload();
    }
}
