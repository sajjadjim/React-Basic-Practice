
import { use, useState } from "react";
import Country from "../country/country";

export default function GetCountriesDetails({AllCountries}) {
    const countries = use(AllCountries);
    // console.log(countries)
const [visitedCountries ,setVisitedCountries] = useState([])

const handleVisited = (country)=>{
    console.log('Country Are visited Added' , country);
}
    return (
        <div>
            <h2>Number OF Country : {countries.length}</h2>
<div className="grid md:grid-cols-3 gap-5">
{
countries.map(country=> 
<Country key={country.cca3}
handleVisited={handleVisited}
 country={country}>
 </Country>)
            }
</div>
        </div>
    );
};

