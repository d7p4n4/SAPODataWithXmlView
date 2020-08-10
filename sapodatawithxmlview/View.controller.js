sap.ui.controller("sapodatawithxmlview.View", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sapodatawithxmlview.View
*/
onAfterRendering: function() {
    /*$.ajax({
        url: "https://localhost:44315/odata/ac4ypersistentchildodata"
    }).done(function(data, status, jqxhr) {*/
        var oModel = new sap.ui.model.odata.v4.ODataModel({
			groupId: "$direct",
			synchronizationMode: "None",
			serviceUrl: "https://localhost:44315/odata/"
		});
        //oModel.setData({modelData: data});
        var oTable = this.byId("table0");
        oTable.setModel(oModel);
    //});
},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf sapodatawithxmlview.View
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf sapodatawithxmlview.View
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf sapodatawithxmlview.View
*/
//	onExit: function() {
//
//	}

});