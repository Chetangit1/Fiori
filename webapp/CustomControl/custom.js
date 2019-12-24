sap.ui.define(["sap/ui/core/Control"],function (Controller){
	
	"use strict";
	
	 Controller.extend("MyNameSpace.MyTest1.CustomControl.custom",{
	metadata:{},
	init:function(){},
	renderer:function(oRm, oControl){
		oRm.write("<div id='chetan'");
		oRm.addStyle("border","2px solid red");
		oRm.addStyle("width","90%");
		oRm.addStyle("height","750px");
		oRm.writeStyles();
		oRm.write("></div>");
	}
	});
	

	
});