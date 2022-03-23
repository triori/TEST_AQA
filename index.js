const imgDownload = require('./img_environment');
const dbCreate = require ('./db_environment');

imgDownload.start();
dbCreate.start();