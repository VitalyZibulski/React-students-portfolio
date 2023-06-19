import React from 'react';
import styled from "styled-components";
import photo from  '../../../assets/images/portfolio.jpg';

import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <span>Hi There</span>
                    <Name>I am Fullstack Developer</Name>
                    <MainTitle>A Fullstack Developer</MainTitle>
                </div>

                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: rgba(236,197,156,0.94);
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const MainTitle = styled.h1`
  
`

const Name = styled.h2`
  
`


