import {addMatchImageSnapshotCommand} from 'cypress-image-snapshot/command'
import '@percy/cypress'

addMatchImageSnapshotCommand({
    failureTrashold: 0.00, //pixel tolenracy
    failureTrasholdType:'percent',
    customDiffConfig: {treshold: 0.0},
    capture: 'viewport'
})

Cypress.Commands.add('setResolution', (size) => {
    if(Cypress._.isArray(size)){
        cy.viewport(size[0], size[1])
    } else{
        cy.viewport(size)
    }
})