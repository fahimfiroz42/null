import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(()=>{
        document.title=` ${title} | KNull `

    },[title])
    
};

export default useTitle;