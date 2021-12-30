let container = document.getElementById('root');

let pElement = document.createElement('p');
let pAuthorElement = document.createElement('p');
let nextBtn = document.createElement('button');
nextBtn.textContent = 'Get Quote';
pElement.classList.add('content');
pAuthorElement.classList.add('author');


const getQuote = () => {
    fetch('https://api.quotable.io/random')
    .then(res => res.json())
    .then(data => {
        pElement.textContent = data.content;
        pAuthorElement.textContent = data.author;
    })
    .catch(er => console.log(er));
}

getQuote();

nextBtn.addEventListener('click', getQuote)    

container.appendChild(pElement);
container.appendChild(pAuthorElement);
container.appendChild(nextBtn);