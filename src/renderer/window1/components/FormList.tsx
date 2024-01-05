import { useState } from "react";
import formsData from "./forms";
import FormDisplay from "./FormDisplay";

export default function FormList() {
  const [selectedForm, setSelectedForm] = useState(0);
  return (
    <>
      <select className="w-full p-4 bg-green-400" onChange={(e) => setSelectedForm(Number(e.target.value))}>
        { formsData.map((v,i) => <option key={v.name} value={i}>{v.name}</option>) }
      </select>
      <FormDisplay form={formsData[selectedForm]} />
    </>
  );
}