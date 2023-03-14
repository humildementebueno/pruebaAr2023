const boton1 = document.querySelector(".button1");
const bnHome = document.querySelector(".btn-home");
const bnCarreras = document.querySelector(".btn-carreras");

function volverAtras(){
    console.log('hola soy el boton volverAtras')
    location.href = 'index.html';
}
/**Home */
function BtnHomeSig(){
    console.log('hola soy el boton BtnHomeSig')
    location.href = 'unidadesAdmi.html';
}
/**Unidades Administrativas */
function BtnUniAdmiSig(){
    console.log('hola soy el boton BtnUniAdmiSig')
    location.href = 'carreras.html';
}
/**Carreras */
function BtnCarrerasSig(){
    console.log('hola soy el boton BtnCarrerasSig')
    location.href = './ar/ar-web.html';
    // location.href = '../../paginaAR.html';
}
