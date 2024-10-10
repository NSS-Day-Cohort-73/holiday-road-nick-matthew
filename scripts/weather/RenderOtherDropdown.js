export const renderOtherDropdown = async (state, type) =>{
const response = await fetch(`http://holidayroad.nss.team/${type}`)
const responseArray = await response.json()
const filteredArray = responseArray.filter(item => state.includes(item.state))
const html =' <select id="eaterie-dropdown">'
html += filteredArray.map(item =>{`
                    <option
                    data-name="${item.name}"
                    data-parkid="${item.id}">
                    Option 1
                    </option>
                </select>
`})

}

