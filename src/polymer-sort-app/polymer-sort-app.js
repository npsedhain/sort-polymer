import { css, html, LitElement } from "lit-element";
import Sortable from "sortablejs";

/**
 * @customElement
 * @polymer
 */
class PolymerSortApp extends LitElement {
  constructor() {
    super();
  }

  firstUpdated() {
    Sortable.create(this.shadowRoot.getElementById('list'), { delay: 50, sort: true });
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello ${this.prop1}!</h2>
      <ul class="holder" id="list">
        <li class="llist">item 1</li>
        <li class="llist">item 2</li>
        <li class="llist">item 3</li>
      </ul>
    `;
  }

  static get styles() {
    return css`
    li {
      padding: 10px;
      background-color: #02b875;
      margin: 5px;
    }`
  }

  static get properties() {
    return {
      prop1: {
        type: String
      }
    };
  }
}

window.customElements.define("polymer-sort-app", PolymerSortApp);
