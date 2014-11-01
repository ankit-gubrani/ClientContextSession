alert("UI");
if (CQ_Analytics.AnkitContextStore) {

    CQ_Analytics.AnkitContextStore.createHTMLElement = function () {
        var div = document.createElement("div");
        div.className = "cq-cc-content";

        var currentDBCloud = this;
        var nbProp = 0;
        var data = this.data;

        for (var property in data){
            value = data[property];

            var li = document.createElement("div");
            li.className = "cq-cc-store-property cq-cc-store-property-level" + nbProp;
            var finalDiv = document.createElement("div");
            finalDiv.innerHTML = value;
            finalDiv.title = value + " (" + property + ")";
            finalDiv.setAttribute("data-property", property);
            finalDiv.setAttribute("data-store", currentDBCloud.STORENAME);
            li.appendChild(finalDiv);
            div.appendChild(li);
            // for proper wrapping in IE
            div.appendChild(document.createTextNode(" "));

            nbProp++;
        }


        if (nbProp == 0) {
            var li = document.createElement("div");
            li.className = "noentry noprop";
            li.innerHTML = "No Lead Information";
            div.appendChild(li);
        }

        return div;
    };

    CQ_Analytics.AnkitContextStore.renderer = function (store, targetId) {
        CQ_Analytics.AnkitContextStore.targetId = targetId;
        if (store && store.STORENAME == CQ_Analytics.AnkitContextStore.STORENAME) {
            $CQ("#" + targetId).children().remove();

            var clearDiv = document.createElement("div");
            clearDiv.className ="cq-cc-clear";

            $CQ("#" + targetId).append(store.createHTMLElement());
            $CQ("#" + targetId).append(clearDiv);

        }
    };

    CQ_Analytics.CCM.addListener("configloaded", function () {
        CQ_Analytics.ClickstreamcloudUI.register(
            this.getSessionStore(),
            CQ_Analytics.CCM.getUIConfig(this.getName()),
            this.createHTMLElement);
        CQ_Analytics.CCM.register(this);
    }, CQ_Analytics.AnkitContextStore);
}