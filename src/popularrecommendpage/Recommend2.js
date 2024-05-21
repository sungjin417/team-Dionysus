import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Common from "../Common/Common";
import AxiosApi from "../../../api/AxiosApi";
import ListItem from "../Common/ListItem";
// import Common from "../Common/Common";
// import bg from "./화남.png";
// import AxiosApi from "../../../api/AxiosApi";

// Container 스타일 컴포넌트를 생성합니다.
const Container = styled.div`
  width: 100%; // 너비를 100%로 설정합니다.
  display: flex; // 플렉스 박스로 설정합니다.
  flex-direction: column; // 세로 방향으로 아이템을 배치합니다.
  justify-content: center; // 수직 가운데 정렬합니다.
  align-items: center; // 수평 가운데 정렬합니다.
  margin: 0 auto; // 좌우 여백을 자동으로 설정합니다.
  padding: 20px; // 안쪽 여백을 설정합니다.
  position: absolute;

  h1 {
    width: 280px; // 너비를 300px로 설정합니다.
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray; // 배경색을 회색으로 설정합니다.
    font-size: 21px; // 글꼴 크기를 설정합니다.
    margin: auto; // 가운데 정렬합니다.
    margin-bottom: 20px; // 하단 여백을 설정합니다.
    border-radius: 20px; // 테두리의 둥근 정도를 설정합니다.
    background-color: rgba(0, 0, 0, 0.4);
    color: #ffffff;
  }
`;

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
    height: 1000px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 0 0 5% 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  `;
  // List 스타일 컴포넌트를 생성합니다.
const List = styled.div`
width: 900px;
height: 1800px;
`;

const Recommend2 = () => {



    return (
        <Container>
            <ThemeItem>
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
                        <List>
                            <ListItem category={"맥주"} />
                        </List>

                    </RecommendIconDiv>
                </Wrapper>
            </ThemeItem>

        </Container>
    );
};

export default Recommend2;