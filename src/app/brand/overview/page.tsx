'use client'
import { Box, Container, Card } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { styled } from '@mui/material/styles';
import TestOverview from './overview';
const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);
const Overview = () => {
  return (
    <OverviewWrapper>
      <Container maxWidth="lg">
        <Card sx={{ p: 10, mb: 10, borderRadius: 12 }}>
          <TestOverview />
        </Card>
      </Container>
    </OverviewWrapper>
  )
}
export default Overview