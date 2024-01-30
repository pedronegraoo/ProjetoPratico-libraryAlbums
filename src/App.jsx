import style from "./style/app.module.css";
import Album from "./components/card/Album";
import Form from "./components/form/Form";
import useAlbumColletion from "./hooks/useAlbumColletion";

// LINKS ALBUNS
// https://i.ytimg.com/vi/BX6vH4vW0Tk/maxresdefault.jpg
// https://i.scdn.co/image/ab67616d0000b2731f8aac3f62bcb555def8024d
// https://i.scdn.co/image/ab67616d0000b2737b2dba12da4b7f8e18cba810

function App() {
  const { albuns, addAlbum, removeAlbum } = useAlbumColletion();

  return (
    <div className={style.app}>
      <h1>Biblioteca de Álbuns</h1>

      <Form addAlbum={addAlbum} />

      {/* Renderizar na tela */}
      <div className={style.renderGames}>
        {albuns.length > 0 ? (
          albuns.map((album) => (
            <Album
              key={album.id}
              title={album.title}
              cover={album.cover}
              onRemove={() => removeAlbum(album.id)}
            />
          ))
        ) : (
          <h2>Lista vazia, tente adicionar álbuns.</h2>
        )}
      </div>
    </div>
  );
}

export default App;
