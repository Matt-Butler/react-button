import React from 'react';
import styles from './index';
import classNames from 'classnames';

const TerraButton = ({ children, onClick, tStyle, tType = {} }) => (
  <button className={classNames('terra-Button', 'terra-Button--'.concat(tType).concat(tStyle))} onClick={onClick}>
    {children}
  </button>
);

TerraButton.propTypes = {
  children: React.PropTypes.string.isRequired,
  tStyle: React.PropTypes.oneOf(['default', 'primary', 'secondary', 'positive', 'negative', 'warning', 'info']),
  tType: React.PropTypes.oneOf(['', 'outline', 'link']),
  onClick: React.PropTypes.func,
};

TerraButton.defaultProps = {
  tStyle: 'default',
  tType: ''
};


export default TerraButton;
