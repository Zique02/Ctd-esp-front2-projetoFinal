import { useState } from "react";
import { NomesSimpsons, INFO_SIMPSONS } from "./constants";
import * as Styled from './styled'

const Bio = () => {
  const [bioActive, setBioActive] = useState(INFO_SIMPSONS[NomesSimpsons.BART]);

  const onClick: (nome: NomesSimpsons) => void = (nome) =>
    setBioActive(INFO_SIMPSONS[nome]);

  const criarBotoes = () => {

    return Object.keys(INFO_SIMPSONS).map((nome: string) => (

      <Styled.BioButton
        key={nome as string}
        onClick={() => onClick(nome as NomesSimpsons)}
        isActive={
          bioActive.id === nome
            ? true
            : false
        }
      >
        {nome}
      </Styled.BioButton>
    ));
  };

  return (
    <Styled.BioContainer>
      <Styled.ContainerBotoes>{criarBotoes()}</Styled.ContainerBotoes>
      <div>

        <div>
          <Styled.BioImage
            src={bioActive.image}
            alt={bioActive.nome}            
          />
        </div>

        <div>
          <Styled.BioNome>{bioActive.nome}</Styled.BioNome>
          <Styled.BioDescription>{bioActive.description}</Styled.BioDescription>
        </div>

      </div>
    </Styled.BioContainer>
    
  );
};

export default Bio;
