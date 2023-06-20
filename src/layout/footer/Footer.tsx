import React from 'react';
import styled from "styled-components";
import Icon from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <Name>Developer</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} iconId={"github"} />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} iconId={"twitter"} />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} iconId={"linked"} />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} iconId={"github"} />
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>All rights reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: aqua;
  min-height: 20vh;
`

const Name = styled.span`

`

const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`

`

const Copyright = styled.small`

`
