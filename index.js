// "https://api.tvmaze.com/search/shows?q="

const url = "https://api.tvmaze.com/search/shows?q="

const ratedshowsElem = document.querySelector(' .show-list')

async function main(show) {
  const shows = await fetch(url + show)
  const showsData = await shows.json();
  console.log(showsData)
  ratedshowsElem.innerHTML = showsData.filter(show => show.show.image?.medium).map((show) => showHTML(show)).join("")


  // showsData.forEach(show => {
  //   console.log(show.show.image)
  // })
 

const arr = [{id:39201}];

const newArr = arr.filter(object => {
  return object.id !== 39201
})
}

main('test');



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








