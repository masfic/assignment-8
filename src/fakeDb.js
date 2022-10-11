const addToDb = (id) => {
    let service ={}

    const stored = localStorage.getItem('service')
    if(stored){
        service = JSON.parse(stored)
    }
    const qty = service[id]
    if(qty){
        const newQty = qty +1
        service[id] = newQty
        
    }else{
        service[id] =1
    }


    localStorage.setItem('service',JSON.stringify(service))
}
const getStored = () => {
    let service ={}

    const stored = localStorage.getItem('service')
    if(stored){
        service = JSON.parse(stored)
    }
    return service;
}
export {addToDb,getStored}