let edad = 17;
let acceso = '';
if (edad < 16) { 
    acceso = 'Prohibido';  
} else if (edad >= 16 && edad <=18){
    acceso ='permitido solo acompañado de un mayor';    
} else {
    acceso = 'permitido';
} 
console.log(acceso);

