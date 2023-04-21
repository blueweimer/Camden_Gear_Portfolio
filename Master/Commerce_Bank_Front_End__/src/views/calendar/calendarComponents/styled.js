import styled from "styled-components";

export const Wrapper = styled.div`
    width: auto;
    height: 50vh;
    margin-left: 0px;
    padding-left: 5vw;
    padding-right: 5vw;
`;

export const CalendarHead = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 24px;
`;

export const SevenColGrid = styled.div`
    width: 100%;
    display:grid;
    grid-template-columns: repeat(7,1fr);
    font-size: 20px;
`;

export const HeadDay = styled.span`
    text-align: center;
    font-size: 1.2rem;
    padding-bottom: 10px;
`;

export const ClenderBody = styled.div `
    height: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(${({fourCol}) => fourCol ? 4 : 5}, 1fr);
    font-size: 1.2rem;
    text-align: right;
`;

export const StyledDay = styled.span`
    {/*border: .01rem solid white;*/}
    ${({active}) => active && `background: white; color: #006f51;`};
`;

export const StyledEvent = styled.span`
    display: grid;
    text-align: left;
    background: white;
    color: #006f51;
    padding: 2px;
    border-radius: 5px;
    font-size: 1.0rem;
    max-height: 20px;
    max-width: auto;
    transition: max-height 0.5s ease-out;
    overflow: hidden;
    &:hover {
        width: auto;
        position: relative;
        max-height: 500px;
        transition: max-height 0.5s ease-in;

      }
`;

export const OverlayCont = styled.span`
    position: fixed;
    opacity: 30%;
    height: 200%;
    disable: true;

`;

export const OverlayImg = styled.span`
    position: absolute;
    opacity: 40%;

`;





