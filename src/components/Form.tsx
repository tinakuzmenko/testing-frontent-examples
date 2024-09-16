import {ChangeEvent, FC, FormEvent, useState} from "react";

type FormProps = {
  index: number;
}

const Form: FC<FormProps> = ({ index }) => {
  const [submitDataShown, setSubmitDataShown] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    age: "",
    agreeToTerms: false,
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    age: "",
    agreeToTerms: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setSubmitDataShown(false);
  };

  const validateForm = () => {
    const errors = {
      username: "",
      age: "",
      agreeToTerms: "",
    };

    let isValid = true;

    if (!formData.username.trim()) {
      errors.username = "Name is required.";
      isValid = false;
    }

    if (!formData.age) {
      errors.age = "Age is required.";
      isValid = false;
    } else if (parseInt(formData.age) <= 0) {
      errors.age = "Age must be a positive number.";
      isValid = false;
    }

    if (!formData.agreeToTerms) {
      errors.agreeToTerms = "You must agree to the terms and conditions.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validateForm()) {
      setSubmitDataShown(true);
      setFormData({
        username: "",
        age: "",
        agreeToTerms: false,
      });
    } else {
      setSubmitDataShown(false);
    }
  };

  return (
    <div className="ExampleContainer">
      <h2>Example {index} - Form</h2>
      <form className="Form" onSubmit={handleSubmit}>
        <div className="FormField">
          <div className="InputField">
            <label htmlFor="username">Your name:</label>
            <input
              className="Input"
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          {formErrors.username && (
            <p className="Error">{formErrors.username}</p>
          )}
        </div>
        <div className="FormField">
          <div className="InputField">
            <label htmlFor="age">Your age:</label>
            <input
              className="Input"
              type="number"
              name="age"
              id="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </div>
          {formErrors.age && <p className="Error">{formErrors.age}</p>}
        </div>
        <div className="FormField FormField--checkbox">
          <label htmlFor="agreeToTerms">
            <input
              type="checkbox"
              name="agreeToTerms"
              id="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
            />{" "}
            I agree to terms and conditions
          </label>
          {formErrors.agreeToTerms && (
            <p className="Error">{formErrors.agreeToTerms}</p>
          )}
        </div>
        <button className="Btn" type="submit">
          Submit
        </button>
        {submitDataShown && <h3>Form submitted!</h3>}
      </form>
    </div>
  );
};

export default Form;

