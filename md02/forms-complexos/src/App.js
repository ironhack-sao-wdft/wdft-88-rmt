import { useState } from "react";

import axios from "axios";

function App() {
  const [form, setForm] = useState({
    name: "",
    age: 18,
    jobOption: "back-end",
    jobModal: "remoto",
    langs: [],
    isAceptedTerms: false,
  });

  const obj = { name: "Brasil", jobOption: ["Remoto", "Presencial"] };

  const obj2 = { name: "EUA", jobOption: ["Remoto"] };

  const countrys = [obj, obj2];

  const [lang, setLang] = useState("");

  console.log(form);

  function handleChange(e) {
    if (e.target.name === "jobOption") {
      setForm({ ...form, jobOption: e.target.value });
      return;
    }

    if (e.target.name === "isAceptedTerms") {
      setForm({ ...form, isAceptedTerms: e.target.checked });
      return;
    }

    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      axios.post("https://ironrest.cyclic.app/forms-complexos", form);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>Form de inscrição</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-name">Nome: </label>
        <input
          type="text"
          id="input-name"
          name="name"
          onChange={handleChange}
        />

        <br />

        <label htmlFor="input-age">Idade: </label>
        <input
          type="number"
          id="input-age"
          name="age"
          onChange={handleChange}
          value={form.age}
        />

        <br />

        <label htmlFor="input-jobOption">
          Qual vaga você gostaria de se candidatar?{" "}
        </label>

        <select
          id="input-jobOption"
          name="jobOption"
          onChange={handleChange}
          defaultValue={form.jobOption}
        >
          <option value="front-end">Front-end Dev.</option>
          <option value="back-end">Back-end Dev.</option>
        </select>

        <br />

        <label>Qual modalidade de trabalho vocês prefere? </label>

        <label htmlFor="input-modal-remoto">Remoto</label>
        <input
          id="input-modal-remoto"
          type="radio"
          name="jobModal"
          value="remoto"
          onChange={handleChange}
          checked={form.jobModal === "remoto"}
        />

        <label htmlFor="input-modal-presencial">Presencial</label>
        <input
          type="radio"
          name="jobModal"
          value="presencial"
          id="input-modal-presencial"
          onChange={handleChange}
          checked={form.jobModal === "presencial"}
        />

        <br />

        <label htmlFor="input-langs">
          Quais linguagens você tem conhecimento?{" "}
        </label>

        <input
          type="text"
          htmlFor="input-langs"
          name="langs"
          onChange={(e) => {
            setLang(e.target.value);
          }}
        />

        <button
          type="button"
          onClick={() => {
            setForm({ ...form, langs: [...form.langs, lang] });
          }}
        >
          Adicionar
        </button>

        {form.langs.map((currentLang) => (
          <>
            <strong>{currentLang}</strong>
            <button
              type="button"
              onClick={() => {
                setForm({ ...form, langs: [...lang] });
              }}
            >
              Remover
            </button>
          </>
        ))}

        <br />

        <label htmlFor="input-confirm">Aceito os termos e condições</label>
        <input
          type="checkbox"
          id="input-confirm"
          required
          name="isAceptedTerms"
          onChange={handleChange}
        />

        <br />

        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default App;
