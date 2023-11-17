import React from "react";
import { players } from "../../players.js";
import Player from "./player";

export const PlayersList = () => {
  return (
    <div className="d-flex mt-5 flex-wrap gap-5 ms-5">
      {players.map((item) => {
        return <Player key={item.id} {...item} />;
      })}
    </div>
  );
};

export default PlayersList;
