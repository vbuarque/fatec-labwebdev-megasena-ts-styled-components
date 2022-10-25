import { useEffect } from "react";
import { Cabecalho } from "../components/Cabecalho";
import services from "../services";
import { Props } from "../types";

export default function Principal() {
  useEffect(function () {
    (async function () {
      const numero = Math.floor(Math.random() * 2533);
      const concurso: Props = await services.get(numero);
      console.log(concurso);
    })();
  }, []);

  return (
    <div>
      <Cabecalho />
    </div>
  );
}
