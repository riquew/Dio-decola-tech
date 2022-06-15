function changeStyle() {
    if (nowMode === 'light') {
        body.classList.add('dark-mode');
        title.innerHTML = 'Dark Mode ON'
        modeButton.classList.add('dark-mode');
        modeButton.innerHTML = 'Light Mode'
        footer.classList.add('dark-mode');
        nowMode = 'dark';
    } else {
        body.classList.remove('dark-mode');
        title.innerHTML = 'Light Mode ON'
        modeButton.classList.remove('dark-mode');
        modeButton.innerHTML = 'Dark Mode'
        footer.classList.remove('dark-mode');
        nowMode = 'light';
    }
}

const modeButton = document.querySelector('#mode-selector');
const body = document.querySelector('body');
const footer = document.querySelector('footer')
const title = document.querySelector('#page-title')

let nowMode = 'light'

modeButton.addEventListener('click', changeStyle)
