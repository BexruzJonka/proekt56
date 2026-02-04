const movieForm = document.querySelector("#form");
const movieInput = document.querySelector("#input");
const movieSelect = document.querySelector("#select");
const movieOta = document.querySelector("#moviesWrapper");

function renderMovies(kino) {
    movieOta.innerHTML = "";
    kino.forEach(objectlar => {
        const newItem = document.createElement("li");
        newItem.className = "w-[400px] bg-black rounded-xl flex flex-col items-center p-[20px] gap-[20px] hover:scale-[1.1] transition";
        newItem.innerHTML = `
            <h2 class="text-white">${objectlar.Title}</h2>
             <img class="w-full h-[420px] object-cover rounded-xl" src="./images/deadpool.png" alt="${objectlar.Title}">
            <div>
                <span class="text-white">${objectlar.imdb_rating}</span>    ___       <span class="text-white">${objectlar.movie_year}</span>    ___    <span class="text-white">${objectlar.runtime}</span>
            </div>
            <p class="text-white">${objectlar.Categories}</p>
           
            <button class="bg-[#1e00ff] text-[#fff] rounded px-[20px] py-[10px]">Add to watchlist</button>
        `;
        movieOta.appendChild(newItem);
    });
}

renderMovies(movies);










movieForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputQitmati = movieInput.value.toLowerCase();

    let filteredMovies = movies.filter(movie =>
        movie.Title && typeof movie.Title === "string" && movie.Title.toLowerCase().includes(inputQitmati)
    );

    if (movieSelect.value === "A-Z") {
        filteredMovies.sort((a, b) => a.Title.localeCompare(b.Title));
    } else if (movieSelect.value === "Z-A") {
        filteredMovies.sort((a, b) => b.Title.localeCompare(a.Title));
    }

    renderMovies(filteredMovies);
});

movieSelect.addEventListener("change", () => {
    const inputQitmati = movieInput.value.toLowerCase();

    let filteredMovies = movies.filter(movie =>
        movie.Title && typeof movie.Title === "string" && movie.Title.toLowerCase().includes(inputQitmati)
    );

    if (movieSelect.value === "A-Z") {
        filteredMovies.sort((a, b) => a.Title.localeCompare(b.Title));
    } else if (movieSelect.value === "Z-A") {
        filteredMovies.sort((a, b) => b.Title.localeCompare(a.Title));
    }

    renderMovies(filteredMovies);
});
