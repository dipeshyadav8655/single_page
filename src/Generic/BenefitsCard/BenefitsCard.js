import React from "react";
import "./BenefitsCard.css";
function BenefitsCard({data}) {
  return (
    <div
      className="BenefitsCardContainer "
      style={{ backgroundColor: `${data.color}` }}
    >
      <div className="Content flex flex-center flex-column">
        <div className="BenefitsCardTitle title-text">{data.title}</div>
        <div className="BenefitsCardContent text">
         {data.content}
        </div>
      </div>
    </div>
  );
}

export default BenefitsCard;
