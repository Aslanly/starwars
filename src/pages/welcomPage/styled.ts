import styled from "styled-components";

export const WPageContainer = styled.div`
  padding: 16px 16px 16px 16px;
  display: flex;
  font-family: "Karla", sans-serif;
  position: relative;
  color: white;
`;

export const LeftBlock = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 130px;
`;

export const FirstElement = styled.p`
  font-size: 72px;
  word-wrap: break-word;
`;

export const Span = styled.span`
  font-weight: 700;
`;

export const Btn = styled.button`
  background-color: #ffc107;
  border-radius: 12px;
  width: 231px;
  height: 66px;
  border: none;
  box-shadow: 0px 15px 1px #ad9724fb;
  &:hover {
    box-shadow: 0px 10px 0px #ad9724fb;
    transform: translate(0em, 0.5em);
  }
  &:active {
    box-shadow: 0px 2px 0px #ad9724fb;
    transform: translate(0em, 1em);
  }
`;

export const RightBlock = styled.div`
  position: relative;
  right: 0px;
  top: 0;
  width: 50%;
`;


