import React from "react";

export default function DignityForm() {
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

  return (

    <section>
        <form
            className="dignity-form"
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
                    name="password"
                    type="password"
                    className="dignity-form__input"
                    placeholder="Пароль"
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
