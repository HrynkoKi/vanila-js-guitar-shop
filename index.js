let CATALOG = [];

const render = function () {
  const productsStore = productsLocalStorageUtil.getProducts();

  headerPage.render(productsStore);
  productsPage.render();
};

const getProducts = async function () {
  try {
    const response = await fetch("server/catalog.json");
    const body = await response.json();

    CATALOG = body;
    spinnerPage.handlerClear();

    // Render all products
    render();
  } catch (error) {
    console.log(error);
    spinnerPage.handlerClear();
    errorPage.render();
  }
};

spinnerPage.render();
getProducts();
