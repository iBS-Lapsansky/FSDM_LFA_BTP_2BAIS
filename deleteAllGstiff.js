const OracleWriter = require('./config/OracleWriter');                                                                   
const o = new OracleWriter();
 
try {

	o.DeleteAllGstiff();
} catch (err){
	console.error(err);
}
