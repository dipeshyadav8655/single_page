import React from 'react'
import GenericHero from '../../../Generic/GenericHero/GenericHero'
import QaImage from '../../../Assets/QA 1 2.svg'
import Offerings from '../../../Components/Offerings/Offerings'
import Benefits from '../../../Components/Benefits/Benefits'
import Faq from '../../../Components/FAQ/Faq'

function Qa() {
    const imageWidth = '43.472vw'
    const backgroundColor = 'white'
    const text = 'Quality First, Every Test : Partnering for QA Excellence';
    const textColor = 'black';
    const backgroundColorLeft = 'black';
    const backgroundColorRight = 'white';
    const rightColor = 'black';
    const leftColor = 'white';
  return (
    <>
    <GenericHero sideImage={QaImage} imageWidth={imageWidth} backgroundColor={backgroundColor} text={text} textColor={textColor} backgroundColorLeft={backgroundColorLeft} backgroundColorRight={backgroundColorRight} rightColor={rightColor} leftColor={leftColor} />
    <Offerings />
    <Benefits />
    <Faq />
    </>
  )
}

export default Qa