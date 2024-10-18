import React from 'react'

function Button({style, title, icon}) {
  return (
    <button className={`flex items-center text-[18px] md:text-[24px] gap-[10px] outline-none ${style}`}>
        <p>{title}</p>
        <img src={icon} alt='icon' />
    </button>
  )
}

export default Button