import { useLoaderData } from "react-router-dom";
import "./App.css";
import SingleCoffCard from "./Components/SingleCoffCard";

function App() {
  // All Data Loader
  const loadeCoffees = useLoaderData();
 
  return (
    <>
      <h1>Coffee House</h1>
      <p className="read-the-docs">
        Please Order Any Coffee Item {loadeCoffees.length}
      </p>

      <div className="grid grid-cols-2 gap-4 border p-2 bg-orange-400">
        {
          loadeCoffees.map(coffee => <SingleCoffCard 
            key={coffee._id}
            coffee={coffee}
            ></SingleCoffCard>)
        }
      </div>

 
   
      
    </>
  );
}

export default App;
