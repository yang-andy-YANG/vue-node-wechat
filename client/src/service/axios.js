import axios from 'axios'
import qs from 'qs'
import {baseUrl} from '@/config/env'
import NProgress from 'nprogress'
import Vue from 'vue'

const instance = axios.create({
    // baseURL: baseUrl
});

instance.interceptors.request.use(config => {
    NProgress.start()
    if (config.method=="post"){
        config.data = qs.stringify(config.data);
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }
    return config;
});

instance.interceptors.response.use(response => {
    NProgress.done()
    if (response.data.d && response.data.d.results) {
        return response.data.d.results;
    }
    else if (response.data.d) {
        return response.data.d
    }
    else {
        return response.data
    }
}, err => {
    NProgress.done()
    console.log(err)    
    if(err.message) {
        Vue.prototype.$swal(err.message)
    }
    else if (err.response) {       
        Vue.prototype.$swal(JSON.stringify(err.response))
        return Promise.resolve({});
    }
    else {
        Vue.prototype.$swal(JSON.stringify(err))
    }
    return Promise.resolve({});
});

export default instance
