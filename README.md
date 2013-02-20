# [silverShape v0.0.1](https://github.com/artpok/silverShape.git)
=======

Desarrollo de un juego de plataformas en Html, CSS y Javascript, realizado por [Marcelo Piñeiro]().
Por supuesto, se aceptan sugerencias, ayuda o colaboración. Puedes contactar conmigo [aquí](mailto:artpok@hotmail.com?subject=Contacto desde GITHUB-jueGOjs).

Este es un simple trabajo personal a modo de entrenamiento para el desarrollo de un juego de plataformas, con la intención de que sea totalmente accesible desde cualquier navegador, ya sea web o movil.
De momento le voy a dar unicamente soporte a WEBKIT pero esto es facilmente adaptable a los diferentes motores o a un futuro standar.

La idea es realizar una serie de clases valiendonos de la POO y prototypes en JS.

PLATAFORMAS:
------------

Mediante la clase Platform creamos nuevas plataformas, pasándole por parámetro los diferentes valores necesarios.
  
  Descripción:
  
    var miPlataforma = new Platform(
  
    	'NOMBRE DE LA PLATAFORMA',  /*Tengo que mirar como hacer que coja directamente el nombre de instancia*/
  	
  		X,  /*0 es la posición más a la izquierda*/
  	
		Y,  /*0 es la posición más abajo*/
            
		LARGO,  /*Largo de la plataforma*/
            
		RIGIDEZ,  /*booleano*/
            
		arrPlatforms  /*Nombre del bjeto array en el que queremos almacenar cada una de las plataformas*/
            
	);
	
  Ejemplo:
  
	var plat0 = new Platform('plat0', 0, 0, 700, true, arrPlatforms);
	
PERSONAJE:
------------

Mediante la clase Personaje creamos un nuevo personaje principal....SEGUIREMOS...

CONTROLES:
------------

20/02/2013  - Añado esta fantastica libreria [html5-virtual-game-controller](https://github.com/austinhallock/html5-virtual-game-controller)de[austinhallock](https://github.com/austinhallock) que en teoria hará que el uego funcione en dispositivos táctiles. Vamos a probar!!! 
