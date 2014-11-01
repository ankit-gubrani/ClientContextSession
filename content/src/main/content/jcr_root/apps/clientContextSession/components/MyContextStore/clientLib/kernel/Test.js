if( !CQ_Analytics.MyTestContextStore ) {

    CQ_Analytics.MyTestContextStore = CQ_Analytics.JSONStore.registerNewInstance("mytestcontextstore", {"VerticalTest":"Cq5","AgeTest":"24","NameTest":"test Gubrani","CityTest":"delhi"});

    CQ_Analytics.MyTestContextStore.STOREKEY = "MyTestContextStore";

    CQ_Analytics.MyTestContextStore.STORENAME = "mytestcontextstore";

    CQ_Analytics.MyTestContextStore.loadData = function() {

        var url = "http://localhost:6502/bin/client/data.json";

        var fetchedData = CQ.shared.HTTP.eval(url);

        if(fetchedData) {		
            this.data = fetchedData;
        }
    }

    CQ_Analytics.CCM.addListener("configloaded", function() {

        CQ_Analytics.MyTestContextStore.addListener("update", function() {
			//Any operation can be perofrmed on update of the Session Store
            alert("Update");
        });

        CQ_Analytics.MyTestContextStore.addListener("initialize", function() {
        	alert("Init");
        	this.loadData();
    	});

    }, CQ_Analytics.MyTestContextStore);


 
    CQ_Analytics.MyTestContextStore.initialized = false;
}
