import { Pagination } from "antd";
import React from "react";

const PaginationAD = () => {
  return (
    <div>
      <Pagination size="small" showTotal={(total) => `Total ${total} items`} showSizeChanger showQuickJumper defaultCurrent={5} total={500} />
      <Pagination simple showSizeChanger showQuickJumper defaultCurrent={5} total={500} />
    </div>
  );
};

export default PaginationAD;
