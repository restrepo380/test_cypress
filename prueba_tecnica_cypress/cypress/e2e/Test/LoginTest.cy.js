import { NavegateTo } from "../Constant/NavegateTo.cy"
import Data from "../Data/urlTest.json"
import DataCredentials from "../Data/credentialsPage.json"
import DataAssertions from "../Data/Asserions.json"
import { LoginHerlper } from "../Page/LoginHelper.cy"
import { ProductHelper } from "../Page/ProductHelper.cy"

describe("Login flow", ()=>{
    beforeEach(function(){
        NavegateTo.navegateTo(Data.ulrSauceDemo)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        });
        cy.clearAllSessionStorage()
    })

    it("Login successful", function(){
        LoginHerlper.insertUsername(DataCredentials.username)
        LoginHerlper.insertPassword(DataCredentials.password)
        LoginHerlper.verifyButtonLogin()
        LoginHerlper.clickOnButtonLogin()
        ProductHelper.verifyTextSuccessfulLogin(DataAssertions.textSuccessfulLoginAssertion)
    })

    it("Login error", function(){
        LoginHerlper.insertUsername(DataCredentials.usernameError)
        LoginHerlper.insertPassword(DataCredentials.passwordError)
        LoginHerlper.verifyButtonLogin()
        LoginHerlper.clickOnButtonLogin()
        LoginHerlper.verifyTextErrorLogin(DataAssertions.textErrorLoginAssertion)
    })
})