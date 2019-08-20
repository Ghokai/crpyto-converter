import React from "react";
import { Input } from "antd";

export default function SearchBar({ onSearch }) {
  return (
    <div>
      <Input.Search onSearch={onSearch} />
    </div>
  );
}
