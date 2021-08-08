import React from 'react';

import MainCard from './MainCard';
import DefaultCard from './DefaultCard';

import cardTwo from '../../assets/images/cardTwo.png';
import cardTwoDark from '../../assets/images/cardTwoDark.png';
import cardTwoLight from '../../assets/images/cardTwoLight.png';

import EthIcon from '../../assets/icons/EthIcon';
import BitIcon from '../../assets/icons/BitIcon';

const CardsContent = () => (
  <div className="ps-c-cards__content grid-auto">
    <MainCard />

    <DefaultCard
      mainImage={cardTwo}
      imageDark={cardTwoDark}
      imageLight={cardTwoLight}
      title="SuperFarm"
      subtitle="$SUPER"
      total="$1,500,000"
      personal="$1,500"
      icon={<EthIcon />}
    />

    <DefaultCard
      mainImage={cardTwo}
      imageDark={cardTwoDark}
      imageLight={cardTwoLight}
      title="Polychain Monsters"
      subtitle="$ROOM"
      total="$150,000"
      personal="$150"
      icon={<BitIcon />}
    />
  </div>
);

export default CardsContent;
