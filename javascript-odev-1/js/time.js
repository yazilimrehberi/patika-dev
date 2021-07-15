function isim() {
    let deger = prompt("Adınız nedir?");
    document.getElementById("name").innerHTML = deger;
}

function zaman() {
    let tumZaman = new Date();
    let saat = tumZaman.getHours();
    let dakika = tumZaman.getMinutes();
    let saniye = tumZaman.getSeconds();
    let gun = tumZaman.getDay();

    switch(gun) {
        case 1:
            gun = "Pazartesi"
            break;
        case 2:
            gun = "Salı"
            break;
        case 3:
            gun = "Çarşamba"
            break;
        case 4:
            gun = "Perşembe"
            break;
        case 5:
            gun = "Cuma"
            break;
        case 6:
            gun = "Cuma"
            break;
        case 7:
            gun = "Pazar"
            break;
        }
    
    if (saat < 10) {
        saat = "0" + saat;
    }
    if (dakika < 10) {
        dakika = "0" + dakika;
    }
    if (saniye < 10) {
        saniye = "0" + saniye;
    }

    document.getElementById("myTime").textContent = saat + ":" + dakika + ":" + saniye + " " + gun;
    setTimeout(zaman,1000);
}

isim();
zaman();