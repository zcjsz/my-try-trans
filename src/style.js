import styled, { createGlobalStyle } from 'styled-components';

export const Globalstyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  
  body {
    background: #fff;
    color: #2a2a2a;
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    line-height: 1.5;
  }
  
  ol, ul {
    margin: 0;
    padding: 0;
  }
  
  li {
    list-style-type: none;
  }
  
`;

export const Container = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  padding: 1rem 0.5rem;
`;

export const Title = styled.h3`
  margin-top: 0;
`;

export const StyledBoard = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
`;

export const StyledItem = styled.li`
  flex: 0 0 300px;
  padding: 0.5rem;
`;

export const StyledCard = styled.div`
  border: 1px solid #dadada;
  display: block;
  flex: 0 1 300px;
  padding: 0.5rem;
`;

export const Button = styled.button`
  margin: 0 5px;
`;