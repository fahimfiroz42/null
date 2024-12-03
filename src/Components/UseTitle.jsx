import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(()=>{
        document.title=` ${title} | Paradox  `

    },[title])
    
};

export default useTitle;