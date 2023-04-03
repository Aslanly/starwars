import { FC } from "react";
import { NavLink } from "react-router-dom";
import * as S from "./styled";
import Logo from '../../img/Logo.png';

export const Header: FC = () => {
    const linksList = [
        { path: "/", title: "Home" },
        { path: "/characters", title: "Characters" },
    ];
    return (
        <S.HeaderContainer>
            <S.Logo src={Logo} alt='logo'/>
            <S.NavList>
                {linksList.map(({ path, title }) => (
                    <NavLink to={path}>{title}</NavLink>
                ))}
            </S.NavList>
        </S.HeaderContainer>
    );
};