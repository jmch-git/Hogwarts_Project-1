// //VARIABLES
//Geting API
const URL = 'https://hp-api.herokuapp.com/api/characters';
//Creating a newArray to put the API in
let newArray = [];
//Creating variables to put the key/values in
let selectedName = "";  
let selectedAncestry = "";
let selectedPatronus = "";
let selectedImage = "";
let selectedHouse = "";
let selectedSpecies = "";
let selectedWizard = "";


//ELEMENT REFERENCES
//Creating jQuery variables for the form input value
const $form = $("form");
const $input =$("input[type='text']");

//EVENT LISTENERS
$form.on("submit", handleGetData);

//FUNCTIONS

//Initialise function
init();

//Function to create a new arrry with the data from the API
function init(){
    $.ajax(URL).then(function(data){
        newArray = data;
        console.log(data);
    })
}

//Function that runs with the input event and returns the input value
function handleGetData(evt){
    evt.preventDefault();
    
    const userInput = $input.val()

    //Check to make sure that there is something that was inputted before the button was clicked
    if(!userInput) return; 

    //Matching the input name to the array name 
    function charName(matchInput) {
        let arrayName = matchInput.name
    
        if (arrayName.toLowerCase() !== userInput.toLowerCase()){
            $('main').html(`
              <h2 class="centered">Character Not Found</h2>`)
              console.log("in char not found")
            $input.val("");
        } else {
            return arrayName.toLowerCase() === userInput.toLowerCase();
        }
    }

    //Creating variables to house the values parced out from the array by key value
      selectedName = newArray.find(charName).name;  
      selectedSpecies = newArray.find(charName).species;
      selectedAncestry = newArray.find(charName).ancestry; 
      selectedWizard = newArray.find(charName).wizard; 
      selectedPatronus = newArray.find(charName).patronus;
      selectedHouse = newArray.find(charName).house;
      selectedImage = newArray.find(charName).image;

      render();
    
    $input.val("");
}

//Updating the HTML with the lines of data from the array
function render(){
    $('main').html(`
        <h3 class="centered" id="details">Name: ${selectedName}</h3>
        <p class="centered" id="details">Species: ${selectedSpecies}</p>
        <p class="centered" id="details">Ancestry: ${selectedAncestry}</p>
        <p class="centered" id="details">Wizard: ${selectedWizard}</p>
        <p class="centered" id="details">Patronus: ${selectedPatronus}</p>
        <p class="centered" id="details">House: ${selectedHouse}</p>      
        <img src="${selectedImage}" alt="${selectedName}" class="centered">
`)}


