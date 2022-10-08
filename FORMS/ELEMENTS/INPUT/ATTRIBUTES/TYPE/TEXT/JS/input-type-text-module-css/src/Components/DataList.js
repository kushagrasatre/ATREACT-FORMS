//CSS MODULE METHOD FOR APPLYING CSS
import DataStyle from "./CSS/DataList.module.css";
// userData and queryText varriables RETRIVING FROM PARENET COMPONENT WITH THE HELP OF DESTRUCTURE METHOD ({VAR1,VAR2})
const DataList = ({ userData, queryText = "" }) => {
    // FILTER DATA AND CREATE BRAND NEW ARRAY EVERY TIME WHEN QUERY TEXT WILL BE CHANGE
    const filterUserData = userData.filter((element) => {
        //WHEN THE INDEXOF METHOD WILL MATCH SOMETHING IT WILL RETURN THAT INDEX OTHERWISE IT WILL RETURN -1
        //WE HAVE RETURN LOGIN IF -1 IS NOT EQUAL TO IN CONDIATION
        return element.first_name.toLowerCase().indexOf(queryText.toLocaleLowerCase()) !== -1
    })
// HANDLER FOR LIST ITEM CLICK
    const idRetriveHandler = (id) => {
        console.log(id)
    }
    return (
        //GIVEN CLASS WE ARE ASSIGING BY CSS MODULE METHOD
        <ul className={DataStyle.listContainer}>
            {
                //MAP METHOD RETURNS UPDATE ARRAY OF ITEM
                filterUserData.map((element) => {
                    //KEY ATTRIBUTE IS NECESSARY AND IT SHOULD BE UNIC
                    return <li key={element.id} onClick={() => {
                        idRetriveHandler(element.id)
                        //RETRIVING FIRST NAME AND LAST NAME IN LIST FIELD
                    }}>{element.first_name} {element.last_name}</li>
                })
            }
        </ul>
    )
}
// DEFAULT EXPORT
export default DataList;