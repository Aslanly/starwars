import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import People from "../../store/people";
import * as S from "./styled";
import { observer } from "mobx-react-lite";

const Modal: React.FC = () => {
    const { currentPeople, setCurrentPeople, remuveCurrentPeople } = People;
    const params = useParams();
    const navigate = useNavigate();
    const hendlerCloseModal = () => {
        navigate("../");
    };

    useEffect(() => {
        if (params.id) setCurrentPeople(params.id);
        return () => {
            remuveCurrentPeople();
        };
    }, []);

    return (
        <S.Modal onClick={() => hendlerCloseModal()}>
            {currentPeople && (
                <S.Modal_content onClick={(e) => e.stopPropagation()}>
                    <img src=""/>
                    <S.Name>Name: {currentPeople.name}</S.Name>
                    <S.Content_items>
                        <div>Mass: {currentPeople.mass}</div>
                        <div>Height: {currentPeople.height}</div>
                    </S.Content_items>
                </S.Modal_content>
            )}
        </S.Modal>
    );
};

export default observer(Modal);
