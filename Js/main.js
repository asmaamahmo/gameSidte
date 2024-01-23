
let game = document.querySelector('.games');
let details = document.querySelector('.details');
// let load = document.querySelector('.loading')
// document.querySelector('#btnClose').addEventListener('click' , function (e) {
    
//     game.classList.remove('d-none');
//     details.classList.add('d-none')

// })

// document.querySelector('main .row .col').addEventListener('click' , function (e) {
//     game.classList.add('d-none');
//     details.classList.remove('d-none')
    
// })

// الزر الذي يقوم بإغلاق تفاصيل اللعبة
document.querySelector('#btnClose').addEventListener('click', function (e) {
    game.classList.remove('d-none');
    details.classList.add('d-none');
});

// const gameDetailsElements = document.querySelectorAll('.games .row .col');

// document.querySelector('.games .row').addEventListener('click', function (e) {
//     const colElement = e.target.closest('.col[data-id]');
//     const mainRowElement = e.target.closest('.games .row');

//     if (colElement && mainRowElement) {
//         const gameId = colElement.dataset.id;

//         game.classList.remove('d-none');
//         details.classList.add('d-none');
//         getResponseDetail(gameId)
        
       
        
//     }
   
// });
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(otherLink => {
            otherLink.classList.remove('active');
        });

        link.classList.add('active');
    });
});


