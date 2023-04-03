import { FC } from "react";
import * as S from "./styled";
import yoda from '../../img/yoda.png';

const WelcomPage: FC = () => {
    return (
        <S.WPageContainer>
            <S.LeftBlock>
                <S.FirstElement>
                    <S.Span>Find</S.Span> all your favorite{" "}
                    <div>
                        <S.Span>character</S.Span>
                    </div>
                </S.FirstElement>
                <h2>
                    You can find out all the <div>information about your favorite </div>{" "}
                    characters
                </h2>
                <S.Btn>See more...</S.Btn>
            </S.LeftBlock>
            <img src={yoda} alt='yoda'/>
        </S.WPageContainer>
    );
};

export default WelcomPage;
