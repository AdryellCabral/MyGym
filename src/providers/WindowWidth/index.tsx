import { ReactNode } from 'react';
import { createContext, useState } from 'react';


interface Context{
    windowWidth: number,
    setWindowWidth: React.Dispatch<React.SetStateAction<number>>
}

export const  WindowWidthContext = createContext<Context>({} as Context);

interface WindowWidthProviderProps{
    children: ReactNode
}

export const WindowWidthProvider = ({children}: WindowWidthProviderProps)=>{
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const getWindowWidth = ()=>{
        let windowWidth = window.innerWidth;
        return windowWidth;
    };
    
    window.addEventListener('resize', ()=>{
        setWindowWidth(getWindowWidth);
    });

	return(
		<WindowWidthContext.Provider value = {{ windowWidth, setWindowWidth }}>
			{children}
		</WindowWidthContext.Provider>
	);
}