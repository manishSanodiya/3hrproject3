import React from "react"
import { useState } from "react"
const medicineContext=React.createContext({
medicines:[],
addMedicines:(medicine)=>{}
})

export const MedicineContextProvider=(props)=>{
    let med;
    if (localStorage.getItem('tokenId')) {
      med = JSON.parse(localStorage.getItem('tokenId')).medicine;
      med = med.replace(/[@.]/g, '');
    }
    // console.log(userEmail)
    const [medicines,setMedicines]=useState([])
    const addMedicines=(medicine)=>{
        setMedicines((prevMedicines)=>{
            const updatedMedicines=prevMedicines.concat(medicine)
            return updatedMedicines
        })

    }
    const medContext={
        medicines:medicines,
        addMedicines:addMedicines
    }
return (
    <medicineContext.Provider value={medContext}>
        {props.children}
    </medicineContext.Provider>
)
}
export default medicineContext