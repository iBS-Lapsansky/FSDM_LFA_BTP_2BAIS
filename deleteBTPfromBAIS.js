const OracleWriter = require('./config/OracleWriter');                                                                   
const o = new OracleWriter();
 
try {

	o.DeleteKneiffByKdnrh(99999999);
	o.DeleteKneiffByKdnrh(1);
} catch (err){
	console.error(err);
}
