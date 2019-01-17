const PubSub = require('../helpers/pub_sub.js');
const MunroView = require('./munro_view.js')


const MunroListView = function (container) {
  this.container = container;
  this.munros = null;
}

MunroListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:munros-data-ready', (event) => {
// debugger
    this.munros = event.detail;
    console.log(event);
    this.render();
  });
};

MunroListView.prototype.render = function() {
  this.container.innerHTML = '';
  this.munros.forEach((munro) => {
    const munroView = new MunroView(this.container, munro);
    munroView.render();
  });
};





module.exports = MunroListView;
