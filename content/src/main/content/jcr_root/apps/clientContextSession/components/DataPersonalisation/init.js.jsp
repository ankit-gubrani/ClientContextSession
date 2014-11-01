<%@ page session="false" contentType="text/javascript" %><% %><%@ include file="/libs/foundation/global.jsp" %><% %>

if (CQ_Analytics.AnkitContextStore) {
	alert("Test");
	CQ_Analytics.AnkitContextStore.init();
}