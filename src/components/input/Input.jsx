function Input({ id, label, value, setValue }) {
  return (
    <div>
      <label htmlFor={id}>{label}: </label>
      <input
        type="text"
        name={id}
        id={id}
        value={value}
        onChange={(valor) => setValue(valor.target.value)}
      />
    </div>
  );
}

export default Input;
