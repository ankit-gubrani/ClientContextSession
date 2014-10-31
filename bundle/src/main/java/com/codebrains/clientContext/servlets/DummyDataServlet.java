package com.codebrains.clientContext.servlets;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.sling.SlingServlet;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.Date;

@SlingServlet(label = "Dummy Data Servlet",description = "This is a dummy servlet that returns Dummy data as JSON Response",
        generateComponent = false, paths = {"/bin/client/data"}, methods = {"GET", "POST"})
@Component(label = "Dummy Data Servlet", description = "This is a dummy servlet that returns Dummy data as JSON Response",
        immediate = true, metatype = false, enabled = true)
public class DummyDataServlet extends SlingAllMethodsServlet {

    private static final Logger LOGGER = LoggerFactory.getLogger(DummyDataServlet.class);

    protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response)
            throws javax.servlet.ServletException, java.io.IOException {
        //Calling DoGet
        doGet(request, response);
    }

    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) {
        try {
            response.setContentType("application/json");
            response.setHeader("Content-Type", "application/json");
            response.addHeader("Cache-Control", "no-cache, no-store, max-age=0, must-revalidate");
            response.addHeader("Pragma", "no-cache");
            response.addHeader("Last-Modified", new Date().toString());
            response.addHeader("Expires", "Fri, 01 Jan 1990 00:00:00 GMT");
            response.addHeader("Connection", "close");

            JSONObject jsonObject = new JSONObject();

            jsonObject.put("name", "Ankit Gubrani");
            jsonObject.put("age", "24");
            jsonObject.put("city", "delhi");
            jsonObject.put("vertical", "cq5");

            if(request.getParameter("callback") != null && !"".equalsIgnoreCase(request.getParameter("callback").toString())) {
                response.getWriter().print(request.getParameter("callback")+"(");
            }

            //Returnning the Dummay JSON Object.
            response.getWriter().print(jsonObject.toString());

            if(request.getParameter("callback") != null && !"".equalsIgnoreCase(request.getParameter("callback").toString())) {
                response.getWriter().print(")");
            }
        } catch (JSONException e) {
            LOGGER.error("Json Exception occured in DummyDataServlet while adding data ", e);
        } catch (IOException e) {
            LOGGER.error("", e);
        }
    }
}
