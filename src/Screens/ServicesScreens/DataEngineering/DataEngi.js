import React from 'react';
import GenericHero from '../../../Generic/GenericHero/GenericHero'
import DataEngiImage from '../../../Assets/AI_ML 2 (2).svg'
import Offerings from '../../../Components/Offerings/Offerings'
import Benefits from '../../../Components/Benefits/Benefits'
import Faq from '../../../Components/FAQ/Faq'

function DataEngi() {
    const imageWidth = '43.472vw'
    const backgroundColor = '#67999A'
    const text = 'Transforming complexity into Clarity : Data Engineering Solutions';
    const textColor = 'white';
    const backgroundColorLeft = 'white';
    const backgroundColorRight = '#67999A';
    const rightColor = 'white';
    const leftColor = '#5D5A88';
  return (
    <>
    <GenericHero sideImage={DataEngiImage} imageWidth={imageWidth} backgroundColor={backgroundColor} text={text} textColor={textColor} backgroundColorLeft={backgroundColorLeft} backgroundColorRight={backgroundColorRight} rightColor={rightColor} leftColor={leftColor} />
    <Offerings />
    <Benefits />
    <Faq />
    </>
  )
}

export default DataEngi