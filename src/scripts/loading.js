import { getAllCountrys } from "./requests.js";

const listCountry = await getAllCountrys()


export function removeAddLoading(){
    const loading = document.querySelector('#loader__add--remove')

    if(!listCountry == []){
        loading.classList.remove('loader')
    }else{
        loading.classList.add('loader')
    }
}