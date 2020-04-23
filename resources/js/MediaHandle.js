export default class MediaHandler {
    getPermissions(){
        return new Promise((res,rej)=>{
            navigator.mediaDevices.getUserMedia({video:true, audio:true}) //แสดงวีดีโอ
            .then((stream) => {
                res(stream);
            })
            .catch(err => {
                throw new Error(`Unable to fetch the steam ${err}`)
            })
        });
    }
}


