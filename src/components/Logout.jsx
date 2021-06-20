import React from 'react';
import Button from '@material-ui/core/Button';

// eslint-disable-next-line react/prop-types
const Logout = ({ setToken }) => {
  const handleLogout = () => {
    setToken('');
  };

  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
};

export default Logout;
