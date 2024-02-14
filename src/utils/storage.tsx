export function setLocalStorageItem(key:string,value:unknown,isString?:false){
    if(isString){
        localStorage.setItem(key,value as string)
    }else{
        localStorage.setItem(key,JSON.stringify(value))
    }
}

export function getLocalStorageItem<T>(key:string,isObject:boolean){
    const item = localStorage.getItem(key);
    if(!item){
        return null
    }else{
        return isObject ? JSON.parse(item) as T: item
    }
}