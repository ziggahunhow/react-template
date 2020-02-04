import React from "react";
import { useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import Button from "@material-ui/core/Button";

export default function Test() {
  const dispatch = useDispatch();

  return (
    <div>
      <button type="button" onClick={() => dispatch({ type: "USER_CHANGE_LANGUAGE", payload: "en-us" })}>
        EN
      </button>
      <button type="button" onClick={() => dispatch({ type: "USER_CHANGE_LANGUAGE", payload: "zh-tw" })}>
        TW
      </button>
      <h1>
        <FormattedMessage id="test.language" />
      </h1>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}
