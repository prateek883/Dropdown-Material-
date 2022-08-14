import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/css/OverlayScrollbars.css';

import styles from './style.module.css';

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
    borderRadius: 4,
    minWidth: 190,
    backgroundColor: '#fff',
    border: '1px solid #cdcdcd',
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow: '0 2px 4px rgb(0 0 0 / 13%);',
    '& .MuiMenu-list': {
      padding: '3px 4px 3px 2px',
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
          width: '187px',
          fontSize: 14,
          textTransform: 'none',
          padding: '0px ',
          height: '10%',
        }}
      >
        Sort by : country
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <OverlayScrollbarsComponent
          style={{
            width: '100%',
            maxWidth: 360,
            position: 'relative',
            overflow: 'auto',
            maxHeight: 128,
          }}
          options={{ scrollbars: { autoHide: 'scroll' } }}
        >
          <MenuItem onClick={handleClose}>
            <img
              height="16px"
              width="20px"
              src={
                'https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg'
              }
              alt="countryflags"
            />
            <Typography className={styles.menuSubTitle}>India</Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <img
              height="16px"
              width="20px"
              src={
                'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/800px-Flag_of_Argentina.svg.png?20120912082242'
              }
              alt="countryflags"
            />
            <Typography className={styles.menuSubTitle}>Argentina</Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <img
              height="16px"
              width="20px"
              src={
                'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/640px-Flag_of_Portugal.svg.png'
              }
              alt="countryflags"
            />
            <Typography className={styles.menuSubTitle}>Portugal</Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <img
              height="16px"
              width="20px"
              src={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI7pUaGSLXJ4XjRmIdo_XXF9vVSihKbOyFFhbVKNO1e4cN51OTs78OoeItQwUGRd_1O00&usqp=CAU'
              }
              alt="countryflags"
            />
            <Typography className={styles.menuSubTitle}>Sri Lanka</Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <img
              height="16px"
              width="20px"
              src={'https://www.worldatlas.com/img/flag/ca-flag.jpg'}
              alt="countryflags"
            />
            <Typography className={styles.menuSubTitle}>Canada</Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <img
              height="16px"
              width="20px"
              src={
                'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png'
              }
              alt="countryflags"
            />
            <Typography className={styles.menuSubTitle}>Russia</Typography>
          </MenuItem>
        </OverlayScrollbarsComponent>
      </StyledMenu>
    </div>
  );
}
