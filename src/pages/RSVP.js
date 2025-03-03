import React, { useState } from 'react';
import './RSVP.css';

const RSVP = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    foodRestrictions: [],
    alcoholPreferences: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // State for submission status

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked
          ? [...prevData[name], value]
          : prevData[name].filter((item) => item !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    // Convert form data to query string
    const queryParams = new URLSearchParams({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      foodRestrictions: formData.foodRestrictions.join(","),
      alcoholPreferences: formData.alcoholPreferences.join(","),
    }).toString();
  
    // Construct the full URL with query parameters
    const requestUrl = `https://wedding-website-197968004371.us-central1.run.app?${queryParams}`;
  
    try {
      const response = await fetch(requestUrl, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      if (!data.success) {
        throw new Error(data.message || "Unknown error occurred");
      }
  
      alert("RSVP submitted! Thank you!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        foodRestrictions: [],
        alcoholPreferences: [],
      });
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="rsvpBackground">
      {/* Uncomment if you want flowers */}
      {/* <img src={flower1} alt="flower" className="flower1"></img>
      <img src={flower2} alt="flower" className="flower2"></img> */}

      <form className="rsvpForm" onSubmit={handleSubmit}>
        <h1 className='title'>Rsvp Form</h1>
        <p>Please fill the form for EVERY person attending</p>
        <div className='textInput'>
          <div className='names'>
            <input
              type="text"
              className="nameInput"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              className="nameInput"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className='emails'>
            <input
              type="email"
              className="emailInput"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <h3>Food Restrictions / Allergies</h3>
        <div className="formSection">
          <label>
            <input
              type="checkbox"
              className='input'
              name="foodRestrictions"
              value="Vegan"
              checked={formData.foodRestrictions.includes("Vegan")}
              onChange={handleChange}
            />
            Vegan
          </label>
          <label>
            <input
              type="checkbox"
              className='input'
              name="foodRestrictions"
              value="Vegetarian"
              checked={formData.foodRestrictions.includes("Vegetarian")}
              onChange={handleChange}
            />
            Vegetarian
          </label>
          <label>
            <input
              type="checkbox"
              className='input'
              name="foodRestrictions"
              value="Other"
              checked={formData.foodRestrictions.includes("Other")}
              onChange={handleChange}
            />
            Other (please list)
          </label>
          <label>
            <input
              type="checkbox"
              className='input'
              name="foodRestrictions"
              value="Not Applicable"
              checked={formData.foodRestrictions.includes("Not Applicable")}
              onChange={handleChange}
            />
            Not Applicable
          </label>
        </div>

        <h3>Alcohol Preferences</h3>
        <div className="formSection">
          {["Tequila", "Vodka", "Rum", "Wine", "Beer", "Whiskey", "Not drinking"].map((drink) => (
            <label key={drink}>
              <input
                type="checkbox"
                className='input'
                name="alcoholPreferences"
                value={drink}
                checked={formData.alcoholPreferences.includes(drink)}
                onChange={handleChange}
              />
              {drink}
            </label>
          ))}
        </div>

        <button type="submit" className="submitButton" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default RSVP;
