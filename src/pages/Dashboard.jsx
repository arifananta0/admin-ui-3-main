import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Elements/Card";
import CardBill from "../components/Fragments/Dashboard/CardBill";
import CardExpenseBreakdown from "../components/Fragments/Dashboard/CardExpensesBreakdown";
import CardTransaction from "../components/Fragments/Dashboard/CardTransaction";

const Dashboard = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 sm:gap-x-6">
        <Card title="Total Balance"/>
        <Card title="Goals"/>
      
        <CardBill/>
        <CardTransaction
        />

        <Card variant="md:col-span-2" title="Statistics" />
        <CardExpenseBreakdown />
      
      </div>

      {/* bottom content end*/}
    </MainLayout>
  );
};

export default Dashboard;
