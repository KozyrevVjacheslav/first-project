$(document).keydown(function (event) {
    let EK = (event.key);
    document.querySelector('.value1').innerHTML = EK;
    document.querySelector('.valueMain').innerHTML = EK;
});
// //
$(document).keydown(function(event) {
    let KC = (event.keyCode);
    document.querySelector('.value2').innerHTML = KC;  
});
//
$(document).keydown(function (event) {
    let EC = (event.code);
    document.querySelector('.value3').innerHTML = EC;
});
//
$(document).keypress(function(e){
    let show = String.fromCharCode(e.which);
    $('.wrap').addClass('show');
});
$(document).keyup(function(){
    $(".show").removeClass('hide');
});
//
$(document).keypress(function(e){
    let center = String.fromCharCode(e.which);
    $('.center').addClass('header');
});
$(document).keyup(function(){
    $(".header").removeClass('center');
});