import React from "react";
import { Spin } from "antd";

export default function Spinner() {
  return (
    <div className="spinner-wrapper">
      <Spin size="large" />
    </div>
  );
}
