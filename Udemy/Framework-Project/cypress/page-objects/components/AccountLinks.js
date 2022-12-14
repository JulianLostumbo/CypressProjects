export default class AccountLink{

    static clickSummary(){
        cy.get('#account_summary_tab').click()
    }

    static clickActivity(){
        cy.get('#account_activity_tab').click()
    }

    static clickTransferFounds(){
        cy.get('#transfer_founds_tab').click()
    }

    static clickPayBills(){
        cy.get('#pay_bills_tab').click()
    }

    static clickMoneyMap(){
        cy.get('#money_map_tab').click()
    }

    static clickOnlineStatements(){
        cy.get('#online_statements_tab').click()
    }

}