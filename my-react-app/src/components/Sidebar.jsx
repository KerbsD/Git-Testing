import { ChevronFirst, ChevronLast, MoreVertical } from 'lucide-react';
import React, { useContext, useState, createContext } from 'react';
import { Link } from 'react-router-dom'

const SidebarContext = createContext();
export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true)
    return (
        <aside className={`h-screen overflow-hidden transition-all duration-500 ${expanded ? "w-[250px]" : "w-16 mr-3"}`}>
            <nav className="h-full flex flex-col bg-white border-r shadow-sm dark:bg-slate-800">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <h1 className={`overflow-hidden transition-all duration-500 font-black dark:text-gray-100 ${expanded ? "w-32" : "w-0"}`}>MyPortfolio</h1>
                    <button onClick={() => setExpanded(curr => !curr)} className="p-1 rounded-md bg-gray-50 hover:bg-gray-100 hover: duration-300 dark:bg-slate-300 dark:hover:bg-slate-500">
                        {expanded ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className='flex-1 px-3'>{children}</ul>
                </SidebarContext.Provider>

                <div className='border-t flex p-3'>
                    <img src="./src/assets/dp.png" alt="" className='dark:bg-gray-700 w-10 h-10 rounded-md' />
                    <div className={`flex justify-between items-center
                    overflow-hidden transition-all duration-500 font-black dark:text-white
                    ${expanded ? "w-52 ml-3" : "w-0"}`}>
                        <div className='leading-4'>
                            <h4 className='font-semibold'>Kirby Rivera</h4>
                            <span className='text-xs text-gray-600 dark:text-gray-50'>kirby@gmail.com</span>
                        </div>
                        <MoreVertical size={20} />
                    </div>
                </div>
            </nav>
        </aside>
    )
}

export function SidebarItem({ icon, text, active }) {
    const { expanded } = useContext(SidebarContext);
    return (
        <li className={`relative flex items-cent:er py-2 px-3 my-1 font-medium rounded-md cursor-pointe dark:text-white transition-colors
         ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-slate-800" : "hover:bg-indigo-50 hover:text-black"
            }
        `}
        >{icon}
            <Link to={`/` + text}><span className={`overflow-hidden 
            ${expanded ? "w-52 ml-3 transition-all duration-500" : "w-0 duration-500"}`}>{text}</span></Link>
        </li>
    )
}