import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";
import { useDemoData } from "@mui/x-data-grid-generator";

const CustomLoadingOverlay = (props: any) => <LinearProgress {...props} />;

const Data = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 500,
    maxColumns: 15,
  });

  return (
    <>
      <h1>Data</h1>
      <p>
        The best data available at your fingertips in table form. This could be
        a whole section of data that is available for users to deep dive further
        into the numbers/stats.
      </p>
      <div style={{ height: "600px", width: "100%" }}>
        <DataGrid
          slots={{
            loadingOverlay: CustomLoadingOverlay,
          }}
          loading={!data}
          {...data}
        />
      </div>
    </>
  );
};

export default Data;
