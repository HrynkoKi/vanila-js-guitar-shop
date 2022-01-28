class Shopping {
  handlerClear() {
    ROOT_SHOPPING.innerHTML = "";
  }

  render() {
    const productsStore = productsLocalStorageUtil.getProducts();
    let htmlShopping = "";
    const lightningEmoji = "🔥";
    const emoji = "💥";
    let totalSumPrice = 0;
    let labelProducts = "";

    CATALOG.forEach(({ id, name, price }) => {
      if (productsStore.indexOf(id) !== -1) {
        htmlShopping += `
          <tr class="shopping-element">
            <td class="shopping-element__name">${lightningEmoji} ${name}</td>
            <td class="shopping-element__price">${price.toLocaleString(
              "ru-Ru"
            )} RUB</td>
          </tr>
        `;

        totalSumPrice += price;
      }
    });

    if (!totalSumPrice) {
      labelProducts = `
        <td class="shopping-element__name">Товаров в корзине нет!</td>
      `;
    } else {
      labelProducts = `
        <td class="shopping-element__name">${emoji} Общая сумма</td>
        <td class="shopping-element__price">
          ${totalSumPrice.toLocaleString("ru-Ru")} RUB
        </td>
      `;
    }

    let html = `
      <div class="shopping-container">
        <div class="shopping__close" onclick="shoppingPage.handlerClear();"></div>

        <table>
          ${htmlShopping}
          <tr class="shopping-element">
            ${labelProducts}
          </tr>
        </table>
      </div>
    `;
    ROOT_SHOPPING.innerHTML = html;
  }
}

const shoppingPage = new Shopping();
