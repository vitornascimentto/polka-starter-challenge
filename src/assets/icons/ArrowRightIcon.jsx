/* eslint-disable max-len */
import React from 'react';

const ArrowRightIcon = ({ darkTheme }) => {
  if (darkTheme) {
    return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.675 7.37501H0.5V6.62501H10.675H11.8821L11.0286 5.77146L7.61961 2.36251L8.1375 1.84462L13.2929 7.00001L8.1375 12.1554L7.61961 11.6375L11.0286 8.22857L11.8821 7.37501H10.675Z" fill="black" stroke="#F3F4F6" />
      </svg>
    );
  }

  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.15 6.24998H0.5V5.74998H9.15H10.3571L9.50355 4.89642L6.63211 2.02498L6.975 1.68208L11.2929 5.99998L6.975 10.3179L6.63211 9.97498L9.50355 7.10353L10.3571 6.24998H9.15Z" fill="black" stroke="#171A20" />
    </svg>
  );
};

export default ArrowRightIcon;
