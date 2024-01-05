import { useEffect, useState } from "react";
import { Form } from "./forms";
import QrDisplay from "./QrDisplay";
import * as qr from "qrcode";
import { addBottomText, dataToQrForm } from "../utils";

export default function FormDisplay({ form }: { form: Form }) {
  const [values, setValues] = useState(Array(form.inputs.length).fill(''));
  const [url, setURL] = useState('');
  const bottomValueIdx = form.inputs.findIndex(v => v.isQrBottomNum);
  useEffect(() => {
    setValues(values.map(v => ''))
    setURL('');
  }, [form]);

  const updateQrURL = async (newVals: string[]) => {
    const data = dataToQrForm(form.name, newVals, form.inputs.map(v => v.name));
    const json = JSON.stringify(data, null, 2);
    const url = await qr.toDataURL(json);
    const bottomValue = bottomValueIdx !== -1 ? newVals[bottomValueIdx] : '0';
    setURL(form.hasBottomNumber ? await addBottomText(url, bottomValue) : url);
  }
  const handleValueChange = (val: string, idx: Number) => {
    const newVals = values.map((v, i) => idx === i ? val : v);
    updateQrURL(newVals);
    setValues(newVals);
  }

  return (
    <>
      <div className="bg-zinc-400 p-4 w-full grid gap-2">
        {form.inputs.map((v, i) => {
          return (
            <div key={v.name} className="grid grid-cols-2 gap-2">
              <input className='p-2 w-full text-center' placeholder={v.name} type={v.type}
                value={values[i]} onChange={e => handleValueChange(e.target.value, i)} />
              <input className='p-2 w-full text-center' type='text' value={v.name} disabled />
            </div>
          );
        })}
      </div>
      { url && <QrDisplay url={url} /> }
    </>
  );
}