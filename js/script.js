

// console.log ($.ajax("https://hp-api.herokuapp.com/api/characters"));

// //VARIABLES
//     const newArray = $.ajax("https://hp-api.herokuapp.com/api/characters".then; 

//     //Create a new arrry with the data from the API
//     const characterArrayName = URL.name[0];
//     console.log(characterArrayName);


//Variables
const URL = 'https://hp-api.herokuapp.com/api/characters';

//Element references
// const $title = $('#title');
// const $year = $('#year');
// const $rated = $('#rated')
const $form = $("form");
const $input =$("input[type='text']");

//Event Listeners
$form.on("submit", handleGetData);


//Functions

function handleGetData(evt){
    evt.preventDefault();
    
    const userInput = $input.val()

    //Check to make sure that there is something that was inputted before the Find Film button was clicked
  // ********  if(!userInput) return; //get outta here
    
    $input.val("");

    $.ajax(URL).then(function(data){

        console.log("In the ajax URL function, right before calling render")
        render(data);
    }, function(error){
        console.log("Something Went Wrong")
        console.log(error);
})
}

function render(charData) {
    console.log("In the render function")
    $('main').html(`
        <h3>Name: ${charData.name}</h3>
        <p>Ancestry: ${charData.ancestry}</p>
        <p>House: ${charData.house}</p>
        <p>Patronus: ${charData.patronus}</p>
        <p>Living: ${charData.alive}</p>
        <img src="${charData.image}" alt="${charData.name}">
    `);
}

