
const searchField = document.querySelector('.input');
// const annualCrops = document.getElementById ('annual-crops');
// const biennialCrops = document.getElementById ('biennial')
// const perennialCrops = document.getElementById('perennial-crops')
// const resultList = document.getElementById('list-block');
const search = document.querySelector('#search')
const allCrops = [ 
                     {annualcrops:['groundnuts','rice', 'maize', 'tomatoes', 'melons']},
                     {biennialcrops: ['carrots', 'dates', 'onions', 'cocoa', 'pinapples']},
                    { perennialcrops:['mangoe','cashew', 'avocado', 'palm trees', 'coconut']},
                ]

//media key
// axios.get('https://agro-business-api.p.rapidapi.com/corn').then(response =>{
    
//     console.log(response.data)
// })



// const options = {
//   method: 'GET',
//   url: 'https://agro-business-api.p.rapidapi.com/corn',
//   headers: {
//     'X-RapidAPI-Key': '77547346b3mshbde893c4bc0b3e6p1c8cbajsn9bdf50fcd39f',
//     'X-RapidAPI-Host': 'agro-business-api.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });


//progress bar

// function hideLoader() {
//     $(hideLoader).hide();
// }

// $(window).ready(hideLoader);

// // Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
// setTimeout(hideLoader, 1000);

// $(window).load( function() {
//     $('#overlay').addClass('hide');
//    })

//    window.onload = function() 
//    {
//        //display loader on page load 
//        $('.loader').fadeOut();
//    }



let mainListDiv = document.getElementById("mainListDiv");
    mediaButton = document.getElementById("mediaButton");

    mediaButton.onclick =  ()=> {
    
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
    
};



setTimeout(function(){
    document.getElementById("loading").style.display="none";
 }, 1000);



 let dataUrl = "http://universities.hipolabs.com/search?country=United+Kingdom"
const searchBar = document.querySelector("#searchBar");
const list = document.querySelector(".user-list");

// Featch data
async function getData() {
  try {
    let response = await fetch(dataUrl);
    let data = await response.json();
    // console.log(data.map(item => item.username))    
    return data.map(item => item.username)
  } catch(error) {
    throw Error(`error:${error}`);
  }
}

// filter users as per searchTerm
function filteredUsers(users, searchTerm) {
  const filteredUsers = users.filter(user =>
    user.includes(searchTerm)
  )
  // console.log(filteredUsers.length ? filteredUsers : users)   
  return filteredUsers.length ? filteredUsers : users;
}

// Load elements on DOM
function loadElements(users) {
  console.log(users)
  let listElements = users.map((user) => 
    `<li>
      <p>${user}</p>
    </li>`
  ).join('')
  
  list.innerHTML = listElements;
}

// Filter and Show list
function showList(searchTerm){
  // ToDo : getData if data has changed
  getData()
    .then(users => filteredUsers(users, searchTerm))
    .then(loadElements)
}

// OnLoad show data
showList()

// Keyup eventlistener for search inpout
searchBar.addEventListener('keyup', (event) => {
  let searchTerm = event.target.value;
  showList(searchTerm);
})


