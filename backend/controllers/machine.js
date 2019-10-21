const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Jacare123$'
});

function getall(req,res){
	connection.query('SELECT * FROM fabricainteligente.maquinas', function(error, results){
		if(error){
			res.sendStatus(500);
			debugger;
			console.log("deu erro");
			console.log(error);
		} else {
			res.send(results);
		}
	})
}
function getDados(req,res){
	connection.query('SELECT * FROM fabricainteligente.dados', function(error, results){
		if(error){
			res.sendStatus(500);
			debugger;
			console.log("deu erro");
			console.log(error);
		} else {
			res.send(results);
		}
	})
}
function addDados(req,res){
	console.log(req.body);
	let values = '"' + req.body.ip +'","' + req.body.valor + '"';
	console.log()

	connection.query('INSERT INTO fabricainteligente.maquinas(Ip,Valor) VALUES (' + values + ')', function(error, results){
	 	if (error){
			 res.sendStatus(500);
			 debugger;
			 console.log("deu erro");
			 console.log(error);
	 	} else {
			res.send(req.body);
		}
	 })
}
function add(req,res){
	let values = '"' + req.body.fabricante +'","' + req.body.modelo +'","' + req.body.ip + '"';

	connection.query('INSERT INTO fabricainteligente.maquinas(Fabricante, Modelo, ip) VALUES (' + values + ')', function(error, results){
	 	if (error){
			 res.sendStatus(500);
			 debugger;
			 console.log("deu erro");
			 console.log(error);
	 	} else {
			res.send(req.body);
		}
	 })
}

module.exports = {getall, add,addDados,getDados}