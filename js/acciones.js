// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		$('#beep').tap(function(){
			navigator.notification.beep(2);
		});//cierre del tap del beep
		$('#vibrar').tap(function(){
			navigator.notification.vibrate(2000);//se mide en milisegundos
		});//cierre del tap de vibrar
	},false);//cierre del Listener
});//cierre de la funcion principal