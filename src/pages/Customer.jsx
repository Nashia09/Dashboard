import React from 'react';
import { GridComponent, ColumnDirective, ColumnsDirective,
Page, Selection, Inject, Edit,Search, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid
 } from '../data/dummy';
import { Header } from '../components';

 const Customer = () => {
  return (
    <div>
    <Header category="Page" title="Customers" />

    <GridComponent
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={["Search", "Delete"]}
      editSettings={{ allowDeleting:true, allowEditing: true}}
      width="auto"
    >
      <ColumnsDirective>
        {customersGrid.map((index, item) => (
          <ColumnDirective key={index} {...item} />
        ))}
      </ColumnsDirective>
      <Inject services={{ Page, Search, Toolbar, Selection, Edit, Sort, Filter }} />
    </GridComponent>
  </div>
  )
}

export default Customer