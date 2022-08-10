import {url, login_password, login_username} from '../../../config'
import Navbar from '../../page-objects/components/Navbar'
import LoginPage from '../../page-objects/pages/LoginPage'
describe('Login fail', () => {
    before(()=>{
        cy.visit(url)
        Navbar.clickSignIn()
    })
    it('should fail to login by entering bad credentials', () => {
        LoginPage.login('invalid username', 'invalid password')
        LoginPage.displayErrorMessage()
    })

    it('should login successfully by entering valid credentials and then logout', () => {
        LoginPage.login(login_username, login_password)
        Navbar.logout()
        Navbar.displaySignInButton()
    })
})