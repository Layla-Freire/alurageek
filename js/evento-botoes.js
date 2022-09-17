const urlLogin = 'formulario-login.html'
const btnLogin = document.querySelector('#btn-login')

function openInNewTab(url) {
    const win = window.open(url, '_blank')
    win.focus()
}
btnLogin.addEventListener('click', () => {
    openInNewTab(urlLogin)
})

