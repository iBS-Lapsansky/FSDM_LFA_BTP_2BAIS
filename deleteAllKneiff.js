const OracleWriter = require('./config/OracleWriter');                                                                   
const o = new OracleWriter();
 
try {

	o.DeleteAllKneiff();
} catch (err){
	console.error(err);
}
