// let respuesta=true;
// let apostar = parseInt(document.getElementById('apostar'));
// let eleccion = document.getElementById('eleccion').value;
// const rta = document.getElementById('respuesta').value;
// const btn=document.getElementById("button");
// let saldo=0;
// // en eleccion 1 es cara y 2 sello
// let aleatorio = parseInt((Math.random() * 2) + 1);
   
//     // si cae 0 gana si cae 1 pierde
//     button.addEventListener('click', (e)=>{
       

// while(respuesta==true){
//     if(aleatorio==1 && eleccion==1){ 
//         alert("La maquina cayo cara y tu elejiste cara");
//         rta.innerHTML = 
//         `
//         <h2>USTED A GANADO :)</h2>
//         `
//         saldo = saldo + apostar;
//         alert(`Y el saldo es de: ${saldo}`);

//     }else if(aleatorio==1 && eleccion==2){
//         alert("La maquina cayo cara y tu elejiste sello");
//        rta.innerHTML = 
//         `
//         <h2>USTED A PERDIDO JIJIJA :(</h2>
//         `
//          saldo = saldo - apostar;
//    alert(`Y el saldo es de: ${saldo}`);

//     }else if(aleatorio==2 && eleccion==1){
//         alert("La maquina cayo sello y tu elejiste cara");
//         rta.innerHTML = 
//       `
//         <h2>USTED A PERDIDO JIJIJA :(</h2>
//         `
//             saldo = saldo - apostar;
//         alert(`Y el saldo es de: ${saldo}`);

//     }else if(aleatorio==2 && eleccion==2){
//         alert("La maquina cayo sello y tu elejiste sello");
//         rta.innerHTML = 
//         `
//         <h2>USTED A GANADO :)</h2>
//         `
//         saldo = saldo + apostar;
//         alert(`Y el saldo es de: ${saldo}`);
//     }
   
// }

// respuesta = confirm("Desea seguir jugando?");
    
      
// });


//esto es sin html osea simplemente se piden los datos desde alertas

let seguir=true;
    let saldo=0;
    let jugador=prompt("Ingrese el nombre del jugador");
    saldo=parseInt(prompt(`Cuanto deseas recargar para jugar`));
    while(seguir==true){
        let eleccion=prompt(`${jugador} Elige 1.cara 2.sello`);
        let apuesta=parseInt(prompt(`De tu saldo actual ${saldo} ¿cuanto deseas apostar?`));
        let moneda = Math.floor((Math.random() * 2) + 1);
      if(moneda==1 && eleccion==1){
        saldo=saldo+(apuesta*2);
        window.alert(`El lanzamiento fue cara escogiste cara tú ganas!!!, tu nuevo saldo es ${saldo} `);
      }
      else if(moneda==2 && eleccion==2){
        saldo=saldo+(apuesta*2);
        window.alert(`El lanzamiento fue sello escogiste sello tú ganas!!!, tu nuevo saldo es ${saldo} `);
      }

      else if(moneda==1 && eleccion==2){
        saldo=saldo-apuesta;
        window.alert(`El lanzamiento fue cara escogiste sello perdiste jijija!!!, tu nuevo saldo es ${saldo} `);
      }

      else if(moneda==2 && eleccion==1){
        saldo=saldo-apuesta;
        window.alert(`El lanzamiento fue sello escogiste cara tú pediste jijija!!!, tu nuevo saldo es ${saldo} `);
      }
    
      seguir=confirm("Quiere seguir jugando");

    }
