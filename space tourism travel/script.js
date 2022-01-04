let myFile = "./data.json"; //Define local JSON file

//Destination variables
const destImage = document.querySelector(".destination-image img");
const destTitle = document.querySelector(".dest-details h1");
const destDescription = document.querySelector(".dest-details p");
const journeyDistance = document.querySelector(".distance h3");
const travelTime = document.querySelector(".time h3");
const destLinks = document.querySelectorAll(".dest-links span");

//Crew Members variables
const memberImage = document.querySelector(".member-image img");
const memberRole = document.querySelector(".member-details h2");
const memberName = document.querySelector(".member-details h1");
const memebrBio = document.querySelector(".member-details p");
const memberLinks = document.querySelectorAll(".indicators span");

//Technology variables
const techImage = document.querySelector(".tech-image img");
const techName = document.querySelector(".tech-details h2");
const techDescription = document.querySelector(".tech-details p");
const techLinks = document.querySelectorAll(".on-off-btns span");

//Media Queries variables
let jsMediaTablet = window.matchMedia("(max-width: 930px)");
let jsMediaMobile = window.matchMedia("(max-width: 700px)");

//Fetch destination array from JSON file and display them using showDestination function
const showDestination = (d) => {
  fetch(myFile)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.destinations.length; i++) {
        for (let j = 0; j < destLinks.length; j++) {
          if (d > data.destinations.length) {
            counter = 1;
          } else if (d < 1) {
            counter = data.destinations.length;
          }
        }
        destImage.src = data.destinations[counter - 1].images["png"];
        destTitle.textContent = data.destinations[counter - 1].name;
        destDescription.textContent =
          data.destinations[counter - 1].description;
        journeyDistance.textContent = data.destinations[counter - 1].distance;
        travelTime.textContent = data.destinations[counter - 1].travel;
      }
    });
};

//Fetch crew array from JSON file and display them using showCrewMember function
const showCrewMember = (m) => {
  fetch(myFile)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.crew.length; i++) {
        for (let j = 0; j < memberLinks.length; j++) {
          memberLinks[j].style.background = "rgb(11, 13, 23)";

          if (m > data.crew.length) {
            counter = 1;
          } else if (m < 1) {
            counter = data.crew.length;
          }
        }
        memberImage.src = data.crew[counter - 1].images["png"];
        memberRole.textContent = data.crew[counter - 1].role;
        memberName.textContent = data.crew[counter - 1].name;
        memebrBio.textContent = data.crew[counter - 1].bio;
        memberLinks[counter - 1].style.background = "#fff";
      }
    });
};

//Fetch technology array from JSON file and display them using showTechnology function

const showTechnology = (t) => {
  fetch(myFile)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.technology.length; i++) {
        for (let j = 0; j < techLinks.length; j++) {
          if (t > data.technology.length) {
            counter = 1;
          } else if (t < 1) {
            counter = data.technology.length;
          }
        }
        techImage.src = data.technology[counter - 1].images["portrait"];
        techName.textContent = data.technology[counter - 1].name;
        techDescription.textContent = data.technology[counter - 1].description;
      }
    });
};

//fetch method to display first object of every array when website is opened
fetch(myFile)
  .then((res) => res.json())
  .then((data) => {
    //First Destination
    destImage.src = data.destinations[0].images["png"];
    destTitle.textContent = data.destinations[0].name;
    destDescription.textContent = data.destinations[0].description;
    journeyDistance.textContent = data.destinations[0].distance;
    travelTime.textContent = data.destinations[0].travel;
    //First crew member
    memberImage.src = data.crew[0].images["png"];
    memberRole.textContent = data.crew[0].role;
    memberName.textContent = data.crew[0].name;
    memebrBio.textContent = data.crew[0].bio;
    //First technology
    techImage.src = data.technology[0].images["portrait"];
    techName.textContent = data.technology[0].name;
    techDescription.textContent = data.technology[0].description;
  });

//Code to call defferent image type with other devices size
