class Header {
  handlerShowShoppingPage() {
    shoppingPage.render();
  }

  render(count) {
    const emoji = "💥";
    const htmlHeader = `
      <div class="header-container">
        <div class="header-counter" onclick="headerPage.handlerShowShoppingPage();">
          ${emoji} ${count.length}
        </div>
      </div>
    `;

    ROOT_HEADER.innerHTML = htmlHeader;
  }
}

const headerPage = new Header();
