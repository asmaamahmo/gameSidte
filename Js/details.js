// const ulElement = document.querySelector('.row');
// const load = document.querySelector('.loading');

// ulElement.addEventListener('click', function (e) {
//     const colElement = e.target.closest('.col');

//     if (colElement) {
//         const subElementWithDataId = colElement.querySelector('[data-id]');

//         if (subElementWithDataId) {
//             const gameId = subElementWithDataId.dataset.id;
//             console.log("Clicked on element with data-id:", gameId);
//             getResponseDetail(gameId);
            
//             displayDataGame(gameId);
//         }

        
//         game.classList.add('d-none');
//         details.classList.remove('d-none');
//     }
// });

const ulElement = document.querySelector('.row');
const load = document.querySelector('.loading'); 

let isLoading = false;

ulElement.addEventListener('click', async function (e) {
    const colElement = e.target.closest('.col');

    if (colElement) {
        const subElementWithDataId = colElement.querySelector('[data-id]');

        if (subElementWithDataId) {
            const gameId = subElementWithDataId.dataset.id;
            console.log("Clicked on element with data-id:", gameId);


            isLoading = true;
            load.classList.remove('d-none');

            await getResponseDetail(gameId);


            isLoading = false;
            load.classList.add('d-none');

          
        }
        game.classList.add('d-none');
        details.classList.remove('d-none');
        displayDataGame(gameId);
    }
});



async function getResponseDetail(gameId) {
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2a88337aa0msh6a714d29b7da9c6p1ebbd6jsn2652d03c8bfc',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    

    const apiGame = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}` , options)
    const responseGame = await apiGame.json();
    // const gameIdFromAPI = responseGame.id;
    displayDataGame(responseGame);
    console.log(responseGame);
    console.log(gameId);
}



getResponseDetail('517')
function displayDataGame(response) {
    let cartoona =``;

    // for (let i = 0; i < response.length; i++) {
        cartoona = `
        <div class="col-md-4">
                <img src="${response.thumbnail}" class="w-100" alt="image details">
            </div>
            <div class="col-md-8">
                <h3>Title: ${response.title}</h3>
                <p>Category: <span class="badge text-bg-info"> ${response.genre}</span> </p>
                <p>Platform: <span class="badge text-bg-info"> ${response.platform}</span> </p>
                <p>Status: <span class="badge text-bg-info"> ${response.status}</span> </p>
                <p class="small">${response.description}
                </p>
                <a class="btn btn-outline-warning" target="_blank" href="${response.game_url}">Show Game</a>
            </div>
        `
   

    document.querySelector('.details .row').innerHTML = cartoona; 
    // document.querySelector('main .row').addEventListener('click' , function (e) {
    //     let gameDetail = e.target.innerHTML;
    //     getResponse(gameDetail);
    // })
}
