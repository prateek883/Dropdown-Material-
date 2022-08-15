import React from 'react';
import Grid from '@mui/material/Grid';
import styles from './style.module.css';

import DropdownPlain from './dropdownPlain.js';
import DropdownFlags from './dropdownFlags.js';
import DropdownIcons from './dropdownIcons.js';
import DropdownPotarit from './dropdownPotarit.js';

export default function App() {
  return (
    <div className={styles.ContentContainer}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <DropdownPlain />
        </Grid>
        <Grid item xs={12} md={6} className={styles.dropdownFlagsContainer}>
          <DropdownFlags />
        </Grid>
        <Grid item xs={12} md={6} sx={{ marginTop: '10em' }}>
          <DropdownIcons />
        </Grid>
        <Grid item xs={12} md={6} sx={{ marginTop: '10em' }}>
          <DropdownPotarit />
        </Grid>
      </Grid>
    </div>
  );
}
