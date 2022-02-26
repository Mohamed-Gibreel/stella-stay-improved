import React from "react";

function ApartmentCard(props: any) {
  return (
    <div className="apartment-card min-w-[100%] sm:min-w-[45%] lg:min-w-[31.3%]">
      <div
        className="apt-image"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url(${props.backgroundImage}`,
          borderRadius: "10px",
          height: "255px",
          display: "flex",
          justifyContent: "flex-end",
          padding: "10px",
        }}
      >
        <div
          style={{
            background: "black",
            borderRadius: "45px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            height: "33px",
          }}
        >
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "15px",
              lineHeight: "18px",
              padding: "0px 15px",
            }}
          >
            from <b>{props.price}</b> / night
          </span>
        </div>
      </div>
      <div className="apt-info"> {props.location} </div>
      <div className="apt-sub-info">
        <span style={{ marginRight: "10px" }}>{props.city}</span>
        <span
          style={{ marginRight: "10px", fontSize: "8px", color: "#C4C4C4" }}
        >
          &#x25CF;
        </span>
        <span>{props.guests}</span>
      </div>
    </div>
  );
}
export default ApartmentCard;
