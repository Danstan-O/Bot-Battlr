import React from "react";
import BotCard from "./BotCard"


  function BotCollection({bots, handleClick, handleDischarge}) {
   
  return (
    <div className="ui four column grid">
      <div className="row">
        Collection of all bots
        { /*pass in the id and handleClick to add a bot to my army 
        // handleDischarge to discharge the bot from the service */}
        {bots.map(bot=><BotCard key={bot.id} bot={bot} handleClick={handleClick} 
        handleDischarge={handleDischarge}/>)}
        
      </div>
    </div>
  );
}

export default BotCollection;
