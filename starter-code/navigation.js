
// icons color change function

const navIcons = document.querySelectorAll('.icon');
let activeEl = null;
const active_icons = () => {
    for (let i = 0; i < navIcons.length; i++) {
        navIcons[i].addEventListener('click', function () {
            if (activeEl !== null) {
                activeEl.style.filter = 'none';
            }
            activeEl = navIcons[i];
            activeEl.style.filter = 'brightness(0) invert(1)';
        });
    }
}

active_icons()

