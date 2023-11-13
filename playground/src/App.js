import React from "react"


export default function App() {

  const [formData, setFormData] = React.useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      comments: "",
      isFriendly: false,
      employment: "",
      favColor: ""
    }
  );

  // console.log(formData);

  function handleChange(event) {

    const {name, value, type, checked} = event.target //destructuring the event.target object
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
        //if the input type is checkbox then the value is checked otherwise it is the value
      }

    })
  }

  function handleSubmit(event) {
    // submitToApi(formData) if you have a API function
    event.preventDefault()
    console.log(formData)
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        //state in the driver seat here telling what to display in the input field rather than the input field telling the state what to display
        />

        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />

        <textarea
          placeholder="Comments"
          onChange={handleChange}
          name="comments"
          value={formData.comments}
        />
        {/* textarea is a self closing tag made by react developers; */}

        <input
          type="checkbox"
          checked={formData.isFriendly}
          onChange={handleChange}
          name="isFriendly"
          id="isFriendly" />

        <label htmlFor="isFriendly"> Are you friendly?</label> 
        {/* htmlFor is needed as when the label is clicked so does the checkbox  */}

        <fieldset>
          <legend>Current Employment State</legend>
          <input
          id= "unemployed"
          type= "radio"
          name="employment"
          value="unemployed"
          checked={formData.employment === "unemployed"}
          //now react is in the driver seat telling the input field what to display
          onChange={handleChange}/>
          <label htmlFor="unemployed">Unemployed</label>
          <input
          id= "partTime"
          type= "radio"
          name="employment"
          value="partTime"
          checked={formData.employment === "partTime"}
          onChange={handleChange}/>
          <label htmlFor="partTime">Part-Time</label>
          <input
          id= "employed"
          type= "radio"
          name="employment"
          value="employed"
          checked={formData.employment === "employed"}
          onChange={handleChange}/>
          <label htmlFor="employed">Employed</label>
        </fieldset>

        <br/>

        <label htmlFor="favColor">What is your favourite color? </label>

        <select id="favColor"
              value={formData.favColor}
              onChange={handleChange}
              name="favColor">
            <option value="">Choose</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="black">Black</option>

        </select>
        <br/>
        <button>Submit</button> 
        {/* if a button is found inside a form in react it will act as input type = submit */}
        {/* <button type="button">click me</button> to use a normal button if you have to inside a form*/}
      </form>
    </main>
  )
}