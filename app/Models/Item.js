import { generateId } from "../Utils/GenerateId.js";

export default class Item {

  constructor({ name, price, description, quantity, imgUrl }) {
    this.id = generateId()
    this.name = name
    this.price = price
    this.description = description
    this.quantity = quantity
    this.imgUrl = imgUrl
  }
  get Template() {
    return `
    <div class="col-md-4 col-6 mt-3">
    <div class="card m-2 bg-dark text-light">
    <img class="card-img-top p-2" src=${this.imgUrl} alt="">
    <div class="card-body">
        <h2 class="card-title"><b>${this.name}</b></h2>
        <p class="card-text">"${this.description}"</p>
        <p class="price">${this.price} Rupees </p>
        <p class="quantity">Quantity: ${this.quantity}</p>
        <a href="#" class="link wobble-vertical-on-hover">
          <button type="button" id="button" class="btn btn-success">
            <h5 class="text-light">Add to Cart</h5>
          </button>
        </a>
    </div>
    </div>
    </div>
    `
  }

}
