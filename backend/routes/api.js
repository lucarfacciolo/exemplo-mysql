const machine         = require('../controllers/machine');

exports.build = function(server){

  var api = '/api';

  server
  	.get(api  + '/maquina', 	machine.getall)
    .post(api + '/maquina', 	machine.add)
  	.get(api  + '/dados', 	machine.getDados)
    .post(api + '/dados', 	machine.addDados)
}
