import { useLoaderData } from "react-router-dom";
import "./App.css";
import SingleCoffCard from "./Components/SingleCoffCard";
import { useState } from "react";

function App() {
  // All Data Loader
  const loadeCoffees = useLoaderData();
  
  const [coffees, setCoffees] = useState(loadeCoffees);

  return (
    <>
      <h1>Coffee House</h1>
      <p className="read-the-docs">
        Please Order Any Coffee Item {coffees.length}
      </p>

      <div className="grid grid-cols-2 gap-4 border p-2 bg-orange-400">
        {
          coffees.map(coffee => <SingleCoffCard 
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
            ></SingleCoffCard>)
        }
      </div>

 
   
      
    </>
  );
}

export default App;
