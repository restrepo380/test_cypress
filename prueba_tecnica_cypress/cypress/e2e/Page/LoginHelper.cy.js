import { LoginPageElements } from "../Elements/LoginPageElements.cy";

export class LoginHerlper{
    static insertUsername(username){
        LoginPageElements.elements.inputUsername.type(username)
    }

    static insertPassword(password){
        LoginPageElements.elements.inputPassword.type(password)
    }

    static clickOnButtonLogin(){
        LoginPageElements.elements.buttonLogin.click()
    }

    static verifyTextErrorLogin(text){
        LoginPageElements.elements.textErrorLogin.should("have.text", text)
    }

    static  verifyButtonLogin(){
        LoginPageElements.elements.buttonLogin.should("exist")
    }
}