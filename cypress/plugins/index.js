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
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}
// const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')
// module.exports = (on, config) => {
//   on('task', { downloadFile })
// }

const sqlite3 = require('sqlite3').verbose();
module.exports = (on, _config) => {
  on('task', {
    Countries: queryDb,
  });
};

const path = './db/aqaTest.db'
function queryDb(sql) {
  let db = new sqlite3.Database(path);
  return new Promise((resolve, reject) => {
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
      }
      else {
        db.close();
        return resolve(rows);
      }
    });
  });
}