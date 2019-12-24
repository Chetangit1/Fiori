sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"MyNameSpace/MyTest1/CustomControl/Head"
], function (Controller, CustomControl) {
	"use strict";

	return Controller.extend("MyNameSpace.MyTest1.controller.View1", {
		onInit: function () {

		},
		oMap : null,
		onAfterRendering:function(){
			if(!this.oMap){
				this.oMap = new 	google.maps.Map( $("#chetan"),{
					zoom: 12,
					center:{ lat:28.7041, lng:77.1025 }
				});
			}
		}
	});
});