import React from 'react';
import Grid from '@mui/material/Grid';
import styles from './style.module.css';

import DropdownPlain from './dropdownPlain.js';
import DropdownFlags from './dropdownFlags.js';
import DropdownIcons from './dropdownIcons.js';

export default function App() {
  return (
    <div className={styles.ContentContainer}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <DropdownPlain />
        </Grid>
        <Grid item xs={12} md={6}>
          <DropdownFlags />
        </Grid>
        <Grid item xs={12} md={6}>
          <DropdownIcons />
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </div>
  );
}
