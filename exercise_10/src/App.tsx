import { useState } from 'react'
import './App.css'
import useStoreNumber from './useSoreNumber'
import useSettingStorage from './useSettingStrage'
import useLocalStorage from './useLocalStorage'

function App() {
 const [number , setNumber]  = useLocalStorage<number>('store-number' , 29)
 const [setting , setSetting]  = useLocalStorage<{}>('setting' , {language: 'somali' , notification: false})
 

  return (
  <>
  <h2>exercise_10</h2>


  <div>
    <h2>1 number</h2>
    <p> number is : {number}</p>

    <h2>2 setting</h2>
    <p> language is : {setting.language}  </p>
    <p>notification: {setting.notification? 'true': 'false'}</p>
  </div>
  
  </>
  )
}

export default App
