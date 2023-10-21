import { RequestApiPrivate } from "@auth/axios";


export const Request = {
    async post(wsCode, json) {
        try {
        RequestApiPrivate.defaults.params = [];
       let rsp = await RequestApiPrivate.post(wsCode, json)
        const {data} = rsp;
            if(data){
                const {status,mess,resul} = data
                return {
                    code:status,
                    msg:mess,
                    data:resul
                }
            }
        } catch (error) {
          if (error) {
            throw error;
          }
        }
      },
      async get(wsCode,json) {
        try {
            let rsp = await RequestApiPrivate.get(wsCode,json)
            const {data} = rsp;
                if(data){
                    const {status,mess,resul} = data
                    return {
                        code:status,
                        msg:mess,
                        data:resul
                    }
                }
        } catch (error) {
          if (error) {
            throw error;
          }
        }
      },
      async postFile(wsCode, file) {
        try {
          let formData = new FormData();
          formData.append("file", file);
    
          RequestApiPrivate.defaults.params = [];
          const res = await RequestApiPrivate.post(wsCode, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
                 const {data} = res;
                if(data){
                    const {status,mess,resul} = data
                    return {
                        code:status,
                        msg:mess,
                        data:resul
                    }
                }
        } catch (error) {
          if (error) {
           throw error;
          }
        }
      },
}