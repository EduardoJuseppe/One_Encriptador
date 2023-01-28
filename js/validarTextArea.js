export const validarTextArea = (textArea) => {
    const regxs = {
        "restricciones": /^\s|[A-Z]|[\á\é\í\ó\ú]|[0-9]|\s$/,
    }
    if (regxs.restricciones.test(textArea.value)) 
        return true;
    else
        return false;
}