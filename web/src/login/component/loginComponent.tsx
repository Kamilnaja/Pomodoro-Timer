export interface LoginProps {}

export const LoginComponent = () => (
  <form onSubmit={}>
    <h2>Please sign in</h2>
    <label>
      Imię:
      <input type="text" name="name" />
    </label>
    <input type="submit" value="Wyślij" />
  </form>
);
