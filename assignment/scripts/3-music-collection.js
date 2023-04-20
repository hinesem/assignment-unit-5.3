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