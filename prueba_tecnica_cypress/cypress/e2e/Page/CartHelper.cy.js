import { CartPageElements } from "../Elements/CartPageElements.Elements.cy";

export class CartHelper{

    static clickOnButtonRemove(num){
        CartPageElements.elements.buttonRemove.eq(num).click()
        
    }

    static verifyButtonRemove(){
        CartPageElements.elements.buttonRemove.should('be.visible')
    }

    static clickOnButtonCheckout(){
        CartPageElements.elements.buttonCheckout.click()
    }

    static verifyButtonCheckout(){
        CartPageElements.elements.buttonCheckout.should("be.visible")
    }
}
