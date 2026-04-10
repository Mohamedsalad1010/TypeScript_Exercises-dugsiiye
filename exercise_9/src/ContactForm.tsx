import { useState } from "react";
interface contactProps {
  onSubmit: (data: { name: string; email: string }) => void;
}

const ContactForm = ({ onSubmit }: contactProps) => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
  });

  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(contactForm);
    setSubmittedData(contactForm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>contact Form</h3>
        <input
          type="text"
          name="name"
          value={contactForm.name}
          onChange={handleChange}
          placeholder="enter your name"
        />
        
        <input
          type="email"
          name="email"
          value={contactForm.email}
          onChange={handleChange}
          placeholder="enter your email"
        />
        
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <p>{submittedData.name}</p>
          <p>{submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
