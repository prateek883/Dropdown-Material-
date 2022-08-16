import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import styles from './style.module.css';

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/css/OverlayScrollbars.css';

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
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 4,
    width: 188,
    backgroundColor: '#fff',
    border: '1px solid #cdcdcd',
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[30],
    boxShadow: '0 2px 4px rgb(0 0 0 / 13%);',
    '& .MuiMenu-list': {
      padding: '3px 4px',
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

const options = [
  { id: 1, title: 'Featured' },
  { id: 2, title: 'Price: Low to High' },
  { id: 3, title: 'Price: High to Low' },
  { id: 4, title: 'Customer Reviews' },
  { id: 5, title: 'Featured Title' },
  { id: 6, title: 'Price: Low to High' },
  { id: 7, title: 'Price: High to Low' },
  { id: 8, title: 'Customer Reviews' },
];

export default function DrpdownPlain() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        variant="outlined"
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          width: '166px',
          fontSize: 14,
          textTransform: 'none',
          padding: '0px ',
        }}
      >
        Sort By : Featured
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        secondary={options[selectedIndex]}
      >
        <OverlayScrollbarsComponent
          style={{
            width: '100%',
            maxWidth: 310,
            position: 'relative',
            overflow: 'auto',
            maxHeight: 150,
          }}
          options={{ scrollbars: { autoHide: 'scroll' } }}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
              className={styles.menuSubTitle}
            >
              <Typography variant="body2" gutterBottom>
                {option.title}
              </Typography>
            </MenuItem>
          ))}
        </OverlayScrollbarsComponent>
      </StyledMenu>
    </div>
  );
}
