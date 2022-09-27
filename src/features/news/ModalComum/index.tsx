import * as Styled from ".././styled"
import { ModalProps } from "./types"

export function Modal({ setModal, close, image, title, description }: ModalProps) {
    return (
        <Styled.ContainerModal>
            <Styled.CardModal>
                <Styled.CloseButton onClick={setModal}>
                    <img src={close} alt="close-button" />
                </Styled.CloseButton>
                <Styled.ImageModal src={image} alt="news-image" />
                <Styled.ContainerTexto>
                    <Styled.TituloModal>{title}</Styled.TituloModal>
                    <Styled.DescriptionModal>{description}</Styled.DescriptionModal>
                </Styled.ContainerTexto>
            </Styled.CardModal>
        </Styled.ContainerModal>
    )
}