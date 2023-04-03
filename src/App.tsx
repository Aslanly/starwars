import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import styled, {GlobalStyleComponent} from "styled-components";
import { Header } from "./components/header/header";
import WelcomPage from "./pages/welcomPage/welcomPage";
import People from "./store/people";
import CharacterPage from "./pages/charactersPage/charactersPage";

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #1f2a63 0%, #17002f 100%);
`;

const App: React.FC = () => {
    return (
        <MainContainer>
            <Header />
            <Routes>
                <Route path="/" element={<WelcomPage />} />
                <Route path="/characters/*" element={<CharacterPage />} />
                <Route path='*' element={<Navigate to='/'/>}/>
            </Routes>
        </MainContainer>
    );
};
export default observer(App);
