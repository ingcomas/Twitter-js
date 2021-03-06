const _ = require('lodash');
var data=[];
var aux=0;

function add (name, content) {
    aux++;
    data.push({ name: name, content: content, id: aux});
}
function list () {
    return _.cloneDeep(data);
}
function find (properties) {
    return _.cloneDeep(_.filter(data, properties));
}
      
module.exports = { add: add, list: list, find: find };
  //--------------------------- Tweets falsos------------------------------//

  const randArrayEl = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };
  const getFakeName = function() {
    const fakeFirsts = ['Toni', 'Guille', 'Santi', 'Facu', 'Alan', 'Pinki', 'Tincho', 'Solano', 'R2D2'];
    const fakeLasts = ['Scanlan', 'Aszyn', 'Tralice', 'Velasco', 'Sainz', 'Palacio', 'Palacios', 'Lidueña', 'Fisicaro', 'Ecma'];
    return randArrayEl(fakeFirsts)+ " " + randArrayEl(fakeLasts);
  };
  const getFakeTweet = function() {
    const awesome_adj = ['increible', 'emocionante', 'increible', 'gracioso', 'dulce', 'cool',  'sorprendente', 'impresionante'];
    return "Plataforma 5 es " + randArrayEl(awesome_adj) + "! Los profesores simplemente son " + randArrayEl(awesome_adj) + "s. #P5Love #codedreams";
  };
  for (let i = 0; i < 10; i++) {
    module.exports.add( getFakeName(), getFakeTweet() );
  }  
  // var prueba=module.exports.find({'name':'Toni Tralice'});
  // console.log(prueba);
  // console.log(data);
