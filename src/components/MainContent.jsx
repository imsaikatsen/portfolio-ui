// components/MainContent.js
import React from 'react';

const MainContent = ({ content }) => {
  return <main style={styles.main}>{content}</main>;
};

const styles = {
  main: {
    marginLeft: '250px', // Set the margin to match the width of the sidebar
    padding: '20px',
  },
};

export default MainContent;
