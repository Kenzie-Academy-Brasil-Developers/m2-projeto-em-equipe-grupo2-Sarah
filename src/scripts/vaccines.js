import { getAllApprovedVaccines, getAllVaccines, getAllVaccinesI, getAllVaccinesII, getAllVaccinesIII, getAllVaccinesIV } from "./requests.js"

const listVaccinesPhaseAll = await getAllVaccines()
const listVaccinesPhaseI = await getAllVaccinesI()
const listVaccinesPhaseII = await getAllVaccinesII()
const listVaccinesPhaseIII = await getAllVaccinesIII()
const listVaccinesPhaseIV = await getAllVaccinesIV()
const listVaccinesApproveds = await getAllApprovedVaccines()







function phaseSelect(){
    const selectTag = document.querySelector("select")

    // const showCase = document.querySelector("")
    // imprimir todas vacinas //
    
    selectTag.addEventListener("change", () => {
        // showCase.innerHTML = ""
        if(selectTag.value == "All"){
            console.log(listVaccinesPhaseAll)
        }else if(selectTag.value == "Phase-I"){
            console.log(listVaccinesPhaseI)
        }else if(selectTag.value == "Phase-II"){
            console.log(listVaccinesPhaseII)
        }else if(selectTag.value == "Phase-III"){
            console.log(listVaccinesPhaseIII)
        }else if(selectTag.value == "Phase-IV"){
            console.log(listVaccinesPhaseIV)
        }else if(selectTag.value == "FDA-Aproved"){
            console.log(listVaccinesApproveds)
        }

        

    })
}
phaseSelect()