import GenericHero from '../../../Generic/GenericHero/GenericHero'
import DataAnalyticsImg from '../../../Assets/AI_ML 2 (1).svg'
import Offerings from '../../../Components/Offerings/Offerings'
import Benefits from '../../../Components/Benefits/Benefits'
import Faq from '../../../Components/FAQ/Faq'

function DataAnalytics() {
    const imageWidth = '43.472vw'
    const backgroundColor = '#1A1E29'
    const text = 'Illuminate your path to success with Data-driven Decisions';
    const textColor = 'white';
    const backgroundColorLeft = '#FFFFFF';
    const backgroundColorRight = '#1A1E29';
    const rightColor = 'white';
    const leftColor = '#000000';
  return (
    <>
    <GenericHero sideImage={DataAnalyticsImg} imageWidth={imageWidth} backgroundColor={backgroundColor} text={text} textColor={textColor} backgroundColorLeft={backgroundColorLeft} backgroundColorRight={backgroundColorRight} rightColor={rightColor} leftColor={leftColor} />
    <Offerings />
    <Benefits />
    <Faq />
    </>
  )
}

export default DataAnalytics