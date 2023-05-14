import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import './styles.css'

function Header() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ backgroundColor: '#000a21' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="center">
          <span className="logo-text">stock<span className="rotate-z">z</span></span>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
