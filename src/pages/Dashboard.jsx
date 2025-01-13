import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
//import Card from "../components/Elements/Card";
import CardBill from "../components/Fragments/Dashboard/CardBill";
import CardExpenseBreakdown from "../components/Fragments/Dashboard/CardExpensesBreakdown";
import CardTransaction from "../components/Fragments/Dashboard/CardTransaction";
import CardBalance from "../components/Fragments/Dashboard/CardBalance";
import CardStatistic from "../components/Fragments/Dashboard/CardStatistic";
import CardGoal from "../components/Fragments/Dashboard/CardGoals";

const Dashboard = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="grid grid-cols-3 gap-4 h-full">
        {/* upcoming total balance 🔽🔽 */}
        <CardBalance />
        
        {/* upcoming goals 🔽🔽 */}
        <CardGoal/>

        {/* upcoming bill🔽🔽 */}
        <CardBill />
      </div>
      {/* top content end*/}
      {/* bottom content start*/}
      <div className="grid grid-cols-3 gap-4 h-full">
        {/* recent transactions🔽🔽 */}
        <CardTransaction />

        {/* recent transactions🔽🔽 */}
        <CardStatistic />
        
        {/* expenses break down🔽🔽 */}
        <CardExpenseBreakdown />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default Dashboard;
