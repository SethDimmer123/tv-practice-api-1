// "https://api.tvmaze.com/search/shows?q="

const url = "https://api.tvmaze.com/search/shows?q="

async function main(movie) {
  const movies = await fetch(url + movie)
  
}

