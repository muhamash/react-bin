export default function BannerSticker({ text }) {
  return (
    <div className={`w-full attribute-banner medium:text-3xl smaller:text-xl shadow-2xl shadow-yellow-400`}>
      <div className="flex justify-between px-8 pt-2">

        {/* <div className='right-[20px] top-[10px] smaller:border-[3px] medium:border-[5px] rounded-full'>
          <div className='medium:w-[8px] medium:h-[8px] smaller:w-[5px] smaller:h-[5px] bg-red-600 rounded-full'></div>
        </div> */}
        {/* <div className='right-[20px] top-[10px] smaller:border-[3px] medium:border-[5px] rounded-full'>
          <div className='medium:w-[8px] medium:h-[8px] smaller:w-[5px] smaller:h-[5px] bg-red-600 rounded-full'></div>
        </div> */}

      </div>

      <p className='smaller:text-[13px] text-center medium:text-[20px] z-10 pb-3'>
        {text}
      </p>
    </div>
  )
}