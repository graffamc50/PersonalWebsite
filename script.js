


const switchTheme = () => {
    const rootElem = document.documentElement
    let colorTheme = rootElem.getAttribute('color-theme'),
        newTheme

    newTheme = (colorTheme === "light") ? "dark" : "light"
    rootElem.setAttribute('color-theme', newTheme)
}

document.querySelector('#theme-switcher').addEventListener('click', switchTheme)





