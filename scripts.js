function sendMessage(event){
    event.preventDefault()

    const name = document.getElementById('nome').value
    const input_msg = document.getElementById('mensagem').value
    const telephone = '5515997592983'
    
    const msg = `Olá! Meu nome é ${name}.
    ${input_msg}`
    const msg_formatted = encodeURIComponent(msg)
    const url = `https://wa.me/${telephone}?text=${msg_formatted}`

    window.open(url, '_blank')

}

function openMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

document.getElementById('menuIcon').addEventListener('click', openMenu);
const buttons = document.querySelectorAll('a.menu-link');
buttons.forEach(button => {
    button.addEventListener('click', openMenu);
});