
class WebServiceManager {
    #url;
    #method;
    #formDatas;
    #binaryDatas;
    #headerData;
    #credentials;
    #listener;


    constructor(url,method,listener) {
        this.#listener=listener;
        this.#url=url;
        this.#method=method;
        this.#formDatas={};
        this.#binaryDatas={};
        this.#headerData={};
        this.#credentials='omit';
    }

    addFormData(key,data) {
        this.#formDatas[key]=data;
    }

    addBinaryData(key,data) {
        this.#binaryDatas[key]=data;
    }

    addHeader(key,data) {
        this.#headerData[key]=data;
    }

    setCredentials(data) {
        this.#credentials=data;
    }

    async start() {
        var response;
        if(this.#method==='post' || this.#method==='POST') {
            let bodyData = new FormData();
            for(const [key,value] of Object.entries(this.#formDatas))
                bodyData.append(key,JSON.stringify(value));

            for(const [key,value] of Object.entries(this.#binaryDatas))
                bodyData.append(key,value);

            response = await fetch(this.#url,{method:this.#method,body:bodyData,headers:this.#headerData,credentials:this.#credentials})
            .catch(()=>{const listener = this.#listener.bind(); listener();});           
        }
        else {
            response = await fetch(this.#url,{headers:this.#headerData,credentials:this.#credentials})
            .catch(()=>{const listener = this.#listener.bind(); listener();});            
        }
        
        if(response.ok)
            return response;
    }
}

export default WebServiceManager;