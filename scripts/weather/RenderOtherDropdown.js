export const renderOtherDropdown = async (state, type) =>{
const response = await fetch(`http://holidayroad.nss.team/${type}`)
const responseArray = await response.json()
const filteredArray = responseArray.filter(item => state.includes(item.state))
let html =' <select id="eaterie-dropdown">'
html += filteredArray.map(item => `
                    <option
                    data-name="${item.name}"
                    data-parkid="${item.id}">
                    ${item.name}
                    </option>
                
`).join('')
html += '</select>'
return html

}

