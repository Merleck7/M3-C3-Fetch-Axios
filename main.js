const fetchBtn = document.getElementById('fetch-btn');
const dataContainer = document.getElementById('data-container');
const axiosBtn = document.getElementById('axios-btn');
const methodTitle = document.getElementById('method-title');

function renderCharacters(characters) {
    dataContainer.innerHTML = '';
    characters.slice(0, 5).forEach(character => {
      const characterElement = document.createElement('div');
      characterElement.classList.add('character-card');
      characterElement.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <h3>${character.name}</h3>
        <p>${character.species}</p>
      `;
      dataContainer.appendChild(characterElement);
    });
  }

fetchBtn.addEventListener('click', () => {
    dataContainer.innerHTML = 'Cargando personajes...';
    methodTitle.textContent = 'Mostrando personajes con Fetch';
  fetch('https://rickandmortyapi.com/api/character')
  
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      return response.json();
    })
    .then(data => {
        renderCharacters(data.results);
    })
    .catch(error => {
      console.error('Error:', error);
      dataContainer.textContent = 'Hubo un error al obtener los datos.';
    });
});

// Axios

axiosBtn.addEventListener('click', () => {
    dataContainer.innerHTML = 'Cargando personajes...';
    methodTitle.textContent = 'Mostrando personajes con Axios';
    axios.get('https://rickandmortyapi.com/api/character')
    
        .then(response => {
            renderCharacters(response.data.results);
        })
    .catch(error => {
      console.error('Error:', error);
      dataContainer.textContent = 'Hubo un error al obtener los datos.';
    });
});


