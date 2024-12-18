import { Link } from "react-router-dom";



export default function Menu({title,children,href}) {
  return (
   <Link to={href ? href : ''}>
     <li className='menu-item flex items-center justify-center gap-3'>
        {children}
      <Link className="text-xs" to={href ? href : ''}>{title}</Link>
    </li>
   </Link>
  )
}
