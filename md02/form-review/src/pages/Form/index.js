import { useState } from "react";
import { Link } from "react-router-dom";

export function Form(props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  console.log(form);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.setUsers((state) => [...state, form]);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Cadastro</h1>
        <label htmlFor="input-name">Nome:</label>
        <input
          id="input-name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <label htmlFor="input-email">Email:</label>
        <input
          id="input-email"
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <label htmlFor="input-password">Senha:</label>
        <input
          id="input-password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <button>Cadastrar</button>
      </form>

      <Link to="/test/banana/maca">Usuarios Cadastrados</Link>
    </>
  );
}
