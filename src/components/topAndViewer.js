const allPress = document.getElementById("allPress");
const subscribedPress = document.getElementById("subscribedPress");

const listViewIcon = document.getElementById('listViewIcon').querySelector('use');
const gridViewIcon = document.getElementById('gridViewIcon').querySelector('use');

function setColor(element, color) {
    element.setAttribute('fill', color);
}


listViewIcon.addEventListener('click', () => {
    setColor(listViewIcon, '#4362D0');
    setColor(gridViewIcon, '#14212B');
});


gridViewIcon.addEventListener('click', () => {
    setColor(listViewIcon, '#14212B');
    setColor(gridViewIcon, '#4362D0');
});


allPress.addEventListener('click', () => {
    allPress.classList.remove('available-medium16');
    allPress.classList.add('selected-bold16');
    subscribedPress.classList.remove('selected-bold16');
    subscribedPress.classList.add('available-medium16');
});

subscribedPress.addEventListener('click', () => {
    subscribedPress.classList.remove('available-medium16');
    subscribedPress.classList.add('selected-bold16');
    allPress.classList.remove('selected-bold16');
    allPress.classList.add('available-medium16');
});