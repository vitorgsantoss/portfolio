function sendMessage(event){
    event.preventDefault()

    const name = document.getElementById('nome').value
    const input_subject = document.getElementById('assunto').value
    const input_msg = document.getElementById('mensagem').value
    const email = 'vitor.santos800411@gmail.com'
    
    const msg = `Olá! Meu nome é ${name}. ${input_msg}`
    const subject_email= encodeURIComponent(input_subject)
    const msg_formatted = encodeURIComponent(msg)
    const url = `mailto:${email}?subject=${subject_email}&body=${msg_formatted}`
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

