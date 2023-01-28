export const modificarDivMostrarTexto = () => {
    document.querySelector('.divLabelTexto').style.display = 'none';
    document.querySelector('.btnBlanco').style.display = 'flex';
    document.querySelector('.divAreaEncriptado').style.display = 'flex';
    document.getElementById('divMostrarTexto').style.justifyContent = 'space-between';
}