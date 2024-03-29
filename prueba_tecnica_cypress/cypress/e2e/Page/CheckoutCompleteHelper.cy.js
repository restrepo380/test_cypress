import { CheckoutCompletePageElements } from "../Elements/CheckoutCompletePageElements.cy";

export class CheckoutCompleteHelper{
    static clickOnButtonFinish(){
        CheckoutCompletePageElements.elements.buttonFinish.click()
    }

    static verifyPayment(){
        CheckoutCompletePageElements.elements.textPayment.should("be.visible")
    }

    static verifyTextShoppingInfo(){
        CheckoutCompletePageElements.elements.textShoppingInfo.should("be.visible")
    }

    static verifyTextPriceTotal(){
        CheckoutCompletePageElements.elements.textPriceTotal.should("be.visible")
    }

    static verifyImage(){
        CheckoutCompletePageElements.elements.image.should("be.visible")
    }

    static verifyTextBuy(text){
        CheckoutCompletePageElements.elements.textSuccessfulBuy.should("have.text", text)
    }
}