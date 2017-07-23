package server_applications.src;
import ballerina.net.http;
import ballerina.lang.messages;
import ballerina.lang.system;
import ballerina.utils.logger;


@http:configuration {basePath:"/api/v2/restaurant-service"}
service<http> cybusDetails {
    
    @http:GET {}
    @http:Path {
        value: "/promotionsbyrestaurentid/{restId}"    
}
    resource params (message request, @http:PathParam{value:"restId"} string restId) {
        message response = {};
        logger:info("Cybus is requesting restaurent information and reviews from Zomato API for restaurent id :" + restId);
        http:ClientConnector geocodeEP = create http:ClientConnector("https://developers.zomato.com/api/v2.1/reviews?res_id="+restId);
        system:println(zomotoToken);
        messages:setHeader(request, "user-key", zomotoToken);

        response = http:ClientConnector.get(geocodeEP,"", request);
        
        reply response;
    }
}