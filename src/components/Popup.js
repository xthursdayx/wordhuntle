import styled from "styled-components";

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 30;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledPopup = styled.div`
    background-color: ${props => props.theme.background};
    border-radius: 0.375rem;
    height: calc(100% - 3rem);
    width: calc(min(60vh, 100%) - 3rem);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 1rem;
`

const CloseButton = styled.button`
    background-color: transparent;
    border: none;
    height: 1rem;
    width: 1rem;
    font-size: 1.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const Content = styled.div`
    width: 100%;
    flex: 1;
    overflow: auto;
`

const Popup = ({children, close}) => {
    return (
        <Background>
            <StyledPopup>
                <CloseButton onClick={close}>
                    &times;
                </CloseButton>
                <Content>
                    {children}
                </Content>
            </StyledPopup>
        </Background>
    );
}

export default Popup;