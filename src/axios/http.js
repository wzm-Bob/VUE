import axios from 'axios'
import Vue from 'vue'
import store from '../store/index'
import {
  app
} from '../main'

axios.defaults.timeout = 20000
axios.defaults.baseURL = 'localhost: 3000'
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8'
const oldUrl = axios.defaults.baseURL;

//请求拦截
axios.interceptors.request.use(function (config) {
 // let token = getStore('TOKEN_NAME')

  config.data = JSON.stringify(config.data)
  // if (token && ( config.url.indexOf('app-file') > 0 || config.url.indexOf('app-sys') > 0 ) ) {
  config.headers.Authorization = token;
  // }else if(token){
  //     config.headers.Authorization = token;
  // }
  return config
}, function (error) {
  return Promise.reject(error)
})

//响应拦截
axios.interceptors.response.use(function (response) {
  if (response.data.errCode == 2) {
    window.location.href = 'localhost:8080'
  }
  return response
}, function (error) {
  return Promise.reject(error.response.data)
})

//封装axios的get请求
export function fetch(url, params, Origin) {
  if (Origin) {
    axios.defaults.baseURL = Origin;
  }
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params
      })
      .then(response => {
        axios.defaults.baseURL = oldUrl;
        resolve(response.data)
      })
      .catch((error) => {
        axios.defaults.baseURL = oldUrl;
        reject(error)
      })
  })
}

//封装axios的post请求
export function post(url, data = {}, Origin, openLoading) {
  if (Origin) {
    axios.defaults.baseURL = Origin;
  }
  return new Promise((resolve, reject) => {

    //每一次http请求的唯一标识码
    const timestamp = new Date().getTime();

    loadingBar('start', timestamp, openLoading);
    axios.post(url, data)
      .then(response => {
        axios.defaults.baseURL = oldUrl;
        resolve(response.data);
        loadingBar('finish', timestamp, openLoading);
      })
      .catch((error) => {
        axios.defaults.baseURL = oldUrl;
        reject(error);
        loadingBar('error', timestamp, openLoading);
      })
  })
}

//封装axios的下载数据流转换成excel
export function DownLoadToExcel(url, data = {}, fileName, Origin, openLoading) {
  if (Origin) {
    axios.defaults.baseURL = Origin;
  }
  fileName = fileName + '.xls'
  return new Promise((resolve, reject) => {

    //每一次http请求的唯一标识码
    const timestamp = new Date().getTime();

    loadingBar('start', timestamp, openLoading);
    axios.post(url, data, {
      responseType: "blob",
    }).then(response => {
      axios.defaults.baseURL = oldUrl;
      const blob = new Blob([response.data], {
        type: "application/vnd.ms-excel"
      });
      if ("download" in document.createElement("a")) {
        // 非IE下载
        const elink = document.createElement("a");
        elink.download = fileName;
        elink.style.display = "none";
        elink.href = URL.createObjectURL(blob);
        document.body.appendChild(elink);
        elink.click();
        URL.revokeObjectURL(elink.href);
        document.body.removeChild(elink);
      } else {
        // IE10+下载
        navigator.msSaveBlob(blob, fileName);
      }
      loadingBar('finish', timestamp, openLoading);
    }).catch((error) => {
      axios.defaults.baseURL = oldUrl;
      loadingBar('error', timestamp, openLoading);
    })
  })
}

//开启loading
function loading(isLoading, openLoading) {
  if (openLoading) {
    Vue.nextTick(function () {
      store.commit('FETCH_LOADING', isLoading)
    })
  }
}

//开启loading 进度条
function loadingBar(action, timestamp, openLoading) {
  if (app && openLoading) {
    if (action == 'start') {
      store.commit('pushPromiseIntoCase', timestamp);
      app.$LoadingBar.start();
      loading(true, openLoading)
    }
    if (action == 'finish') {
      store.commit('finishPromiseInCase', timestamp);
      store.dispatch('checkoutIsFininsh').then(res => {
        if (res) {
          loading(false, openLoading)
          app.$LoadingBar.finish();
        }
      });
    }
    if (action == 'error') {
      store.commit('finishPromiseInCase', timestamp);
      store.dispatch('checkoutIsFininsh').then(res => {
        if (res) {
          loading(false, openLoading)
          app.$LoadingBar.error();
        }
      });
    }
  }
}
