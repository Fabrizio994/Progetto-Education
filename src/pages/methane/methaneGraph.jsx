import { useMethaneData } from "./methaneApi.jsx";
import GraphWrapper from "../../components/GraphWrapper.jsx";
import Spinner from "../../components/spinner.jsx";
import Chart from "../../components/Chart.jsx";
export default function GraphMethane() {
  const { isLoading, error, data } = useMethaneData();
  const last = data && data.length > 0 ? data[data.length - 1] : null;
  if (isLoading) return <Spinner />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <GraphWrapper graphId="methane" last={last.average}>
        <Chart
          type="line"
          data={data}
          dataY="average"
          dataX="date"
          domain={["dataMin", "dataMax"]}
        />
      </GraphWrapper>
    </>
  );
}
