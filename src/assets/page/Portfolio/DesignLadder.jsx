// import React from 'react'
import DesignLadderButton from './DesignLadderButton'

export default function DesignLadder() {
  return (
    <div>
          DesignLadder
          <DesignLadderButton className={"font-bold md:text-[20px] text-[15px]"} text={"Let's talk"} onClick={()=>console.log("let's talk")}/>
    </div>
  )
}
