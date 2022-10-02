import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({bots, handleClick, handleDischarge}) {
  
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
                  Your Bot Army

          { /*pass in the id and handleClick to add a bot to my army 
        // handleDischarge to discharge the bot from the service */}
          {bots.map(bot=><BotCard key={bot.id} bot={bot} 
          handleClick={handleClick} handleDischarge={handleDischarge}/>)}
          
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
