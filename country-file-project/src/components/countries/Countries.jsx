
import { use } from "react";
import Country from "../country/country";

export default function GetCountriesDetails({AllCountries}) {
    const countries = use(AllCountries);
    // console.log(countries)
    return (
        <div>
            <h2>Number OF Country : {countries.length}</h2>
           {
countries.map(country=> <Country  country={country}></Country>)
            }
        </div>
    );
};

