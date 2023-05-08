// dichiariamo le variabili
const input = prompt("inserisci una parola");

// diamo un nome alla funzione
const pali = palindromo(input);

// lunghezza della parola
const len = input.length;

function palindromo(input){
    // i va ad incrementare lettera per lettera 
    for(let i= 0; i < input.lenght; i++){
        
        // se la prima e diversa dall' ultima, la seconda dalla penultima, la terza dalla terzultima e così via 
        if(input[i]!== input[len -1 -i]){
            return "non è palindromo";
    
        }
        
    }
    
    return "è palindromo";

}

console.log(pali);