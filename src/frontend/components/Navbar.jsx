import React from 'react';
//import { Link, useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  //const history = useHistory();
  const navigate = useNavigate();

  const handleLogout = () => {
    //clear cookie/auth data?
    //history.push('/');
    navigate('/');
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img
          src="src/frontend/assets/art lily.png"
          alt="Logo"
          style={styles.logo}
        />
      </div>
      <div style={styles.logoutContainer}>
        <button onClick={handleLogout} style={styles.logoutButton}>
          Logout
        </button>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    // position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: 'rgb(28, 28, 31)',
    color: '#fff',
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    maxWidth: '40px',
  },
  logoutContainer: {
    flex: 1,
    textAlign: 'right',
  },
  logoutButton: {
    backgroundColor: 'transparent',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};
