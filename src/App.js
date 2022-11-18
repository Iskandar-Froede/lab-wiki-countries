import { Route, Routes } from "react-router-dom";
import "./App.css";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import Navbar from "./components/Navbar";
import { useState } from "react";
import countries from "./countries.json";


function App() {

  const [allCountries, setAllCountries] = useState(countries) //using countries to give the variable allCountries some value

  return (
  <div className="App">

   <Navbar />
   <Routes>
      <Route path='/' element={<CountriesList listCountries={allCountries} />} />   
      <Route path='/country-detail' element={<CountryDetails />} />
   </Routes>


   

  </div>);
}
export default App;
