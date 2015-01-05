module.exports = {
  db: {
    production: "mongodb://" + process.env.MONGO_TT_USER + ":" + 
      process.env.MONGO_TT_PASS + "@ds029911.mongolab.com:29911/tabletennisladder",
    development: "mongodb://localhost/ttladder_development",
    test: "mongodb://localhost/ttladder_test"
  }
};
