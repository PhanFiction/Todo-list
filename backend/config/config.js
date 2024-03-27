require('dotenv').config();

const { PORT, CLIENT_PORT, SECRET_KEY, NODE_ENV, TODO_MONGODB, TODO_MONGODB_TEST } = process.env;
const databaseURL = NODE_ENV === 'dev' ? TODO_MONGODB : TODO_MONGODB_TEST;

module.exports = {
  PORT,
  CLIENT_PORT,
  SECRET_KEY,
  databaseURL,
};
