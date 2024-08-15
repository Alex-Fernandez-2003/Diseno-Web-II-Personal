//Implementar la funcion iniciarReloj()
//Debe mostrar la hora actual usando windows.alert()
//Debe actualizarse y mostrarse cada minuto
//Asegurarse que la primera alerta se muestre inmediatamente al llamar la funcion

function mostrarHoraActual(){
    const ahora = new Date();
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const horaMinutos = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
    window.alert(`La hora actual es: ${horaMinutos}`)

}

function iniciarReloj() {
    mostrarHoraActual(); 
    setInterval(mostrarHoraActual, 60000); 
}

iniciarReloj();