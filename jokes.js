console.log('Works great');

const jokeButton = document.querySelector('.get-a-joke');
const jokeHolder = document.querySelector('.joke-holder p');
const endpointUrl = 'https://icanhazdadjoke.com';

const buttonText = [
    'Ugh...',
    'Dad, please...',
    'Oh come on...',
    'Seriously...',
    'Stop it!',
    'Please stop it...',
    'I hope that was the worst one...',
    'I\'m dying inside...',
];

function randomItemFromArray(array, not) {
    const item = array[Math.floor(Math.random() * array.length)];
    if(item === not) {
        console.log('Ups, we\'ve jus used that so look again.')
        return randomItemFromArray(array, not);
    }
    return item;
}

async function fetchJoke() {
    const response = await fetch(endpointUrl, {
        headers: {
            Accept: 'application/json',
        }
    });
    const data = await response.json();
    // console.log(data);
    return data;
};

async function handleClick() {
    const { joke } = await fetchJoke();
    // console.log(joke);
    jokeHolder.textContent = joke;
    jokeButton.textContent = randomItemFromArray(buttonText, jokeButton.textContent);
}

jokeButton.addEventListener('click', handleClick);
