console.log("hello from js");
//declare variables
var x = 3; //old way to do it, prone to global scope
let y = 4; //scoped variables
const c = 5; //const value should not be changed
//IIFE https://developer.mozilla.org/en-US/docs/Glossary/IIFE
//Protect this data from being in global scope
//how to get the data from the IIFE
let pokemonRepository = (() => {//IIFE scope
    //this data is considered private / protected / hidden
    let pokemonList = []
    //allow people to access via a predefined function
    function getAll(){
        debugger
        return pokemonList
    }
    //only way to put data in with some validations
    function add(pokemon){
        if(pokemon == null){
            throw new Error("Pokemon can't be null")
        }
        if(pokemon.name == undefined){
            throw new Error("Pokemon must have a name")
        }
        //if valid add to list
        pokemonList.push(pokemon)
    }
    return {add, getAll}
}//END IIFE scope
)()//execute IIFE to assign to the var

//global scope, cannot access private, use getter
console.log("list", pokemonRepository.getAll())
//add pikcachu with error handling using setter
try {
    //get user input
    pokemonRepository.add({name: 'pikachu'})    
} catch (error) {
    window.alert(error)
}
//use getter to validate scoped data changed
console.log("list", pokemonRepository.getAll())
