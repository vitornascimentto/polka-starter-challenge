/* eslint-disable max-len */
import React from 'react';

const ArrowLeftIcon = ({ darkTheme }) => {
  if (darkTheme) {
    return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M3.325 6.62499L13.5 6.62499V7.37499L3.325 7.37499H2.11789L2.97145 8.22854L6.38039 11.6375L5.8625 12.1554L0.707107 6.99999L5.8625 1.84459L6.38039 2.36249L2.97145 5.77143L2.11789 6.62499H3.325Z" fill="black" stroke="#F3F4F6" />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="14" height="14" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M2.85 5.75002L11.5 5.75002V6.25002L2.85 6.25002H1.64289L2.49645 7.10358L5.36789 9.97502L5.025 10.3179L0.707107 6.00002L5.025 1.68213L5.36789 2.02503L2.49645 4.89647L1.64289 5.75002H2.85Z" fill="black" stroke="#171A20" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowLeftIcon;
