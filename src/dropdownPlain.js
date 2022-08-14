import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import styles from './style.css';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'top',
      horizontal: '0',
    }}
    transformOrigin={{
      vertical: '0',
      horizontal: '0',
    }}
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
        sx={{ width: '216px', fontSize: 14 }}
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
      >
        <MenuItem onClick={handleClose} className={styles.menuSubTitle}>
          <EditIcon />
          Featured
        </MenuItem>
        <MenuItem onClick={handleClose} className={styles.menuSubTitle}>
          <FileCopyIcon />
          Price: High to Low
        </MenuItem>
        <MenuItem onClick={handleClose} className={styles.menuSubTitle}>
          <ArchiveIcon />
          Price: High to Low
        </MenuItem>
        <MenuItem onClick={handleClose} className={styles.menuSubTitle}>
          <MoreHorizIcon />
          Price: High to Low
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
