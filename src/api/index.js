import axios from "@/plugins/axios";
const api = {
    searchHotWords(params) {
        return axios.get("/api/meituan/header/searchHotWords.json", {params});
    },
    search(params) {
        return axios.get('/api/meituan/header/search.json', {params});
    },
    nav(params){
        return axios.get('/api/meituan/index/nav.json',{params});
    },
    resultsByKeywords(params){
        return axios.get('/api/meituan/index/resultsByKeywords.json',{params});
    },
    goodsList(){
        return axios.get('/api/meituan/list/goodsList.json');
    },
    hot(){
        return axios.get('/api/meituan/city/hot.json');
    },
    recents(){
        return axios.get('/api/meituan/city/recents.json');
    },
    province(){
        return axios.get('/api/meituan/city/province.json');
    },
    getPosition(){
        return axios.get('/api/meituan/city/getPosition.json');
    },
    getCityList(){
        return axios.get('/api/meituan/city/cityList.json');
    },
    login (params){
        return axios.get('/api/meituan/login',{params});
    },
    register(params){
        return axios.get('/api/meituan/register',{params});
    }

}
export default api