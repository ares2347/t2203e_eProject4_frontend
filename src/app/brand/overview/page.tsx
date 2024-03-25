'use client'
import { Box, Container, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import BrandOverview from './overview';
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
          <BrandOverview />
        </Card>
      </Container>
    </OverviewWrapper>
  )
}
export default Overview