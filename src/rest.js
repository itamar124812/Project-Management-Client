import { serverAddress } from "./constants";
import { getToken } from "./useLocalStorage";


async function register(username, email, password) {
  const res = await fetch(`${serverAddress}/register`, {
    method: 'POST',
    body: JSON.stringify({
      username: username,
      email: email,
      password: password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    if (res.ok) {
      return { ok: true }
    }
  }).then(res => res.text);
}



async function login(email, password) {

  const res = await fetch(`${serverAddress}/login`, {
    method: 'Post',
    body: JSON.stringify({
      email: email,
      password: password
    }),
    headers: {
      'Content-Type': 'application/json',

    }
  });
  let resBody = await res.text();
  if (res.ok) {
    return { ok: true, token: resBody };
  }
  else return { ok: false, message: resBody };
}

async function createBoard(name) {
  let token = getToken();
  const res = await fetch(`${serverAddress}/board/createBoard?name=${name}`, {
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
  if (res.ok)
    return resBody;

  else return { ok: false, message: resBody };
}



function getBoard(boardId) {
  let token = getToken();
  return fetch(serverAddress + "/board/getBoard", {
    method: "GET",
    headers: {
      "boardId": boardId,
      'Authorization': `bearer ${token}`
    }
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

async function createTask(task) {
  let token = getToken();
  const requestBody = {
    title: task.title,
    description: task.description,
    importance: task.importance,
    status: task.status,
    type: task.type
  };
  console.log(requestBody);
  console.log(task.boardId);

  let res = await fetch(serverAddress + "/task/addTask", {
    method: "Post",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${token}`,
      'boardId': task.boardId,
    },
    body: JSON.stringify(requestBody),
  })
    .then((res) => {
      if (res.ok) {
        console.log(res)
        return res.text();
      }
      throw new Error(res.statusText);
    })
    .then((resBody) => {
      try {
        resBody = JSON.parse(resBody);
      } catch (e) {
        // resBody is not a valid JSON object
      }
      resBody.ok = res.ok;
      if (res.ok) {
        return resBody;
      } else {
        return { ok: false, message: resBody };
      }
    })
    .catch((error) => {
      console.error(error);
    });
}


function deleteTask(boardId, taskId) {
  let token = getToken();

  const res = fetch(serverAddress + "/task/deleteTask/" + taskId, {
    method: "DELETE",
    headers: {
      'Authorization': `bearer ${token}`,
      'boardId': boardId,

    },
  }).then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  }).then(res => res)
    .then(resBody => {
      return resBody;
    })
  return res;
}




function filter(boardId, filterFields) {
  console.log(boardId)
  console.log(filterFields)
  let token = getToken();

  return fetch(serverAddress + "/board/filter", {
    method: "Post",
    headers: {
      'Authorization': `bearer ${token}`,
      'Content-Type': 'application/json',
      'boardId': boardId,

    },
    body: JSON.stringify(filterFields)

  }).then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  }).then(res => res)
}
async function getAllBoards() {
  const token = getToken();
  const res= await fetch(`${serverAddress}/board/getAllBoards`, {
    method: "Get",
    headers: {
      'Authorization': `bearer ${token}`
    }
  });
  if (res.ok && res.status === 200) {
      const resJson = await res.json();
      return resJson;
  }
  else return { error: true, message: await res.text() }
}


export { createBoard, login, register,getAllBoards, createTask, getBoard, deleteTask, filter }
