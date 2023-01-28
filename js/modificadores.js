 const modificarSpan = () =>{
    const divMensajeLetras = document.querySelector('.divMensajeLetras');
    divMensajeLetras.classList.add('colorRojo');
    setTimeout(() => {
        divMensajeLetras.classList.remove('colorRojo');
        const spanMensaje = document.getElementById('spanMensaje');
        spanMensaje.textContent = 'Solo letras minúsculas y sin acentos'
    }, 2000);
}
const modificarPlaceholder = () =>{
    document.getElementsByName('mensaje')[0].placeholder='Para Encriptar/Desencriptar es necesario ingresar una frase';
    const areaMensaje = document.querySelector('.AreaMensaje');
    areaMensaje.setAttribute('id','AreaMensajeColorRojo');
    setTimeout(()=>{
        document.getElementsByName('mensaje')[0].placeholder='Ingrese el texto aqui_';
        areaMensaje.removeAttribute("id");
    },2000);
}

export const modificadores = {
    modificarSpan,
    modificarPlaceholder
}