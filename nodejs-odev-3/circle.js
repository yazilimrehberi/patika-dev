const pi = Math.PI;

function circleArea(r) {
    let result = pi * r ** 2;
    console.log("Dairenin Alanı: " + result);
}

function circleCircumference(r) {
    let result = pi * r * 2;
    console.log("Dairenin Çevresi: " + result);
}

module.exports = {
    circleArea,
    circleCircumference
}