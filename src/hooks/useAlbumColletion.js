import { useState } from "react";

function useAlbumColletion() {
  const [albuns, setAlbuns] = useState(() => {
    const storeAlbuns = localStorage.getItem("colection-albuns");

    /* Está verificando se no localstorage está vazio,
       se estiver vai começar como um array vazio []*/
    if (!storeAlbuns) return [];

    const albumArray = JSON.parse(storeAlbuns);
    return albumArray;
  });

  function addAlbum({ title, cover }) {
    const id = Math.floor(Math.random() * 1000000);
    // Criando um objeto contendo ID, TITLE e COVER
    const album = { id, title, cover };

    setAlbuns((state) => {
      const newState = [...state, album];
      localStorage.setItem("colection-albuns", JSON.stringify(newState));
      return newState;
    });
  }

  function removeAlbum(id) {
    setAlbuns((state) => {
      const newState = state.filter((item) => item.id !== id);
      localStorage.setItem("colection-albuns", JSON.stringify(newState));
      return newState;
    });
  }

  return { albuns, addAlbum, removeAlbum };
}

export default useAlbumColletion;
