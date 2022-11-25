const mySql = require("mysql");
const sqlServer = require("mssql");

const dbActiva ="mySql"; //mySql|sqlServer


const mySqlConfig= {
    database : "tiendaonline",
    host : 'localhost',
    user : 'test',
    password : '123456'
}


const sqlServerConfig = {
    user: "test",
    password: "123456",
    database: "TiendaOnline",
    server: 'AGRANDEMOV\\SQLEXPRESS',
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: true, // for azure
      trustServerCertificate: true // change to true for local dev / self-signed certs
    }
  }


  const executeQuery= async (query) =>
{

    var data="";

    if (dbActiva ==='sqlServer') {

       await sqlServer.connect(sqlServerConfig);

        var result = await sqlServer.query(query);

        return result.recordset;
         
    }
    else
    {
        var con = mySql.createConnection(mySqlConfig);

        con.connect();

          return await new Promise(resolve => {
            
            con.query(query, function (error, results, fields) {

              data = results;
              console.log("ERROR_DB", error)
  
              con.end();

              resolve(data);
  
            });

          });
       
    }

}

  module.exports = {
    executeQuery
  }