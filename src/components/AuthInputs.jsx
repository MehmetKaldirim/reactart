import { useState } from "react";
import { styled } from "styled-components";

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #6b7280;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: #d1d5db;
  color: #374151;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;
  let labelClassesPassword =
    "block mb-2 text-xs font-bold tracking-wide text-stone-200 uppercase";
  if (passwordNotValid) {
    labelClassesPassword =
      "block mb-2 text-xs font-bold tracking-wide text-red-400 uppercase";
  }

  let labelClassesEmail =
    "block mb-2 text-xs font-bold tracking-wide text-stone-200 uppercase";
  if (emailNotValid) {
    labelClassesEmail =
      "block mb-2 text-xs font-bold tracking-wide text-red-400 uppercase";
  }

  let inputPasswordClasses =
    "w-full px-3 py-2 leading-tight  border rounded shadow";
  if (passwordNotValid) {
    inputPasswordClasses += "text-red-500 bg-red-100 border-red-300";
  } else {
    inputPasswordClasses += " text-gray-700 bg-stone-300";
  }

  let inputEmailClasses =
    "w-full px-3 py-2 leading-tight  border rounded shadow";
  if (emailNotValid) {
    inputEmailClasses += "text-red-500 bg-red-100 border-red-300";
  } else {
    inputEmailClasses += " text-gray-700 bg-stone-300";
  }

  return (
    <div id="auth-inputs">
      <ControlContainer>
        <p>
          <label className={labelClassesEmail}>Email</label>
          <input
            type="email"
            className={inputEmailClasses}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <label className={labelClassesPassword}>Password</label>
          <input
            type="password"
            className={inputPasswordClasses}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </ControlContainer>
      <div className="actions">
        <button
          type="button"
          className="px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-500"
        >
          Create a new account
        </button>
        <button
          className="px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-500"
          onClick={handleLogin}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
