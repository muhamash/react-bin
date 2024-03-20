import React from 'react';
import serviceItems from '../../data/serviceItems.json';
import NoiseCancellationCard from './NoiseCancellationCard';
import ServiceItems from './ServiceItems';

export default function ServiceCard() {
  return (
    <div className='w-fit p-5 bg-gray-200 rounded-[20px] bg-opacity-30 flex gap-3'>
      {/* service items */ }
      <div className='flex flex-col gap-5 w-1/3'>
        <div>
          <p className='font-mono text-md'>AI Voice Clarity</p>
          <div className=''>
            { serviceItems.map( ( serviceItem ) => (
              <React.Fragment key={ serviceItem.id }>
                <ServiceItems
                  serviceIcon={ serviceItem.serviceIcon }
                  serviceText={ serviceItem.serviceText }
                  onClick={ () => console.log( 'service Items' ) }
                />
              </React.Fragment>
            ) ) }
          </div>
        </div>
        <div>
          <p className='font-mono text-md'>AI Meeting Assistant</p>
          <div className=''>
            { serviceItems.map( ( serviceItem ) => (
              <React.Fragment key={ serviceItem.id }>
                <ServiceItems
                  serviceIcon={ serviceItem.serviceIcon }
                  serviceText={ serviceItem.serviceText }
                  onClick={ () => console.log( 'service Items' ) }
                />
              </React.Fragment>
            ) ) }
          </div>
        </div>
      </div>

      {/* right side */ }
      <div className='bg-slate-200 p-2 w-2/3 rounded-[20px] flex flex-col justify-center items-center gap-5'>
        <NoiseCancellationCard />
        <div className='text-sm'>
          <p className='w-[50%] text-center mx-auto'><span className='font-semibold text-black'>Eliminate background noises</span> from your microphone and speaker, ensuring distraction-free calls</p>
        </div>
      </div>
    </div>
  );
}
