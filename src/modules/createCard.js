export const createCard = ({
  name,
  email,
  phone,
  tittle,
  first,
  last,
  country,
  postcode,
  fullname,
  username,
  imageSrc
}) => {
  const container = document.querySelector(".container");

  const cardElement = /* html */ `<div class="container">
        <div class="user-card">
          <img class="image" src=${imageSrc} alt="user-image">
          <div class="user-details">
            <div>
              <h1 class="name">${name}</h1>
              <div class="username">${username}</div>
              <div class="email">${email}</div>
              <div>
                <span class="country">${country}</span>
                <span class="postal">${postcode}</span>
              </div>
              <div class="phone">${phone}</div>
            </div>
          </div>
        </div>
      </div>`;

  container.insertAdjacentHTML("beforeend", cardElement);
};
