const items = [
    {
        id:0,
        name:'camisa1',
        image: '_images/icon.png',
        qtd: 0
    },
    {
        id:1,
        name:'camisa2',
        image: '_images/icon.png',
        qtd: 0
    },
    {
        id:2,
        name:'camisa3',
        image: '_images/icon.png',
        qtd: 0
    }
]

inicializarLoja = () => {
    var containerProducts = document.getElementById("products");
    items.map((val) => {
        containerProducts.innerHTML += `
        <div class="single-product">
            <img src="`+val.image+`">
            <p>`+val.name+`</p>
            <a key="`+val.id+`" href="#">Adicionar ao carrinho</a>
        </div>
        `;
    })
}

inicializarLoja();

actualizarCarrinho = () => {
    var containerCarrinho = document.getElementById("carrinho");
    containerCarrinho.innerHTML = "";
    items.map((val) => {
        if (val.qtd > 0) {
        containerCarrinho.innerHTML += `
        <div class="chechout">
           <p class="produtctName"><span class="title">Produto</span> <span class="info">`+val.name+`</span></p>
           <p class="produtctQtd"><span class="title">Produto</span> <span class="info">`+val.qtd+`</span></p>
           <div style:"clear:both"></div>
        </div>
        `;
         }
    })
}

var links = document.getElementsByTagName("a");
for (var i = 0; i<links.length; i++) {
    links[i].addEventListener("click", function() {
        let key = this.getAttribute('key');
        items[key].qtd++;
        actualizarCarrinho();
        return false;
    })
}

