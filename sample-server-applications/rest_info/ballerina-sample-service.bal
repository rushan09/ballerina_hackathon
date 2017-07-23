package rest_info;

import ballerina.net.http;
import ballerina.lang.messages;
import ballerina.lang.jsons;

string zomotoToken = "c248055395ca62ed07d0db375334650e";
string zomotoEndpoint = "https://developers.zomato.com/api/v2.1/";


struct Location {
    string locationName;
}

struct Restaurant {
    string id;
    string name;
    string address;
    string thumb;
    string featuredImage;
    string[] cuisines;
    int rating;
    string ratingTest;
    string[] promotions;
}

struct FindByLocationResponse {
    Location location;
    Restaurant[] restaurants;
}

@http:configuration {basePath:"/api/v1/restaurant-service"}
service<http> HelloService {
    @http:GET {}
    @http:Path {value:"/find-by-location"}
    resource findByLocation (message request, @http:QueryParam {value:"lat"} string lat, @http:QueryParam {value:"lon"} string lon) {
        //geo code from zomoto
        message geocodeResponseMessage = {};
        http:ClientConnector geocodeEP = create http:ClientConnector(zomotoEndpoint);
        messages:setHeader(geocodeResponseMessage, "user-key", zomotoToken);
        geocodeResponseMessage = http:ClientConnector.get(geocodeEP, "geocode?lat=" + lat + "&lon=" + lon, geocodeResponseMessage);

        json geocodeResponseJson = messages:getJsonPayload(geocodeResponseMessage);

        //promotions from db


        //mediation
        Location location = {
                         locationName: (jsons:getString(geocodeResponseJson, "location.title"))
                     };
        int restCount = lengthof geocodeResponseJson.
        //Restaurant[]



        //response
        var responseJson, _ = <json> location;
        message response = {};
        messages:setJsonPayload(response, responseJson);

        reply response;
    }
}
