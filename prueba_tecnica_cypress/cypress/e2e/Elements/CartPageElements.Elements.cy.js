
export class CartPageElements{
 static get elements(){
    return{
        get buttonRemove(){
            return cy.xpath('//div[@class="item_pricebar"]/button')
        },

        get buttonCheckout(){
            return cy.xpath('//button[@id="checkout"]')
        }
    }
 }
}