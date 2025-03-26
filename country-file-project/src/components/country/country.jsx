import React from 'react';
const country = ({country}) => {
console.log(country)
    return (
            <div className='border-2 mt-5 p-5 rounded-xl grid  justify-items-center gap-5 '>
            <h2 className='text-2xl'>Name : <span className='text-green-600'>{country.name.common}</span></h2>
            <img className='w-40 h-auto' src={country.flags.png}></img>
            <p>Official Name : {country.name.official}</p>
            <p>Population : {country.population} </p>
            <p>Time-zone : {country.timezones}</p>
            <p>Region : {country.region}</p>
        </div>
    );
};

export default country;

// {
//     "countryGet": {
//         "name": {
//             "common": "South Georgia",
//             "official": "South Georgia and the South Sandwich Islands",
//             "nativeName": {
//                 "eng": {
//                     "official": "South Georgia and the South Sandwich Islands",
//                     "common": "South Georgia"
//                 }
//             }
//         },
//         "tld": [
//             ".gs"
//         ],
//         "cca2": "GS",
//         "ccn3": "239",
//         "cca3": "SGS",
//         "independent": false,
//         "status": "officially-assigned",
//         "unMember": false,
//         "currencies": {
//             "SHP": {
//                 "name": "Saint Helena pound",
//                 "symbol": "£"
//             }
//         },
//         "idd": {
//             "root": "+5",
//             "suffixes": [
//                 "00"
//             ]
//         },
//         "capital": [
//             "King Edward Point"
//         ],
//         "altSpellings": [
//             "GS",
//             "South Georgia and the South Sandwich Islands"
//         ],
//         "region": "Antarctic",
//         "languages": {
//             "eng": "English"
//         },
//         "translations": {
//             "ara": {
//                 "official": "جورجيا الجنوبية وجزر ساندوتش الجنوبية",
//                 "common": "جورجيا الجنوبية"
//             },
//             "bre": {
//                 "official": "Georgia ar Su hag Inizi Sandwich ar Su",
//                 "common": "Georgia ar Su hag Inizi Sandwich ar Su"
//             },
//             "ces": {
//                 "official": "Jižní Georgie a Jižní Sandwichovy ostrovy",
//                 "common": "Jižní Georgie a Jižní Sandwichovy ostrovy"
//             },
//             "cym": {
//                 "official": "South Georgia and the South Sandwich Islands",
//                 "common": "South Georgia"
//             },
//             "deu": {
//                 "official": "Südgeorgien und die Südlichen Sandwichinseln",
//                 "common": "Südgeorgien und die Südlichen Sandwichinseln"
//             },
//             "est": {
//                 "official": "Lõuna-Georgia ja Lõuna-Sandwichi saared",
//                 "common": "Lõuna-Georgia ja Lõuna-Sandwichi saared"
//             },
//             "fin": {
//                 "official": "Etelä-Georgia ja Eteläiset Sandwichsaaret",
//                 "common": "Etelä-Georgia ja Eteläiset Sandwichsaaret"
//             },
//             "fra": {
//                 "official": "Géorgie du Sud et les îles Sandwich du Sud",
//                 "common": "Géorgie du Sud-et-les Îles Sandwich du Sud"
//             },
//             "hrv": {
//                 "official": "Južna Džordžija i Otoci Južni Sendvič",
//                 "common": "Južna Georgija i otočje Južni Sandwich"
//             },
//             "hun": {
//                 "official": "Déli-Georgia és Déli-Sandwich-szigetek",
//                 "common": "Déli-Georgia és Déli-Sandwich-szigetek"
//             },
//             "ita": {
//                 "official": "Georgia del Sud e isole Sandwich del Sud",
//                 "common": "Georgia del Sud e Isole Sandwich Meridionali"
//             },
//             "jpn": {
//                 "official": "サウスジョージア·サウスサンドウィッチ諸島",
//                 "common": "サウスジョージア・サウスサンドウィッチ諸島"
//             },
//             "kor": {
//                 "official": "조지아",
//                 "common": "조지아"
//             },
//             "nld": {
//                 "official": "Zuid-Georgië en de Zuidelijke Sandwich-eilanden",
//                 "common": "Zuid-Georgia en Zuidelijke Sandwicheilanden"
//             },
//             "per": {
//                 "official": "جزایر جورجیای جنوبی و ساندویچ جنوبی",
//                 "common": "جزایر جورجیای جنوبی و ساندویچ جنوبی"
//             },
//             "pol": {
//                 "official": "Georgia Południowa i Sandwich Południowy",
//                 "common": "Georgia Południowa i Sandwich Południowy"
//             },
//             "por": {
//                 "official": "Geórgia do Sul e Sandwich do Sul",
//                 "common": "Ilhas Geórgia do Sul e Sandwich do Sul"
//             },
//             "rus": {
//                 "official": "Южная Георгия и Южные Сандвичевы острова",
//                 "common": "Южная Георгия и Южные Сандвичевы острова"
//             },
//             "slk": {
//                 "official": "Južná Georgia a Južné Sandwichove ostrovy",
//                 "common": "Južná Georgia a Južné Sandwichove ostrovy"
//             },
//             "spa": {
//                 "official": "Georgia del Sur y las Islas Sandwich del Sur",
//                 "common": "Islas Georgias del Sur y Sandwich del Sur"
//             },
//             "srp": {
//                 "official": "Јужна Џорџија и Јужна Сендвичка Острва",
//                 "common": "Јужна Џорџија и Јужна Сендвичка Острва"
//             },
//             "swe": {
//                 "official": "Sydgeorgien",
//                 "common": "Sydgeorgien"
//             },
//             "tur": {
//                 "official": "Güney Georgia ve Güney Sandwich Adaları",
//                 "common": "Güney Georgia ve Güney Sandwich Adaları"
//             },
//             "urd": {
//                 "official": "جنوبی جارجیا و جزائر جنوبی سینڈوچ",
//                 "common": "جنوبی جارجیا"
//             },
//             "zho": {
//                 "official": "南乔治亚岛和南桑威奇群岛",
//                 "common": "南乔治亚"
//             }
//         },
//         "latlng": [
//             -54.5,
//             -37
//         ],
//         "landlocked": false,
//         "area": 3903,
//         "demonyms": {
//             "eng": {
//                 "f": "South Georgian South Sandwich Islander",
//                 "m": "South Georgian South Sandwich Islander"
//             }
//         },
//         "flag": "🇬🇸",
//         "maps": {
//             "googleMaps": "https://goo.gl/maps/mJzdaBwKBbm2B81q9",
//             "openStreetMaps": "https://www.openstreetmap.org/relation/1983629"
//         },
//         "population": 30,
//         "car": {
//             "signs": [
//                 ""
//             ],
//             "side": "right"
//         },
//         "timezones": [
//             "UTC-02:00"
//         ],
//         "continents": [
//             "Antarctica"
//         ],
//         "flags": {
//             "png": "https://flagcdn.com/w320/gs.png",
//             "svg": "https://flagcdn.com/gs.svg"
//         },
//         "coatOfArms": {},
//         "startOfWeek": "monday",
//         "capitalInfo": {
//             "latlng": [
//                 -54.28,
//                 -36.5
//             ]
//         }
//     }
// }