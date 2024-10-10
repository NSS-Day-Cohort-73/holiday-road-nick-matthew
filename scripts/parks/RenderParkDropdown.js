
export const renderParkDropdown = async () => {
    const parks = await fetch("https://developer.nps.gov/api/v1/parks?api_key=nYY5angn1PzQ7Jllb3Va3Iga3yBOVn5Cd3j5AUvl").then(res => res.json())

    let parksHTML = "<select id='parks-dropdown'> <option value='0'>Select a park</option>"

    const parksArr = parks.data.map((park) => {
        return `<option 
            data-state="${park.states}" 
            data-longitude="${park.longitude}" 
            data-latitude="${park.latitude}" 
            data-name="${park.fullName}" 
            data-parkid="${park.id}" 
            value="${park.id}">
            ${park.fullName}
        </option>`
    })

    parksHTML += parksArr.join("")
    parksHTML += `</select>`
    return parksHTML
}