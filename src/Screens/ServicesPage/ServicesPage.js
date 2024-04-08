import React from 'react'
import ServicePageHero from '../../Components/ServicesPageHero/ServicePageHero'
import Offerings from '../../Components/Offerings/Offerings'
import Benefits from '../../Components/Benefits/Benefits'
import Faq from '../../Components/FAQ/Faq'

function ServicesPage() {
  return (
    <div>
        <ServicePageHero/>
        <Offerings/>
        <Benefits/>
        <Faq />
    </div>
  )
}

export default ServicesPage