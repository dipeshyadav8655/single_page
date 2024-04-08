import React from "react";
import "./OfferingsCard.css";
import Icon from "../../Assets/currency 1.svg";

function OfferingsCard({data}) {
  return (
    <div className="OfferingCardContainer " style={{ backgroundColor:`${data.Color}` }}>
      <div className="OfferingIcon">
        <img src={data.Icon} />
      </div>
      <div className="OfferingTitle title-text">{data.Title}</div>
      <div className="OfferingData">
       {data.Content}
      </div>
    </div>
  );
}

export default OfferingsCard;
