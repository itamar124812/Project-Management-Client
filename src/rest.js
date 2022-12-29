import { serverAddress } from "./constants";
import { getToken } from "./useLocalStorage";


function register(username,email,password)
{
const res= fetch(`${serverAddress}/register`, {
    method: 'POST',
    body: JSON.stringify({
        username: username,
        email: email,
        password: password
    }),
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res=>{
  if(res.ok)
  {
    return {ok:true}
  }
}).then(res=>res.text);
}



async function login(email,password){

  const res= await fetch(`${serverAddress}/login`, {
    method:'Post',
    body: JSON.stringify({
        email: email,
        password: password}),
        headers:{
            'Content-Type': 'application/json',

        }
    });
  let resBody = await res.text();
  if(res.ok){   
    return {ok:true, token:resBody};
  }
  else return {ok:false,message:resBody};
}

async function createBoard (name)  {
    let token = getToken();
    const res=  await fetch(`${serverAddress}/board/createBoard?name=${name}`, {
      method: 'Post',
      body: JSON.stringify({}),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${token}`
      }
    })

let resBody = await res.json();
  console.log(resBody)
  resBody.ok = res.ok;
  if(res.ok)
      return resBody;
 
  else return {ok:false,message:resBody};
}



 function getBoard() {
  return fetch(serverAddress + "/board/getBoard", {
    method: "GET",
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (data) {
      return data;
    });
}


 function addItem(task){
    // console.log("add item");
    //   return fetch(serverAddress + "/board/send?reciverName="+username, {
    //     method: 'POST',
    //     body: messageBody,
    //     headers: {
    //         'Content-Type': 'text/plain',
    //     }
    // }).then(Response => {
    //     if (Response.ok) {
    //         console.log(Response.body);
    //         return Response.text();
    //     }
    // }).then(result => result);
 }






export{createBoard,login,register,addItem}
