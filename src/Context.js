import {createContext, useState} from 'react'


const animalContext = createContext(); 


const AnimaContextProvider = ({children}) => { 
    const [state, setState] = useState({})

    
        
    return (
        <animalContext.Provider value={{ 
            state, setState
        }}>
            {children}
        </animalContext.Provider>
    )
}

export {animalContext, AnimaContextProvider} 