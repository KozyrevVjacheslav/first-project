
let gas = document.querySelectorAll('.gas');
for (let i = 0; i < gas.length; i++) {
    gas[i].onclick = function() {
        let liters = document.querySelector('.liters').value;            
        let sum = this.getAttribute('data');
        let select = liters * sum;
        document.querySelector('.select').innerText = select;
    }
}



