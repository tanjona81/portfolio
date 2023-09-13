import {FC} from 'react'
import { cn } from '../../lib/Utils'

interface Social_menuProps {
    children:any
   color: String
}

const Social_menu: FC<Social_menuProps> = ({color,children}) => {
   return (
        <div className={cn(color,
        'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 rounded-r-lg')}>
            {children}
        </div>
   )
}

export default Social_menu