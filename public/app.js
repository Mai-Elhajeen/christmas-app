// Add code here 

fetch('/products')
  .then(res => res.json())
  .then((data) => {
    const container = document.getElementById('product-container');

    data.forEach((element, i) => {
      const card = document.createElement("article");
      card.setAttribute("class", "gift__card");
      container.appendChild(card)

      const cardImg = document.createElement("img");
      cardImg.src = data[i]["image"];
      card.appendChild(cardImg);

      const cardIconHeart = document.createElement("i");
      cardIconHeart.setAttribute("class", "bx bx-heart gift__icon");
      card.appendChild(cardIconHeart);

      const cardIconTrash = document.createElement("i");
      cardIconTrash.setAttribute("class", "bx bx-trash gift__icon");
      card.appendChild(cardIconTrash);

      const cardPrice = document.createElement("h2");
      cardPrice.textContent = `${data[i]["price"]}$`;
      cardPrice.setAttribute("class", "gift__price");
      card.appendChild(cardPrice);

      const cardName = document.createElement("h3");
      cardName.textContent = data[i]["name"];
      cardName.setAttribute("class", "gift__title");
      card.appendChild(cardName);

      const cardDescription = document.createElement("span");
      let sliceText = data[i]["description"];
      let result = sliceText.slice(0, 50);
      cardDescription.textContent = result.concat('...');
      card.appendChild(cardDescription);
    });
  }
  );