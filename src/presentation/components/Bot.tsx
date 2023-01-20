import React from 'react'

type myProps = {
  icon: JSX.Element,
  href: string,
  color: string,
  position: string
}
const Bot:React.FC<myProps> = ({icon, href, color, position}) => {
 
  return (
    <div> <a
    href={href}
    className="bot_float"
    style={{backgroundColor: color, bottom: position}}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a></div>
  )
}

export default Bot