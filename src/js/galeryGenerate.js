// ИМПОРТЫ
import photoArray from "../db/photo";

// ДОСТУПЫ
const list = document.getElementById("photoList");

// СЛУШАТЕЛИ
// ФУНКЦИИ
const result = photoArray.map((photoObj) => {
  const {
    image,
    description,
    title,
    category,
    seria,
    author: { name, country, city },
  } = photoObj;
  function createItemByString() {
    return `
<li>
          <img src="${image}" alt="${description}" />
          <h3>${title}</h3>
          <p${description}</p>
          <p><span>${category}</span>:<span>${seria}</span></p>
          <div>
            <h4>${author}</h4>
            <p>${name}</p>
            <p><span>${country}</span>- <span>${city}</span></p>
          </div>
        </li>
`;
  }
  const item = createItemByString();
  return item;
});
const addResult = result.join("");
console.log(result);
list.insertAdjacentHTML("beforeend", addResult);
