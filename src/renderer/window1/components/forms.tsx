export interface InputTemplate {
  name: string;
  type?: React.HTMLInputTypeAttribute;
  isQrBottomNum?: boolean;
};

export type Form = {
  name: string,
  hasBottomNumber?: boolean,
  inputs: InputTemplate[]
}

function getForms(): Form[] {
  return [
    {
      name: 'قطعات ساخته شده',
      inputs: [
        { name: 'name' },
        { name: 'order-num', type: 'number' },
        { name: 'material' },
        { name: 'material-supplier' },
        { name: 'maker' },
        { name: 'qc' },
        { name: 'designer' },
        { name: 'number', type: 'number' },
        { name: 'date', type: 'date' },
        { name: 'plant' }
      ]
    },
    {
      name: 'تجهیزات خریداری شده',
      inputs: [
        { name: 'name' },
        { name: 'order-num', type: 'number' },
        { name: 'material' },
        { name: 'supplier' },
        { name: 'maker' },
        { name: 'qc' },
        { name: 'delivery-number', type: 'number' },
        { name: 'number', type: 'number' },
        { name: 'date', type: 'date' },
        { name: 'plant' }
      ]
    },
    {
      name: 'اموال',
      hasBottomNumber: true,
      inputs: [
        { name: 'name' },
        { name: 'order-num', type: 'number' },
        { name: 'property-num', type: 'number', isQrBottomNum: true },
        { name: 'supplier' },
        { name: 'user' },
        { name: 'qc' },
        { name: 'delivery-number', type: 'number' },
        { name: 'life-time', type: 'number' },
        { name: 'date', type: 'date' },
        { name: 'plant' }
      ]
    },
    {
      name: 'تجهیزات تعمیر شده',
      inputs: [
        { name: 'name' },
        { name: 'order-num', type: 'number' },
        { name: 'postage-date', type: 'date' },
        { name: 'delivery-date', type: 'date' },
        { name: 'service-provider' },
        { name: 'qc' },
        { name: 'delivery-number', type: 'number' },
        { name: 'number', type: 'number' },
        { name: 'price', type: 'number' },
        { name: 'plant' }
      ]
    },
  ];
}

export default getForms();