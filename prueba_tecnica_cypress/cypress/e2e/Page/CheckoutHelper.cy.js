import { CheckoutPageElements } from "../Elements/CheckoutPageElements.cy";

export class CheckoutHelper{

    static insertFirstname(){
        let lettersRandom = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const lengthName = 6
        let lengthRandomName = lettersRandom.length
        let randomString= ""
        for(let i = 0 ; i < lengthName; i++){
            randomString += lettersRandom.charAt(Math.floor(Math.random() * lengthRandomName ))
        }
        CheckoutPageElements.elements.inputFirstname.type(randomString)
    }

    static inserLastname(){
        let lettersRandom = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const lengthName = 6
        let lengthRandomName = lettersRandom.length
        let randomString= ""
        for(let i = 0 ; i < lengthName; i++){
            randomString += lettersRandom.charAt(Math.floor(Math.random() * lengthRandomName ))
        }
        CheckoutPageElements.elements.inputLastname.type(randomString)
    }

    static insertPostalCode(){
        var randomNum = Math.floor(Math.random() * (400000 - 200000 +1 )) + 2000000;
        CheckoutPageElements.elements.inputPostalCode.type(randomNum)
    }

    static clickOnButtonContinue(){
        CheckoutPageElements.elements.buttonContinue.click()
    }

    static verifyInputFirstname(){
        CheckoutPageElements.elements.inputFirstname.should('exist')
    }

    static verifyInputLastname(){
        CheckoutPageElements.elements.inputLastname.should('exist')
    }

    static verifyInputPostalCode(){
        CheckoutPageElements.elements.inputPostalCode.should('exist')
    }

    static verifyButtonContinue(){
        CheckoutPageElements.elements.buttonContinue.should("be.visible")
    }
}