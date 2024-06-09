
import serviceItems from './assets/data/service.json'
import HeroPrime from './assets/components/Hero/HeroPrime'
import ServiceCarousel from './assets/components/ServiceGrid/Service'
function Old() {
  

  return (
    <div className=''>
      <HeroPrime/>
      <ServiceCarousel services={serviceItems}/>
   </div>
  )
}

export default Old
