export const Register = () => {
  return (
    <main className="register-page">
      <div className="register__form-container">
        <div className="register__form-container__title">
          <h2>Cadastre-se</h2>
        </div>
        <form action="POST">
          <section>
            <div className="register__basic-info">
              <div className="register__input-container">
                <label htmlFor="name">Nome</label>
                <input type="text" placeholder="Joe" required />
              </div>
              <div className="register__input-container">
                <label htmlFor="middlename">Sobrenome</label>
                <input type="text" placeholder="Doe" required />
              </div>
              <div className="register__input-container">
                <label htmlFor="state">Estado</label>
                <input type="text" placeholder="São Paulo" required />
              </div>
              <div className="register__input-container">
                <label htmlFor="country">País</label>
                <input type="text" placeholder="Brasil" required />
              </div>
              <div className="register__input-container">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Brasil" required />
              </div>
              <div className="register__input-container">
                <label htmlFor="password">Senha</label>
                <input type="password" placeholder="Brasil" required />
              </div>
            </div>
          </section>
          <section>
            <div className="register__job-info">
              <div className="register__input-container">
                <label htmlFor="previous_experience">Experiência prévia</label>
                <input name="previous_experience" type="text" />
              </div>
              <div className="register__input-container">
                <label htmlFor="area">Área de atuação pretendida</label>
                <input type="text" required />
              </div>
              <div className="register__input-container">
                <label htmlFor="salary">Salário desejado</label>
                <input name="salary" type="number" required />
              </div>
            </div>
          </section>
          <section>
            <div>
              <input type="button" value="Se cadastrar" />
            </div>
          </section>
        </form>
      </div>
    </main>
  );
};
