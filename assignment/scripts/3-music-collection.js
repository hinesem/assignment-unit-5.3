console.log('***** Music Collection *****\n\n')
let collection = []; //create an empty array to which albums will be added


function addToCollection(titleOfAlbum, artistName, yearPublishedDate) { //function which takes 3 parameters (albmum title, artist, year)
    library = { // object called "library" containing key/value pairs
        title: titleOfAlbum,
        artist: artistName,
        yearPublished: yearPublishedDate,
    };
    collection.push(library); //push the library to the collection array
    return collection; //return the contents of the array
}

console.log(`---test addToCollection---`)
console.log(addToCollection('Blizzard of Ozz', 'Ozzy Osbourne', 1980)); //log to the console the object literals
console.log(addToCollection('Love at First Sting', 'Klaus Meine', 1984));
console.log(addToCollection('Raise!', 'Maurice White', 1981));
console.log(addToCollection('Paranoid', 'Ozzy Osbourne', 1970));
console.log(addToCollection('Trash', 'Alice Cooper', 1989));
console.log(addToCollection('Diana','Diana Ross', 1980));
console.log(`\n\n`);

console.log(`---show contents of "collection" array---`)
console.log(collection); //test to display the contents of the array
console.log(`\n\n`);

console.log(`---show contents number of items in "collection"---`)
function showCollection(collectionItems) {// function which recieves a parameter (which will be an array)
    console.log(collectionItems.length); // function will return the number of items in said array
    console.log(`\n\n`);

    console.log(`---loop over array of objects for information---`)
for(let albumItem of collectionItems) {//loop over array by each index
    console.log(`${albumItem.title} by ${albumItem.artist} published in ${albumItem.yearPublished}`); //log, via template literal, individual value of object to form a sentence
 }
}

showCollection(collection);
console.log(`\n\n`);


// google:
// Array.index.key
// tr td
// Math.random


