import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import { botsDataApiHost as apiHost } from "./apiHosts"

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
      
  useEffect(() =>{
    fetch(`${apiHost}/bots`)
    .then(res => res.json())
    .then(setBots)
  }, [])

  function displayBot(id) {
    setBots(bots.map(bot=> id === bot.id? {...bot, isCast: true} : bot))

  }
  
  function deleteBot(id) {
    setBots(bots.map(bot=> id === bot.id? {...bot, isCast: false} : bot))

  }
  function dischargeBot(id) {
    setBots(bots.filter(bot=> id !== bot.id))

  }

  return (
    <div>
      <YourBotArmy  bots={bots.filter(bot => bot.isCast)} 
       handleDischarge={dischargeBot}
      handleClick={deleteBot}  />
      <BotCollection bots={bots} handleClick={displayBot} 
      handleDischarge={dischargeBot}/>
    </div>
  )
}

export default BotsPage;
