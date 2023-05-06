import medicineContext from "../store/medicine-context";
import { useContext } from "react";
import Medicine from "./Medicine";
const MedicineList = (props) => {
    let med;
    if (localStorage.getItem('tokenId')) {
      med = JSON.parse(localStorage.getItem('tokenId')).medicine;
      med = med.replace(/[@.]/g, '');
    }
    const medicineCtx=useContext(medicineContext)
    
    return <>
    {medicineCtx.medicines.map((item)=><Medicine key={item.medicine} medicine={item.medicine} description={item.description} quantity={item.quantity} price={item.price}  /> )}
    </>
};
export default MedicineList;