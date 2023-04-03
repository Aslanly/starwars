import axios, { AxiosResponse } from "axios";
import { IPeopleResponse } from "../types/people";

export const getPeople = (
    page = 0,
    searchValue = ""
): Promise<AxiosResponse<IPeopleResponse>> => {
    return axios.get(`https://swapi.dev/api/people?page=${page + 1}&search=${searchValue}`, {});
};

export const getCardPeople = (id:string|number) => {
    return axios.get(`https://swapi.dev/api/people/${id}`)
}