import { ArrowSquareOut } from "phosphor-react";
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
        <div className="login-page__main__register">
          <a href="/register">Ou então crie uma conta</a>
          <ArrowSquareOut size={15} color="var(--main-color)" weight="bold" />
        </div>
      </section>
      <section className="login-page__image">
        <img src="image/login-background.jpg" alt="Office background" />
      </section>
    </main>
  );
};
