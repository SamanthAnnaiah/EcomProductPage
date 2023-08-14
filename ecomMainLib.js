const images_location = "images/"; 
const images_extension = ".jpg";

class yourCart {
    constructor(cart_name, cart_items, cart_cost, cart_cost_orig) {
        this.cart_name = cart_name;
        this.cart_items = cart_items;
        this.cart_cost = cart_cost;
        this.cart_cost_orig = cart_cost_orig;
    }
}

export {images_location, images_extension, yourCart};