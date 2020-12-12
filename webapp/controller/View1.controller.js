sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ns.testinput.controller.View1", {
		onInit: function () {

		},

		onAfterRendering: function () {
			Inputmask.extendAliases({
				peso: {
					prefix: "$ ",
					groupSeparator: ".",
					radixPoint: ",",
					alias: "numeric",
					placeholder: "0",
					autoGroup: !0,
					digits: 2,
					digitsOptional: !1,
					clearMaskOnLostFocus: !1,
					autoUnmask: true,
					unmaskAsNumber: true
				}
			});
			
			var sId = document.getElementById(this.byId("__input5").getId()).childNodes[0].childNodes[0].id;
			$('#' + sId).inputmask({ 'alias': 'peso'});
		},

		send: function () {
			sap.m.MessageBox.show("Usted ingresó: " + this.getView().byId("__input5").getValue());
		}

	});
});