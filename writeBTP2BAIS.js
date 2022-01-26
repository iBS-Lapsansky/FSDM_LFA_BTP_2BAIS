const OracleWriter = require('./config/OracleWriter');                                                                   
const o = new OracleWriter();
 

var http = require('https');
var serviceRoot = 'https://9b7c010etrial-dev-fsdm-lfa-btp-srv.cfapps.us10.hana.ondemand.com/Showcase2_SRT_BAIS/BAIS_KNEIFFwCust';

getURL(serviceRoot);

function getURL(url) {
     var body = '';
     http.get(url, function (response) {
         response.on('data', function (chunk) {
             body+=chunk;
         });
         response.on('end', function () {

        	try {
	          const parsedData = JSON.parse(body);
	       //       console.log(parsedData.value);
	         o.InsertManyKneiff(parsedData.value);
	        } catch (e) {
	          console.error(e.message);
	        }

	//	console.log(body);
         });
     }).on('error', function(e) {
         console.log('ERROR: ' + e.message);
     });
 }
