import { useContext, useRef } from "react"
import MedicineList from "./MedicineList"
import medicineContext from "../store/medicine-context"

const AddMedicine=()=>{
    const medicineCtx=useContext(medicineContext)

    const medicineInputRef=useRef()
    const descriptionInputRef=useRef()
    const priceInputRef=useRef()
    const quantityInputRef=useRef()
    const listMedicine=()=>{}
    const addMedicine=async (event)=>{
        event.preventDefault()
        const enteredMedicine=medicineInputRef.current.value;
        const enteredDescription=descriptionInputRef.current.value;
        const enteredQuantity=quantityInputRef.current.value
        const enteredPrice=priceInputRef.current.value;

        const medicineDetail={
            medicine:enteredMedicine,
            description:enteredDescription,
            quantity:enteredQuantity,
            price:enteredPrice,
        }
         
            const res = await fetch(`https://crudcrud.com/api/52b114a0e5724993bed934a2442aa8c9/medicines`, {
              method: 'POST',
              body: JSON.stringify(medicineDetail),
              headers: {
                'Content-Type': 'application/json',
              },
            });
        
            const data = await res.json();
      
        //     if (res.ok) {
              
        //       const convertedData = JSON.stringify(data);
        //       localStorage.setItem('tokenId', convertedData);
              medicineCtx.addMedicines(medicineDetail)
        //        } else {
        //       throw new Error(data.error.message);
        //     }
        //   } catch (err) {
        //     alert(err.message);
        //   }
        enteredMedicine=''
        enteredDescription=''
        enteredPrice=''
        enteredQuantity=''
        
    }
    return (
        <div>
        <form onSubmit={addMedicine}>
        <label htmlFor='medicine'>MedicineName</label>
        <input id='medicine' type='text' ref={medicineInputRef} />
        <label htmlFor='descriprion'>descriprion</label>
        <input id='description' type='description' ref={descriptionInputRef} />
        <label htmlFor='quantity'>Quantity</label>
        <input id='quantity' type='number' ref={quantityInputRef} />
        <label htmlFor='price'>Price</label>
        <input id='price' type='number' ref={priceInputRef} />
        <button type='submit'>AddMedicine</button>
        </form>
        <MedicineList/>
        
        </div>
    )

}
export default AddMedicine