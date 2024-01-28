document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/v1/pets')
        .then(response => response.json())
        .then(data => {
            const petsContainer = document.getElementById('pets');
            data.forEach(pet => {
                const petDiv = document.createElement('div');
                petDiv.innerHTML = `<h3>${pet.name}</h3><p>Breed: ${pet.breed}</p>`;
                petsContainer.appendChild(petDiv);
            });
        })
        .catch(error => console.error('Error:', error));
});
