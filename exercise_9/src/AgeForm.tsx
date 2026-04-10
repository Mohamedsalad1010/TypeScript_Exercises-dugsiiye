import { useState } from "react"
  interface emailForm {
    onSubmit : (age: number) => void
  }
const AgeForm = ({onSubmit}: emailForm) => {

    const [age , setAge] = useState<number | ''>('')
    const [submittedEmail, setSubmittedEmail] = useState<number | ''>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAge(Number(e.target.value))
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(Number(age) < 15) {
    alert('age must be creater then 15 years')
    return
        }
        onSubmit(Number(age))
        setSubmittedEmail(Number(age))
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
   <h2>age</h2>
        <input type="number" value={age} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>

      {submittedEmail && (<p>{submittedEmail}</p>)}
    </div>
  )
}


export default AgeForm
