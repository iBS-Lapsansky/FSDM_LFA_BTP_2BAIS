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
            console.log(body);
        });
    }).on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });
}
