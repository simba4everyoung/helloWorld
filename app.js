$(document).ready(function () {
    var price = $('<p>From $399.99</p>');
    $('.vacation').before(price);
    $('.vacation').append(price);
    $('button').remove();
    price.appendTo($('.vacation'));
});