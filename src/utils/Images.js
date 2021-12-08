export function importAll(r) {
    return r.keys().map(r);
  }

export function findOne(list, img) {
    for(let i in list){
        if(list[i].default.indexOf('/static/media/'+img) !== -1){
            return list[i].default;
        }
    }
}