import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeaderBtn = styled.button`
  box-shadow: 0 0 0 1px red inset;
  font-size: 14px;
  width: 49px;
  height: 20px;
  line-height: 36px;
  `;

const HeaderBtn = ({ val, onClick }) => {
  return (
    <StyledHeaderBtn onClick={onClick}>
      {val}
    </StyledHeaderBtn>
  );
}

HeaderBtn.propTypes = {
  val: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default HeaderBtn;
