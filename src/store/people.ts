import {makeAutoObservable} from 'mobx';
import { getCardPeople, getPeople } from "../apiPeople/getPeople";
import { IDropDownItem, IPeople } from "../types/people";
import { colorEyes } from "../pages/charactersPage/constants";

class People {
    page = 0;
    countPage = 0;
    currentPeople?: IPeople;
    searchValue = "";
    peoples: IPeople[] = [];

    colorFilter: IDropDownItem = colorEyes[0];

    constructor() {
        makeAutoObservable(this);
    }

    setColorFilter = (item: IDropDownItem) => {
        this.colorFilter = item;
    };

    setSearchValue = (searchValue: string) => {
        this.searchValue = searchValue;
    };

    setPeoples = async (searchValue: string) => {
        try {
            const { data } = await getPeople(this.page, searchValue);
            this.peoples = data.results;
            this.countPage = Math.ceil(data.count/10)
            console.log(this.countPage)
        } catch (error) {
            console.log(error);
        }
    };

    setPage = (page:number) => {
        this.page=page;
    }


    setCurrentPeople = async (id: string | number) => {
        try {
            const { data } = await getCardPeople(id);
            this.currentPeople = data;
        } catch (error) {
            console.log(error);
        }
    };

    remuveCurrentPeople = () => {
        this.currentPeople = undefined;
    };
}

export default new People();