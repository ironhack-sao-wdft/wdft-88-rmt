import { useState } from "react";

export function Form(props) {
  const [form, setForm] = useState({
    name: "Jurema",
    age: 0,
  });

  console.log(form);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleChangeDisplayInfos(e) {
    e.preventDefault();

    props.changeDisplayInfos(form);
  }

  return (
    <form>
      <label htmlFor="input-name">Nome:</label>
      <input
        id="input-name"
        type="text"
        onChange={handleChange}
        name="name"
        value={form.name}
      />

      <label htmlFor="input-age">Idade:</label>
      <input
        id="input-age"
        type="number"
        onChange={handleChange}
        name="age"
        value={form.age}
      />

      <button onClick={handleChangeDisplayInfos}>Confirmar</button>
    </form>
  );
}
