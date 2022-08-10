/// <reference types="cypress" />
const {addMatchImageSnapshotPlugin} = require('cypress-image-snapshot/plugin')
const percyHealthCheck = require('@percy/cypress/task')
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config)
  on('task', percyHealthCheck)
}
