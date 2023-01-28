const encriptar = (mensaje) =>{
    mensaje = mensaje.replace(new RegExp("e","g"),"enter");
    mensaje = mensaje.replace(new RegExp("i","g"),"imes");
    mensaje = mensaje.replace(new RegExp("a","g"),"ai");
    mensaje = mensaje.replace(new RegExp("o","g"),"ober");
    mensaje = mensaje.replace(new RegExp("u","g"),"ufat");
    return mensaje;
}

const desencriptar = (mensaje) => {
    mensaje = mensaje.replace(new RegExp("enter","g"),"e");
    mensaje = mensaje.replace(new RegExp("imes","g"),"i");
    mensaje = mensaje.replace(new RegExp("ai","g"),"a");
    mensaje = mensaje.replace(new RegExp("ober","g"),"o");
    mensaje = mensaje.replace(new RegExp("ufat","g"),"u");
    return mensaje;
}

export const encriptar_desencriptar ={
    encriptar,
    desencriptar
}