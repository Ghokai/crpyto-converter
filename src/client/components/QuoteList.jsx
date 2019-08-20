import React from "react";
import { Statistic, Alert } from "antd";

export default function QuoteList({ quotes, symbol }) {
  return (
    <Alert
      className="quote-list-wrapper"
      message={
        <div className="quote-list">
          {quotes.map(item => (
            <Statistic
              key={item.currency}
              title={item.currency}
              value={item.quote}
              precision={4}
            />
          ))}
        </div>
      }
      type="success"
    />
  );
}
