import React from "react";

export default function Alerts(props) {
  return (
    <div style={{ height: "0px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type}- alert-dismissible fade show`}
          role="alert"
          style={{
            // backgroundColor: props.mode === "dark" ? "#343a40" : "#f8d7da",
            // color: props.mode === "dark" ? "white" : "#721c24",
            height: "0px",
          }}
        >
          <strong>{props.alert.type}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}
