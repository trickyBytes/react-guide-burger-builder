import React from "react";

import classes from "./CheckoutSummary.module.scss";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

const checkoutSummary = props => {
  return (
    <div  className={classes.CheckoutSummary}>
      <h1>We hope it tastes good!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button clicked btnType="Danger">
        CANCEL
      </Button>
      <Button clicked btnType="Sucess">
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;
