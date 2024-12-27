import React, { useState } from "react";

const App = () => {
  const [formInput, setformInput] = useState({
    name: "",
    age: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({}); // State to store validation errors

  // Handle input changes
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setformInput((curInput) => ({
      ...curInput,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Validation logic
  const validate = () => {
    const newErrors = {};

    // Standard Validation
    if (!formInput.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formInput.age || formInput.age < 18 || formInput.age > 100) {
      newErrors.age = "Age must be a valid number between 18 and 100.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formInput.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    // Custom Email Validation
    const invalidEmails = ["test@example.com", "user@example.com"];
    if (invalidEmails.includes(formInput.email)) {
      newErrors.email = "This email is not allowed.";
    }

    // Mobile Validation
    if (!formInput.mobile || !/^\d{10}$/.test(formInput.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits.";
    }

    // Standard and Custom Password Validation
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(formInput.password)) {
      newErrors.password =
        "Password must be at least 8 characters, including one uppercase letter, one number, and one special character.";
    }

    const weakPasswords = ["password123", "123456", "qwerty", "letmein"];
    if (weakPasswords.includes(formInput.password)) {
      newErrors.password =
        "This is a weak password. Please choose another one.";
    }

    // Confirm Password Validation
    if (formInput.password !== formInput.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    // Terms and Conditions Validation
    if (!formInput.termsAccepted) {
      newErrors.termsAccepted = "You must accept the terms and conditions.";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form Submitted Successfully");
      console.log("Form Submitted Successfully:", formInput);
    }
  };

  return (
    <div className="qwer">
      <h1>Advanced Form Handling with Validation in React</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter Your Name</label> <br />
        <input
          name="name"
          type="text"
          value={formInput.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <div style={{ color: "red" }}>{errors.name}</div> <br />
        <label>Enter the Age</label> <br />
        <input
          name="age"
          type="number"
          value={formInput.age}
          onChange={handleChange}
          placeholder="Enter your age"
        />
        <div style={{ color: "red" }}>{errors.age}</div> <br />
        <label>Email ID</label> <br />
        <input
          name="email"
          type="text"
          value={formInput.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <div style={{ color: "red" }}>{errors.email}</div> <br />
        <label>Mobile No</label> <br />
        <input
          name="mobile"
          type="text"
          value={formInput.mobile}
          onChange={handleChange}
          placeholder="Enter your mobile number"
        />
        <div style={{ color: "red" }}>{errors.mobile}</div> <br />
        <label>Password</label> <br />
        <input
          name="password"
          type="password"
          value={formInput.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        <div style={{ color: "red" }}>{errors.password}</div> <br />
        <label>Confirm Password</label> <br />
        <input
          name="confirmPassword"
          type="password"
          value={formInput.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
        />
        <div style={{ color: "red" }}>{errors.confirmPassword}</div> <br />
        <label>
          <input
            name="termsAccepted"
            type="checkbox"
            checked={formInput.termsAccepted}
            onChange={handleChange}
          />
          I accept the Terms and Conditions
        </label>
        <div style={{ color: "red" }}>{errors.termsAccepted}</div> <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <div className="tablee">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Contact</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{formInput.name}</td>
              <td>{formInput.age}</td>
              <td>{formInput.mobile}</td>
              <td>{formInput.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
