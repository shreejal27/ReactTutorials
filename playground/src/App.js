import React from "react"


export default function App() {

  const [formData, setFormData] = React.useState(
    {
      email: "",
      password: "",
      confirmPassword: "",
      newsletter: false
    }
  );

  // console.log(formData);

  function handleChange(event) {

    const { name, value, type, checked } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
     
      }

    })
  }

  function handleSubmit(event) {
    // submitToApi(formData) if you have a API function
    event.preventDefault()
   if(formData.password === formData.confirmPassword) {
    console.log("Successfully signed up");
    }else{
      console.log("Passwords do not match");
      return;
    } 
    if(formData.newsletter === true) {
      console.log("Thanks for signing up for our newsletter") 
    } 
    console.log(formData)
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
         
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />

        <input
         type="password"
          placeholder="Password"
          onChange={handleChange}
          name="password"
          value={formData.password}
        />


        <input
         type="password"
          placeholder="Password"
          onChange={handleChange}
          name="confirmPassword"
          value={formData.confirmPassword}
        />

        <input
          type="checkbox"
          checked={formData.newsletter}
          onChange={handleChange}
          name="newsletter"
          id="newsLetter" />

        <label htmlFor="newsLetter"> I want to join NewsLetter</label>

        <br />
        <button>Submit</button>
      </form>
    </main>
  )
}