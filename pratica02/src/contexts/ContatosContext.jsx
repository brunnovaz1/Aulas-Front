import { createContext } from "react";
import { useState } from "react";
import ContatosContext from "../contexts"

const ContatosContext = createContext({
  meusContatos: [],
  incluirContato: () => {},
});

const ContatosContextProvider = (props) => {
  const [contatos, setContatos] = useState([]);
  function incluir(contato) {
    setContatos([
      ...contatos,
      contato,
    ]); /* copia o array e acresceta um valor */
  }

  const contexto = {
    meusContatos: contatos,
    incluirContato: incluir,
  };

  return <ContatosContext.Provider value={contexto}>
    {props.children}
  </ContatosContext.Provider>;
};

export function ContatosContextProvider()

export default ContatosContext