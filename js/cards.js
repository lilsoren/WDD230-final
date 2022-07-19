// store the URL of the JSON file into a const variable
const requestURL = 'json/temples.json';
const cards = document.querySelector('.cards');

// basic fetch() and feed it requiered argument 
//  the .then() returns a Promise 
// the seconds .then() is setup for us to work with the converted responce data in javascript object format 



fetch(requestURL)

    .then(function (response) {
        return response.json()
    })

    .then(function (jsonObject) {

        // store the results of the converted response into an array 
        const companies = jsonObject['cards'];

        // loop through every record and process each one into its own 'card' (HTML output)in a function named "displayProphets"
        companies.forEach(displayCompanies);
        
        
    });
    


function displayCompanies(temple) {
    // create elements to add to the document
    let card = document.createElement('section');
    let portrait = document.createElement('img');
    let heart1 = document.createElement('img');
    let heart2 = document.createElement('img');
    let h3 = document.createElement('h3');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let p5 = document.createElement('p');
    let p6 = document.createElement('p');
    let p7 = document.createElement('p');
    let p8 = document.createElement('p');
    let p9 = document.createElement('p');
    
    

    // change the text content property of the h2 element to contain the prophets full name
    h3.textContent = `${temple.temple}`;

    // build the image attributes bu using the set attribute method for the src, allt, and loading attribute values
    portrait.setAttribute('src', temple.imageurl);
    portrait.setAttribute('alt', `Image of ${temple.temple}`);
    portrait.setAttribute('loading', 'lazy');
    let like = localStorage.getItem(`${temple.temple}like`)!=null;
    if (!like)
    {
        heart2.classList.add('not-liked');
    }
    else
    {
        heart1.classList.add('not-liked');

    }
    heart1.id = `${temple.id}1`;
    heart1.setAttribute('src', temple.heart);
    heart1.setAttribute('alt', `heart img`);

    heart2.id = `${temple.id}2`;
    heart2.setAttribute('src', temple.red);
    heart2.setAttribute('alt', `heart img`);
    


    // chamge the text content of property of the h1 element to contain the prophet info
    p1.textContent = `Address: ${temple.address}`;
    p1.classList.add("address");

    p2.textContent = `Phone: ${temple.phone}`;
    p2.classList.add("phone");

    p3.textContent = `Email: ${temple.email}`;
    p3.classList.add("email");

    p4.textContent = `Services: ${temple.services}`;
    p4.classList.add("services");

    p5.textContent = `History: ${temple.history}`;
    p5.classList.add("history");

    p6.textContent = `Ordinance schedule: ${temple.ordinance}`;
    p6.classList.add("ordinance");

    p7.textContent = `Session schedule: ${temple.session}`;
    p7.classList.add("session");

    p8.textContent = `Closure schedule: ${temple.closure}`;
    p8.classList.add("closure");

    p9.textContent = `id: ${temple.id}`;
    p9.classList.add("id");



    // append the seciton with the h2 element 
    card.appendChild(h3);
    card.appendChild(portrait);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(p5);
    card.appendChild(p6);
    card.appendChild(p7);
    card.appendChild(p8);
    card.appendChild(heart1);
    card.appendChild(heart2);
    

    // append the existing HTML div with the cards class with the section
    document.querySelector('section.cards').appendChild(card);

    // heart1.onclick = likeTheTemple;         
    // heart2.onclick = unlikeTheTemple;  
    heart1.onclick = function(){
        heart1.classList.toggle("not-liked");
        heart2.classList.toggle("not-liked");
        localStorage.setItem(`${temple.id}like`, `yes`);
    }       
    heart2.onclick = function(){
        heart1.classList.toggle("not-liked");
        heart2.classList.toggle("not-liked");
        localStorage.setItem(`${temple.id}like`, null);

    }       
}

function likeTheTemple(){
    
    document.getElementById(id).classList.toggle("not-liked");
}




