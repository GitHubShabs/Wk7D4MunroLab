const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Munros = function () {
  this.munros = [];
};


Munros.prototype.getData = function () {
  const url = `https://munroapi.herokuapp.com/munros`;
  const request = new RequestHelper(url);

  const myPromise = request.get();
  myPromise.then((data) => {
    console.log(data);
    this.munros = data;
    PubSub.publish('Munros:munros-data-ready', this.munros);
  })
  .catch((err) =>{
    console.error(err);
  })
};

module.exports = Munros;
