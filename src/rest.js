import { serverAddress } from "./constants";
async function login(email,password)
{
  const res= await fetch(`${serverAddress}/login`, {
    method:'Post',
    body: JSON.stringify({
        email: email,
        password: password}),
        headers:{
            'Content-Type': 'application/json'
        }
    });
  let resBody = await res.text();
  if(res.ok){   
    return {ok:true, token:resBody};
  }
  else return {ok:false,message:resBody};
}

function register(username,email,password)
{
  return fetch(`${serverAddress}/register`, {
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


export {login,register};