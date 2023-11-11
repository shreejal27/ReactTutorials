import React from "react"
import Star from "./starComponent"

export default function App() {

  const [contact, setContact] = React.useState({
    firstName: "Rojan",
    lastName: "Maharjan",
    phone: "9841472084",
    email: "rammaharjan@gmail.com",
    isFavourite: true,
  })

  function toggleFavourite() {
    setContact(prevContact => {
      return{
        ...prevContact,
        //...prevContact returns all the properties of prevContact
        // firstName: "Rojan",
        // lastName: "Maharjan",
        // phone: "9841472084",
        // email: "rammaharjan@gmail.com",
        // isFavourite: false,
        //is Favourite property is only replaced and the rest is same
        isFavourite: !prevContact.isFavourite
      }
    });
  }

  return (
    <main>
      <article>
        <h1>{contact.firstName} {contact.lastName}</h1>
        <p>Phone: {contact.phone}</p>
        <p>Email: {contact.email}</p>
        {/* <button onClick={toggleFavourite}>Toggle Star</button> */}
        <Star icon={contact.isFavourite} handleClick={toggleFavourite}/>
        {/* <Star icon={contact.isFavourite} onClick={toggleFavourite}/> */}
        {/* onclick will not work on custom property and need native DOM elements */}
      </article>
    </main>
  )
}