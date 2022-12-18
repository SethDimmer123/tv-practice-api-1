// "https://api.tvmaze.com/search/shows?q="

const url = "https://api.tvmaze.com/search/shows?q="

async function main(show) {
  const shows = await fetch(url + show)
  const showsData = await shows.json();
  console.log(showsData)

  // showsData.forEach(show => {
  //   console.log(show.show.name)
  // })

}

main();

