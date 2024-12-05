import React from "react";

const transactionCard = transactions.map((transaction) => (
    <div key={transaction.id} className="flex justify-between my-6">
      <div className="flex">
        <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
          {transaction.icon}
        </div>
        <div className="ms-4">
          <span className="text-xl font-bold">
            {transaction.transactionName}
          </span>
          <br />
          <span className="text-gray-02">{transaction.shopName}</span>
        </div>
      </div>
      <div className="text-right">
        <span className="text-xl font-bold text-gray-02">
          ${transaction.amount}
        </span>
        <br />
        <span className="text-gray-02">{transaction.date}</span>
      </div>
    </div>
  ));