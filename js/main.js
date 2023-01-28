import { validarTextArea } from "./validarTextArea.js";
import { modificadores } from "./modificadores.js";
import { encriptar_desencriptar } from "./encriptar_desencriptar.js";
import { modificarDivMostrarTexto } from "./modificarDivMostrarTexto.js";

const obtenerTexto = (e) => {
    const textArea = document.querySelector("[data-textarea]");
    if (textArea.value.length > 0){
        if (!validarTextArea(textArea)){
            if(e.target.id === 'btnEncriptar'){                
                const mensaje = encriptar_desencriptar.encriptar(textArea.value); 
                if(window.getComputedStyle(document.querySelector('.divLabelTexto')).getPropertyValue('display') === 'flex'){
                    modificarDivMostrarTexto();
                }      
                document.querySelector('.AreaEncriptado').value = mensaje;
            }else if(e.target.id === 'btnDesencriptar'){
                const mensaje = encriptar_desencriptar.desencriptar(textArea.value);
                if(window.getComputedStyle(document.querySelector('.divLabelTexto')).getPropertyValue('display') === 'flex'){
                    modificarDivMostrarTexto();
                }
                document.querySelector('.AreaEncriptado').value = mensaje;         
            }    
        } else{
            const spanMensaje = document.getElementById('spanMensaje');
            spanMensaje.textContent = 'No ingresar espacios al inicio de la frase, mayusculas o numeros en el contenido';
            modificadores.modificarSpan();
        }
    }else {
        modificadores.modificarPlaceholder();
    }
}

const copiarTexto = (e) => {
    let copyText = document.querySelector(".AreaEncriptado");
    copyText.select();
    document.execCommand("copy");
    document.querySelector('.AreaEncriptado').value = '';
    document.getElementsByName('mensajeEncriptado')[0].placeholder='Su texto ha sido copiado al porta papeles.';
    setTimeout (()=>{
        document.getElementsByName('mensajeEncriptado')[0].placeholder='';
    },3000);
}

const btnEncriptar = document.getElementById('btnEncriptar');
const btnDesencriptar = document.getElementById('btnDesencriptar');
const btnCopiar = document.getElementById('btnCopiar');
btnEncriptar.addEventListener('click', obtenerTexto);
btnDesencriptar.addEventListener('click', obtenerTexto);
btnCopiar.addEventListener('click',copiarTexto);

