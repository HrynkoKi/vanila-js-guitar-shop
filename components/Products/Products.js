"use strict";
class Products {
  constructor() {
    this.classNameActive = "products-item__btn_active";
    this.labelAdd = "Добавить в корзину";
    this.labelRemove = "Удалить из корзины";
  }

  handlerSetLocalStorage(element, id) {
    const { pushProduct, products } = productsLocalStorageUtil.putProducts(id);

    if (pushProduct) {
      element.classList.add(this.classNameActive);
      element.innerText = this.labelRemove;
    } else {
      element.classList.remove(this.classNameActive);
      element.innerText = this.labelAdd;
    }

    headerPage.render(products);
  }

  render() {
    const productsStore = productsLocalStorageUtil.getProducts();
    let htmlCatalog = "";

    CATALOG.forEach(({ id, name, img, price }) => {
      const lightningEmoji = "🔥";
      let activeClass = "";
      let activeText = "";

      if (productsStore.indexOf(id) === -1) {
        activeText = this.labelAdd;
      } else {
        activeClass = this.classNameActive;
        activeText = this.labelRemove;
      }

      htmlCatalog += `
        <li class="products-item">
          <p class="products-item__name">${name}</p>
          <img  class="products-item__img"src="${img}" />
          <span class="products-item__price">
            ${lightningEmoji} ${price.toLocaleString("ru-RU")} RUB
          </span>
          <button 
            class="products-item__btn ${activeClass}"
            onclick="productsPage.handlerSetLocalStorage(this, ${id});"
          >
            ${activeText}
          </button>
        </li>
      `;
    });

    const html = `
      <ul class="products-container">${htmlCatalog}</ul>
    `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
