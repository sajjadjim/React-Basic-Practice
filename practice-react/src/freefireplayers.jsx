import Player from './playerff'
export default function AllPlayers({players}){
    return(
  <div>
  <h2 style={{color:'goldenrod'}}>Free Fire Players Information</h2>
  <p style={{color:'red'}}>Number of Free Fire Player : {players.length}</p>
  <ol>
  {
    players.map(player=><Player player={player}></Player>)
  }
  </ol>
  </div>
    )
}