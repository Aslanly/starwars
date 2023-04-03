import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  padding: 15px;
  width: 100%;
  min-height: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  flex-direction: column;
`;

export const Text = styled.h2`
  margin-top: 20px;
  font-size: 35px;
`;

export const StyledInput = styled.input`
  width: 800px;
  height: 20px;
  border: 1mm solid #f0f0f0;
  border-radius: 20px;
  padding: 0px 10px 0px 10px;
  box-shadow: 5px 5px 5px #dcdcdc;
  outline: 0;
  outline-offset: 0;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const PeopleCard = styled.div`
  gap: 10px;
  color: black;
  display: flex;
  padding: 16px;
  width: 351.9px;
  min-height: 50%;
  height: 160.86px;
  border-radius: 8px;
  position: relative;
  background: #f0f0f0;
  flex-direction: column;
  border: 2px solid #dcdcdc;
  box-shadow: 5px 5px 5px #dcdcdc;
  :hover {
    transform: translate(-5px, -5px);
    box-shadow: 10px 10px 5px #dcdcdc;
  }
  :active {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 5px #dcdcdc;
  }
`;

export const Name = styled.div`
  font-weight: 700;
`;

export const CardMain = styled.div`
  gap: 10px;
  align-items: center;
  flex: 1 1 auto;
  display: flex;
`;

export const CardTitleBox = styled.div`
  text-align: center;
`;

export const CardTitle = styled.div`
  border: 1mm solid black;
  border-radius: 50%;
  padding: 10px 10px 10px 10px;
`;

export const CardFooter = styled.div`
  width: 100%;
`;

export const CardsList = styled.div<{ gap?: number }>`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: ${({ gap }) => (gap ? gap : 10)}px;
`;

export const EyeColor = styled.div<{ bg: string }>`
  background-color: ${({ bg }) => bg};
  border-radius: 12px;
  width: 80px;
  height: 20px;
  text-align: center;
  color: white;
`;

export const DropDownContainer = styled.div`
  margin-bottom: 15px;
`;

export const DropDownBtn = styled.div`
  box-shadow: 5px 5px 5px #dcdcdc;
  border-radius: 10px;
  padding: 5px;
  width: 300px;
  background-color: #f0f0f0;
`;

export const DropDownContent = styled.div`
  border-radius: 10px;
  position: absolute;
  box-shadow: 5px 5px 5px #dcdcdc;
  width: 300px;
  padding: 5px;
  background: #fff;
  z-index: 100;
`;

export const DropDownItem = styled.div`
  cursor: pointer;
  :hover {
    background: gray;
  }
`;
