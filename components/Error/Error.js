class Error {
  render() {
    const html = `
      <div class="error-container">
        <div class="error-message">
          <p>Нет доступа!</p>
          <p>Попробуйте зайти позже</p>
        </div>
      </div>
    `;

    ROOT_ERROR.innerHTML = html;
  }
}

const errorPage = new Error();
