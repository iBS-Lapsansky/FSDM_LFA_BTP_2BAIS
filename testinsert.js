const dummyData = require('./testdata/dummyData4insert');
const OracleWriter = require('./config/OracleWriter');
const o = new OracleWriter();

// check Console - BAIS DB
o.checkConn();

o.InsertManyKneiff(dummyData.KneiffDummy);
o.InsertManyGstiff(dummyData.GstiffDummy);
