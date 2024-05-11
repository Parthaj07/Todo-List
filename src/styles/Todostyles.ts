import styled from 'styled-components';

export const TodoListContainer = styled.div`

    background-color:white;
    max-width: 355px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif; 
    margin-top:20px;
`;

export const TodoHeading = styled.h1`

    margin-left:4px;
    font-weight:bold;
    font-size: 22px; 
    margin-bottom: 15px; 
    
`;


export const StyledInput = styled.input`

    padding: 12px;
    margin-right:5px;
    border: 1px solid #ddd;
    border-radius: 9px;
    font-size: 16px; 
    outline: none; 
    transition: border-color 0.2s ease-in-out; 
    background-color:#f0f1f1;

    &:focus {
     border-color: #4caf50;
    }


`;


