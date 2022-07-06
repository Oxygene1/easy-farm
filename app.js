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
axios.get('https://api.github.com/users/anuradha9712').then(response =>{
    console.log(response.data)
})


let mainListDiv = document.getElementById("mainListDiv");
    mediaButton = document.getElementById("mediaButton");

    mediaButton.onclick =  ()=> {
    
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
    
};


const container = document.querySelector('#crop-list')
const nameSearch = 'annualcrops'
allCrops.forEach(el=>{
    
   el[nameSearch].forEach((item)=>{
    console.log(allCrops)

   });
})


// const container1 = document.querySelector('#crop-list1')
// const nameSearch1 = 'biennalcrops'
// allCrops.forEach(el=>{
    
//    el[nameSearch1].forEach((item)=>{
//     console.log(item)
//     container1.textContent = 'item'

//    });
// })
// function displayAllCrops(){

// }




// const nameSearch1 = 'biennalcrops'
// allCrops.forEach(el=>{
    
//    el[nameSearch1].forEach((item)=>{
//     console.log(item)
//     container.textContent = item

//    });
// })

// const nameSearch2 = 'perennialcrops'
// allCrops.forEach(el=>{
    
//    el[nameSearch2].forEach((item)=>{
//     console.log(item)
//     container.textContent = item

//    });
// })










//

//add event listener to search button


//const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpAllCrops = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredAllCrops = hpAllCrops.filter((allCrops) => {
        return (
            console.log(allCrops[searchString]) 
            // allCrops.toLowerCase().includes(searchString) ||
            // allCrops.house.toLowerCase().includes(searchString)
        );
    });
    displayAllCrops(filteredAllCrops);
});


function shuffleImages() {
    //Add all the images to the imageList
    var imageList = ['https://res.cloudinary.com/koushik/image/upload/v1455486062/images_4_ihgq2m.jpg', 'https://res.cloudinary.com/koushik/image/upload/v1455486008/images_3_e7acz1.jpg', 'https://res.cloudinary.com/koushik/image/upload/v1455485964/images_2_lw07ip.jpg', 'https://res.cloudinary.com/koushik/image/upload/v1455485874/1358488_lj1ifi.jpg', 'https://res.cloudinary.com/koushik/image/upload/v1455485873/Gray-plain-website-background_zqtdzl.jpg', 'https://res.cloudinary.com/koushik/image/upload/v1455485870/plain-white-background-4_qadmfh.png', 'https://res.cloudinary.com/koushik/image/upload/v1455485863/Plain-Black-Wallpaper_zfgwvn.png', 'https://res.cloudinary.com/koushik/image/upload/v1455485862/images_1_kalkox.jpg', 'https://res.cloudinary.com/koushik/image/upload/v1455485862/images_1_lg2y0r.png', 'https://res.cloudinary.com/koushik/image/upload/v1455485862/images_2_jmfeep.png'];
  
    //Form array starting with number 0 to imageList-1
    var orderedArray = orderedArr(imageList.length);
  
    //generates oredered array from 0 to maxNum-1
    function orderedArr(maxNum) {
      var result = [];
      for (i = 0; i < maxNum; i++) {
        result.push(i);
      }
      return result;
    }
  
    //Shuffle orderedArray
    var unOrderedArray = shuffle(orderedArray);
    var finalImageList = [];
    for (i = 0; i < unOrderedArray.length; i++) {
      finalImageList[i] = imageList[unOrderedArray[i]];
    }
  
    //function which shuffle array elements
    function shuffle(array) {
      var i = array.length,
        j = 0,
        temp;
  
      while (i--) {
  
        j = Math.floor(Math.random() * (i + 1));
  
        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
  
      }
  
      return array;
    }
  
    // number of rows
    var numberOfRows = 3;
  
    // height of screen
    var heightOfScreen = 600;
  
    //height of each pic
    var heightOfPic = heightOfScreen / numberOfRows;
  
    //Possible number of pics in each row in ordered way
    var orderedPossibleNoOfPics = [2, 3, 4];
  
    //Possible number of pics in each row in unordered way
    var unorderedPossibleNoOfPics = shuffle(orderedPossibleNoOfPics);
  
    //Number of pics in a row final
    var NoOfPicsInARow = [];
  
    //total :: total number of pics in first (numberOfRows-1) rows
    var total = 0;
    for (i = 0; i < numberOfRows - 1; i++) {
      NoOfPicsInARow.push(unorderedPossibleNoOfPics[i]);
      total += unorderedPossibleNoOfPics[i];
    }
  
    //Add number of pics in last row so that it will add to number of images
    NoOfPicsInARow.push((imageList.length) - total);
  
    //declare possible width sizes
    var twoPics = [1 / 2, 1 / 4, 3 / 4, 2 / 5, 3 / 5, 0.3, 0.35, 0.45, 0.55, 0.65, 0.7];
    var threePics = [1 / 2, 1 / 4, 1 / 5, 2 / 5, 0.3, 0.35];
    var fourPics = [0.35, 1 / 4, 1 / 5, 0.3];
    var fivePics = [1 / 5, 0.21, 0.22, 0.15, 0.16, 0.17, 0.18, 0.19];
  
    var twoPicsFinal = [];
    var threePicsFinal = [];
    var fourPicsFinal = [];
    var fivePicsFinal = [];
  
    //get exact sizes with randomness
    var twoPicsWidthRandom = shuffle(orderedArr(twoPics.length)).slice(0, 1);
    for (i = 0; i < twoPicsWidthRandom.length; i++) {
      twoPicsFinal.push(twoPics[twoPicsWidthRandom[i]]);
    }
    twoPicsFinal.push(1 - twoPics[twoPicsWidthRandom[0]]);
  
    var threePicsWidthRandom = shuffle(orderedArr(threePics.length)).slice(0, 2);
    var threeTotal = 0;
    for (i = 0; i < threePicsWidthRandom.length; i++) {
      threePicsFinal.push(threePics[threePicsWidthRandom[i]]);
      threeTotal += threePics[threePicsWidthRandom[i]];
    }
  
    threePicsFinal.push(1 - threeTotal);
  
    var fourPicsWidthRandom = shuffle(orderedArr(fourPics.length)).slice(0, 3);
    var fourTotal = 0;
    for (i = 0; i < fourPicsWidthRandom.length; i++) {
      fourPicsFinal.push(fourPics[fourPicsWidthRandom[i]]);
      fourTotal += fourPics[fourPicsWidthRandom[i]];
    }
  
    fourPicsFinal.push(1 - fourTotal);
  
    var fivePicsWidthRandom = shuffle(orderedArr(fivePics.length)).slice(0, 4);
    var fiveTotal = 0;
    for (i = 0; i < fivePicsWidthRandom.length; i++) {
      fivePicsFinal.push(fivePics[fivePicsWidthRandom[i]]);
      fiveTotal += fivePics[fivePicsWidthRandom[i]];
    }
  
    fivePicsFinal.push(1 - fiveTotal);
  
    // Get the final array of width sizes array  
    var finalArray = [];
    for (i = 0; i < NoOfPicsInARow.length; i++) {
      if (NoOfPicsInARow[i] == 2) {
        finalArray[i] = twoPicsFinal;
      } else if (NoOfPicsInARow[i] == 3) {
        finalArray[i] = threePicsFinal;
      } else if (NoOfPicsInARow[i] == 4) {
        finalArray[i] = fourPicsFinal;
      } else if (NoOfPicsInARow[i] == 5) {
        finalArray[i] = fivePicsFinal;
      }
    }
  
    //width of the screen
    var w = window.innerWidth - 20;
  
    //Empty previous tags  
    $("#addPictures").empty();
  
    //Add all the required tags  
    for (i = 0, k = 0; i < finalArray.length; i++) {
      $("#addPictures").append('<div class="row">');
      for (j = 0; j < finalArray[i].length; j++) {
        $("#addPictures").append('<img src="' + finalImageList[k] + '"  class="img-thumbnail" style="width:' + finalArray[i][j] * w + 'px;height:' + heightOfPic + 'px">');
        k++;
      }
      $("#addPictures").append('</div>');
    }
  };
  
  //call function for the initial rendering
  shuffleImages();
  
  shuffleAtRegularInterval(5000);
  
  //call function when you resize the browser
  var resizeTimer;
  $(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(shuffleImages, 10);
    shuffleAtRegularInterval(10000);
  });
  
  function shuffleAtRegularInterval(interval) {
    var timer = 0;
    for (i = 0; i < 3; i++) {
      timer += interval;
      setTimeout(shuffleImages, timer);
    }
  };





