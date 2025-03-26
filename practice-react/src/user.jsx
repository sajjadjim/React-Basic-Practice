export default function friendInformation ({Friend_All}){

    const {name , username} = Friend_All;
    return(
        <div style={{
            border:'2px dashed yellow',
            margin:"10px",
            padding:"15px",
            borderRadius:'15px',
        }}>
            <h2>Name :{name}</h2>
            <p>Username :{username}</p>
            <p>Email:{Friend_All.email}</p>
            <p>Address:{Friend_All.address.city}</p>
            <p>Address:{Friend_All.phone}</p>
            <p>Address:{Friend_All.company.name}</p>
        </div>
    )
}


// {
//     "id": 7,
//     "name": "Kurtis Weissnat",
//     "username": "Elwyn.Skiles",
//     "email": "Telly.Hoeger@billy.biz",
//     "address": {
//         "street": "Rex Trail",
//         "suite": "Suite 280",
//         "city": "Howemouth",
//         "zipcode": "58804-1099",
//         "geo": {
//             "lat": "24.8918",
//             "lng": "21.8984"
//         }
//     },
//     "phone": "210.067.6132",
//     "website": "elvis.io",
//     "company": {
//         "name": "Johns Group",
//         "catchPhrase": "Configurable multimedia task-force",
//         "bs": "generate enterprise e-tailers"
//     }
// }