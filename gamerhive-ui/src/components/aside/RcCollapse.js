import React from "react";
import Collapse from "rc-collapse";
import { Panel } from "rc-collapse";
import "rc-collapse/assets/index.css";
import './RcCollapse.scss'

function RcCollapse() {
  return (
    <Collapse className="rc-collapse" accordion={true} >
      <Panel className="rc-collapse-panel" header="hello" headerClass="my-header-class">
        <a href="/">StardewValley</a> <a href="/">FortniteCompetitive</a>{" "}
        <a href="/">Warframe</a> <a href="/">totalwar</a>{" "}
        <a href="/">Fallout</a> <a href="/">fo76</a>
      </Panel>
      <Panel header="title2">this is panel content2 or other</Panel>
    </Collapse>
  );
}

export default RcCollapse;
