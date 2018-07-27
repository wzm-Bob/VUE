import {
  post
} from "../axios/http";


export function loginByUsername(pageObj) {
  debugger
  return new Promise((resolve, reject) => {
    post("/app-hr/api/userInfo/updateUserTopInfo/", pageObj, null, true)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        console.log(error);
      });
  });
}

// export const requestUsers = params => axios.get(`${base}/users`).then(res => res.data)