import React from "react";

interface TextCodeProps {
  value: string,
  onChange: (val: string) => void
}; 

const inputStyle = "p-2 text-center";

const NumCodeInput = ({ value, onChange }: TextCodeProps) => <input value={value}
  onChange={e => Number(e.target.value) > 999 || Number(e.target.value) < 0 ? null : onChange(e.target.value)}
  className={inputStyle} type="number" />;
const TextCodeInput = ({ value, onChange }: TextCodeProps) => <input value={value} onChange={e => onChange(e.target.value)} className={inputStyle} maxLength={2} />;
const Container = ({ children }: { children: React.ReactNode }) => <div className="col-span-5 dir-ltr grid grid-cols-4 gap-2">{children}</div>;

function CodeInput({ value, onChange }: { value: string, onChange: (value: string) => void }) {  
  const values = value ? value.split('-') : new Array(4).fill('');
  const handleChange = (value: string, idx: number) => onChange(values.map((v,i) => i === idx ? value : v).join('-'));

  return <Container>
    <TextCodeInput value={values[0]} onChange={v => handleChange(v, 0)} />
    <TextCodeInput value={values[1]} onChange={v => handleChange(v, 1)} />
    <TextCodeInput value={values[2]} onChange={v => handleChange(v, 2)} />
    <NumCodeInput  value={values[3]} onChange={v => handleChange(v, 3)} />
  </Container>
};

export type InputType = React.HTMLInputTypeAttribute | 'code';
export default function Input({type, value, onChange}: { type?: InputType, value: string, onChange: (value: string) => void }) {
  if (type === 'code') return <CodeInput value={value} onChange={onChange} />;
  return <input className='p-2 w-full text-center col-span-5' type='' value={value} onChange={e => onChange(e.target.value)} />
};