import Grid from "@mui/material/Grid";
import React from "react";
import DataChart from "@/components/DataChart";
import Paper from "@mui/material/Paper";
import {
  doughnutChartData1,
  doughnutChartData2,
  doughnutChartData3,
  doughnutChartData4,
} from "@/components/mockData";
import scss from "./TransactionsBottomRow.module.scss";

const TransactionBottomRow = () => {
  return (
    <Grid container className={scss.bottomRow}>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions Per User Type</p>
          <DataChart type={"doughnut"} data={doughnutChartData1} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions Per Day</p>
          <DataChart type={"doughnut"} data={doughnutChartData2} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions Per Month</p>
          <DataChart type={"doughnut"} data={doughnutChartData3} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions Per Year</p>
          <DataChart type={"doughnut"} data={doughnutChartData4} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TransactionBottomRow;
