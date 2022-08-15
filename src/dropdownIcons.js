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
import Typography from '@mui/material/Typography';
import styles from './icons.module.css';

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
    minWidth: 150,
    backgroundColor: '#fff',
    border: '1px solid #cdcdcd',
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow: '0 2px 4px rgb(0 0 0 / 13%);',
    '& .MuiMenu-list': {
      padding: '3px 4px',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
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
          <MenuItem onClick={handleClose}>
            <EditIcon />
            <Typography variant="body2" className={styles.menuSubTitle}>
              Featured
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <FileCopyIcon />
            <Typography variant="body2" className={styles.menuSubTitle}>
              Price: Low to High
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ArchiveIcon />
            <Typography variant="body2" className={styles.menuSubTitle}>
              Price: High to Low
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <MoreHorizIcon />
            <Typography variant="body2" className={styles.menuSubTitle}>
              Customer Reviews
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <FileCopyIcon />
            <Typography variant="body2" className={styles.menuSubTitle}>
              Price: Low to High
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ArchiveIcon />
            <Typography variant="body2" className={styles.menuSubTitle}>
              Price: High to Low
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <MoreHorizIcon />
            <Typography variant="body2" className={styles.menuSubTitle}>
              Customer Reviews
            </Typography>
          </MenuItem>
        </OverlayScrollbarsComponent>
      </StyledMenu>
    </div>
  );
}
