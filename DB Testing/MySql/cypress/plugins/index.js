/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

//For connecting to My SQL Server
const mysql = require('mysql')
function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection({
      host: "127.0.0.1",
      port: 3306,
      user: "root",
      password: "46081",
      database: "node-conn"
  })
  // start connection to db
  connection.connect()
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error)
      else {
        connection.end()
        return resolve(results)
      }
    })
  })
}


//POSTGRESQL
const fs = require('fs-extra');
const pg = require("pg");
const path = require('path');

//other utilities
const xlsx = require("xlsx");
const syncSql = require("sync-sql");

module.exports = (on, config) => {

on("task", {
  generateJSONFromExcel: (args) => {
    const wb = xlsx.readFile(args.excelFilePath, { dateNF: "mm/dd/yyyy" });
    const ws = wb.Sheets[args.sheetName];
    return xlsx.utils.sheet_to_json(ws, { raw: false });
  },
  getDBDataSync: ()=>{
    const config = {
      host: "localhost",
      port: 3306,
      user: "root",
      password: "root",
      database: "node-conn",
    };
    const query = "select * from users";
    return syncSql.mysql(config, query).data.rows;
  },
  getDBDataAsync: ()=>{
    const config = {
      host: "localhost",
      port: 3306,
      user: "root",
      password: "root",
      database: "node-conn",
    };
    const query = "select * from users";
    let con = mysql.createConnection(config);
    return new Promise((resolve, reject) => {
      con.connect(function(err) {
        if (err) throw err;
        con.query(query, (err, result) => {
          con.end();
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    });
  },

 queryDb: query => { return queryTestDb(query, config) },  //MySql. For running sql query
 DATABASE ({ dbConfig, sql, values }) { //Connects to an env  PostgreSql db and fetches query result
   // const pool = new pg.Pool(config.db);
   const pool = new pg.Pool(dbConfig);
   try {
       return pool.query(sql, values)
   } catch (e) {
   }
 }
});
   
 function getConfigurationByFile(env) {
     const pathToConfigFile = path.resolve("cypress/config", `${env}.config.json`);

     return fs.readJson(pathToConfigFile);
 }
 //if no environment is provided, then QA env will be default
 const env = config.env.configFile || "qa";  

 return getConfigurationByFile(env);
};
