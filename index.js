// https://api.tvmaze.com/search/shows?q=query


const ratedshowsElem = document.querySelector('.show-list')

async function main(show) {
    const shows = await fetch(`https://api.tvmaze.com/search/shows?q=shows`);
    const showsData = await shows.json();
    console.log(showsData)
    ratedshowsElem.innerHTML = showsData.slice(0,6).map((show) => showHTML(show)).join("");
}
main();

function showHTML(show) {
    return` <div class="show-list">
    <div class="show-card">
      <div class="user-card__container">
         <figure>
          <img src="${show.image}"
          <h3 class="">${show.name}</h3>
          <h4 class="year">${show.year}</h4>
        </figure>
        </div>
      </div> 
    </div>`;
}