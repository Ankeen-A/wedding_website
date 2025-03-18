import React, { useState } from 'react';
import './RSVP.css';

const RSVP = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    foodRestrictions: "", // Changed to string
    alcoholPreferences: [],
    wantsToGiveSpeech: false,
    comments: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "wantsToGiveSpeech") {
        setFormData({ ...formData, wantsToGiveSpeech: checked });
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: checked
            ? [...prevData[name], value]
            : prevData[name].filter((item) => item !== value),
        }));
      }
    } else {
      setFormData({ ...formData, [name]: value }); // For radio buttons and text inputs
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const queryParams = new URLSearchParams({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      foodRestrictions: formData.foodRestrictions, // Removed `.join()` since it's now a string
      alcoholPreferences: formData.alcoholPreferences.join(","),
      wantsToGiveSpeech: formData.wantsToGiveSpeech.toString(),
      comments: formData.comments,
    }).toString();

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
        foodRestrictions: "",
        alcoholPreferences: [],
        wantsToGiveSpeech: false,
        comments: "",
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
          {['Vegan', 'Vegeterian', 'Halal (replace meat with fish)', 'None'].map((foodRestriction) => (
            <label key={foodRestriction}>
              <input
                type="radio"
                className='input'
                name="foodRestrictions"
                value={foodRestriction}
                checked={formData.foodRestrictions === foodRestriction} // Updated logic
                onChange={handleChange}
                required
              />
              {foodRestriction}
            </label>
          ))}
        </div>

        <h3>Alcohol Preferences</h3>
        <div className="formSection">
          {['Tequila', 'Vodka', 'Rum', 'Wine', 'Beer', 'Whiskey', 'Mocktails'].map((drink) => (
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

        <h3>Wedding Speeches <em>(optional)</em></h3>
        <div className="formSection">
          <label>
            <input
              type="checkbox"
              name="wantsToGiveSpeech"
              checked={formData.wantsToGiveSpeech}
              onChange={handleChange}
            />
            Check this box if you would like to give a speech
          </label>
        </div>

        <h3>Additional Comments <em>(optional)</em></h3>
        <div className="formSection">
          <textarea
            className='input'
            name="comments"
            placeholder="Leave a comment here..."
            value={formData.comments || ""}
            onChange={handleChange}
            rows={4}
          />
        </div>

        <button type="submit" className="submitButton" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default RSVP;
