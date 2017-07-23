import ballerina.lang.system;
import ballerina.net.http;
import ballerina.lang.messages;

service<http> restInfoService{
    resource listRest(message request){
        message respond ={};

        messages:setStringPayload(respond, "Hello world");

        reply respond;
    }
}