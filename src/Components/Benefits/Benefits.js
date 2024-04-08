import React from "react";
import BenefitsCard from "../../Generic/BenefitsCard/BenefitsCard";
import "./Benefits.css";
import { Data } from "../../Constants/Data/Data";

function Benefits() {
  return (
    <div className="BenefitsContainer flex flex-center flex-column">
      <div className="subheading-text text-white BenefitsHeading">
        Benefits of <span className="focused-color ">Blockchain</span>
      </div>
      <div className="BenefitsBody">
        {Data.blockChain.map((data) => (<BenefitsCard data={data} />)
          
        )}
        {/* <BenefitsCard/>
            <BenefitsCard/>
            <BenefitsCard/>
            <BenefitsCard/>
            <BenefitsCard/> */}
      </div>
    </div>
  );
}

export default Benefits;
