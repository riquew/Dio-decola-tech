const url = `https://thatcopy.pw/catapi/rest/`
const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
        'content-type': 'application/json;charset=utf-8'
    }
}

const catButton = document.getElementById('change-cat');

const getCats = async() => {
    const data = await fetch(url, options)
    .then( res => res.json())
    .catch( e => console.log(e))

    return data.webpurl;
}

const loadImage = async() => {
    const catImage = document.getElementById('cat');
    catImage.src = await getCats();
} 

catButton.addEventListener('click', loadImage);

loadImage();