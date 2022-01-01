// const OracleWriter = require('./BAIS/OracleWriter')
// const oWriteOra = new OracleWriter();

class OracleWriter {
  #description = "Read/Write: Bais Entities KNEIFF and GSTIFF";

  constructor() {
    this.dbOracle = require("oracledb");
    this.dbConfig = require("./dbconfig");
    this.binds = {};
    this.options = {
      autoCommit: true,
      outFormat: this.dbOracle.OUT_FORMAT_OBJECT, // query result format
    };
  }

  getDescription() {
    return this.#description;
  }

  async checkConn() {
    let connection;
    try {
      // get Connection as Promise
      connection = await this.dbOracle.getConnection(this.dbConfig);
      console.log("Connection was successfull opend!");
    } catch (err) {
      console.error(err);
    } finally {
      if (connection) {
        try {
          await connection.close();
          console.log("Connection was successfull closed!");
        } catch (err) {
          console.error(err);
        }
      }
    }
  }

  async executeSQL(sql) {
    let connection;
    try {
      // get Connection as Promise
      connection = await this.dbOracle.getConnection(this.dbConfig);
      console.log("Connection was successfull!");
      return await connection.execute(sql, this.binds, this.options);
    } catch (err) {
      console.error(err);
    } finally {
      if (connection) {
        try {
          await connection.close();
          console.log("Connection was successfull closed!");
        } catch (err) {
          console.error(err);
        }
      }
    }
  }

  async executeMany(sql, data) {
    let connection;
    try {
      // get Connection as Promise
      connection = await this.dbOracle.getConnection(this.dbConfig);
      console.log("Connection was successfull!");
      await connection.executeMany(sql, data , this.options );
    } catch (err) {
      console.error(err);
    } finally {
      if (connection) {
        try {
          await connection.close();
          console.log("Connection was successfull closed!");
        } catch (err) {
          console.error(err);
        }
      }
    }
  }

  async SelectAllKneiff() {
    var result = await this.executeSQL(`SELECT * FROM KNEIFF`);
    // console.log("Metadata: ");
    // console.dir(result.metaData, { depth: null });
    console.log("Query results: ");
    console.dir(result.rows, { depth: null });
  }

  async SelectKneiffByKdnrh(kdnrh) {
    var result = await this.executeSQL(
      `SELECT * FROM KNEIFF WHERE KNEIFF_KDNRH = ` + kdnrh
    );
    // console.log("Metadata: ");
    // console.dir(result.metaData, { depth: null });
    console.log("Query results: ");
    console.dir(result.rows, { depth: null });
  }

  async SelectAllGstiff() {
    var result = await this.executeSQL(`SELECT * FROM GSTIFF`);
    // console.log("Metadata: ");
    // console.dir(result.metaData, { depth: null });
    console.log("Query results: ");
    console.dir(result.rows, { depth: null });
  }

  async SelectGstiffByKdnrh(kdnrh) {
    var result = await this.executeSQL(
      `SELECT * FROM GSTIFF WHERE GSTIFF_KDNRH = ` + kdnrh
    );
    // console.log("Metadata: ");
    // console.dir(result.metaData, { depth: null });
    console.log("Query results: ");
    console.dir(result.rows, { depth: null });
  }

  async DeleteKneiffByKdnrh(kdnrh) {
    var result = await this.executeSQL( `DELETE FROM KNEIFF WHERE KNEIFF_KDNRH = ` + kdnrh );
  }

  async DeleteAllKneiff(){
    var result = await this.executeSQL( "DELETE FROM KNEIFF" );
  }

  async DeleteAllGstiff(){
    var result = await this.executeSQL( "DELETE FROM GSTIFF" );
  }


  async DeleteGstiffByKdnrh(kdnrh) {
    var result = await this.executeSQL( `DELETE FROM GSTIFF WHERE GSTIFF_KDNRH = ` + kdnrh );
  }

  async InsertManyKneiff(partners) {
    console.log("Inserting KNEIFF ... ");
    await this.executeMany(
      "INSERT INTO KNEIFF VALUES (" +
      ":KNEIFF_MDANT," +
      ":KNEIFF_FILNR," +
      ":KNEIFF_KDNRH," +
      ":KNEIFF_KURZN," +
      ":KNEIFF_NAME1," +
      ":KNEIFF_NAME2," +
      ":KNEIFF_NAME3," +
      ":KNEIFF_PLZOR," +
      ":KNEIFF_PLZNR," +
      ":KNEIFF_STRAS," +
      ":KNEIFF_DXGEB," +
      ":KNEIFF_WSGSI," +
      ":KNEIFF_BRNCH," +
      ":KNEIFF_WSBIS," +
      ":KNEIFF_BRNZU," +
      ":KNEIFF_SLDSL," +
      ":KNEIFF_RLDSL," +
      ":KNEIFF_LDRIS," +
      ":KNEIFF_VSDSL," +
      ":KNEIFF_BONIT," +
      ":KNEIFF_GRPKZ," +
      ":KNEIFF_KZLST," +
      ":KNEIFF_KZPER," +
      ":KNEIFF_UMMIO," +
      ":KNEIFF_BILSU," +
      ":KNEIFF_DXNSI," +
      ":KNEIFF_AUSFL," +
      ":KNEIFF_DXAUD," +
      ":KNEIFF_ORGSL," +
      ":KNEIFF_RISGR," +
      ":KNEIFF_KGBID," +
      ":KNEIFF_ANRKZ," +
      ":KNEIFF_ASLGR," +
      ":KNEIFF_KDKLA," +
      ":KNEIFF_KUKON," +
      ":KNEIFF_NACES," +
      ":KNEIFF_LENID," +
      ":KNEIFF_WSCRR," +
      ":KNEIFF_WSFIN," +
      ":KNEIFF_AVCKZ," +
      ":KNEIFF_RECHF," +
      ":KNEIFF_KNBOG," +
      ":KNEIFF_MITAR," +
      ":KNEIFF_PDMEM," +
      ":KNEIFF_LGDAV," +
      ":KNEIFF_RSKAV," +
      ":KNEIFF_DXNPE," +
      ":KNEIFF_DXFBE," +
      ":KNEIFF_EXPVA," +
      ":KNEIFF_FREI1," +
      ":KNEIFF_FREI2," +
      ":KNEIFF_FREI3," +
      ":KNEIFF_FREI4," +
      ":KNEIFF_FREI5," +
      ":KNEIFF_LOEKZ," +
      ":KNEIFF_IFNAM," +
      ":KNEIFF_DXIFD )"
       , partners );
  }

  async InsertManyGstiff(loans) {
    console.log("Inserting GSTIFF ... ");
    await this.executeMany(
      "INSERT INTO GSTIFF VALUES (" +
      ":GSTIFF_MDANT," +
      ":GSTIFF_FILNR," +
      ":GSTIFF_MODUL," +
      ":GSTIFF_KDNRH," +
      ":GSTIFF_KTONR," +
      ":GSTIFF_GSREF," +
      ":GSTIFF_BEZNG," +
      ":GSTIFF_KOART," +
      ":GSTIFF_BILKT," +
      ":GSTIFF_GSKLA," +
      ":GSTIFF_SUKLA," +
      ":GSTIFF_GSART," +
      ":GSTIFF_ULFZT," +
      ":GSTIFF_WHISO," +
      ":GSTIFF_VERKZ," +
      ":GSTIFF_SLDKZ," +
      ":GSTIFF_KZREV," +
      ":GSTIFF_WPKNZ," +
      ":GSTIFF_WPBFN," +
      ":GSTIFF_HBKZN," +
      ":GSTIFF_ZWRIS," +
      ":GSTIFF_KZLST," +
      ":GSTIFF_HAFIN," +
      ":GSTIFF_WESTA," +
      ":GSTIFF_BEZNR," +
      ":GSTIFF_DXVND," +
      ":GSTIFF_DXBSD," +
      ":GSTIFF_MRLFZ," +
      ":GSTIFF_AUSFL," +
      ":GSTIFF_DXAUD," +
      ":GSTIFF_RANGF," +
      ":GSTIFF_KZUEV," +
      ":GSTIFF_KFRIS," +
      ":GSTIFF_DXZAP," +
      ":GSTIFF_KZVSG," +
      ":GSTIFF_KZKRU," +
      ":GSTIFF_KONSB," +
      ":GSTIFF_RISGR," +
      ":GSTIFF_KONSK," +
      ":GSTIFF_WPKNR," +
      ":GSTIFF_KENNR," +
      ":GSTIFF_GSARE," +
      ":GSTIFF_PRDKT," +
      ":GSTIFF_WHIFX," +
      ":GSTIFF_HFZGP," +
      ":GSTIFF_KZZGP," +
      ":GSTIFF_KZSEG," +
      ":GSTIFF_AFREF," +
      ":GSTIFF_KZAKL," +
      ":GSTIFF_KONSR," +
      ":GSTIFF_RLVID," +
      ":GSTIFF_NOTBF," +
      ":GSTIFF_POOLI," +
      ":GSTIFF_AEIDF," +
      ":GSTIFF_BAILV," +
      ":GSTIFF_MRELV," +
      ":GSTIFF_ZINSS," +
      ":GSTIFF_INSRK," +
      ":GSTIFF_KRFUN," +
      ":GSTIFF_TRDCO," +
      ":GSTIFF_APKNZ," +
      ":GSTIFF_DXVBE," +
      ":GSTIFF_DXPO1," +
      ":GSTIFF_DXPO2," +
      ":GSTIFF_DXNPE," +
      ":GSTIFF_DXFBE," +
      ":GSTIFF_PBDFA," +
      ":GSTIFF_DXPBD," +
      ":GSTIFF_CSPID," +
      ":GSTIFF_CSPTY," +
      ":GSTIFF_IPRKZ," +
      ":GSTIFF_ARTSP," +
      ":GSTIFF_RESE1," +
      ":GSTIFF_RESE2," +
      ":GSTIFF_RESE3," +
      ":GSTIFF_FREI1," +
      ":GSTIFF_FREI2," +
      ":GSTIFF_FREI3," +
      ":GSTIFF_FREI4," +
      ":GSTIFF_FREI5," +
      ":GSTIFF_LOEKZ," +
      ":GSTIFF_IFNAM," +
      ":GSTIFF_DXIFD )"
       , loans );
  }

}

module.exports = OracleWriter;
