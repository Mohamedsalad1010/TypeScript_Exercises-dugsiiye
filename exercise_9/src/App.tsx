import AgeForm from "./AgeForm"
import ContactForm from "./ContactForm"
import EmailForm from "./EmailForm"


function App() {
 
 const handlesubmit = (email: string) =>{
  console.log("email", email)
 } 

 const handleAge = (age: number) => {
  console.log("age" , age)
 }

 const handleContact = (data: {name: string , email: string}) => {
  console.log("contact", data)
 }
  return (
    <>
   <h2>exercise_9</h2>

   <h3>1 eamil form</h3>
   < EmailForm
   onSubmit={handlesubmit}
   />
   <AgeForm
   onSubmit={handleAge}
   />


   <ContactForm
    onSubmit={handleContact}
   />
   </>


  )
}

export default App
