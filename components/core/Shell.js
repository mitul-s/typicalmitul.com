import { Box, Grid } from "@chakra-ui/react";

export default function Shell({ children }) {
    return (
      <Grid as="main" gridTemplateColumns="1fr 1fr 1fr">
        <Box>This is a navigation</Box>
        {children}
        <Box>This is a footer</Box>
      </Grid>
    );
}