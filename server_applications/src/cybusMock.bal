package server_applications.src;
import ballerina.net.http;
import ballerina.lang.messages;
import ballerina.utils.logger;
import ballerina.data.sql;
import ballerina.lang.errors;
import ballerina.lang.jsons;
import ballerina.net.ws;

map props = {"jdbcUrl": "jdbc:mysql://localhost:3306/restaurent_promotions?characterEncoding=UTF-8&useSSL=false", "username": "root", "password": "1qaz2wsx@"};

service<http> cybusmock {

    @http:GET {}
    @http:Path {
        value: "/promotionsbyrestaurentid/{restId}"    
}
    resource params (message m, @http:PathParam{value:"restId"} string restId) {
        message response = {};
        logger:info("Received request for promotions on restaurentId :" + restId);
        json responseFromJson = getAllPromotionsForRestaurentId(restId);
        json responseJson = {"resp": responseFromJson};
        messages:setJsonPayload(response, responseJson);
        reply response;
    }

    @http:Path {
        value: "/nearestpromotions"    
}
    resource params2 (message m) {
        m = {};
        json responseFromJson = getNearestPromotions();
        messages:setJsonPayload(m, responseFromJson);
        reply m;
    }

    @http:Path {
        value: "/allpromotions"    
}
    resource params3 (message m) {
        m = {};
        json responseFromJson = getAllPromotions();
        messages:setJsonPayload(m, responseFromJson);
        reply m;
    }

    @http:Path {
        value: "/addpromotions"    
}
    resource params4 (message m) {
        json jsonMsg = messages:getJsonPayload(m);
        logger:info("Received request for addpromotions");
        string restaurantId;
        string restaurantName;
        string offerName;
        string offerPeriod;
        string description;
        string offerPrice;
        string validFor;
        string nearest;
        restaurantId, _ = (string)jsonMsg["restaurantId"];
        restaurantName, _ = (string)jsonMsg["restaurantName"];
        offerName, _ = (string)jsonMsg["offerName"];
        offerPeriod, _ = (string)jsonMsg["offerPeriod"];
        description, _ = (string)jsonMsg["description"];
        offerPrice, _ = (string)jsonMsg["offerPrice"];
        validFor, _ = (string)jsonMsg["validFor"];
        nearest, _ = (string)jsonMsg["nearest"];
        string insertQuery = "INSERT INTO cybus_promotions_mock(restaurant_id,restaurant_name,offer_name,offer_period,description,offer_price,valid_for,nearest)VALUES ('" + restaurantId + "', '" + restaurantName + "', '" + offerName + "', '" + offerPeriod + "', '" + description + "', '" + offerPrice + "', '" + validFor + "', '" + nearest + "');";
        json responseFromJson = insertPromotions(insertQuery);
        messages:setJsonPayload(m, responseFromJson);
        
        //sending new promotion to the client via stored connection in web socket
        ws:pushTextToConnection(zomotoToken,jsons:toString(jsonMsg));
        
        reply m;
    }
}

function getAllPromotionsForRestaurentId (string restaurentId) (json jsonResult) {
    logger:info("Querying DB on getAllPromotionsForRestaurentId for restaurentId:" + restaurentId);
    sql:ClientConnector empDB = create sql:ClientConnector (props);
    sql:Parameter[] params = [];
    datatable dt = sql:ClientConnector.select(empDB, "SELECT `restaurant_id`,`restaurant_name`,`offer_name`,`offer_period`,`description`,`offer_price`,`valid_for` FROM `cybus_promotions_mock` WHERE `restaurant_id` = " + restaurentId, params);
    var jsonRes, _ = <json>dt;
    return jsonRes;
}

function getNearestPromotions () (json jsonResult) {
    logger:info("Querying DB on getNearestPromotions");
    sql:ClientConnector empDB = create sql:ClientConnector (props);
    sql:Parameter[] params = [];
    datatable dt = sql:ClientConnector.select(empDB, "SELECT `restaurant_id`,`restaurant_name`,`offer_name`,`offer_period`,`description`,`offer_price`,`valid_for` FROM `cybus_promotions_mock` WHERE nearest= 'Y'", params);
    var jsonRes, _ = <json>dt;
    return jsonRes;
}

function getAllPromotions () (json jsonResult) {
    logger:info("Querying DB on getNearestPromotions");
    sql:ClientConnector empDB = create sql:ClientConnector (props);
    sql:Parameter[] params = [];
    datatable dt = sql:ClientConnector.select(empDB, "SELECT `restaurant_id`,`restaurant_name`,`offer_name`,`offer_period`,`description`,`offer_price`,`valid_for` FROM `cybus_promotions_mock`", params);
    var jsonRes, _ = <json>dt;
    return jsonRes;
}

function insertPromotions (string insertQuery) (json jsonResult) {
    logger:info("Inseting to DB using query :" + insertQuery);
    sql:ClientConnector empDB = create sql:ClientConnector (props);
    sql:Parameter[] params = [];
    json jsonRes;
    try {
        sql:ClientConnector.update(empDB, insertQuery, params);
        jsonRes = {"Response" : "Promotion Added"};
    } catch (errors:Error err) {
        jsonRes = {"ErrorResponse" : "Restaurent ID can not be duplicated"};
    }
finally {
        return jsonRes;
    }    return jsonRes;
 }
