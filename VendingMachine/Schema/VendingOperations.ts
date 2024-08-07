import VendingMachine from "../Model/VendingMachine";
import Coin from "../Schema/Coin";
import Item from "../Model/Item";

interface VendingOperations {
    clickInsertCoinButton(machine: VendingMachine): void;
    clickProductSelectionButton(machine: VendingMachine): void;
    insertCoin(machine: VendingMachine, coin: Coin): void;
    chooseProduct(machine: VendingMachine, productCode: number): void;
    dispenseProduct(machine: VendingMachine, productCode: number): void;
    getChange(machine: VendingMachine): number;
    refundCoins(machine: VendingMachine): Coin[];
    updateInventory(machine: VendingMachine, item: Item, productCode: number): void;
}

export default VendingOperations;