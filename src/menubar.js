import React from 'react';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import Menutext from './components/menutext';

const StyledNav = styled.div`
  box-shadow: 0 0 0 1px black inset;
  height: 64px;
`;

const StyledIcon = styled.div`
  height: 25px;
  width: 25px;
  float: left;
`;

const StyledDiv = styled.div`
  box-shadow: 0 0 0 1px yellow inset;
  height: 30px;
  width: 250px;
  margin: 17px 0px;
  float: right;
`;

const StyledSearch = styled.div`
  box-shadow: 0 0 0 1px pink inset;
  height: 30px;
  width: 200px;
  float: left;
`;

const StyledUl = styled.ul`
  height: 20px;
  margin: 22px 0px;
  width: 400px;
  float: left;
`;

const Menubar = () => {
  return (
    <StyledNav>
      <StyledUl>
        <Menutext text="공지사항" />
        <Menutext text="대여" />
        <Menutext text="시간표" />
        <Menutext text="분실물" />
        <Menutext text="동아리" />
        <Menutext text="중고장터" />
      </StyledUl>

      <StyledDiv>
        <StyledSearch>
          <StyledIcon><FontAwesomeIcon icon={faMagnifyingGlass} /></StyledIcon>
          <input placeholder="대충 검색하는 인풋" />
        </StyledSearch>
        <StyledIcon><FontAwesomeIcon icon={faBars} /></StyledIcon>
      </StyledDiv>
    </StyledNav>
  );
}

export default Menubar;
