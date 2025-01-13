import { expensesStatistics } from "../../../data/expenses";
import BarsDataset from "../../Elements/BarChart";
import Card from "../../Elements/Card";

const CardStatistic = () => {
    const expensesStatisticCard = expensesStatistics.map((expensesStatistic) => (<div key={expensesStatistic.id}>{expensesStatistic.date}</div>));

    return (
        <Card variant="lg:col-span-2 min-h-max" title="Statistics">
  <BarsDataset desc={expensesStatisticCard} />
</Card>
    )
}
    export default CardStatistic