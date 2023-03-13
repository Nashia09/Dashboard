import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu,
Filter,Page, ExcelExport, PdfExport,Search, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, ordersGrid, contextMenuItems} from  '../data/dummy'

import { Header } from '../components';
const Orders = () => {
  return (
    <div>
      <Header category="Page" title="Orders" />

      <GridComponent
      id="gridcomp"
      dataSource={ordersData}
      allowPaging
      allowSorting
      allowPdfExport
      allowExcelExport
  
      >
        <ColumnsDirective>
            {ordersData.map((item, index) => (
              <ColumnDirective key={index} {...item} />

            ))}
        </ColumnsDirective>
      <Inject services={{ Resize, Sort, Page,Search, ContextMenu,
       Filter, ExcelExport, Edit, PdfExport}} />
      </GridComponent>
    </div>
  )
}

export default Orders