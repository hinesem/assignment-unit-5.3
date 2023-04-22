console.log('***** Music Collection *****')
let collection = [];

function addToCollection(titleOfAlbum, artistName, yearPublishedDate) {
    library = {
        title: titleOfAlbum,
        artist: artistName,
        yearPublished: yearPublishedDate,
    };
    collection.push(library);
    return collection;
}

console.log(addToCollection('Blizzard of Ozz', 'Ozzy Osbourne', 1980));
console.log(addToCollection('Love at First Sting', 'Klaus Meine', 1984));
console.log(addToCollection('Raise!', 'Maurice White', 1981));
console.log(addToCollection('Paranoid', 'Ozzy Osbourne', 1970));
console.log(addToCollection('Trash', 'Alice Cooper', 1989));
console.log(addToCollection('Diana','Diana Ross', 1980));
