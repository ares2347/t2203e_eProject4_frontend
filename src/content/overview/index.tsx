import { Box, Container, Card } from '@mui/material';

import { styled } from '@mui/material/styles';
import Hero from './Hero';

const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);
console.log("da log duoc vao ham ")
function Overview() {
  return (
    <OverviewWrapper>
      
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" py={5} alignItems="center">
        </Box>
        <Card sx={{ p: 10, mb: 10, borderRadius: 12 }}>
          <Hero />
        </Card>
      </Container>
    </OverviewWrapper>
  );
}

export default Overview;
