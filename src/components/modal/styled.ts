import styled from "styled-components";

export const Modal = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0,0,0,0.4);
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Modal_content = styled.div`
  background-color: #17002f;
  padding: 20px;
  border-radius: 12px;
  width: 300px;
  height: 250px;
`;

export const Name = styled.div`
  margin-bottom: 10px;
  color: white;
  font-weight: 700;
  font-size: 36px;
`;

export const Content_items = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 15px;
`;