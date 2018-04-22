import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Framed from 'src/templates/shared/Framed';
import { Container, SmallBrand } from 'src/templates/shared';
import { BlockBackground, Block, BlockBlurb } from 'src/templates/shared/Block';

const BlockLead = styled.h2`
  text-align: center;
`;

const Caption = styled.h5`
  text-align: center;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  opacity: 0.7;
`;

const WorkBlock = ({
  color,
  smallBrand,
  blockLead,
  blockBlurb,
  caption,
  src,
  alt,
}) => (
  <BlockBackground backgroundColor={color}>
    <Block>
      <Container>
        {smallBrand && <SmallBrand src={smallBrand} />}
        <BlockLead>{blockLead}</BlockLead>
        <BlockBlurb color="initial">{blockBlurb}</BlockBlurb>
      </Container>
    </Block>
    <Caption>{caption}</Caption>
    <Framed src={src} alt={alt} />
  </BlockBackground>
);

WorkBlock.propTypes = {
  color: PropTypes.string,
  smallBrand: PropTypes.string,
  blockLead: PropTypes.string.isRequired,
  blockBlurb: PropTypes.shape({}).isRequired,
  caption: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

WorkBlock.defaultProps = {
  color: '',
  smallBrand: '',
};

export default WorkBlock;
