

export default function DignityForm() {
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
                        value={values.name || ""}
                        onChange={handleChange}
                        disabled={inputDisabled}
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
                    value={values.email || ""}
                    onChange={handleChange}
                    disabled={inputDisabled}
                />
                <span className="form__input-error">{errors.email || ""}</span>
                <input
                    name="password"
                    type="password"
                    className="form__input form__input-reg"
                    placeholder="Пароль"
                    id="password-field"
                    minLength="2"
                    maxLength="40"
                    required
                    value={values.password || ""}
                    onChange={handleChange}
                    disabled={inputDisabled}
                />
            <button
                type="submit"
                className="form__button form__button-reg"
            >
            </button>
        </form>
    </section>
  );
}
