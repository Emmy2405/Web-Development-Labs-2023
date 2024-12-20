function darkMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";


  }
  function lightMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Dark Mode is OFF";
  }
  
  const myInterval = setInterval(myTimer, 1000);

  function myTimer() {
    const date = new Date();
    document.getElementById("demo").textContent = date.toLocaleTimeString();
  }
  
 
  var tID; //we will use this variable to clear the setInterval()
function animateScript() {
var    position = 233.33; //start position for the image slicer
const  interval = 100; //100 ms of interval for the setInterval()
tID = setInterval ( () => {
document.getElementById("image").style.backgroundPosition = 
`-${position}px 0px`; 
//we use the ES6 template literal to insert the variable "position"
if (position < 1400)
{ position = position + 233.33;}
//we increment the position by 256 each time
else
{ position = 233.33; }
//reset the position to 256px, once position exceeds 1536px
}
, interval ); //end of setInterval
} //end of animateScript()


function stopAnimate() {
clearInterval(tID);
} //end of stopAnimate()

//based on: https://medium.com/dailyjs/how-to-build-a-simple-sprite-animation-in-javascript-b764644244aa

const Countries = [
  'Albania','Egypt','Ireland','Romania','Turkey'
  ];

// Function to display Irish counties on the webpage
function displayCountries() {
  const countryList = document.getElementById('country-list');

  Countries.forEach(country => {
    // Create a new list item element
    const listItem = document.createElement('li');
    
    // Set the text content of the list item
    listItem.textContent = country;

    // Append the list item to the unordered list
    countryList.appendChild(listItem);
  });
}

// Call the function to display Irish counties
displayCountries();

// Example object representing an Irish county
const albania = {
  capital: 'Tirana',
  population: 544107,
};

// Function to display county information on the webpage
function displayAlbaniaInfo() {
console.log("Hello");
//Select the div with id county-info
  const AlbaniaInfoContainer = document.getElementById('albania-info');
  // Display the county object properties on the webpage
  AlbaniaInfoContainer.innerHTML = `
    <p>Name: ${albania.capital}</p>
    <p>Population: ${albania.population}</p>
  `;
}

// Call the function to display county information
displayAlbaniaInfo();

// Example object representing an Irish county
const irishCounty = {
  name: 'Dublin',
  province: 'Leinster',
  population: 544107
};

// Function to display county information on the webpage
function displayCountyInfo() {
//Select the div with id county-info
  const countyInfoContainer = document.getElementById('county-info');
  // Display the county object properties on the webpage
  countyInfoContainer.innerHTML = `
    <p>Name: ${irishCounty.name}</p>
    <p>Province: ${irishCounty.province}</p>
    <p>Population: ${irishCounty.population}</p>
  `;
}

// Call the function to display county information
displayCountyInfo();

function validateForm() {
  // retrieving form values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  // avoiding blank input
  if (name === "" || email === "") {
    alert("Name and email are required");
    return false;
    console.log("hello");
  }
  // validating email format using a simple regular expression
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }
  // if all validations pass
  return true;
  }