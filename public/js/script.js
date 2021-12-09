window.addEventListener("load", () => {

    //FETCH API PRODUCTS
    let mainSection = document.querySelector(".main-section");

    const getFetch = async () => {
        const url = "http://localhost:3000/api/products";
        const resp = await fetch(url);
        const {data} = await resp.json();
        const products = data;

        for (const product of products) {

            const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

            const finalPrice = (product.price - product.price * product.discount / 100).toFixed(0);
            const interestFree = (finalPrice / 6).toFixed(2);

            const listProducts =   `<img src="${product.image}" alt="${product.name}">
                                    <div>
                                        <p class="toy-type">Funko</p>
                                        <p class="funko-name">${product.name}</p>
                                        ${product.stock === 0 ? `<p class="container-price">Final:
                                                                    <span class="no-stock">Artículo sin stock</span>
                                                                </p>
                                                                <a href="/${product.id}"><button class="btn-article">Ver artículo</button></a>` 
                                        : 
                                        `<p class="interest-free">6 Cuotas s/interés de</p>
                                        <h5 class="price">$${interestFree}</h5>
                                        ${product.discount > 0 ? `<img src="/images/promo.png" alt="Promo" class="promo">
                                                                <p class="container-price">Final:
                                                                    <span class="price-underline">$${toThousand(product.price)}</span>
                                                                    <span class="promo-price">$${toThousand(finalPrice)}</span> 
                                                                </p>` 
                                                                : 
                                                                `<p class="container-price">Final:
                                                                    <span class="final-price">$${toThousand(product.price)}</span>
                                                                </p>`}
                                        <button class="cart">
                                            <img src="/images/cart.png" alt="Add to cart">
                                        </button>`}
                                    </div>`;

            let container = document.createElement("article");
            container.innerHTML = listProducts;
            mainSection.appendChild(container);
        }

        if(products.length < 9){
            let container = document.createElement("article");
            container.classList.add("not-found")
            container.innerHTML = `<div class='bar1'></div> 
                                   <div class='bar2'></div> 
                                   <div class='bar3'></div>
                                   <div class='bar4'></div>
                                   <div class='box'></div>`;
            mainSection.appendChild(container);
        }
    }
    
    getFetch();
    
  
    //SCROLL TO TOP
    let btnTop = document.querySelector(".scroll-top");

    btnTop.addEventListener("click", () => {
        document.documentElement.scrollTop = 0; //Chrome, Firefox, Internet Explorer y Opera
        document.body.scrollTop = 0; //Safari
    });

});