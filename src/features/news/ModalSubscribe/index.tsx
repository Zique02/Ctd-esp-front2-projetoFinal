import { ModalSubscribeProps } from "./types";
import * as Styled from "../styled"

export function ModalSubscribe({setModal, close, assinarImage}: ModalSubscribeProps) {
    return (
        <Styled.ContainerModal>
            <Styled.CardModal>
                <Styled.CloseButton onClick={setModal}>
                    <img src={close} alt="close-button" />
                </Styled.CloseButton>
                <Styled.ImageModal src={assinarImage} alt="mr-burns-excelent" />
                <Styled.ContainerTexto>
                    <Styled.TituloModal>Assine a nossa newsletter</Styled.TituloModal>
                    <Styled.DescriptionModal>
                        Assine nossa newsletter e receba novidades de nossos
                        personagens favoritos
                    </Styled.DescriptionModal>
                    <Styled.BotaoAssinar
                        onClick={() =>  
                            setTimeout(() => {
                                alert("Suscripto!");
                                setModal()
                            }, 1000)
                        }
                    >
                        Assinar
                    </Styled.BotaoAssinar>
                </Styled.ContainerTexto>
            </Styled.CardModal>
        </Styled.ContainerModal>
    )
}