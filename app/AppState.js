
import Item from "./models/Item.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  /**@type {Item[]} */
  items = [new Item({ name: "Boomerang", price: 250, description: "It comes back. How!?", quantity: 15, imgUrl: "./assets/img/boomerang.png" }), new Item({ name: "Heart Container", price: 500, description: "Better than milk!", quantity: 3, imgUrl: "./assets/img/heartcontainer.png" }), new Item({ name: "Hook-shot", price: 175, description: "For those hard to reach places", quantity: 30, imgUrl: "./assets/img/hookshot.png" }), new Item({ name: "The Master Sword", price: 100000, description: "For the Chosen One", quantity: "Sold Out!", imgUrl: "./assets/img/mastersword.png" })]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
