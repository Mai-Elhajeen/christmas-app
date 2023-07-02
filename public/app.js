// Add code here 
fetch('/products')
    .then(res => res.json())
    .then(products => {
        const contentDiv = document.getElementById('content');
        products.forEach(product => {
            const productDiv = document.createElement('div');
            const productName = document.createElement('h1');
            const productDescription = document.createElement('p');
            const productImg = document.createElement('img');
            const productPrice = document.createElement('span');

            productName.textContent = product.name;
            productDescription.textContent = product.description;
            productImg.src = product.image;
            productPrice.textContent = product.price;

            productDiv.append(productName, productDescription, productImg, productPrice);
            contentDiv.appendChild(productDiv);
        });
    }
    );