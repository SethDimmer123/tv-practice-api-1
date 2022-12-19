// "https://api.tvmaze.com/search/shows?q="

const url = "https://api.tvmaze.com/search/shows?q="

const ratedshowsElem = document.querySelector(' .show-list'); // we are accessing the .show-list element
const searchBar = document.querySelector(".homepage__keyword--input"); // we are accessing the .homepage__keyword--input element
const searchButton = document.querySelector(".homepage__button--absolute"); // we are accessing the .homepage__button--absolute

async function main(show) {
  const shows = await fetch(url + show) //fetching the url and show arguement 
  const showsData = await shows.json(); //converting from backend to frontend
  console.log(showsData) // console logging the data
  ratedshowsElem.innerHTML = showsData.filter(show => show.show.image?.medium).map((show) => showHTML(show)).join("")


  // showsData.forEach(show => {
  //   console.log(show.show.image)
  // })
 

// const arr = [{id:39201}];

// const newArr = arr.filter(object => {
//   return object.id !== 39201
// })
}

main(localStorage.getItem("searchBarValue") || ""); // 
localStorage.removeItem("searchBarValue");



function showHTML(show) {
  return `<div class="show-list">
  <div class="show-card">
    <div class="user-card__container">
       <figure>
        <img src="${show.show.image?.medium}"> 
        <h3 class="">${show.show.name}</h3>
        <h4 class="year"></h4>
      </figure>
      </div>
    </div> 
  </div>`;
}





searchBar.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    main(searchBar.value);

    if (!window.location.href.includes("tvshow.html")) {
      localStorage.setItem("searchBarValue", searchBar.value);
      window.location.href += "/tvshow.html";
    }
  }
});

searchButton.addEventListener("click", (e) => {
  main(searchBar.value);
});


// add a click event listener to home page button
// whenever we click, set local storage searchBarValue to searchBar.value
// redirect the user to the shows page




// localstorage.setItem(uniqueId, value) => sets a value along with its unique id
// localstorage.getItem(uniqueId) => gets value of the unique id
// localstorage.removeItem(uniqueId) => removes something from localstorage if the ids match

