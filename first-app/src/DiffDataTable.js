// import React, { useState } from "react";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { Dropdown } from "bootstrap";
// import { InputText } from "primereact/inputtext";

// const ReusableDataTable = ({ data }) => {
//   const [selectedRows, setSelectedRows] = useState(null);

//   const generateDynamicColumns = (dataList) => {
//     if (dataList.length === 0) {
//       return []; // Return an empty array if there's no data
//     }

//     const keys = Object.keys(dataList[0]); // Assuming all items have the same keys

//     return keys.map((key) => ({ field: key, header: key }));
//   };

//   const filterInput = (field) => (
//     <InputText
//       type="text"
//       onChange={(e) => {
//         // Implement your custom filtering logic here
//         // e.value contains the filter value
//       }}
//       style={{ width: "100%" }}
//     />
//   );

//   const filterDropdown = (field, options) => (
//     <Dropdown
//       options={options}
//       onChange={(e) => {
//         // Implement your custom filtering logic here
//         // e.value contains the selected option
//       }}
//       style={{ width: "100%" }}
//     />
//   );

//   const dynamicColumns = generateDynamicColumns(data);

//   return (
//     <DataTable
//       value={data}
//       selection={selectedRows}
//       onSelectionChange={(e) => setSelectedRows(e.value)}
//       selectionMode="multiple"
//       paginator
//       rows={10}
//     >
//       {dynamicColumns.map((col) => (
//         <Column
//           key={col.field}
//           field={col.field}
//           header={col.header}
//           filter
//           filterElement={
//             col.field === "color"
//               ? filterDropdown(col.field, ["Red", "Blue"])
//               : filterInput(col.field)
//           }
//         ></Column>
//       ))}
//     </DataTable>
//   );
// };

// export default ReusableDataTable;

import React, { useState} from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const ReusableDataTable = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState(null);

  const generateDynamicColumns = (dataList) => {
    if (dataList.length === 0) {
      return [];
    }
    const keys = Object.keys(dataList[0]);
    return keys.map((key) => ({ field: key, header: key }));
  };

  const dynamicColumns = generateDynamicColumns(data);

  return (
    <div>
      <DataTable
        value={data}
        selection={selectedRows}
        onSelectionChange={(e) => setSelectedRows(e.value)}
        selectionMode="multiple"
        paginator
        rows={10}
      >
        {dynamicColumns.map((col) => (
          <Column
            key={col.field}
            field={col.field}
            header={col.header}
            filter
            // filterElement={
            //   col.field === "color"
            //     ? filterDropdown(col.field, ["Red", "Blue"])
            //     : filterInput(col.field)
            // }
          ></Column>
        ))}
      </DataTable>
    </div>
  );
};

export default ReusableDataTable;
