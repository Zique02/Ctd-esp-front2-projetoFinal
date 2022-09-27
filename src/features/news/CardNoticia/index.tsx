import * as Styled from ".././styled"
import { CardNoticiaProps } from "./types"

export function CardNoticia({ image, title, date, descriptionCurto, setModal }: CardNoticiaProps) {
    return (
        <Styled.CardNoticia>
            <Styled.ImageCardNoticia src={image} />
            <Styled.TituloCardNoticia>{title}</Styled.TituloCardNoticia>
            <Styled.DateCardNoticia>{date}</Styled.DateCardNoticia>
            <Styled.DescriptionCardNoticia>
                {descriptionCurto}
            </Styled.DescriptionCardNoticia>
            <Styled.BotaoLeitura onClick={setModal}>Ver mais</Styled.BotaoLeitura>
        </Styled.CardNoticia>
    )
}