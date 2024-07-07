import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

import DataRibbon from "@/components/Dashboard/DataRibbon";
import TransactionsPerDay from "@/components/Dashboard/TransactionsPerDay";
import TransactionsBottomRow from "@/components/Dashboard/TransactionsBottomRow";

const Dashboard = () => {
  return (
    <Box>
      <Grid container gap={4} marginTop={2}>
        {/* Data Ribbon - Showing Numerical Stats */}
        <DataRibbon />
        {/* TransactionsPerDay - graph - numerical cards */}
        <TransactionsPerDay />
      </Grid>
      {/* Transaction Donut Charts Bottom Row - few donut charts to break down data into fractions */}
      <TransactionsBottomRow />
    </Box>
  );
};
export default Dashboard;
