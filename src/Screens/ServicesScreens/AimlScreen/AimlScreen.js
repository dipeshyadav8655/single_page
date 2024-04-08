import React from 'react'
import GenericHero from '../../../Generic/GenericHero/GenericHero'
import AIMLimage from '../../../Assets/AI_ML 2.svg';
import Offerings from '../../../Components/Offerings/Offerings'
import Benefits from '../../../Components/Benefits/Benefits'
import Faq from '../../../Components/FAQ/Faq'

function AimlScreen() {
    const imageWidth = '44.306vw'
    const backgroundColor = '#F3E6D3'
    const text = 'Empower your business for the future through automation and intelligent decision-making with our';
    const dualText = 'AI & Machine Learning solutions'
    const textColor = 'black'
    const backgroundColorLeft = '#FFFFFF';
    const backgroundColorRight = '#F3E6D3';
    const rightColor = '#5D5A88';
    const leftColor = '#000000';

  return (
    <>
    <GenericHero sideImage={AIMLimage} imageWidth={imageWidth} backgroundColor={backgroundColor} text={text} dualText={dualText} dualColor={true} backgroundColorLeft={backgroundColorLeft} backgroundColorRight={backgroundColorRight} rightColor={rightColor} leftColor={leftColor} textColor={textColor} />
    <Offerings />
    <Benefits />
    <Faq />
    </>
  )
}

export default AimlScreen