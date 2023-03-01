// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.
let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

//let imageUrl = ["https://www.google.com/url?sa=i&url=https%3A%2F%2Fgenius.com%2FYlona-garcia-entertain-me-lyrics&psig=AOvVaw1j2SwEVr-2x6T9YD-qvio1&ust=1676428271945000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCID64Y38k_0CFQAAAAAdAAAAABAE", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F5nujrmhLynf4yMoMtj8AQF&psig=AOvVaw1CepmMeXfgT2fIeC7vSjtS&ust=1676428658910000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJj4qMb9k_0CFQAAAAAdAAAAABAE", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsoundcloud.com%2Ftorylanez%2Ftory-lanez-the-color-violet&psig=AOvVaw15VCQP85kVMpiFwE3FTcO0&ust=1676428696939000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJDVxNj9k_0CFQAAAAAdAAAAABAE"];

//let songNames = ["Entertain Me", "Levitating (feat. DaBaby)", "The Color Violet"];

//let artistsArr = ["Ylona Garcia", "Dua Lipa (DaBaby)", "Tory Lanez"];

//let songLinks = ["https://www.youtube.com/watch?v=B6eLbmLGUyc", "https://www.youtube.com/watch?v=TUVcZfQe-Kw", "https://www.youtube.com/watch?v=07fhkAoCnig"];



//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.

let song1 = {
  image: "https://i.postimg.cc/YqPSWS7c/ylona.jpg",
  name: "Entertain Me",
  artist: "Ylona Garcia",
  link: "https://www.youtube.com/watch?v=B6eLbmLGUyc",
}

let song2 = {
  image: "https://i.postimg.cc/gJGcWXVh/levitiaitng.jpg",
  name: "Levitating (feat. DaBaby)",
  artist: "Dua Lipa (DaBaby)",
  link: "https://www.youtube.com/watch?v=TUVcZfQe-Kw",
}

let song3 = {
  image: "https://i.postimg.cc/nzL82vK3/color-vilet.jpg",
  name: "The Color Violet",
  artist: "Tory Lanez",
  link: "https://www.youtube.com/watch?v=07fhkAoCnig",
}

let songArr = [
  song1, song2, song3,
]

//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

  // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
  let nameInput = songName.value;
  let imgInput = image.value;
  let artistInput = artist.value;
  let linkInput = songLink.value;

  // task 10: use `.push()` to add each input value to the correct array.
  let userInput = {
    img: imgInput,
    name: nameInput,
    artist: artistInput,
    link: linkInput,
  }

  songArr.push(userInput);
}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

  // task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
  songArr.forEach(function(song) {
    displaySong.insertAdjacentHTML('beforeend', `<p>${song.name}</p>`);
  })

  songArr.forEach(function(song) {
    displayImage.insertAdjacentHTML('beforeend', `<img src= ${song.image}>`)
  })

  songArr.forEach(function(song) {
    displayArtist.insertAdjacentHTML('beforeend', `<p>${song.artist}</p>`)
  })

  songArr.forEach(function(song) {
    displayLink.insertAdjacentHTML('beforeend', `<p><a href="${song.link}">Link</a></p><br>`)
  })

}






// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  emptyDisplay();
  displaySongInfo();

};

// function call to display stored songs
displaySongInfo();
