function showCharacterNames(data) {
    const container = document.getElementById("personajes");
    container.innerHTML = "";
    data.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("personajes-item");
      div.innerHTML = `<h2>${item.nombre}</h2>`;
      container.appendChild(div);
    });
  }
  
  function showCharacterInfo(character) {
    const container = document.getElementById("personajes");
    container.innerHTML = "";
    const div = document.createElement("div");
    div.classList.add("personajes-item");
    div.innerHTML = `
      <h2>${character.nombre}</h2>
      <h3>${character.alias}</h3>
      <p>${character.descripcion}</p>
    `;
    container.appendChild(div);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/api/datos")
      .then((response) => response.json())
      .then((data) => {
        showCharacterNames(data);
        const searchBar = document.getElementById("searchBar");
        searchBar.addEventListener("input", () => {
          const searchTerm = searchBar.value.toLowerCase();
          if (searchTerm) {
            fetch(`http://localhost:3000/api/datos/${searchTerm}`)
              .then((response) => response.json())
              .then((character) => {
                if (character) {
                  showCharacterInfo(character);
                } else {
                  showCharacterNames(data);
                }
              });
          } else {
            showCharacterNames(data);
          }
        });
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  });
  