import React from "react";

import classes from "./BuildControls.module.scss";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { lable: "Salad", type: "salad" },
  { lable: "Bacon", type: "bacon" },
  { lable: "Cheese", type: "cheese" },
  { lable: "Meat", type: "meat" }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <strong>
      <p>Current Price: {props.price.toFixed(2)}</p>
    </strong>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.lable}
        label={ctrl.lable}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchaseable}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
