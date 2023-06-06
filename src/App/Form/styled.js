import styled, {css} from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 600px;
    grid-template-rows: 50px repeat(5, 80px);
    margin: 30px;
    padding: 10px;
    background-color: rgba(108, 189, 95, 0.874);
    height: 440px;
    border: 5px solid  #1a5f09c9;
    border-radius: 20px;

    @media(max-width: 767px) {
        grid-template-rows: 100px repeat(4, 150px);
        height: 750px;
        font-size: 25px;
}
`;

export const Header = styled.header`
    display: grid;
    grid-template-rows: 40px;
    align-items: center;
    justify-content: center;
`;

export const Div = styled.div`
    display: grid;
    grid-template-rows: 40px 40px;
    align-items: center;
    justify-content: center;

    @media(max-width: 767px) {
    
        grid-template-rows: 50px 50px;
        grid-gap: 20px;
    
    };
`;

export const Paragraph = styled.p`
    display: flex;
    justify-content: center;
    margin: 0%;
    text-decoration-line: underline;
    font-size: 20px;

    @media(max-width: 767px) {
        font-size: 35px;
    }

    ${({choose}) => choose && css`
        align-self: flex-end;
    `}
    
    ${({chosen}) => chosen && css`
        text-decoration-line: none;
    `}
`;

export const Select = styled.select`
    min-height: 40px;
    min-width: 200px;
    cursor: pointer;
    text-align: center;

    @media(max-width: 767px) {
        min-height: 65px;
    };
`;

export const Input = styled.input`
    min-height: 40px;
    min-width: 300px;
    border: none;
    cursor: pointer; 

    @media(max-width: 767px) {
        min-height: 65px;
    };

    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`;

export const Button = styled.button`
    justify-self: center;
    width: 150px;
    height: 30px;
    border: none;
    background-color: #1e5510c9;
    cursor: pointer;
    transition: 300ms;

    @media(max-width: 767px) {
        height: 65px;
        width: 200px;
    };

    &:hover {
    transform: scale(1.1);
    background-color: #114803c9;
    };

    &:active {
    transform: scale(1);
    background-color: #1148038a;
    };
`

