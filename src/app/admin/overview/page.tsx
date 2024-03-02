"use client"
import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
          </Grid>
          <Grid item xs={12} md={4}>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
