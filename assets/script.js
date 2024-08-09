alert()
for (let i =5; i <10; i++){
     console.log(i);
}

//crear ejemplo que emprima hasta 20
const frutas = ["manzana","uva","pera","naranja"];
for(let i = 0;i <frutas.length; i++){
    console.log(frutas[i]);
}

//ejemplo5
for(let i=0; i<=10; i += 2){
    console.log(i);
}
const equipo1 = ["Asunciòn","Rupay","Adamaris", "Sayuri","Kiara"];
let lista = " ";
for (let i = 0; i <equipo1.length; i++) {
    lista += `<li>${equipo1[i]}</li>`;
}

document.getElementById("integrantes").innerHTML = `<ul>${lista}</ul>`;
document.getElementById("lider").innerText = equipo1[2]