const url =  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
"https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const movieBox = document.querySelector('.movie-box')
const getMovies =  async (URL)=>{
    const response = await fetch(URL);
    const data = await response.json()
    showMovies(data)
}
getMovies(url)
const showMovies = (data)=>{
    movieBox.innerHTML = ''
    data.results.forEach(item=>{
        const box = document.createElement('div')
        box.classList.add('box')
        box.innerHTML = `
        <div class="box">
        <div class="img-container">
         <img src=${!item.poster_path ? 'https://cdn5.vectorstock.com/i/thumb-large/70/94/beautiful-flower-happy-kawaii-cartoon-vector-20307094.jpg' : IMGPATH + item.poster_path} alt="">
        </div>
        <div class="text-container">
            <p class="title">${item.original_title.slice(0,30)}</p>
            <div class="rating-container">
                <span class="span-one">${item.vote_average} <i class="fa-solid fa-star"></i></span>
                <span class="span-two">${item.vote_count} votes <i class="fa-solid fa-thumbs-up"></i></span>
            </div>
        </div>
        <p class="description">${item.overview.slice(0,150) + '...'}</p>
       </div>
        `
        movieBox.append(box)
    })
}
document.querySelector('.input-box').addEventListener('keyup',(e)=>{
    if(e.target.value !==''){
        getMovies(SEARCHAPI + e.target.value)
    }else{
        getMovies(URL)
    }
})
