// Chiediamo all'utente di scegliere tra pari o dispari
let pariODispari = prompt('Scegli tra pari o dispari');
console.log('hai scelto', pariODispari);
// Chiediamo di inserire un numero da 1 a 5 
let numeroUtente = parseInt(prompt('Scegli un numero da 1 a 5'));
console.log('il tuo numero è',numeroUtente);

// Funzioni

// Generiamo un numero random da 1 a 5 (funzione)
function generaNumeroRandom (min, max){
    const numeroRandom = Math.floor(Math.random() * (max - min)) + min;
    return  numeroRandom

}

let numeroRandom1 = generaNumeroRandom(1 , 5);
console.log('il numero generato è',numeroRandom1);

// Sommiamo i due numeri stabilendo se la somma è pari o dispari (funzione)
function somma (){
    const sommaNumeri = (numeroUtente + numeroRandom1);
    console.log('la somma del tuo numero e il numero generato è',sommaNumeri);
    if(sommaNumeri % 2 === 0){
       return 'pari'
    }else{
        return 'dispari'
    }   
}
let risultatoPariODispari = somma(numeroUtente + numeroRandom1)
console.log( 'il risultato è', risultatoPariODispari);

// Dichiariamo chi ha vinto
if(risultatoPariODispari===pariODispari){
    console.log('Hai vinto');
}else{
    console.log('Hai perso');

}