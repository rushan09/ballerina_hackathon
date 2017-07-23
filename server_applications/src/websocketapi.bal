package server_applications.src;
import ballerina.lang.system;
import ballerina.net.http;
import ballerina.lang.messages;
import ballerina.net.ws;

@http:configuration {basePath:"/echo-server"}
@ws:WebSocketUpgradePath {value:"/ws"}
service<ws> websocketEchoServer {
    
    http:ClientConnector locationEP = create http:ClientConnector("http://localhost:9090");
    
    @ws:OnOpen {}
    resource onOpen(message m) {
        
        //New client connected to the server. 
        
        message newMessage = {};
        message response = {};
        
        //stroing connection to use later
        ws:storeConnection(zomotoToken);

        // messages:addHeader(newMessage,"user-key", "1cdb73667d3ce6441d1336057b3d5c8f");
        response = http:ClientConnector.execute(locationEP, "GET","/cybusmock/nearestpromotions",newMessage);
               
        string command = messages:getStringPayload(response);
        ws:pushText(command);
    }

    @ws:OnTextMessage {}
    resource onTextMessage(message m) {
        // string stringPayload = messages:getStringPayload(m);
        // if ("closeMe" == stringPayload) {
        //     ws:closeConnection(); // Close connection from server side
        // } else {
        //     ws:pushText(stringPayload);
        //     system:println("client: " + messages:getStringPayload(m));
        // }
    }

    @ws:OnClose {}
    resource onClose(message m) {
        system:println("client left the server.");
    }
}