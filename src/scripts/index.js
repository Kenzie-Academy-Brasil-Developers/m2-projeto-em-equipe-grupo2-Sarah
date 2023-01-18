import { openNavbar } from "./navbar.js";
import { getAllCountrys, getAllCountrysInAfrican, getAllCountrysInAsia, getAllCountrysInEuropean, getAllCountrysInNorthernAmerican, getAllCountrysInOceanian, getAllCountrysInSorthernAmerican, getAllGlobalInformation } from "./requests.js";

const listGlobal = await getAllGlobalInformation();
const listAllCountry = await getAllCountrys();
const listCountryAsia = await getAllCountrysInAsia()
const listCountryAfrican = await getAllCountrysInAfrican()
const listCountryEuropean = await getAllCountrysInEuropean()
const listCountryNorthernAmerican = await getAllCountrysInNorthernAmerican()
const listCountrySorthernAmerican = await getAllCountrysInSorthernAmerican()
const listCountryOceanian =  await getAllCountrysInOceanian()


let troca = true;

function printGlobalInformation(obj) {
  const totalCases = document.querySelector(".total__cases");
  const totalNewCases = document.querySelector(".total__newCases");
  const totalActiveCases = document.querySelector(".total__activeCases");
  const totalCritical = document.querySelector(".total__critical");
  const totalDeaths = document.querySelector(".total__deaths");
  const totalNewDeaths = document.querySelector(".total__newDeaths");

  totalCases.innerHTML = obj.TotalCases;
  totalNewCases.innerHTML = obj.NewCases;
  totalActiveCases.innerHTML = obj.ActiveCases;
  totalCritical.innerHTML = obj.Serious_Critical;
  totalDeaths.innerHTML = obj.TotalDeaths;
  totalNewDeaths.innerHTML = obj.NewDeaths;
}

function searchCountryFilter(list, search) {
  const foundCountry = list.filter((obj) => {
    if (
      obj.Country.toLowerCase().trim().includes(search.toLowerCase().trim())
    ) {
      return obj;
    }
  });
  return foundCountry;
}

function printSearch() {
  const inputSearch = document.querySelector(".search__country");

  const list = document.querySelector('.table__container--allCountryInformation')

  inputSearch.addEventListener("keyup", (e) => {
    list.innerHTML = ''

    const currentList = searchCountryFilter(listAllCountry, inputSearch.value);
    console.log(currentList);

    renderCards(currentList)
  });
}

function printCardsFilterByContinet(){
    const select = document.querySelector('#select__continent')
    const table = document.querySelector('.table__container--allCountryInformation')
    const btns = document.querySelectorAll('.container__filterByContinent--desktopVersion > button')

    select.addEventListener('change', ()=>{
      table.innerHTML = ''
      if(select.value == ''){
        renderCards(listAllCountry)
      } else if(select.value == 'Asian'){
        renderCards(listCountryAsia)
      }else if(select.value == 'African'){
        renderCards(listCountryAfrican)
      }else if(select.value == 'European'){
        renderCards(listCountryEuropean)
      }else if(select.value == 'Northern American'){
        renderCards(listCountryNorthernAmerican)
      }else if(select.value == 'Sorthern American'){
        renderCards(listCountrySorthernAmerican)
      }else if(select.value == 'Oceanian'){
        renderCards(listCountryOceanian)
      }

    })
    console.log(btns)

    btns.forEach(btn => {
      btn.addEventListener('click', ()=>{
        table.innerHTML = ''
        if(btn.value == 'All'){
          renderCards(listAllCountry)
        } else if(btn.value == 'Asian'){
          renderCards(listCountryAsia)
        }else if(btn.value == 'African'){
          renderCards(listCountryAfrican)
        }else if(btn.value == 'European'){
          renderCards(listCountryEuropean)
        }else if(btn.value == 'Northern American'){
          renderCards(listCountryNorthernAmerican)
        }else if(btn.value == 'Sorthern American'){
          renderCards(listCountrySorthernAmerican)
        }else if(btn.value == 'Oceanian'){
          renderCards(listCountryOceanian)
        }
      })
    })

}


 function renderCards(listAllCountry) {
  const tableListCountry = document.querySelector(
    ".table__container--allCountryInformation"
  );

  const tittle = document.createElement("tr");

  const tittleNum = document.createElement("th");
  tittleNum.innerText = "NUM";
  const tittleCountry = document.createElement("th");
  tittleCountry.innerText = "COUNTRY";
  tittleCountry.addEventListener("click", () => {
    alphabeticalOrder();
  });
  const tittleTotalCases = document.createElement("th");
  tittleTotalCases.innerText = "TOTAL CASES";
  tittleTotalCases.addEventListener("click", () => {
    totalCasesOrder();
  });
  const tittleNewCases = document.createElement("th");
  tittleNewCases.innerText = "NEW CASES";
  tittleNewCases.addEventListener('click',()=>{
    newCasesOrder();
  })
  const tittleInfectionRisk = document.createElement("th");
  tittleInfectionRisk.innerText = "INFECTION RISK";
  tittleInfectionRisk.addEventListener('click',()=>{
    infectionRiskOrder();
  })
  const tittleSeriusCritical = document.createElement("th");
  tittleSeriusCritical.innerText = "SERIOUS CRITICAL";
  tittleSeriusCritical.addEventListener('click',()=>{
    seriousCriticalOrder();
  })
  const tittleActivesCases = document.createElement("th");
  tittleActivesCases.innerText = "ACTIVE CASES";

  tittleActivesCases.addEventListener('click',()=>{
    activeCasesOrder();
  })
  const tittleTotalDeaths = document.createElement("th");
  tittleTotalDeaths.innerText = "TOTAL DEATHS";
  tittleTotalDeaths.addEventListener('click',()=>{
    totalDeathsOrder();
  })
  const tittleNewDeaths = document.createElement("th");
  tittleNewDeaths.innerText = "NEW DEATHS";
  tittleNewDeaths.addEventListener('click',()=>{
    newDeathsOrder();
  })
  const tittleCaseFatalityRate = document.createElement("th");
  tittleCaseFatalityRate.innerText = "CASE FATALITY RATE(CFR)";
  tittleCaseFatalityRate.addEventListener("click",()=>{
    caseFatalityRateOder();
  })
  const tittleTotalTests = document.createElement("th");
  tittleTotalTests.innerText = "TOTAL TESTS";
  tittleTotalTests.addEventListener("click",()=>{
    totalTestsOrder();
  })
  const tittleTotalPercentage = document.createElement("th");
  tittleTotalPercentage.innerText = "TEST PERCENTAGE";
  tittleTotalPercentage.addEventListener("click",()=>{
    testPercentageOrder();
  })
  const tittleTotalRecovered = document.createElement("th");
  tittleTotalRecovered.innerText = " TOTAL RECOVERED";
  tittleTotalRecovered.addEventListener("click",()=>{
    totalRecoveredOrder();
  })
  const tittleRecoveryPercentage = document.createElement("th");
  tittleRecoveryPercentage.innerText = "RECOVERY PERCENTAGE";
  tittleRecoveryPercentage.addEventListener("click",()=>{
    recoveryProporationOrder();
  })
  const tittlePopulation = document.createElement("th");
  tittlePopulation.innerText = "POPULATION";
  tittlePopulation.addEventListener("click",()=>{
    populationOrder();
  })

  tittle.append(
    tittleNum,
    tittleCountry,
    tittleTotalCases,
    tittleNewCases,
    tittleInfectionRisk,
    tittleSeriusCritical,
    tittleActivesCases,
    tittleTotalDeaths,
    tittleNewDeaths,
    tittleCaseFatalityRate,
    tittleTotalTests,
    tittleTotalPercentage,
    tittleTotalRecovered,
    tittleRecoveryPercentage,
    tittlePopulation
  );

  tableListCountry.append(tittle);

  let i = 0;
  listAllCountry.forEach((element) => {
    i++;
    const tittle = document.createElement("tr");

    const tittleNum = document.createElement("th");
    tittleNum.innerText = i;
    const tittleCountry = document.createElement("th");
    tittleCountry.innerText = element.Country;
    const tittleTotalCases = document.createElement("th");
    tittleTotalCases.innerText = element.TotalCases;
    const tittleNewCases = document.createElement("th");
    tittleNewCases.innerText = element.NewCases;
    const tittleInfectionRisk = document.createElement("th");
    tittleInfectionRisk.innerText = element.Infection_Risk;
    const tittleSeriusCritical = document.createElement("th");
    tittleSeriusCritical.innerText = element.Serious_Critical;
    const tittleActivesCases = document.createElement("th");
    tittleActivesCases.innerText = element.ActiveCases;
    const tittleTotalDeaths = document.createElement("th");
    tittleTotalDeaths.innerText = element.TotalDeaths;
    const tittleNewDeaths = document.createElement("th");
    tittleNewDeaths.innerText = element.NewDeaths;
    const tittleCaseFatalityRate = document.createElement("th");
    tittleCaseFatalityRate.innerText = element.Case_Fatality_Rate;
    const tittleTotalTests = document.createElement("th");
    tittleTotalTests.innerText = element.TotalTests;
    const tittleTotalPercentage = document.createElement("th");
    tittleTotalPercentage.innerText = element.Test_Percentage;
    const tittleTotalRecovered = document.createElement("th");
    tittleTotalRecovered.innerText = element.TotalRecovered;
    const tittleRecoveryPercentage = document.createElement("th");
    tittleRecoveryPercentage.innerText = element.Recovery_Proporation;
    const tittlePopulation = document.createElement("th");
    tittlePopulation.innerText = element.Population;

    tittle.append(
      tittleNum,
      tittleCountry,
      tittleTotalCases,
      tittleNewCases,
      tittleInfectionRisk,
      tittleSeriusCritical,
      tittleActivesCases,
      tittleTotalDeaths,
      tittleNewDeaths,
      tittleCaseFatalityRate,
      tittleTotalTests,
      tittleTotalPercentage,
      tittleTotalRecovered,
      tittleRecoveryPercentage,
      tittlePopulation
    );

    tableListCountry.append(tittle);
  });
}

async function alphabeticalOrder() {
  const tableListCountry = document.querySelector(
    ".table__container--allCountryInformation"
  );
  tableListCountry.innerHTML = " ";
  const orderList = listAllCountry;

  orderList.sort((a, b) => {
    if (troca == true) {
      if (a.Country > b.Country) {
        return 1;
      } else if (a.Country < b.Country) {
        return -1;
      } else {
        return 0;
      }
    } else {
      if (a.Country < b.Country) {
        return 1;
      } else if (a.Country > b.Country) {
        return -1;
      } else {
        return 0;
      }
    }
  });

  if (troca == true) {
    troca = false;
  } else if (troca == false) {
    troca = true;
  }

  await renderCards(orderList);
}

async function totalCasesOrder(){
    const tableListCountry = document.querySelector(
        ".table__container--allCountryInformation"
      );
      tableListCountry.innerHTML = " ";
      const orderList = listAllCountry;
      orderList.sort((a, b) => {
        if (troca == true) {
          if (a.TotalCases > b.TotalCases) {
            return 1;
          } else if (a.TotalCases < b.TotalCases) {
            return -1;
          } else {
            return 0;
          }
        } else {
          if (a.TotalCases < b.TotalCases) {
            return 1;
          } else if (a.TotalCases > b.TotalCases) {
            return -1;
          } else {
            return 0;
          }
        }
      });
    
      if (troca == true) {
        troca = false;
      } else if (troca == false) {
        troca = true;
      }
    
      await renderCards(orderList);
}

async function newCasesOrder(){
    const tableListCountry = document.querySelector(
        ".table__container--allCountryInformation"
      );
      tableListCountry.innerHTML = " ";
      const orderList = listAllCountry;
      orderList.sort((a, b) => {
        if (troca == true) {
          if (a.NewCases > b.NewCases) {
            return 1;
          } else if (a.NewCases < b.NewCases) {
            return -1;
          } else {
            return 0;
          }
        } else {
          if (a.NewCases < b.NewCases) {
            return 1;
          } else if (a.NewCases > b.NewCases) {
            return -1;
          } else {
            return 0;
          }
        }
      });
    
      if (troca == true) {
        troca = false;
      } else if (troca == false) {
        troca = true;
      }
    
      await renderCards(orderList);
}

async function infectionRiskOrder(){
    const tableListCountry = document.querySelector(
        ".table__container--allCountryInformation"
      );
      tableListCountry.innerHTML = " ";
      const orderList = listAllCountry;
      orderList.sort((a, b) => {
        if (troca == true) {
          if (a.Infection_Risk > b.Infection_Risk) {
            return 1;
          } else if (a.Infection_Risk < b.Infection_Risk) {
            return -1;
          } else {
            return 0;
          }
        } else {
          if (a.Infection_Risk < b.Infection_Risk) {
            return 1;
          } else if (a.Infection_Risk > b.Infection_Risk) {
            return -1;
          } else {
            return 0;
          }
        }
      });
    
      if (troca == true) {
        troca = false;
      } else if (troca == false) {
        troca = true;
      }
    
      await renderCards(orderList);
}

async function seriousCriticalOrder(){
    const tableListCountry = document.querySelector(
        ".table__container--allCountryInformation"
      );
      tableListCountry.innerHTML = " ";
      const orderList = listAllCountry;
      orderList.sort((a, b) => {
        if (troca == true) {
          if (a.Serious_Critical > b.Serious_Critical) {
            return 1;
          } else if (a.Serious_Critical < b.Serious_Critical) {
            return -1;
          } else {
            return 0;
          }
        } else {
          if (a.Serious_Critical < b.Serious_Critical) {
            return 1;
          } else if (a.Serious_Critical > b.Serious_Critical) {
            return -1;
          } else {
            return 0;
          }
        }
      });
    
      if (troca == true) {
        troca = false;
      } else if (troca == false) {
        troca = true;
      }
    
      await renderCards(orderList);
}

async function activeCasesOrder(){
    const tableListCountry = document.querySelector(
        ".table__container--allCountryInformation"
      );
      tableListCountry.innerHTML = " ";
      const orderList = listAllCountry;
      orderList.sort((a, b) => {
        if (troca == true) {
          if (a.TotalDeaths > b.TotalDeaths) {
            return 1;
          } else if (a.TotalDeaths < b.TotalDeaths) {
            return -1;
          } else {
            return 0;
          }
        } else {
          if (a.TotalDeaths < b.TotalDeaths) {
            return 1;
          } else if (a.TotalDeaths > b.TotalDeaths) {
            return -1;
          } else {
            return 0;
          }
        }
      });
    
      if (troca == true) {
        troca = false;
      } else if (troca == false) {
        troca = true;
      }
    
      await renderCards(orderList);
}

async function totalDeathsOrder(){
    const tableListCountry = document.querySelector(
        ".table__container--allCountryInformation"
      );
      tableListCountry.innerHTML = " ";
      const orderList = listAllCountry;
      orderList.sort((a, b) => {
        if (troca == true) {
          if (a.TotalDeaths > b.TotalDeaths) {
            return 1;
          } else if (a.TotalDeaths < b.TotalDeaths) {
            return -1;
          } else {
            return 0;
          }
        } else {
          if (a.TotalDeaths < b.TotalDeaths) {
            return 1;
          } else if (a.TotalDeaths > b.TotalDeaths) {
            return -1;
          } else {
            return 0;
          }
        }
      });
    
      if (troca == true) {
        troca = false;
      } else if (troca == false) {
        troca = true;
      }
    
      await renderCards(orderList);
}

async function newDeathsOrder(){
    const tableListCountry = document.querySelector(
        ".table__container--allCountryInformation"
      );
      tableListCountry.innerHTML = " ";
      const orderList = listAllCountry;
      orderList.sort((a, b) => {
        if (troca == true) {
          if (a.NewDeaths > b.NewDeaths) {
            return 1;
          } else if (a.NewDeaths < b.NewDeaths) {
            return -1;
          } else {
            return 0;
          }
        } else {
          if (a.NewDeaths < b.NewDeaths) {
            return 1;
          } else if (a.NewDeaths > b.NewDeaths) {
            return -1;
          } else {
            return 0;
          }
        }
      });
    
      if (troca == true) {
        troca = false;
      } else if (troca == false) {
        troca = true;
      }
    
      await renderCards(orderList);
}

async function caseFatalityRateOder(){
    const tableListCountry = document.querySelector(
        ".table__container--allCountryInformation"
      );
      tableListCountry.innerHTML = " ";
      const orderList = listAllCountry;
      orderList.sort((a, b) => {
        if (troca == true) {
          if (a.Case_Fatality_Rate > b.Case_Fatality_Rate) {
            return 1;
          } else if (a.Case_Fatality_Rate < b.Case_Fatality_Rate) {
            return -1;
          } else {
            return 0;
          }
        } else {
          if (a.Case_Fatality_Rate < b.Case_Fatality_Rate) {
            return 1;
          } else if (a.Case_Fatality_Rate > b.Case_Fatality_Rate) {
            return -1;
          } else {
            return 0;
          }
        }
      });
    
      if (troca == true) {
        troca = false;
      } else if (troca == false) {
        troca = true;
      }
    
      await renderCards(orderList);
}

async function totalTestsOrder(){
    const tableListCountry = document.querySelector(
        ".table__container--allCountryInformation"
      );
      tableListCountry.innerHTML = " ";
      const orderList = listAllCountry;
      orderList.sort((a, b) => {
        if (troca == true) {
          if (a.TotalTests > b.TotalTests) {
            return 1;
          } else if (a.TotalTests < b.TotalTests) {
            return -1;
          } else {
            return 0;
          }
        } else {
          if (a.TotalTests < b.TotalTests) {
            return 1;
          } else if (a.TotalTests > b.TotalTests) {
            return -1;
          } else {
            return 0;
          }
        }
      });
    
      if (troca == true) {
        troca = false;
      } else if (troca == false) {
        troca = true;
      }
    
      await renderCards(orderList);
}

async function testPercentageOrder(){
    const tableListCountry = document.querySelector(
        ".table__container--allCountryInformation"
      );
      tableListCountry.innerHTML = " ";
      const orderList = listAllCountry;
      orderList.sort((a, b) => {
        if (troca == true) {
          if (a.Test_Percentage > b.Test_Percentage) {
            return 1;
          } else if (a.Test_Percentage < b.Test_Percentage) {
            return -1;
          } else {
            return 0;
          }
        } else {
          if (a.Test_Percentage < b.Test_Percentage) {
            return 1;
          } else if (a.Test_Percentage > b.Test_Percentage) {
            return -1;
          } else {
            return 0;
          }
        }
      });
    
      if (troca == true) {
        troca = false;
      } else if (troca == false) {
        troca = true;
      }
    
      await renderCards(orderList);
}

async function totalRecoveredOrder(){
    const tableListCountry = document.querySelector(
        ".table__container--allCountryInformation"
      );
      tableListCountry.innerHTML = " ";
      const orderList = listAllCountry;
      orderList.sort((a, b) => {
        if (troca == true) {
          if (a.TotalRecovered > b.TotalRecovered) {
            return 1;
          } else if (a.TotalRecovered < b.TotalRecovered) {
            return -1;
          } else {
            return 0;
          }
        } else {
          if (a.TotalRecovered < b.TotalRecovered) {
            return 1;
          } else if (a.TotalRecovered > b.TotalRecovered) {
            return -1;
          } else {
            return 0;
          }
        }
      });
    
      if (troca == true) {
        troca = false;
      } else if (troca == false) {
        troca = true;
      }
    
      await renderCards(orderList);
}

async function recoveryProporationOrder(){
    const tableListCountry = document.querySelector(
        ".table__container--allCountryInformation"
      );
      tableListCountry.innerHTML = " ";
      const orderList = listAllCountry;
      orderList.sort((a, b) => {
        if (troca == true) {
          if (a.Recovery_Proporation > b.Recovery_Proporation) {
            return 1;
          } else if (a.Recovery_Proporation < b.Recovery_Proporation) {
            return -1;
          } else {
            return 0;
          }
        } else {
          if (a.Recovery_Proporation < b.Recovery_Proporation) {
            return 1;
          } else if (a.Recovery_Proporation > b.Recovery_Proporation) {
            return -1;
          } else {
            return 0;
          }
        }
      });
    
      if (troca == true) {
        troca = false;
      } else if (troca == false) {
        troca = true;
      }
    
      await renderCards(orderList);
}

async function populationOrder(){
    const tableListCountry = document.querySelector(
        ".table__container--allCountryInformation"
      );
      tableListCountry.innerHTML = " ";
      const orderList = listAllCountry;
      orderList.sort((a, b) => {
        if (troca == true) {
          if (a.Population > b.Population) {
            return 1;
          } else if (a.Population < b.Population) {
            return -1;
          } else {
            return 0;
          }
        } else {
          if (a.Population < b.Population) {
            return 1;
          } else if (a.Population > b.Population) {
            return -1;
          } else {
            return 0;
          }
        }
      });
    
      if (troca == true) {
        troca = false;
      } else if (troca == false) {
        troca = true;
      }
    
      await renderCards(orderList);
}



renderCards(listAllCountry);
openNavbar();
printGlobalInformation(listGlobal[0]);
printCardsFilterByContinet()
printSearch();
