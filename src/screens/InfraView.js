import React from 'react';
import PropTypes from 'prop-types';
import Infra from '../components/card-components/Infra';

const InfraView = ({ align, center, justify, name, pad, path, children }) => (
    <React.Fragment>
        <Infra/>
    </React.Fragment>
);

InfraView.propTypes = {
    align: PropTypes.string,
    details: PropTypes.string,
    label: PropTypes.string.isRequired,
    level: PropTypes.number,
    size: PropTypes.oneOf(['xlarge', 'large']),
    summary: PropTypes.node,
  };
  
  InfraView.defaultProps = {
    align: undefined,
    details: undefined,
    level: 1,
    size: 'large',
    summary: undefined,
  };

export default InfraView;