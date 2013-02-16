/* class Personaje */
var Personaje = function(obj, fondo, plataformas) {
	// Parametros
	this.obj = obj;
	this.fondo = fondo;
	this.plataformas = plataformas;
	this.pulsacion;
	this.saltando = false;
	this.pared = false;
    // Variables internas
    var spritePos = ['4','4','44','44','84','84'];
    var controlSprt = 0;
    var ctrlPos = true;
    var avance = 5;
    var gravedad = 0;
    var inPlatform = false;
    var lastPlatform;
    /* METODOS */
    Personaje.prototype.Mover = function(direccion, control) {
    	this.direccion = direccion;
    	switch(direccion){
			case 'IZQ':				
				if(!control){ runSprite(); }else{ runSprite('JUMPING'); }
				if(this.pared !== 'IZQ'){
					if( $(obj).css('left')!='200px' ){ $(obj).css('left','-='+avance+'px' ); }
					else{// CONTROL DEL FONDO
						$(fondo).css('background-position-x','+='+avance/2+'px' );
						$('#elemsMOVE div').css( 'left','+='+avance+'px');
					}
				}		
				$(obj).css("-webkit-transform","scaleX(-1)"); break;
			case 'DER':
				if(!control){ runSprite(); }else{ runSprite('JUMPING'); }
				if(this.pared !== 'DER'){
					if( $(obj).css('left')!='400px' ){ $(obj).css('left','+='+avance+'px' ); }
					else{// CONTROL DEL FONDO
						$(fondo).css('background-position-x','-='+avance/2+'px' );
						$('#elemsMOVE div').css( 'left','-='+avance+'px');						
					}
				}				
				$(obj).css("-webkit-transform","scaleX(1)"); break;
			case 'RELAX':
				controlDireccion = 'RELAX';
				runSprite('RELAX');
				break;
			}
	}
	
	Personaje.prototype.Jump = function(jumpTo, pos) {	
		if(jumpTo){ this.Mover(jumpTo, true); }
		if( $(obj).position().top >= pos-110 && ctrlPos == true && inPlatform == true ){
			ctrlPos = false;
			this.saltando = true;
			$(obj).animate({'bottom': '+=120px'},350, function(){
				runSprite('RELAX');
				inPlatform = false;
				setTimeout(function(){ permisos() }, 100);
				function permisos(){  this.saltando = false; ctrlPos = true; }
			});							
		}
	}
	Personaje.prototype.Gravity = function(arrPlatforms) {
		if(!inPlatform){
			for(i=0; i<arrPlatforms.length; i++){
			var colision = $('.person').collision( '#'+arrPlatforms[i].name+'' );
				if( colision.length == 0 ){
				$(obj).css('bottom', '-='+gravedad+'px');
				if(gravedad < 2){ gravedad++; };
				}else{
					inPlatform = true;
					gravedad = 0;
					lastPlatform = i;
					posPlat = $('#plat'+i).css( 'bottom' );
					$(this.obj).css( 'bottom' , posPlat );//recolocamos
					return
				}
			}
		}else{
			if( this.obj.position().left < $('#'+this.plataformas[lastPlatform].name).position().left-10 ||
				this.obj.position().left + this.obj.width() > $('#'+this.plataformas[lastPlatform].name).position().left + $('#'+this.plataformas[lastPlatform].name).width() +10  ){
				inPlatform = false;
			}
		}
	}
	
	function runSprite(e){
		if(e == 'RELAX' ){$(obj).css('background-position', '44px');}
		else if(e == 'JUMPING' ){$(obj).css('background-position', '84px');}else{
			pos = spritePos[controlSprt];	
			$(obj).css('background-position', pos+'px');	
			if(controlSprt==spritePos.length){
				controlSprt = 0;
			}else{ controlSprt++; }
		}
	}
	
	Personaje.prototype.SET_ctrlPos = function(param){   ctrlPos = param;   }
	
	this.Top = this.obj.position().top;
	this.Bottom = this.obj.position().top + this.obj.height();
	this.Left = this.obj.position().left;
	this.Right = this.obj.position().left + this.obj.width();
}
