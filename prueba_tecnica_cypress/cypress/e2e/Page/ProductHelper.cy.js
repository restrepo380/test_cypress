import { ProductsPageElements } from "../Elements/ProductsPageElements.cy";

export class ProductHelper{
    static verifyTextSuccessfulLogin(text){
        ProductsPageElements.elements.textSuccesfullLogin.should("have.text", text)
    }

    static clickOnButtonAddbikeLight(){
        ProductsPageElements.elements.buttonAddbikeLight.click()
    }

    static clickOnButtonAddFleeceJacke(){
        ProductsPageElements.elements.buttonAddFleeceJacket.click()
    }

    static clickOnButtonAddTshirt(){
        ProductsPageElements.elements.buttonAddTshirt.click()
    }

    static clickOnButtonCart(){
        ProductsPageElements.elements.buttonCart.click()
    }

    static verifyTextTshirt(){
        ProductsPageElements.elements.textTshirt.should("exist")
    }
}