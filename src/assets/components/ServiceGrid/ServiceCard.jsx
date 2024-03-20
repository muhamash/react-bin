/* eslint-disable react/prop-types */
const ServiceCard = ({ serviceImage, serviceName, serviceText }) => {
    return (
        <div className='flex p-3 items-start gap-4 bg-slate-100 rounded-xl cursor-pointer hover:scale-110 shadow-sm transition-all duration-150 w-[410px] mx-auto border-[0.8px]'>
            <img className='w-[70px] h-[70px]' src={serviceImage} alt='Service Image' />
            <div className='flex flex-col gap-2 justify-center'>
                <p className="text-[18px]">{serviceName}</p>
                <p className="text-[12px] text-gray-500">{serviceText}</p>
            </div>
        </div>
    );
};

export default ServiceCard;