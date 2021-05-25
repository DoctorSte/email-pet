import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 4em;
  background: #faf3f3;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  margin: 0px;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  color: blue;
  margin-bottom: 0px;
`;

export const Text = styled.p`
  font-size: 1.2em;
  color: royalblue;
`;

export const Button = styled.button`
  width: auto;
  color: palevioletred;
  background: white;
  font-size: 1em;
  padding: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.1s ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    color: blue;
    background: white;
    border: 2px solid blue;
  }
  &:active {
    transform: translateY(2px);
    opacity: 0.8;
  }
`;

export const StyledButton = styled(Button)`
  color: royalblue;
  border: 2px royalblue solid;
`;

export const FlexWrap = styled.section`
  display: flex;
  flex-direction: row;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Spacer = styled.div`
  min-height: 2em;
`;

export const Image = styled.img`
  max-width: 100px;
  &:hover {
    opacity: 0.8;
    transition: all 0.1s;
  }
`;
