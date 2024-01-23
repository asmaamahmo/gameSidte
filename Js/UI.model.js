let liList = document.querySelectorAll('nav ul li');

for (let i = 0; i < liList.length; i++) {
    liList[i].addEventListener('click' , function (e) {
        let game = e.target.innerHTML;
        getResponse(game);
        
    })
    
}
async function getResponse(game) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2a88337aa0msh6a714d29b7da9c6p1ebbd6jsn2652d03c8bfc',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    

    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${game}` , options)
    const response = await api.json();
    displayData(response);
    console.log(response);
}

getResponse('MMORPG')

function displayData(response) {
    let cartona =``;

    for (let i = 0; i < response.length; i++) {
        cartona+= `
        <div class="col">
        <div data-id="${response[i].id}" class="card h-100 bg-transparent" role="button">
            <div class="card-body">
               <figure class="position-relative">
                  <img class="card-img-top object-fit-cover h-100" src="${response[i].thumbnail}">
               
               </figure>
   
               <figcaption class=" text-white text-center p-2">
   
                  <div class="hstack justify-content-between">
                     <h3 class="h6 small">${response[i].title}</h3>
                     <span class="badge text-bg-primary p-2">Free</span>
                  </div>
   
                  <p class="card-text small text-center opacity-50">
                     ${response[i].short_description.split(' ').slice(0,8).join(' ')}
                  </p>
   
               </figcaption>
            </div>
   
            <footer class="card-footer small hstack justify-content-between">
   
               <span class="badge badge-color">${response[i].genre}</span>
               <span class="badge badge-color">${response[i].platform}</span>
   
            </footer>
         </div>
    </div>
        `
    }

    document.querySelector('.row').innerHTML = cartona;
}

