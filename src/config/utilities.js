export const Capitalize = (texto) => {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();

};

export const getDateFormat = (fecha) => {
    var newfecha = new Date(fecha);
    const year = newfecha.getFullYear();
    const mes =  newfecha.getMonth() + 1;
    const month = mes < 10 ? "0" + mes: mes;
    const day = newfecha.getDate() < 10 ? "0" + newfecha.getDate() : newfecha.getDate();
    return day + "/" + month + "/" + year;
}