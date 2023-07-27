export const LoginForm = () => {
  return (
    <form action="" className="login-form">
      <div className="login-form__input-container">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" />
      </div>
      <div className="login-form__input-container">
        <label htmlFor="password">Senha:</label>
        <input type="password" name="password" />
      </div>
      <div className="login-form__submit-container">
        <input type="submit" value="Entrar" />
      </div>
    </form>
  );
};
