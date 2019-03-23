/*
	Felipe Santiago Guzmán Jiménez
	Curso de fundamentos de Node.js, con un proyecto agil
*/


// Menu que se va a mostrar con los cursos
function menu(){
		console.log("+----+--------------------------------------------+----------+--------+");
		console.log("| ID |             Nombre del curso               | Duracion |  valor |");
		console.log("+----+--------------------------------------------+----------+--------+");

		setTimeout(function(){console.log("| "+cursos[0].id+"  | "+cursos[0].nombre+"                             | "+cursos[0].duracion+" | "+cursos[0].valor+" |\n"+
		"+----+--------------------------------------------+----------+--------+")},2000);

		setTimeout(function(){console.log("| "+cursos[1].id+"  | "+cursos[1].nombre+"   | "+cursos[1].duracion+" | "+cursos[1].valor+" |\n"+
		"+----+--------------------------------------------+----------+--------+")},4000);

		setTimeout(function(){console.log("| "+cursos[2].id+"  | "+cursos[2].nombre+"                       | "+cursos[2].duracion+"| "+cursos[2].valor+" |\n"+
		"+----+--------------------------------------------+----------+--------+")},6000);
	}

// Las opciones permitidas para ingresar
const opciones = {
	id:{
		alias: 'i',
		demand : true
	},
	nombre:{
		alias: 'n',
		demand : true

	},
	cedula:{
		demand : true,
		alias: 'c'

	}

}

// Listado de cursos a mostrar
let cursos=[{
	id: 1,
	nombre: 'Ingles Nivel 1',
	duracion: '64 horas',
	valor: 410000
},
{
	id: 2,
nombre: 'pruebas geneticas en procesos judiciales',
	duracion: '48 horas',
	valor: 295000
},{
	id: 3,
	nombre: 'Iniciacion deportiva',
	duracion: 'semestral',
	valor: 135000
}]

//modulos requeridos
const express = require('express')
const app = express()
const fs = require('fs'); // modulo para el manejo de archivos
const arg = require('yargs')//modulo para la lectura de argumentos
			.command('inscribir','generar inscripcion',opciones,function crear_archivo(arg){

var idb = arg.id;

	/*
		Busca que el id ingresado por el usuario este en el arreglo de objetos de
	  los cursos, y devuelve el objeto completo, con los valores. Si no lo encuentra
	  devuelve el valor "undefined"
	*/
	let curso=cursos.find(function(estudiante){
				return estudiante.id == idb;
			})

			/*
				Si el valor devuelto no es "undefined", entonces crea el archivo con los
			 	datos del estudiante y del curso
			*/
			if(curso != undefined ){

				texto = 'Nombre del estudiante: '+arg.nombre+'.<br>'+
								'Cedula de estudiante: '+arg.cedula+'.<br>'+
								'Id del curso: '+curso.id+'.<br>'+
								'Nombre del Curso: '+curso.nombre+'.<br>'+
								'Duracion del curso: '+curso.duracion+'<br>'+
								'Valor del curso: '+curso.valor+'<br>';

				app.get('/', function (req, res) {
				  res.send(texto)
				})

				app.listen(3000)
				console.log('El archivo se ha creado');

		}else{
// En caso de haber devuelto "undefined", se muestra un mensaje de error al usuario
console.log('El id intrduccido NO ES VALIDO');
menu();
}})

	.argv
// Si no se ingresa ningun comando, se muestra solo el menu.
	 if (arg.id == undefined)
	 	{menu();}
