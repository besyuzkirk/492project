import React from "react";
import GmButton from "./GmButton";
import "./GroupCard.scss";

function GroupCard() {
  return (
    <div className="group-card">
      <div className="group-title">
        <a>Valorat tr</a>
      </div>
      <div className="group-card__body">
        <div className="group-column">
          <div>Subs: 255</div>
          <div>open: close</div>
        </div>
        <div className="group-column">
          <div>game : valorant</div>
          <div>admin: ahmet</div>
        </div>
      </div>
      <div className="group-card__footer">
        <button type="submit">Terket</button>
      </div>
    </div>
  );
}

export default GroupCard;
