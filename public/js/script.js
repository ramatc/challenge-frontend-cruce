window.addEventListener("load", () => {

    //FETCH API PRODUCTS
    let mainSection = document.querySelector(".main-section");

    const getFetch = async () => {
        const url = "http://localhost:3000/api/products";
        const resp = await fetch(url);
        const {data} = await resp.json();
        const products = data;

        for (const product of products) {
            const listProducts =   `<img src="${product.image}" alt="${product.name}">
                                    <p class="toy-type">Funko</p>
                                    <p class="funko-name">${product.name}</p>
                                    <p class="interest-free">6 Cuotas s/interés de</p>
                                    <h5 class="price">$211,50</h5>
                                    ${product.discount > 0 ? `<img src="/images/promo.png" alt="Promo" class="promo">
                                                              <p class="container-price">Final:
                                                                <span class="price-underline">$${product.price}</span>
                                                                <span class="promo-price">$1.269</span> 
                                                              </p>` 
                                                            : 
                                                            `<p class="container-price">Final:
                                                                <span class="final-price">$${product.price}</span>
                                                            </p>`}
                                    <button class="cart">
                                        <img src="/images/cart.png" alt="Add to cart">
                                    </button>`;

            let container = document.createElement("article");
            container.innerHTML = listProducts;
            mainSection.appendChild(container);
        }

        if(products.length < 9){
            let container = document.createElement("article");
            container.classList.add("not-found")
            container.innerHTML = "";
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