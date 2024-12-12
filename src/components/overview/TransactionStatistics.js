import React, { useState } from "react";

// import style
import "./TransactionStatistics.scss";

const TransactionStatistics = () => {
  const [tab, setTab] = useState("deposit");

  return (
    <div className="transaction-statistics-container">
      <h2 className="transaction-title">Transaction Statistics</h2>
      <div className="transaction-view">
        <div className="transaction-type-view">
          <div
            className={`transaction-type-item ${
              tab === "deposit" ? "active" : ""
            }`}
            onClick={() => setTab("deposit")}
          >
            Deposit
          </div>
          <div
            className={`transaction-type-item ${
              tab === "withdraw" ? "active" : ""
            }`}
            onClick={() => setTab("withdraw")}
          >
            Withdraw
          </div>
          <div
            className={`transaction-type-item ${
              tab === "transfer" ? "active" : ""
            }`}
            onClick={() => setTab("transfer")}
          >
            Transfer
          </div>
        </div>
        <div className="transaction-filter-view">
          <div className="transaction-filter-item">
            <p className="transaction-filter-item-title">Token</p>
            <select className="transaction-filter-item-select">
              <option value="">All</option>
              <option value="usdt">USDT</option>
              <option value="eth">Ethereum</option>
              <option value="bnb">BNB</option>
            </select>
          </div>
          <div className="transaction-filter-item">
            <p className="transaction-filter-item-title">Method</p>
            <select className="transaction-filter-item-select">
              <option value="">All</option>
              <option value="usdt">USDT</option>
              <option value="eth">Ethereum</option>
              <option value="bnb">BNB</option>
            </select>
          </div>
          <div className="transaction-filter-item">
            <p className="transaction-filter-item-title">Status</p>
            <select className="transaction-filter-item-select">
              <option value="">All</option>
              <option value="usdt">USDT</option>
              <option value="eth">Ethereum</option>
              <option value="bnb">BNB</option>
            </select>
          </div>
          <div className="transaction-filter-item">
            <p className="transaction-filter-item-title">Date</p>
            <select className="transaction-filter-item-select">
              <option value="">DD/MM/YY</option>
              <option value="usdt">USDT</option>
              <option value="eth">Ethereum</option>
              <option value="bnb">BNB</option>
            </select>
          </div>
        </div>
        <div className="transaction-filter-list">
          <div className="transaction-list-item header">
            <p className="transaction-list-item-text">Token</p>
            <p className="transaction-list-item-text">Network</p>
            <p className="transaction-list-item-text">Amount</p>
            <p className="transaction-list-item-text">Address</p>
            <p className="transaction-list-item-text">TXD</p>
            <p className="transaction-list-item-text">Status</p>
            <p className="transaction-list-item-text">Date & Time</p>
          </div>
          <div className="transaction-list-item">
            <p className="transaction-list-item-text white">USDT</p>
            <p className="transaction-list-item-text">TRC20</p>
            <p className="transaction-list-item-text">17100.00</p>
            <p className="transaction-list-item-text blue">
              TLWpzo0xpx...Rtavgcikt
            </p>
            <p className="transaction-list-item-text">TLWpzo0xpx...Rtavgcikt</p>
            <p className="transaction-list-item-text success">Done</p>
            <p className="transaction-list-item-text">2024-10-14, 18:12:45</p>
          </div>
          <div className="transaction-list-item">
            <p className="transaction-list-item-text white">USDT</p>
            <p className="transaction-list-item-text">TRC20</p>
            <p className="transaction-list-item-text">17100.00</p>
            <p className="transaction-list-item-text blue">
              TLWpzo0xpx...Rtavgcikt
            </p>
            <p className="transaction-list-item-text">TLWpzo0xpx...Rtavgcikt</p>
            <p className="transaction-list-item-text success">Done</p>
            <p className="transaction-list-item-text">2024-10-14, 18:12:45</p>
          </div>
          <div className="transaction-list-item">
            <p className="transaction-list-item-text white">USDT</p>
            <p className="transaction-list-item-text">TRC20</p>
            <p className="transaction-list-item-text">17100.00</p>
            <p className="transaction-list-item-text blue">
              TLWpzo0xpx...Rtavgcikt
            </p>
            <p className="transaction-list-item-text">TLWpzo0xpx...Rtavgcikt</p>
            <p className="transaction-list-item-text success">Done</p>
            <p className="transaction-list-item-text">2024-10-14, 18:12:45</p>
          </div>
          <div className="transaction-list-item">
            <p className="transaction-list-item-text white">USDT</p>
            <p className="transaction-list-item-text">TRC20</p>
            <p className="transaction-list-item-text">17100.00</p>
            <p className="transaction-list-item-text blue">
              TLWpzo0xpx...Rtavgcikt
            </p>
            <p className="transaction-list-item-text">TLWpzo0xpx...Rtavgcikt</p>
            <p className="transaction-list-item-text success">Done</p>
            <p className="transaction-list-item-text">2024-10-14, 18:12:45</p>
          </div>
          <div className="transaction-list-item">
            <p className="transaction-list-item-text white">USDT</p>
            <p className="transaction-list-item-text">TRC20</p>
            <p className="transaction-list-item-text">17100.00</p>
            <p className="transaction-list-item-text blue">
              TLWpzo0xpx...Rtavgcikt
            </p>
            <p className="transaction-list-item-text">TLWpzo0xpx...Rtavgcikt</p>
            <p className="transaction-list-item-text success">Done</p>
            <p className="transaction-list-item-text">2024-10-14, 18:12:45</p>
          </div>
          <div className="transaction-list-item">
            <p className="transaction-list-item-text white">USDT</p>
            <p className="transaction-list-item-text">TRC20</p>
            <p className="transaction-list-item-text">17100.00</p>
            <p className="transaction-list-item-text blue">
              TLWpzo0xpx...Rtavgcikt
            </p>
            <p className="transaction-list-item-text">TLWpzo0xpx...Rtavgcikt</p>
            <p className="transaction-list-item-text success">Done</p>
            <p className="transaction-list-item-text">2024-10-14, 18:12:45</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionStatistics;
