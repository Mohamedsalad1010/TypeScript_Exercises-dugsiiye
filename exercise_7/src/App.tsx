import './App.css'
import ProductCard from './ProductCard'
import WelcomeComponent from './WelcomeComponent'
function App() {


  return (
    <>
     <h2>exercise_7</h2>
     <WelcomeComponent
     username={'cali'}
     isPremium= {true}
     />

     <ProductCard
     name='bariis'
     price={14}
     description='waa midkii kowaad'
     />
     
    </>
  )
}

export default App
