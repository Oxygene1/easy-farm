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
axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(response =>{
    console.log(response.data)
})

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


// const container = document.querySelector('#crop-list')
// const nameSearch = 'annualcrops'
// allCrops.forEach(el=>{
    
//    el[nameSearch].forEach((item)=>{
//     console.log(allCrops)

//    });
// })


setTimeout(function(){
    document.getElementById("loading").style.display="none";
 }, 1000);


