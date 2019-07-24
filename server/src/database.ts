import { connect } from 'http2';
import keys from './keys';

var mysql = require('mysql');
var pool  = mysql.createConnection(keys.database);

pool.connect(()=>{
  console.log('DB is connect');
});

export default pool;