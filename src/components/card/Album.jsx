import style from "./album.module.css";

function Album({ title, cover, onRemove }) {
  return (
    <div className={style.contentRender}>
      <img src={cover} alt={`Album ${title}`} />
      <div>
        <h2>{title}</h2>
        <button onClick={onRemove}>Remover</button>
      </div>
    </div>
  );
}

export default Album;
