/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import BitEthIcon from '../assets/icons/BitEthIcon';
import DotIcon from '../assets/icons/DotIcon';
import EthIcon from '../assets/icons/EthIcon';
import Polygon from '../assets/icons/Polygon';

const tableData = {
  1: [
    {
      key: '1',
      projectName: { name: 'Polkamarkets', nickName: '$POLK' },
      participants: '3684',
      totalRaised: '$300,000',
      currentPrice: '$1.10',
      ath: '+338%',
      utc: { date: '21 Sep, 2020', hour: '06:41 pm' },
      networks: <EthIcon />,
    },
    {
      key: '2',
      projectName: { name: 'Unido', nickName: '$UNI' },
      participants: '847',
      totalRaised: '$95,000',
      currentPrice: '$0.05985',
      ath: '+199%',
      utc: { date: '8 Sep, 2020', hour: '11:27 pm' },
      networks: <BitEthIcon />,
    },
    {
      key: '3',
      projectName: { name: 'AntiMatter', nickName: '$ANTI' },
      participants: '492',
      totalRaised: '$150,000',
      currentPrice: '$18.20',
      ath: '+11,393%',
      utc: { date: '17 Oct, 2020', hour: '01:08 pm' },
      networks: <Polygon />,
    },
  ],
  2: [
    {
      key: '1',
      projectName: { name: 'Ethernity', nickName: '$ETN' },
      participants: '1485',
      totalRaised: '$8,500',
      currentPrice: '$2.57',
      ath: '+463%',
      utc: { date: '24 May, 2020', hour: '08:20 pm' },
      networks: <DotIcon />,
    },
  ],
};

export default tableData;
