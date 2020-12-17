
import ItemController from "./Controllers/ItemController.js";
class App {

  itemController = new ItemController();
}

window["app"] = new App();
