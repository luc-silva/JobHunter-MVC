import { LoginForm } from "../forms/LoginForm";

export const Login = () => {
  return (
    <main className="login-page">
      <section className="login-page__main">
        <div className="login-page__main__title">
          <h1>Entre em sua conta.</h1>
        </div>
        <div className="login-page__main__form-container">
          <LoginForm />
        </div>
      </section>
      <section className="login-page__image">
        <img src="image/login-background.jpg" alt="Office background" />
      </section>
    </main>
  );
};
