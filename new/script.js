// JavaScript File: script.js

// Sample JSON data (replace it with your actual data)
let jsonData = [
    { title: 'Property 1', description: 'Description 1', address: 'Address 1', image: 'https://ssl.cdn-redfin.com/photo/86/bigphoto/824/5510824_6.jpg', details: 'Details 1' },
    { title: 'Property 2', description: 'Description 2', address: 'Address 2', image: 'ihttps://ssl.cdn-redfin.com/photo/86/bigphoto/824/5510824_6.jpg', details: 'Details 2' },
    { title: 'Property 3', description: 'Description 3', address: 'Address 3', image: 'https://ssl.cdn-redfin.com/photo/86/bigphoto/824/5510824_6.jpg', details: 'Details 3' },
    { title: 'Property 4', description: 'Description 4', address: 'Address 4', image: 'https://ssl.cdn-redfin.com/photo/86/bigphoto/824/5510824_6.jpg', details: 'Details 4' },
    { title: 'Property 5', description: 'Description 5', address: 'Address 5', image: 'https://ssl.cdn-redfin.com/photo/86/bigphoto/824/5510824_6.jpg', details: 'Details 5' },
    { title: 'Property 6', description: 'Description 6', address: 'Address 6', image: 'https://ssl.cdn-redfin.com/photo/86/bigphoto/824/5510824_6.jpg', details: 'Details 6' }
];

// Load JSON data when the page loads
displayProperties(jsonData);

// Function to generate property elements
function generatePropertyElement(property) {
    const propertyElement = document.createElement('div');
    propertyElement.classList.add('property');

    const imageElement = document.createElement('div');
    imageElement.classList.add('image');
    imageElement.style.backgroundImage = `url(${property.image})`;

    const detailsElement = document.createElement('div');
    detailsElement.classList.add('details');
    detailsElement.innerHTML = `
        <h3>${property.title}</h3>
        <p>${property.description}</p>
        <p>Address: ${property.address}</p>
        <button onclick="showDetails('${property.details}')">Show Details</button>
    `;

    propertyElement.appendChild(imageElement);
    propertyElement.appendChild(detailsElement);

    return propertyElement;
}

// Function to display properties
function displayProperties(properties) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';

    const propertiesPerRow = 3;

    for (let i = 0; i < properties.length; i += propertiesPerRow) {
        const rowElement = document.createElement('div');
        rowElement.classList.add('row');

        const propertyGroup = properties.slice(i, i + propertiesPerRow);

        propertyGroup.forEach(property => {
            const propertyElement = generatePropertyElement(property);
            rowElement.appendChild(propertyElement);
        });

        resultsContainer.appendChild(rowElement);
    }
}

// Function to show property details
function showDetails(details) {
    alert(details); // Replace this with your desired way of displaying details
}
