// //VARIABLES
let newArray = [];
const URL = 'https://hp-api.herokuapp.com/api/characters';

//Element references)
const $form = $("form");
const $input =$("input[type='text']");

//Event Listeners

//
init();

//Functions
//Create a new arrry with the data from the API
function init(){
    $.ajax(URL).then(function(data){
        newArray = data;
        console.log(data);
    })
}