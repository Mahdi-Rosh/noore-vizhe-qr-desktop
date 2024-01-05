import { useEffect, useState } from "react";
import { Form } from "./forms";
import QrDisplay from "./QrDisplay";
import * as qr from "qrcode";
import { addBottomText, dataToQrForm, objectToQrJsonString } from "../utils";
import Input from "./Input";

export default function FormDisplay({ form }: { form: Form }) {
  const [values, setValues] = useState(Array(form.inputs.length).fill(''));
  const [url, setURL] = useState('');
  const bottomValueIdx = form.inputs.findIndex(v => v.isQrBottomNum);
  useEffect(() => {
    setValues(Array(form.inputs.length).fill(''))
    setURL('');
  }, [form]);

  const updateQrURL = async (newVals: string[]) => {    
    const json = objectToQrJsonString(dataToQrForm(form.name, newVals, form.inputs.map(v => v.name)));
    
    const url = await qr.toDataURL(json, { errorCorrectionLevel: "L" });
    const bottomValue = bottomValueIdx !== -1 ? newVals[bottomValueIdx] : '0';
    setURL(form.hasBottomNumber ? await addBottomText(url, bottomValue) : url);
  };
  const handleValueChange = (val: string, idx: Number) => {
    const newVals = values.map((v,i) => idx === i ? val : v);    
    updateQrURL(newVals);
    setValues(newVals);
  };

  return (
    <>
      <div className="bg-zinc-400 p-4 w-full grid gap-2">
        {form.inputs.map((v,i) => {
          return (
            <div key={v.name} className="grid grid-cols-8 gap-2">
              <Input type={v.type} value={values[i]} onChange={val => handleValueChange(val, i)} />
              <input className='p-2 w-full text-center col-span-3 font-bold text-xs md:text-base lg:text-xl' type='text'
                value={v.persianName ? `${v.name.toUpperCase()} (${v.persianName})` : v.name.toUpperCase()} disabled />
            </div>
          );
        })}
      </div>
      { url && <QrDisplay url={url} /> }
    </>
  );
}