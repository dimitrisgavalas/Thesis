import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";

export default function DropdownList(props) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="card flex justify-content-center pb-3">
      <Dropdown
        value={selected}
        onChange={(e) => setSelected(e.value)}
        options={props.list}
        optionLabel="name"
        editable
        placeholder={props.placeholder}
        className="w-full"
      />
    </div>
  );
}
