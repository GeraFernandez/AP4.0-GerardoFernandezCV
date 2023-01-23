//FUNCION QUE APLICA COLOR SOLO EN EL ITEM SELECCIONADO
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    opciones[5].className = "";
    link.className = "seleccionado";


    var x = document.getElementById("nav");
    x.className = "";
}

//FUCNION PARA MOSTRAR EL MENU RESPONSIVE
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//FUNCION PARA QUE CUANDO SE DETECTE EK SCROLLEO EN LA SECCION HABILIDADES E MUESTRE LA ANIMACION
window.onscroll = function() { efectoHabilidades() };

//FUNCION PARA LAS ANIUMACIONES DEL AREA DE HABILIDADES
function efectoHabilidades() {
    var habilidades = document.getElementById("habilidades");
    var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
    if (distancia_habilidades >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("c#").classList.add("barra-progreso4");
    }

}