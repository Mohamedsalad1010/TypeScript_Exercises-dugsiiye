import { useEffect, useState } from "react";

interface Setting {
    language: string,
    notification: boolean
}
 function useSettingStorage (key: string , initialValue: Setting) : [Setting ,(value:  Setting) => void]{
     const [value , setValue] = useState<Setting>(() => {
        const stored = localStorage.getItem(key)
        return stored ? JSON.parse(stored) : initialValue
     })

     useEffect(() => {
        localStorage.setItem( key, JSON.stringify(value))
     } , [key , value])
     return [value , setValue ]
 }

 export default useSettingStorage