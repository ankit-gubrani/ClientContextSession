if( !CQ_Analytics.MyContextStore ) {

    CQ_Analytics.MyContextStore = CQ_Analytics.JSONStore.registerNewInstance("mycontextstore", {"test1":"DummyDatacq5","test2":"24","test3":"test Gubrani","test":"delhi"});

    CQ_Analytics.MyContextStore.STOREKEY = "MyContextStore";

    CQ_Analytics.MyContextStore.STORENAME = "mycontextstore";

    CQ_Analytics.MyContextStore.loadData = function() {
		alert("Loading Data");
        var url = "http://localhost:6502/bin/client/data.json";
		console.log(this.data);
        var fetchedData = CQ.shared.HTTP.eval(url);

        console.log("fetchedData->");
        console.log(fetchedData);
        if(fetchedData) {
			alert("Fetched Data is not null");
            this.data = fetchedData;
        }
    }

    CQ_Analytics.CCM.addListener("configloaded", function() {
 
        CQ_Analytics.MyContextStore.addListener("update", function() {
			//Any operation can be perofrmed on update of the Session Store
            alert("Update");
        });

        CQ_Analytics.MyContextStore.addListener("initialize", function() {
        	alert("Init");
        	this.loadData();
    	});

    }, CQ_Analytics.MyContextStore);



    CQ_Analytics.MyContextStore.initialized = false;

}