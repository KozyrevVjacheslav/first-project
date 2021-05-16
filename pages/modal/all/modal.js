let popup = document.getElementById('mypopup');
popupTo = document.getElementById('Btn');
popupClose = document.querySelector('.close');

popupTo.onclick = function() {
    popup.style.display = 'block';
};
popupClose.onclick = function() {
    popup.style.display = 'none';
};