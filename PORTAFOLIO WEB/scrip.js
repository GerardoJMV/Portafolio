//Funcion que aplica el estil a la opcion seleccionada en el menu y quita la previamente seleccionado 
function seleccionar(link){
   var opciones = document.querySelectorAll('#links a'); 
   opciones[0].className = "";
   opciones[1].className = "";
   opciones[2].className = "";
   opciones[3].className = "";
   opciones[4].className = "";
   link.className = "seleccionado";

   //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion en el modo responsive
   var x = document.getElementById("nav");
   x.className = "";
}
//Funcion que muestra el menu Responsive
function responsiveMenu(){
    var x = document.getElementsById("nav");
    if(x.className===""){
        x.className = "res[ponsive";
    }else{
        x.className = "";
    }
}

 //Detecto el scrolling para aplicar la animacion de las barra de habilidades
 window.onscroll = function(){
    efectoHabilidades()
};

//Funcion que aplica la animacion de la barra de habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("html").classList.add("barra-progreso2");
        document.getElementById("html").classList.add("barra-progreso3");
        document.getElementById("html").classList.add("barra-progreso4");
    }
}