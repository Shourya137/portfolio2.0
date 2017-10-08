import React from 'react';

export default () => {
  const thisYear = new Date().getFullYear();
  return (
    <div className="footer has-text-centered">
      © {thisYear} Jheng-Hao Lin. All Rights Reserved.
    </div>
  );
};
