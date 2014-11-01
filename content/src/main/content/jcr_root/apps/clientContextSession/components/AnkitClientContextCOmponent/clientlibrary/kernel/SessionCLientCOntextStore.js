if( !CQ_Analytics.AnkitContextStore ) {
alert("Hello");
    CQ_Analytics.AnkitContextStore = CQ_Analytics.JSONStore.registerNewInstance("ankitcontextstore", {"VerticalTest":"Cq5","AgeTest":"24","NameTest":"test Gubrani","CityTest":"delhi"});

    CQ_Analytics.AnkitContextStore.STOREKEY = "AnkContextStore";

    CQ_Analytics.AnkitContextStore.STORENAME = "ankitcontextstore";

    CQ_Analytics.AnkitContextStore.loadData = function() {

        var url = "http://localhost:6502/bin/client/data.json";

        var fetchedData = CQ.shared.HTTP.eval(url);

        if(fetchedData) {		
            this.data = fetchedData;
        }
    }

    CQ_Analytics.CCM.addListener("configloaded", function() {
 
        CQ_Analytics.AnkitContextStore.addListener("update", function() {
			//Any operation can be perofrmed on update of the Session Store
            alert("Update");
        });

        CQ_Analytics.AnkitContextStore.addListener("initialize", function() {
        	alert("Init");
        	this.loadData();
    	});

    }, CQ_Analytics.AnkitContextStore);



    CQ_Analytics.AnkitContextStore.initialized = false;
}