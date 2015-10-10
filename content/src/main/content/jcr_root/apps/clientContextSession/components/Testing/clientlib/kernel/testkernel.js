if( !CQ_Analytics.myTestStore) {

    CQ_Analytics.myTestStore = CQ_Analytics.JSONStore.registerNewInstance("test", {"name" : "Ankit"});

	CQ_Analytics.myTestStore.STOREKEY = "ankitstore";

    CQ_Analytics.myTestStore.STORENAME = "test";

}