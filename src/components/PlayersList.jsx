import React from "react";
import PropTypes from "prop-types";
import Player from "./player";
import Players, { players } from "../../players";

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
