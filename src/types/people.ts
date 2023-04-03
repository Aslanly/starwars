export interface IPeople {
    birth_year: string;
    created: Date;
    edited: Date;
    eye_color: string;
    films: string[];
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string;
    mass: number | string;
    name: string;
    skin_color: string;
    species: [];
    starships: string[];
    url: string;
    vehicles: string[];
}

export interface IPeopleResponse {
    count: number;
    next: string;
    previous: string;
    results: IPeople[];
}
export interface IDropDownItem {
    label: string;
    value: string | number;
}
