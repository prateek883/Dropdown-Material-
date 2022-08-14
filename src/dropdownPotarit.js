import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/css/OverlayScrollbars.css';

import styles from './potrait.module.css';

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

export default function DrpdownPotrait() {
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
        Sort by : Players
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
            maxHeight: 138,
          }}
          options={{ scrollbars: { autoHide: 'scroll' } }}
        >
          <MenuItem onClick={handleClose}>
            <img
              className={styles.playersImage}
              src={
                'https://media4.newsnationtv.com/resize/930_-/images/2019/01/23/sachin-230853675.jpg'
              }
              alt="countryflags"
            />
            <Typography className={styles.menuSubTitle}>
              Sachin Tendulkar
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <img
              className={styles.playersImage}
              src={
                'https://im.indiatimes.in/facebook/2018/Jul/rahul_dravid_1530509651.jpg'
              }
              alt="countryflags"
            />
            <Typography className={styles.menuSubTitle}>
              Rahul Dravid
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <img
              className={styles.playersImage}
              src={
                'https://img.mensxp.com/media/content/2021/Feb/header-credit-Reuters_602f5ecc4b3df.jpeg'
              }
              alt="countryflags"
            />
            <Typography className={styles.menuSubTitle}>
              Yuvraj Singh
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <img
              className={styles.playersImage}
              src={
                'https://th.bing.com/th/id/OIP.0bK2-KKE5Lmvpyax_14lngHaEL?pid=ImgDet&w=500&h=282&rs=1'
              }
              alt="countryflags"
            />
            <Typography className={styles.menuSubTitle}>
              Rohit Sharma
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <img
              className={styles.playersImage}
              src={
                'https://th.bing.com/th/id/OIP.h_SWAoj5tw44YwJnJ2XN3QHaEz?pid=ImgDet&w=2383&h=1545&rs=1'
              }
              alt="countryflags"
            />
            <Typography className={styles.menuSubTitle}>Virat Kohli</Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <img
              className={styles.playersImage}
              src={
                'https://www.illawarramercury.com.au/images/transform/v1/crop/frm/silverstone-feed-data/8d49b872-bfe3-47f6-aee9-583ec33ca264.jpg/r0_0_800_600_w1200_h678_fmax.jpg'
              }
              alt="countryflags"
            />
            <Typography className={styles.menuSubTitle}>
              Ishant Sharma
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <img
              className={styles.playersImage}
              src={
                'https://th.bing.com/th/id/OIP.0SBu2fTj7Ss14aETj8HiCAHaEL?pid=ImgDet&w=500&h=282&rs=1'
              }
              alt="countryflags"
            />
            <Typography className={styles.menuSubTitle}>MS Dhoni</Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <img
              className={styles.playersImage}
              height="16px"
              width="20px"
              src={
                'https://th.bing.com/th/id/OIP.hJjxocg4g_SYPZq708Y8vgHaJ3?pid=ImgDet&w=630&h=839&rs=1'
              }
              alt="countryflags"
            />
            <Typography className={styles.menuSubTitle}>
              Jasprit Bumrah
            </Typography>
          </MenuItem>
        </OverlayScrollbarsComponent>
      </StyledMenu>
    </div>
  );
}
