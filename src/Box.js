import styled from "styled-components";
import React, { useEffect, useState } from "react";
// import Common from "../Common/Common";
// import bg from "./화남.png";
// import AxiosApi from "../../../api/AxiosApi";



const ThemeItem = styled.div`
  width: 855px;
  height: 2000px;
  background-color: ${({ bgColor }) =>
        bgColor}; // isBig에 따라 배경색을 설정합니다.
  `;

// 테마 아이템 내용을 감싸는 Wrapper 스타일 컴포넌트를 생성합니다.
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center; // 수직 가운데 정렬합니다.
  align-items: center; // 수평 가운데 정렬합니다.
`;

const ItemTitle = styled.div`
  width: 100%;
  height: 148px;
  background-color: rgba(112, 101, 19, 1);
  border-radius: 10% 10% 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const IconBox = styled.div`
  width: 327px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  `;
const IconImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  `;
  const RecommendIconDiv = styled.div`
    width: 100%;
    height: 2000px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 0 0 5% 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  `;

const Recommend2 = () => {
    

    return (
        <ThemeItem
        > 
            <Wrapper>
                <ItemTitle>
                    <IconBox>
                        <IconImg
                            src={
                                process.env.PUBLIC_URL + "/recommendationicon/행복.png"
                            }
                        />
                    </IconBox>
                </ItemTitle>
                <RecommendIconDiv>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                    <div>리스트가 있어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                </RecommendIconDiv>
            </Wrapper>
        </ThemeItem>
    );
};

export default Recommend2;