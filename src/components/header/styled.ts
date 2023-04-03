import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 16px;
  display: flex;
  height: 93px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;

  a {
    padding-bottom: 10px;
    color: #f6f7f9;
    font-weight: 400;
    font-size: 25px;
    line-height: 29px;

    &.active {
      border-bottom: 3px solid #f6f7f9;
    }
  }
`;

export const Logo = styled.img`
  width: 150px;
  height: 90px;
`;
