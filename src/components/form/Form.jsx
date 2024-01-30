import { useState } from "react";
import Input from "../input/Input";
import style from "./form.module.css";

function Form({ addAlbum }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  function handleSubmit(ev) {
    ev.preventDefault();

    addAlbum({ title, cover });
    setTitle("");
    setCover("");
  }

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <Input id="title" label="título" value={title} setValue={setTitle} />
      <Input id="cover" label="capa" value={cover} setValue={setCover} />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default Form;
