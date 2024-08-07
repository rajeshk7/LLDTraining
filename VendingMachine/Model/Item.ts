import ItemType from "../Schema/ItemType";

class Item {
    type: ItemType
    price: number

    constructor(type: ItemType, price: number) {
        this.type = type;
        this.price = price;
    }

    getType(): ItemType {
        return this.type;
    }

    getPrice(): number {
        return this.price;
    }

    setType(type: ItemType): void {
        this.type = type;
    }

    setPrice(price: number): void {
        this.price = price;
    }
  
}

export default Item;
