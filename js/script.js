// //VARIABLES
let newArray = [];
const URL = 'https://hp-api.herokuapp.com/api/characters';
let selectedName = "";  
let selectedAncestry = "";
let selectedPatronus = "";
let selectedImage = "";
let selectedHouse = "";
let selectedSpecies = "";
let selectedWizard = "";

//Element references)
const $form = $("form");
const $input =$("input[type='text']");


// //Event Listeners
// $form.on("submit", handleGetData);

//
init();


//Functions

// function handleGetData(evt){
//     evt.preventDefault();
    
//     const userInput = $input.val()

//     console.log(userInput);

//     //Check to make sure that there is something that was inputted before the Find Film button was clicked
//     if(!userInput) return; //get outta here
    
//     $input.val("");

    
//Create a new arrry with the data from the API
function init(){
    $.ajax(URL).then(function(data){
        newArray = data;
        console.log(data);

        function charName(matchInput) {
            return matchInput.name === "Harry Potter";
          }
          
          selectedName = newArray.find(charName).name;  
          selectedSpecies = newArray.find(charName).species;
          selectedAncestry = newArray.find(charName).ancestry; 
          selectedWizard = newArray.find(charName).wizard; 
          selectedPatronus = newArray.find(charName).patronus;
          selectedHouse = newArray.find(charName).house;
          selectedImage = newArray.find(charName).image;
          
          $('main').html(`
          <h3>Name: ${selectedName}</h3>
          <p>Species: ${selectedSpecies}</p>
          <p>Ancestry: ${selectedAncestry}</p>
          <p>Wizard: ${selectedWizard}</p>
          <p>Patronus: ${selectedPatronus}</p>
          <p>House: ${selectedHouse}</p>          
          <img src="${selectedImage}" alt="${selectedName}">
      `);
    })
}
//}