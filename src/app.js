// const MunroListView = require('./views/munros_list_view.js');
const Munros = require('./views/munro_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  

  const munros = new Munros();
  munros.getData();

});
