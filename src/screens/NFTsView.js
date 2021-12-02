import React from 'react';
import PropTypes from 'prop-types';
import NFTs from '../components/card-components/NFTs';

const NFTsView = ({ align, center, justify, name, pad, path, children }) => (
    <React.Fragment>
        <NFTs/>
    </React.Fragment>
);

NFTsView.propTypes = {
    align: PropTypes.string,
    details: PropTypes.string,
    label: PropTypes.string.isRequired,
    level: PropTypes.number,
    size: PropTypes.oneOf(['xlarge', 'large']),
    summary: PropTypes.node,
  };
  
  NFTsView.defaultProps = {
    align: undefined,
    details: undefined,
    level: 1,
    size: 'large',
    summary: undefined,
  };

export default NFTsView;