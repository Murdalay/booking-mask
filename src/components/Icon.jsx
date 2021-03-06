import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';
import { utils } from 'styled-minimal';

const IconWrapper = styled(SVG)`
  display: inline-block;
  line-height: 0;

  svg {
    height: auto;
    max-height: 100%;
    width: ${({ width }) => utils.px(width)};
  }
`;

const Icon = ({ name, color, ...rest }) => (
  <IconWrapper
    style={{ fill: color }}
    src={`${process.env.PUBLIC_URL}/media/icons/${name}.svg`}
    {...rest}
  />
);

Icon.propTypes = {
  name: PropTypes.oneOf([
    'bell-o',
    'bell',
    'bolt',
    'check-circle-o',
    'check-circle',
    'check',
    'dot-circle-o',
    'exclamation-circle',
    'question-circle-o',
    'question-circle',
    'sign-in',
    'sign-out',
    'times-circle-o',
    'times-circle',
    'plane',
    'times',
    'right-arrow',
    'two-way-arrows',
  ]).isRequired,
  width: PropTypes.number,
  color: PropTypes.string,
};

Icon.defaultProps = {
  width: 20,
};

export default Icon;
