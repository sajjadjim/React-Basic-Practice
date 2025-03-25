export default function Player({player}){
    return(
        <div style={{border:'2px dashed green',
            padding:'5px',
            margin:'10px',
            textAlign:'left'
        }}>
            <h3 style={{color:'blue'}}>Player Name :{player.name}</h3>
            <h3>Youtube Channel name :{player.youtube}</h3>
            <h4>Player Age :{player.age} </h4>
            <p style={{color:'red'}}>Player Free Fire Id name : {player.freefire}</p>
            <p>Player Dialouge -- {player.dialouge}</p>
        </div>
    )
}