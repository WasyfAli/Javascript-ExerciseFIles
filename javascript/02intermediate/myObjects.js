let myYoutubeVideoOne = {   //tHIS IS object with key value pair
     title: 'Loops in JS',
     videoLength: 15,
     videoCreator: 'Wasyf',
     videoDescription: 'This is a video DEscription....!'
}
let myYoutubeVideoTwo = {   //tHIS IS object with key value pair
    title: 'Functions in JS',
    videoLength: 10,
    videoCreator: 'Wasyf',
    videoDescription: 'This is a video DEscription....!'
}
// console.log(myYoutubeVideo);
// console.log(`Hey new Video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`);
//Changing object values
// myYoutubeVideo.title = 'ForEach loop in js';
// console.log(`Hey new Video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator} (Changed Version)`);


let changeVideoLength = function(myObject){

    return {  //returning object
        formatOne: `Time of this Video is: ${myObject.videoLength +2 }`,
        formatTwo: `Time of this Video is: ${myObject.videoLength +1 }`
    }
    
}

let addValue = changeVideoLength(myYoutubeVideoTwo);
console.log(addValue.formatOne);
