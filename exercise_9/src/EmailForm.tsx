import { useState } from "react"
  interface emailForm {
    onSubmit : (email: string) => void
  }
const EmailForm = ({onSubmit}: emailForm) => {

    const [email , setEmail] = useState<string>('')
    const [submittedEmail, setSubmittedEmail] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        onSubmit(email)
        setSubmittedEmail(email)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <input type="email" value={email} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>

      {submittedEmail && (<p>{submittedEmail}</p>)}
    </div>
  )
}


export default EmailForm
