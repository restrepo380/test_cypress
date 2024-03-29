import { NavegateTo } from "../Constant/NavegateTo.cy";
import Data from "../Data/urlTest.json"
import DataCredentials from "../Data/credentialsPage.json"
import DataAssertions from "../Data/Asserions.json"
import { LoginHerlper } from "../Page/LoginHelper.cy";
import { ProductHelper } from "../Page/ProductHelper.cy";
import { CartHelper } from "../Page/CartHelper.cy";
import { CheckoutHelper } from "../Page/CheckoutHelper.cy";
import { CheckoutCompleteHelper } from "../Page/CheckoutCompleteHelper.cy";

describe("Buy flow", ()=>{

    beforeEach(function(){
        NavegateTo.navegateTo(Data.ulrSauceDemo)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        });
        LoginHerlper.insertUsername(DataCredentials.username)
        LoginHerlper.insertPassword(DataCredentials.password)
        LoginHerlper.verifyButtonLogin()
        LoginHerlper.clickOnButtonLogin()
        ProductHelper.verifyTextSuccessfulLogin(DataAssertions.textSuccessfulLoginAssertion)
        cy.clearAllSessionStorage()
    })

    it("Buy product", function(){
       ProductHelper.clickOnButtonAddbikeLight()
       ProductHelper.clickOnButtonAddFleeceJacke()
       ProductHelper.clickOnButtonAddTshirt()
       ProductHelper.verifyTextTshirt()
       ProductHelper.clickOnButtonCart()

       CartHelper.verifyButtonRemove()
       CartHelper.clickOnButtonRemove(1)
       CartHelper.verifyButtonCheckout()
       CartHelper.clickOnButtonCheckout()

       CheckoutHelper.verifyInputFirstname()
       CheckoutHelper.insertFirstname()
       CheckoutHelper.verifyInputLastname
       CheckoutHelper.inserLastname()
       CheckoutHelper.verifyInputPostalCode()
       CheckoutHelper.insertPostalCode()
       CheckoutHelper.verifyButtonContinue()
       CheckoutHelper.clickOnButtonContinue()

       CheckoutCompleteHelper.verifyPayment()
       CheckoutCompleteHelper.verifyTextShoppingInfo()
       CheckoutCompleteHelper.verifyTextPriceTotal()
       CheckoutCompleteHelper.clickOnButtonFinish()

       CheckoutCompleteHelper.verifyImage()
       CheckoutCompleteHelper.verifyTextBuy(DataAssertions.textSuccessfulBuyAssertion)
    })

})