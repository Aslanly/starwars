import { useState } from "react";
import React from "react";
import * as S from "./styled";
import { IDropDownItem } from "../../types/people";

interface IDropDownProps {
    activeItem: IDropDownItem;
    items: IDropDownItem[];
    onChange: (item: IDropDownItem) => void;
}

const DropDown: React.FC<IDropDownProps> = ({
                                                activeItem,
                                                items,
                                                onChange,
                                            }) => {
    const [isActive, setIsActive] = useState(false);

    const handlerChangeItem = (item: IDropDownItem) => {
        setIsActive(false);
        onChange(item);
    };

    const hendlerToggleDropDown = () => {
        setIsActive(!isActive);
    };
    return (
        <S.DropDownContainer>
            <S.DropDownBtn onClick={hendlerToggleDropDown}>
                {activeItem.label}
            </S.DropDownBtn>
            {isActive && (
                <S.DropDownContent>
                    {items.map((item) => (
                        <S.DropDownItem onClick={() => handlerChangeItem(item)}>
                            {item.label}
                        </S.DropDownItem>
                    ))}
                </S.DropDownContent>
            )}
        </S.DropDownContainer>
    );
};

export default DropDown;
