const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE: process.env.MONGODB_URI
  },

  default: {
    SECRET: "AREYOUOKANNIE?",
    DATABASE: "mongodb://localhost:27017/bookshelf"
  }
};

exports.get = function get(env) {
  return config[env] || config.default;
};
