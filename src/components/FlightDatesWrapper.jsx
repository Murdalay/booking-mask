import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const getStyled = ({ sizes }) =>
  styled.div`
    height: ${sizes.controlHeight}px;
    min-width: ${sizes.inputMinWidth + 160}px;
    width: 100%;
    display: table-cell;
    bacground-color: white;
    input {
      height: 100%;
      font-size: 1.5rem;
      padding-left: 10px;
    }
    .DateRangePicker {
      height: 100%;
      width: 100%;
      & > div {
        height: 100%;
        width: 100%;
      }
    }
    .DateInput {
      height: 100%;
      width: 50%;
      &:last-child {
        input {
          padding-left: 35px;
        }
      }
    }
    .DateRangePickerInput_arrow {
      position: absolute;
      margin-left: -23px;
      top: 25%;
    }
    .DateRangePickerInput {
      height: 100%;
      width: 100%;
    }
  `;

const FlightDatesWrapper = ({ theme, ...props }) => {
  const Styled = getStyled(theme);

  return <Styled {...props} />;
};

FlightDatesWrapper.propTypes = {
  theme: PropTypes.object,
};

export default React.memo(FlightDatesWrapper);
