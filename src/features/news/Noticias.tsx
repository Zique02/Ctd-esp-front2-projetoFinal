import { useEffect, useState } from "react";

import { AssinarImage, CloseButton as Close } from "../../assets";
import { obterNoticias } from "./fakeRest";
import { formatTitle, formatTime } from "./format";
import { CardNoticia } from "./CardNews";
import { Modal } from "./Modal";
import { ModalSubscribe } from "./ModalSubscribe";

import { INoticiasNormalizadas } from "./types";
import * as Styled from "./styled"

const Noticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  const obterInformacoes = async () => {
    const resposta = await obterNoticias();

    const data = resposta.map((noticia) => {

      return {
        id: noticia.id,
        titulo: formatTitle(noticia.titulo),
        description: noticia.description,
        date: `Faz ${formatTime(noticia.date)} minutos`,
        premium: noticia.premium,
        image: noticia.image,
        descriptionCurto: noticia.description.substring(0, 100),
      };
    });

    setNoticias(data);
  };

  useEffect(() => {
    obterInformacoes();
  }, []);

  return (
    <Styled.ContainerNoticias>
      <Styled.TituloNoticias>Noticias dos Simpsons</Styled.TituloNoticias>
      <Styled.ListaNoticias>
        {noticias.map((noticia) => (
          <CardNoticia
            key={noticia.id}
            image={noticia.image}
            title={noticia.titulo}
            date={noticia.date}
            descriptionCurto={noticia.descriptionCurto}
            setModal={() => setModal(noticia)}
          />
        ))}
        {modal ? (
          modal.premium ? (
            <ModalSubscribe
              setModal={() => setModal(null)}
              close={Close}
              assinarImage={AssinarImage}
            />
          ) : (
            <Modal
              setModal={() => setModal(null)}
              close={Close}
              image={modal.image}
              title={modal.titulo}
              description={modal.description}
            />
          )
        ) : null}
      </Styled.ListaNoticias>
    </Styled.ContainerNoticias>
  );
};

export default Noticias;
