let vogais = ['a', 'e', 'i', 'o', 'u'];

let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v','w', 'x', 'y', 'z'];

let texto = "Rei de Roma";

texto = texto.toLowerCase();

let arrayLetras = texto.split('');

let arrayVogais = [];

let arrayConsoantes = [];

for(let i = 0; i < arrayLetras.length; i++){
    if(vogais.includes(arrayLetras[i])){
        arrayVogais.push(arrayLetras[i]);
    }
}
for(let i = 0; i < arrayLetras.length; i++){
    if(consoantes.includes(arrayLetras[i])){
        arrayConsoantes.push(arrayLetras[i]);
    }
  
}

console.log("Texto original: ", texto);
console.log("Vogais encontradas: ", arrayVogais.toString());
console.log("Total de vogais: " + arrayVogais.length)
console.log("Vogais encontradas: ", arrayConsoantes.toString());
console.log("Total de consoantes: " + arrayConsoantes.length)