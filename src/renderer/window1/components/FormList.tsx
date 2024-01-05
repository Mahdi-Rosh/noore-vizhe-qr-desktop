import { useState } from "react";
import FormDisplay from "./FormDisplay";
import forms from "./forms";

export default function FormList() {
  const [selectedForm, setSelectedForm] = useState(0);
  const getClass = (isSelected: boolean) => {
    const isSelectedClass = 'scale-110 translate-y-1 rounded-md shadow-lg bg-green-700';
    const notSelectedClass = 'scale-100 bg-green-600 rounded-sm';
    return `${isSelected ? isSelectedClass : notSelectedClass} text-white p-3 transition-all`;
  }
  return (
    <>
      <div className="flex justify-around bg-green-500 p-3">
        { forms.map((v,i) => <button key={v.name} className={getClass(i === selectedForm)} onClick={e => setSelectedForm(i)}>{v.name}</button> )}
      </div>
      <FormDisplay form={forms[selectedForm]} />
    </>
  );
}