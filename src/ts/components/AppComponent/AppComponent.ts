import Component from "../Component/Component.js";

class AppComponent extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "container", "div");
    this.renderHtml();
  }

  renderHtml() {
    this.domElement.innerHTML = `
    <header class="main-header">
      <img src="./images/pokemon-logo.svg" alt="">
    </header>
    `;
  }
}

export default AppComponent;
