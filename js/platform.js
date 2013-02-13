/* class Platform */
var Platform = function(name, posX, posY, widZ, movM, arr) {
	// Parametros
	arr.push(this);
	this.name = name;
	this.posX = posX;
	this.posY = posY;
	this.widZ = widZ;
	this.widzLarge = this.widZ-44;
	this.movM = movM;
	this.obj;
    // Variables internas
    var mov_Plat = 'DER';
		
	//Creacion automatica de plataforma
	if(movM){
		$('.finalDER').after('<div class="plataform movM" id="'+name+'"><div class="plat_left"></div><div style="width:'+this.widzLarge+'px" class="plat_large"></div><div class="plat_right"></div></div>');
		this.obj = $('#'+name);
		$( this.obj ).css({ left: posX+'px', bottom: posY+'px', width: widZ+'px' });
		//setInterval(movement, 1000);
	}else{
		$('.finalDER').after('<div class="plataform" id="'+name+'"><div class="plat_left"></div><div style="width:'+this.widzLarge+'px" class="plat_large"></div><div class="plat_right"></div></div>');
		this.obj = $('#'+name);
		$( this.obj ).css({ left: posX+'px', bottom: posY+'px', width: widZ+'px' });
	}	

    /* METODOS */
    this.Top = this.obj.position().top;
	this.Bottom = this.obj.position().top - this.obj.height();
	this.Left = this.obj.position().left; 
	this.Right = this.obj.position().left + this.obj.width();
	
	// MOVEMENT...
	/*Platform.prototype = {
		Move: function(){
			//console.log( $( this.obj ) );
			
			if(this.movM !== false){ this.movM = this.posX-this.movM }
			plat = $( this.obj ).css('left');
			plat = plat.replace('px', '');
			
			if( mov_Plat == 'DER' ){
			
				console.log( plat+' DER!! '+this.posX);
				$( this.obj ).css({ left: '+=1px' });
				if( $( this.obj ).css('left') >= this.movM ){ mov_Plat = 'IZQ' };
				
			}else if( mov_Plat == 'IZQ' ){
			
				console.log( plat+' IZQ!! '+this.posX);
				$( this.obj ).css({ left: '-=1px' });
				if( $( this.obj ).css('left') <= this.posX){ mov_Plat = 'DER' };
			}
		},
		Log: function(cont){,
			console.log(cont);
		}
	}*/
	function movement(){
		obj = $('#'+name);
		objLeft = $('#'+name).css('left');
		parnT = obj.parent().parent().css("background-position-x");
		console.log('kdjlkfdj --- '+parnT);
		if( mov_Plat == 'DER' ){
			console.log(movM+' DER '+name);
			
			$( obj ).css({ left: movM-parnT+'px' }, function(){
				console.log('----------------------');
				mov_Plat = 'IZQ';
			});
		}else{
			console.log('IZQ');
			$( obj ).css({ left: parnT+'px' }, 2500, function(){
				mov_Plat = 'DER';
			});
		}
	}
}
