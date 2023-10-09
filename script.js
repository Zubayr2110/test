let api = 'https://course-api.com/javascript-store-products/';
let main = document.querySelector('.main_item');
let srch = document.querySelector('#srch');

function getdata() {
    fetch(api)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                let div = document.createElement('div');
                div.innerHTML = `
                    <div class="item">
                        <img src="${element.fields.image[0].url}" alt="" class="item_img">
                        <h2 class="texth">${element.fields.name}</h2>
                        <p class="price">$ <span class="price1">${element.fields.price}</span></p>
                    </div>
                `;
                main.appendChild(div);

                div.addEventListener('click', () => {
                    window.location.href = element.fields.image[0].url;
                });
            });
        });
}``
getdata();

// search function  
srch.addEventListener('keyup', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        const itemName = item.querySelector('.texth').textContent.toLowerCase();
        if (itemName.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});


let cart = document.querySelector('.cart')
let carticon = document.querySelector('.carticon');
carticon.addEventListener('click', () => {
    cart.style.display = 'block';
});
