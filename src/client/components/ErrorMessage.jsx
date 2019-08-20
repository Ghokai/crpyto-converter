import React from "react";
import { Alert } from "antd";

export default function ErrorMessage({ text }) {
  return (
    <div className="error-message">
      <Alert message="Error" description={text} type="error" showIcon />
    </div>
  );
}
