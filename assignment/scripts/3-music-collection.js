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

artistArray = [];


function findByArtist(performer) {
    artistArray = [];
    for (let i = 0; i < collection.length; i ++) { //https://stackoverflow.com/a/8217466
        if (collection[i].artist === performer) {
            console.log(`${performer} found`);
            artistArray.push(performer);
            break; // as soon as we find a match, break. if multiple same artists exist we'd log to console every time artist exists in array
        } else {
            console.log(`${performer} not found`);
        }
    } 
    console.log(artistArray);
} 
findByArtist(`Ozzy Osbourne`);
console.log('\n\n');

// why doesn't this work? -------------------
// function findByArtist2(performer) {
//     artistArray = [];
//     for (let i of collection) { //https://stackoverflow.com/a/8217466
//         if (collection[i].artist === performer) {
//             console.log(`${performer} found`);
//             artistArray.push(performer);
//             break; // as soon as we find a match, break. if multiple same artists exist we'd log to console every time artist exists in array
//         }
//     } 
//     console.log(artistArray);
// } 
// findByArtist2(`Ozzy Osbourne`);

// console.log(`\n\n`);


// google:
// Array.index.key
// tr td
// Math.random



// will return a random number from <= 0 and less than max
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
console.log('---random number btw 0 & max (inclusive/exclusive resp.)---')
function randomNumA(max) {
    return Math.floor(Math.random() * max); // why do we need to multiply by max?
}
console.log(randomNumA(200));
console.log('\n\n');

// will return a random number btw >= min and < max
console.log('---random number btw min & max (inclusive/exclusive resp.)---')
function randomNumB(min, max) { //parameters are min value (inclusive), and max (exclusive)
    return Math.floor(Math.random() * (max - min) + min); // don't udnerstand why you need to add min again
    //math.floor rounds down, otherwise we get an floating int
}
console.log(randomNumB(1, 6)); // will log random number btw 1 and 5
console.log('\n\n');

//max will be INCLUSIVE & min as well
console.log('---random number btw min & max (inclusive/inclusive resp.)---')
function randomNumC(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // too much math for my monkey brain to understand
    
}

console.log(randomNumC(1, 300));
console.log('\n\n');

console.log(`---land navigation grid coordinate assigner---`); //https://bobbyhadz.com/blog/javascript-get-multiple-random-elements-from-array
let soldiersList = ['Hines', 'Tweten', 'Crowley', 'Stephen', 'Thao', 'Holmquist'];
let numCoordinatesPerSoldier = 6;

const gridCoordinates = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function coordinatesGenerator(soldierArray, numCoords, coordinates) {
    for(let soldier of soldierArray) {
        const shuffled = [...coordinates].sort(() => 0.5 - Math.random())
        console.log( (`${soldier}: ${shuffled.slice(0, numCoords)}`));
    }
}
coordinatesGenerator(soldiersList, 6, gridCoordinates);
console.log('\n\n');



console.log('---run time---');
const legDistance = [];
const legTimeLog = [];
let legcount = 1;
// for (let leg = 0; leg < legsInput; leg ++) {
//     numLegsArray[leg] = prompt(`enter leg ` + (leg + 1));
//     const totalTime = ((runTimeMins * 60) + runTimeSec);
    
// }

function runTimeCalculation() {
    while (true) { //loop until user enters the command to exit program
        
        const legLength = prompt(`enter distance, in miles, for leg ${legcount}: `) //ask for a distance
        legDistance.push(legLength); //append said distance to an array "legDistance"
        const quitCommand = prompt('do you have more legs to enter? (enter "y" or "n")') //ask if user is finished
        legcount += 1;
        if (quitCommand === "n") { //detect if "n" string is entered
            break; //break out of program
        } else if (quitCommand === "y") {
            continue; 
        } else {
            alert('please enter either "y" or "n". do you have more legs to enter?');
            //continue; // TODO correction: does not display alert with subsequetn invalid entries-con
        }
    } 
    
/*  sample data
leg 1: .1
leg 2: .5
leg 3: .4

21 min * 60 sec = 1,260 sec

1,260 * .1 =  126 sec   126 / 60 = 2.1 min
1,260 * .5 = 630 sec   630/ 60 = 10.5 min
1,260 * .4 = 504 sec   504/ 60 = 8.4 min

.1 * 60 = 10 sec
.5 * 60 = 30 sec
.4 * 60 = 40 sec
*/

    const runTimeMins = prompt('how many minutes must you complete the run in?'); //ask user for time in minutes

    const runTimeMinsParsed = parseInt(runTimeMins);//parsInt required, because prompt is recording values as strings, and not integers, which will not allow proper calculations


    console.log(`minutes: ${runTimeMinsParsed}`);
    const runTimeSec = prompt('how many remaining seconds?'); //ask user for remainder of time in seconds, if any
    
    const runTimeSecParsed = parseInt(runTimeSec);//parsInt required, because prompt is recording values as strings, and not integers, which will not allow proper calculations
    console.log(`seconds: ${runTimeSecParsed}`);
    
    const totalTimeInSec = ((runTimeMinsParsed * 60) + runTimeSecParsed);
    for(let leg of legDistance) {
  
        let legTime = totalTimeInSec * leg;
        console.log(`total time in seconds ${legTime}`); 
        legTimeLog.push(legTime); 
        
    }

}   

runTimeCalculation();