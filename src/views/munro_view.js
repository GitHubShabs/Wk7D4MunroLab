
const MunroView = function (container, munro) {
  this.munrosContainer = container;
  this.munro = munro;
}

MunroView.prototype.render = function () {
  const munroContainer = document.createElement('p');
  munroContainer.textContent = this.munro.name;
// placeholder
// placeholder
  this.munrosContainer.appendChild(munroContainer);
};

MunroView.prototype.populateList = function (list) {
  this.munro.name.forEach((munro) => {
    const munroListItem = document.createElement('li');
    munroListItem.textContent = munro.name;
    list.appenChild(munroListItem);
  });
};

module.exports = MunroView;
