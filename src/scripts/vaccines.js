import { getAllApprovedVaccines, getAllVaccines, getAllVaccinesI, getAllVaccinesII, getAllVaccinesIII, getAllVaccinesIV } from "./requests.js"

const listVaccinesPhaseAll = await getAllVaccines()
const listVaccinesPhaseI = await getAllVaccinesI()
const listVaccinesPhaseII = await getAllVaccinesII()
const listVaccinesPhaseIII = await getAllVaccinesIII()
const listVaccinesPhaseIV = await getAllVaccinesIV()
const listVaccinesApproveds = await getAllApprovedVaccines()



function createVaccineCards (element) {
    const li = document.createElement('li');
   
    const companyDiv = document.createElement('div');
    companyDiv.classList.add('vaccine-company__container');

    const company = document.createElement('h3');
    company.innerText = 'Company:';

    const companyName = document.createElement('p');
    companyName.innerText = element.developerResearcher;

    companyDiv.append(company, companyName);

    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('vaccine-category__container');

    const category = document.createElement('h3');
    category.innerText = 'Category:';

    const categoryName = document.createElement('p');
    categoryName.innerText = element.category;

    categoryDiv.append(category, categoryName);

    const phaseDiv = document.createElement('div');
    phaseDiv.classList.add('vaccine-phase__container');

    const phase = document.createElement('h3');
    phase.innerText = 'Phase:';

    const phaseName = document.createElement('p');
    phaseName.innerText = element.phase;

    phaseDiv.append(phase, phaseName);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('vaccine-description__container');

    const description = document.createElement('h3');
    description.innerText = 'description:';

    const descriptionName = document.createElement('p');
    descriptionName.innerText = element.description;

    descriptionDiv.append(description, descriptionName);

    const FDAApprovedDiv = document.createElement('div');
    FDAApprovedDiv.classList.add('vaccine-nextSteps__container');

    const FDAApproved = document.createElement('h3');
    FDAApproved.innerText = 'FDA aproved:';

    const FDAApprovedName = document.createElement('p');
    if (element.FDAApproved === 'undefined') {
        FDAApprovedName.innerText = 'not approved yet';
    } else {
       FDAApprovedName.innerText = element.FDAApproved; 
    }
    
    FDAApprovedDiv.append(FDAApproved, FDAApprovedName);

    li.append(companyDiv, categoryDiv, phaseDiv, descriptionDiv, FDAApprovedDiv);

    return li;
}

function renderAllVaccineCards (array) {
    const vaccinesList = document.querySelector('#vaccines__list');

    array.forEach(vaccine => {
        let vaccineCard = createVaccineCards(vaccine);

        vaccinesList.append(vaccineCard);
    })
}

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

renderAllVaccineCards (listVaccinesPhaseAll)
phaseSelect()
