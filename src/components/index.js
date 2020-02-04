import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";

export default function Test() {
  const { language } = useSelector(state => state.user);
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
    </div>
  );
}
