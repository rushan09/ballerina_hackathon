package server_applications.src;
import ballerina.net.http;
import ballerina.lang.messages;
import ballerina.lang.system;

string zomotoToken = "c248055395ca62ed07d0db375334650e";

@http:configuration {basePath:"/api/v1/restaurant-service"}
service<http> cybus {

    @http:GET {}
    @http:Path {value:"/find-by-location"}
    resource findByLocation (message request, @http:QueryParam {value:"lat"} string lat, @http:QueryParam {value:"lon"} string lon) {
        message response = {};


        http:ClientConnector geocodeEP = create http:ClientConnector("https://developers.zomato.com/api/v2.1/geocode?lat="+lat+"&lon="+lon);
        system:println(zomotoToken);
        messages:setHeader(request, "user-key", zomotoToken);

        response = http:ClientConnector.get(geocodeEP,"", request);

        //messages:setStringPayload(response, "Hello World Channa !!! - " + lat + "," +lon);
        reply response;
    }
}