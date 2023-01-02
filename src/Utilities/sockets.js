import * as SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import { serverAddress } from "./constants";
let stompClient;
function socketFactory() {
    console.log("socketFactory")
    return new SockJS(serverAddress + '/ws');
}



function onConnected(userId) {
    let privateUrl = '/user/' + userId +"/";
    console.log(privateUrl)
    console.log("connection established");
    stompClient.subscribe("/topic/notification/" + userId, ShowPopUp);
    console.log("first")
}
function ShowPopUp(payload){
    //let notification=JSON.parse(payload.body);
    console.log(payload.body)
}

function openConnection(userId) {
    console.log("openConnection");
    console.log(userId);
    const socket = socketFactory();
    console.log(socket);
    stompClient = Stomp.over(socket);
    stompClient.connect({}, () => onConnected(userId));
}

export { openConnection };