import './App.css'
import serviceItems from './assets//data/service.json'
import HeroPrime from './assets/components/Hero/HeroPrime'
import ServiceCarousel from './assets/components/ServiceGrid/Service'
function App() {
  

  return (
    <div className=''>
      <HeroPrime/>
      <ServiceCarousel services={serviceItems}/>
   </div>
  )
}

export default App
