//DESARROLLA AQUI TUS SOLUCIONES

/* Ejercicios Pokemon
    Ejercicio 1 - Declara una función getRandomPokemon que retorne un pokemon aleatorio
    Ejercicio 2 - Declara una función getImageAndName que retorne el nombre y la URL de la imagen de un pokemon 
    Ejercicio 3 - Declara una función que retorne el string necesario para pintar la imagen y el nombre en el DOM 
*/

/**
 * Función que conecta con la api pokemon
 * @returns información de un pokemon aleatorio
 */
const getRandomPokemon = async ()  => {
    let id = Math.floor(Math.random() * 500); // Para generar un número aleatorio y que redondee hacía abajo para no dar decimales. 1025 son el n2 de los pokemon
    //console.log(id)
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        // console.log(respuesta)
        if (respuesta.ok) {
            const datos = await respuesta.json();
            //console.log(datos);
            return datos;
        } else {
            throw "Oh, oh, error"
        }
    } catch (error) {
        //console.log(error)
        throw (error + "Pendiente de gestionar error")
    }  
}

getRandomPokemon();

/**
 * Función que conecta con api Pokemon
 * @param {*} pokemon nombre pokemon a buscar información
 * @returns nombre y url de la imagen del pokemon a buscar
 */
const getImageAndName = async (pokemon)  => {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        // console.log(respuesta)
        if (respuesta.ok) {
            const datos = await respuesta.json();
            const name = datos.name;
            const img = datos.sprites.front_default;

            return {img, name}
        } else {
            throw "Oh, oh, error"
        }
    } catch (error) {
        //console.log(error)
        throw (error + "Pendiente de gestionar error")
    }  
}

getImageAndName("ditto");


const printImageAndName = async (pokemon)  => {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        // console.log(respuesta)
        if (respuesta.ok) {
            const datos = await respuesta.json();

        // Extraer los datos del objeto
        const nombrePokemon = datos.name;
        //console.log(nombrePokemon);
        const imagenPokemon = datos.sprites.front_default
        console.log(imagenPokemon);

        return `${nombrePokemon} and ${imagenPokemon}`

        } else {
            throw "Oh, oh, error"
        }
    } catch (error) {
        //console.log(error)
        throw (error + "Pendiente de gestionar error")
    }  
}

printImageAndName("ditto"); // Pendiente de hacer

/*  Ejercicios batalla entre pokemon y perritos
    Declara una función getRandomDogImage que retorne la url de la imagen de un perro aleatorio
    Declara una función getRandomPokemonImagen que retorne la url de la imagen de un pokemon aleatorio
    Declara una función printPugVsPikachu que pinte la batalla entre "Pug" y "Pikachu"
*/

/**
 * Función que conecta con la api Perros
 * @returns imagen de un perro aleatorio
 */
const getRandomDogImage = async ()  => {
    try {
        const respuesta = await fetch(`https://dog.ceo/api/breeds/image/random`)
        // console.log(respuesta)
        if (respuesta.ok) {
            const datos = await respuesta.json();

        const imagenRandom = datos.message;

        return imagenRandom;

        } else {
            throw "Oh, oh, error"
        }
    } catch (error) {
        //console.log(error)
        throw (error + "Pendiente de gestionar error")
    }  
}

getRandomDogImage();

/**
 * Función que se conecta con la api de pokemon
 * @returns imagen de un pokemon aleatorio
 */
const getRandomPokemonImage = async ()  => {
    try {
        let id = Math.floor(Math.random() * 500);
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        // console.log(respuesta)
        if (respuesta.ok) {
            const datos = await respuesta.json();

            const imagenRandomPokemon = datos.sprites.front_default;
            //console.log(imagenRandomPokemon)
        return imagenRandomPokemon
        } else {
            throw "Oh, oh, error"
        }
    } catch (error) {
        //console.log(error)
        throw (error + "Pendiente de gestionar error")
    }  
}

getRandomPokemonImage()

/**
 * Función que se conecta con api pokemon y api perros
 * @returns url imagen pug y url imagen pikachu
 */

const printPugVsPikachu = async ()  => {
    try {
        let response1 = await fetch(`https://dog.ceo/api/breeds/image/pug`)
        let response2 = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
        if (respuesta.ok) {
            let data1 = await response1.json();
            const imagenPug = data1.message;

            let data2 = await response2.json();
            const imagenPikachu = data2.sprites.front_default;

            return `${imagenPug} vs ${imagenPikachu}`
            
        } else {
            throw "Oh, oh, error"
        }
    } catch (error) {
        //console.log(error)
        throw (error + "Pendiente de gestionar error")
    }  
}

printPugVsPikachu();

/* Ejercicios con Rick y Morty
    Declara una función getRandomCharacter que te retorne un personaje aleatorio
    Declara una función getRandomCharacterInfo que retorne de un personaje su imagen, nombre episodios en los que aparece y el nombre del primer episodio en el que aparece + fecha de estreno, tendrás que hacer otro fetch para llegar a los últimos datos Formato retorno (return {img, name, episodes, firstEpisode, dateEpisode})
    Pinta los anteriores datos en el DOM 
*/
    
/**
 * Función que se conecta con la api de Rick y Morty
 * @returns información de un personaje aleatorio
 */
const getRandomCharacter = async ()  => {
    const id = Math.floor(Math.random() * 500);
    try {
        let response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        if (response.ok) {
            let data = await response.json();

            return data;
            
        } else {
            throw "Oh, oh, error"
        }
    } catch (error) {
        //console.log(error)
        throw (error + "Pendiente de gestionar error")
    }  
}

getRandomCharacter();

const getRandomCharacterInfo = async ()  => {
    const id = Math.floor(Math.random() * 500);
    try {
        let response1 = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        let response2 = await fetch(`https://rickandmortyapi.com/api/episodes/`)
        if (response1.ok) {
            let data1 = await response1.json();
            
            const img = data1.image;
            //console.log(img)
            const name = data1.name;
            //console.log(name)

            let data2 = await response2.json();
            console.log(data2)
            //const episodes = data2.
            //const firstEpisode = 
            //const dateEpisode =  
        } else {
            throw "Oh, oh, error"
        }
    } catch (error) {
        //console.log(error)
        throw (error + "Pendiente de gestionar error")
    }  
}

getRandomCharacterInfo()



    
    

    

    





