import {GetCookie,SetCookie} from '../interface'
export const getCookie:GetCookie = name => {
    if (document.cookie) {
        let arr = document.cookie.split("; ");
        for (let i = 0; i < arr.length; i++) {
            let arry = arr[i].split("=");
            switch (arry[0]) {
                case name:
                    return arry[1];

            }
        }
        return "";
    }
}


export const setCookie:SetCookie = ( name, value, opts ) => {
   //opts: maxAge,path,domain,secure
   if(name && value){
    var cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    if(opts){
        if(opts.maxAge){
            cookie += ';max-age=' + opts.maxAge*24*3600*1000;
        }
        if(opts.path){
            cookie += ';max-age=' + opts.path;
        }
        if(opts.domain){
            cookie += ';max-age=' + opts.domain;
        }
        if(opts.secure){
            cookie += ';max-age=' + opts.secure;
        }
    }
        document.cookie = cookie;
        return cookie;
    }else{
        return '';
    }
}




