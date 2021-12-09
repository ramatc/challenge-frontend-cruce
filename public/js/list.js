window.addEventListener("load", () => {

    //FETCH API LIST PRODUCTS
    let table = document.querySelector("tbody");

    const getFetch = async () => {
        const url = "http://localhost:3000/api/products";
        const resp = await fetch(url);
        const {data} = await resp.json();
        const products = data;

        for (const product of products) {
            const listProducts =   `<td><a href="/${product.id}">${product.name}</a></td>
                                    <td>$ ${product.price}</td>
                                    <td class="text-right">
                                        <a href="/${product.id}" class="btn"><i class="fa fa-eye"></i></a>
                                        <a href="/${product.id}/edit" class="btn"><i class="fa fa-pencil"></i></a>
                                        <form method="POST" action="/${product.id}?_method=DELETE">
                                            <button type="submit" class="btn"><i class="fa fa-trash"></i></a>
                                        </form>
                                    </td>`;

            let container = document.createElement("tr");
            container.innerHTML = listProducts;
            table.appendChild(container);
        }
    }
    
    getFetch();
    
});