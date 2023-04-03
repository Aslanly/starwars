import React, { ChangeEvent, useEffect } from "react";
import * as S from "./styled";
import People from "../../store/people";
import { observer } from "mobx-react-lite";
import DropDown from "./dropDown";
import { colorEyes } from "./constants";
import Modal from "../../components/modal/modal";
import {Routes, Route, Link, Router} from "react-router-dom";
import { getIdFromURL } from "../../utils/getIdFromURL";
import ReactPaginate from "react-paginate";
import styles from './styled.module.css'
//https://swapi.dev/api/people/?search=r2

const CharacterPage: React.FC = () => {
    const {
        page,
        countPage,
        setPage,
        searchValue,
        setSearchValue,
        peoples,
        setPeoples,
        colorFilter,
        setColorFilter,
    } = People;

    useEffect(() => {
        if (searchValue.trim()) {
            const timer = setTimeout(() => setPeoples(searchValue.trim()), 1000);
            return () => {
                clearTimeout(timer);
            };
        } else {
            setPeoples(searchValue);
        }
    }, [searchValue, page]);

    const hendlerChangeSetSearchValue = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        setSearchValue(event.target.value);
    };

    const handlePageClick = (event:{selected: number}) => {
        setPage(event.selected)
    }

    return (
        <S.Container>
            <S.Text>60 Peoples for you to choose your favorite</S.Text>
            <S.StyledInput
                onChange={hendlerChangeSetSearchValue}
                value={searchValue}
            />
            <DropDown
                activeItem={colorFilter}
                items={colorEyes}
                onChange={setColorFilter}
            />

            <S.CardsList gap={10}>
                {peoples.map(({ name, eye_color, url, mass, height }) => (
                    <Link to={getIdFromURL(url)}>
                        <S.PeopleCard>
                            <div>
                                <S.Name>{name}</S.Name>
                            </div>
                            <S.CardMain>
                                <S.CardTitleBox>
                                    <S.CardTitle>{height}</S.CardTitle>
                                    <div>height</div>
                                </S.CardTitleBox>
                                {mass !== 'unknown' && (
                                    <S.CardTitleBox>
                                        <S.CardTitle>{mass}</S.CardTitle>
                                        <div>mass</div>
                                      </S.CardTitleBox>
                                )
                                }
                            </S.CardMain>
                            <S.CardFooter>
                                <S.EyeColor bg={eye_color}>eye color</S.EyeColor>
                            </S.CardFooter>
                        </S.PeopleCard>
                    </Link>
                ))}
                <Routes>
                    <Route path="/:id" element={<Modal />} />
                </Routes>
            </S.CardsList>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={countPage}
                previousLabel="<"
                renderOnZeroPageCount={null}
                pageClassName={styles.page_item}
                pageLinkClassName={styles.page_link}
                previousClassName="page-item"
                previousLinkClassName={styles.page_link}
                nextClassName="page-item"
                nextLinkClassName={styles.page_link}
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName={styles.pagination}
                activeClassName={styles.active}
            />
        </S.Container>
    );
};

export default observer(CharacterPage);
