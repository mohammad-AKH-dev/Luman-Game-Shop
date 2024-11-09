import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

export default function SectionHeader({title}) {
  return (
    <div className="flex flex-wrap xs:flex-nowrap justify-center gap-12 xs:gap-0 xs:justify-between">
       <h3 className="font-bold text-3xl">{title}</h3>
       <div className="flex font-primary bg-secondary p-3 px-5 rounded-3xl items-center justify-center group cursor-pointer">
          <Link to={'/'} className='text-[15px] font-bold relative z-10'>مشاهده همه</Link>
          <ArrowBackIcon className='group-hover:-translate-x-2 transition-all delay-100 mr-3'/>
       </div>
    </div>
  )
}
