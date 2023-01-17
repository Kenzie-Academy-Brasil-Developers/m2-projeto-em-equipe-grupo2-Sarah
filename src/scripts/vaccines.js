const requestsHeader = {
    'X-RapidAPI-Key': 'dfbf9a3fdfmsh0e58794cb87a218p16186bjsn15d4aea76006',
    'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
}
function phaseSelect(){
    const selectTag = document.querySelector("select")

    // const listPhase = functioPhase

    functionPhase.forEach(phases => {
        let option = document.querySelector("option")
        option.innerText = phases.phase
        option.value = phases.phase
    })

    selectTag.addEventListener("change", async () => {
        const phases = await fetch (`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-vaccines-${selectTag.value}`,{
            method: 'GET',
            headers: requestsHeader
        })
        .then(res => res.json())
        .then(res => (res))

    })
}
phaseSelect()