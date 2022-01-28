class localStorageUtil {
  constructor() {
    this.keyName = "products";
  }

  getProducts() {
    const productsLocalStorage = localStorage.getItem(this.keyName);

    if (productsLocalStorage !== null) {
      return JSON.parse(productsLocalStorage);
    }

    return [];
  }

  putProducts(id) {
    const products = this.getProducts();
    let pushProduct = false;
    const productIndex = products.indexOf(id);

    if (productIndex === -1) {
      products.push(id);
      pushProduct = true;
    } else {
      products.splice(productIndex, 1);
    }

    localStorage.setItem(this.keyName, JSON.stringify(products));

    return { pushProduct, products };
  }
}

const productsLocalStorageUtil = new localStorageUtil();
