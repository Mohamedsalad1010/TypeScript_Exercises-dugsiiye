import { useEffect, useState } from "react";

 function useStoreNumber (key: string , initialValue: number) : [number ,( value: number) => void]{
     const [value , setValue] = useState<number>(() => {
        const stored = localStorage.getItem(key)
        return stored ? JSON.parse(stored) : initialValue
     })

     useEffect(() => {
        localStorage.setItem( key, JSON.stringify(value))
     } , [key , value])
     return [value , setValue ]
 }

 export default useStoreNumber