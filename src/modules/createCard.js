export const createCard = (data) => {
  const container = document.querySelector(".container");

  const cardElement = /* html */`
    <div class="card">
      <img class="image" src="${data.imageSrc}" alt="${data.username}">
      <div class="data">
      <h1 class="name">${data.fullname}</h1>
      <div class="username">Usuario: ${data.username}</div>
      <div class="email">Email: ${data.email}</div>
      <div>
        <span class="country">Pais: ${data.country}</span>
        <span class="postal">Código postal: ${data.postcode}</span>
      </div>
      <div class="phone">Teléfono: ${data.phone}</div>
      </div>
    </div>
    `;

  container.insertAdjacentHTML("beforeend", cardElement);
};
