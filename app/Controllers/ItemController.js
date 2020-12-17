import { ProxyState } from "../AppState.js";
import { itemService } from "../Services/ItemService.js";
import Item from "../Models/Item.js";

function _drawItems() {
  let items = ProxyState.items
  let template = ''
  items.forEach(item => {
    template += item.Template
  })
  document.getElementById('stock').innerHTML = template
}


export default class ItemController {
  constructor() {
    ProxyState.on("items", _drawItems)
    _drawItems()
  }
}