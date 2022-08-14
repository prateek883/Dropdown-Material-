import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/css/OverlayScrollbars.css';

import styles from './style.css';

const StyledMenu = styled((props) => (
  <Menu
    elevation={2}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    sx={{ height: '100%' }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    minWidth: 210,
    backgroundColor: '#fff',
    border: '1px solid #cdcdcd',
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow: '0 2px 4px rgb(0 0 0 / 13%);',
    '& .MuiMenu-list': {
      padding: '0px 0px',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 11,
        color: theme.palette.text.secondary,
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function DrpdownPlain() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          width: '25%',
          fontSize: 14,
          textTransform: 'none',
          padding: '0px ',
          height: '10%',
        }}
      >
        Sort By : Featured
      </Button>
      <OverlayScrollbarsComponent
        style={{
          width: '100%',
          maxWidth: 360,
          position: 'relative',
          overflow: 'auto',
          maxHeight: 300,
        }}
        options={{ scrollbars: { autoHide: 'scroll' } }}
      >
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} className={styles.menuSubTitle}>
            <div>
              <img
                src={
                  'https://www.bing.com/th?id=OSB.Lu_WbKA28qgS5LCyk1v3ZQ--.png&w=20&h=20&rs=1&qlt=80&o=6&dpr=1.3&pid=cricket'
                }
                alt="countryflags"
              />
            </div>
            Afganistan
          </MenuItem>
          <MenuItem onClick={handleClose} className={styles.menuSubTitle}>
            <div>
              <img
                src={
                  'https://www.bing.com/th?id=OSB.mX1qiDIAIKXWkesxIvfKPw--.png&w=20&h=20&rs=1&qlt=80&o=6&dpr=1.3&pid=cricket'
                }
                alt="countryflags"
              />
            </div>
            West Indies
          </MenuItem>
          <MenuItem onClick={handleClose} className={styles.menuSubTitle}>
            <div>
              <img
                src={
                  'https://www.bing.com/th?id=OSB.mX1qiDIAIKXWkesxIvfKPw--.png&w=20&h=20&rs=1&qlt=80&o=6&dpr=1.3&pid=cricket'
                }
                alt="countryflags"
              />
            </div>
            West Indeis
          </MenuItem>
          <MenuItem onClick={handleClose} className={styles.menuSubTitle}>
            <div>
              <img
                src={
                  'https://www.bing.com/th?id=OSB.FnnSsq_2DD4SKYyjyJFTKA--.png&w=20&h=20&rs=1&qlt=80&o=6&pid=cricket'
                }
                alt="countryflags"
              />
            </div>
            Austrailia
          </MenuItem>
        </StyledMenu>
      </OverlayScrollbarsComponent>
    </div>
  );
}
