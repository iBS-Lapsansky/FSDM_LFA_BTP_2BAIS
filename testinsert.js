const dummyData = require('./testdata/dummyData2insert');
const OracleWriter = require('./config/OracleWriter');
const o = new OracleWriter();

// check Console - BAIS DB
//o.checkConn();

//o.InsertManyKneiff(dummyData.KneiffDummy);
o.InsertManyGstiff(dummyData.GstiffDummy);
