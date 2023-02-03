import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledList = styled.li`
  box-shadow: 0 0 0 1px green inset;
  float: left;
  width: 60px;
  height: 20px;
  span {
    font-size: 15px;
  }
`;

const Menutext = ({ text }) => {
  return (
    <StyledList>
      <span>{text}</span>
    </StyledList>
  );
}

Menutext.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Menutext;
