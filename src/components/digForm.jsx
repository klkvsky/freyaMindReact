import React from "react";

export default function DignityForm(props) {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phNumber, setPhNumber] = React.useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePhNumberChange = (e) => {
        setPhNumber(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.toggleMsg(true);
    }

  return (

    <section>
        <form
            className="dignity-form"
            onSubmit={handleSubmit}
        >
                    <input
                        name="name"
                        type="name"
                        className="dignity-form__input"
                        placeholder="Имя"
                        id="name-field"
                        minLength="2"
                        maxLength="40"
                        required
                        value={name || ""}
                        onChange={handleNameChange}
                    />

                <input
                    name="email"
                    type="email"
                    className="dignity-form__input"
                    placeholder="Email"
                    id="Email-field"
                    minLength="2"
                    maxLength="40"
                    required
                    value={email || ""}
                    onChange={handleEmailChange}
                />
                <input
                    name="phone"
                    type="tel"
                    className="dignity-form__input"
                    placeholder="+79999999999"
                    id="password-field"
                    minLength="2"
                    maxLength="40"
                    required
                    value={phNumber || ""}
                    onChange={handlePhNumberChange}
                />
            <button
                type="submit"
                className="dignity-form__btn"
            > ПРИСОЕДИНИТЬСЯ!
            </button>
        </form>
    </section>
  );
}
