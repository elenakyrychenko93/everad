$(document).ready(function () {

    var productQuantity="010"//введите количество продукта без пробелов
    var quantity = productQuantity.split("");
    var hundred = quantity[0];
    var decade = quantity[1];
    var unit = quantity[2];


    $(".hundred span").text(hundred);
    $(".decade span").text(decade);
    $(".unit span").text(unit);


    if (hundred == 0) {
        $(".hundred").addClass("inactive")};

    if (decade == 0 && hundred == 0) {
        $(".decade").addClass("inactive")};

    if (unit == 0 && decade == 0 && hundred == 0) {
        $(".unit").addClass("inactive")};

});

