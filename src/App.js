import AddMedicine from "./components/AddMedicine";
import MedicineList from "./components/MedicineList";
import { MedicineContextProvider } from "./store/medicine-context";
import Header from "./components/header/Header";
import { ShowCartContextProvider } from "./store/showcart-context";
import { CartProvider } from "./store/cart-context";

function App() {
  
  return (
    <div>
      
      <MedicineContextProvider>
      
        <ShowCartContextProvider>
        <CartProvider>
        <Header/>
      <AddMedicine />
      </CartProvider>
      </ShowCartContextProvider>
      
      </MedicineContextProvider>
      
      

      
    </div>
  );
}

export default App;