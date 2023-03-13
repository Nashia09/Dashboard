import React from "react";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Search,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { employeesData, employeesGrid } from "../data/dummy.js";

import { Header } from "../components";
const Employees = () => {
  return (
    <div>
      <Header category="Page" title="Employees" />

      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((index, item) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={{ Page, Search, Toolbar }} />
      </GridComponent>
    </div>
  );
};

export default Employees;
