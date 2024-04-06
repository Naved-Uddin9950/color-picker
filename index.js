const picker = document.getElementById('picker');
const copy = document.querySelector('.copy');
const copyBox = document.querySelector('.copiedText');

let color = 'black';

picker.addEventListener('change', () => {
    try {
        color = picker.value;
        copy.innerHTML = color;
    } catch (error) {
        console.error(`Picker error : ${error}`);
    }
});

copy.addEventListener('click', () => {
    try {
        navigator.clipboard.writeText(copy.innerText);
        copyBox.innerHTML = `${color} copied`;
        copyBox.style.display = 'block'
        setTimeout( () => {
            copyBox.style.display = 'none';
        }, 2000);
    } catch (error) {
        console.error(`Copy error : ${error}`);
    }
});

