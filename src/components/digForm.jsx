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
                        className="form__input form__input-reg"
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
                    className="form__input form__input-reg"
                    placeholder="Email"
                    id="Email-field"
                    minLength="2"
                    maxLength="40"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    value={email || ""}
                    onChange={handleEmailChange}
                />
                <input
                    name="password"
                    type="password"
                    className="form__input form__input-reg"
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
                className="form__button form__button-reg"
            > ПРИСОЕДИНИТЬСЯ!
            </button>
        </form>
    </section>
  );
}
