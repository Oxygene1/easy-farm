let dataUrl = "https://jsonplaceholder.typicode.com/users"
const searchBar = document.querySelector("#search-bar");
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
    user.toLowerCase().includes(searchTerm)
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

// fetch(dataUrl)
//   .then((response) => {
//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     return response;
//   })
//   .then((response) => {
//     response.json().then((data) => {
      
//       // console.log(data.map(item => item.username))
//       return data.map(item => item.username)
//     })
//   })
//   .catch((error) => {
//     console.log(`Error:${error}`)
//   })
