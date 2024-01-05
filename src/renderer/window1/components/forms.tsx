import { InputType } from "./Input";

export interface InputTemplate {
  name: string;
  persianName: string;
  type?: InputType;
  isQrBottomNum?: boolean;
};

export type Form = {
  name: string,
  inputs: InputTemplate[],
  hasBottomNumber?: boolean,
};

function getForms(): Form[] {
  return [
    {
      name: 'قطعات ساخته شده',
      inputs: [
        { name: 'name', persianName: 'نام' },
        { name: 'product-code', persianName: 'کد کالا', type: 'code' },
        { name: 'order-num', persianName: 'شماره سفارش', type: 'number', },
        { name: 'material', persianName: 'جنس' },
        { name: 'material-supplier', persianName: 'تامین کننده متریال' },
        { name: 'maker', persianName: 'سازنده' },
        { name: 'qc', persianName: 'کنترل کیفیت' },
        { name: 'designer', persianName: 'طراح' },
        { name: 'number', persianName: 'تعداد', type: 'number' },
        { name: 'date', persianName: 'تاریخ', type: 'date' },
        { name: 'plant', persianName: 'کارخانه' }
      ]
    },
    {
      name: 'تجهیزات خریداری شده',
      inputs: [
        { name: 'name', persianName: 'نام' },
        { name: 'product-code', persianName: 'کد کالا', type: 'code' },
        { name: 'order-num', persianName: 'شماره سفارش', type: 'number' },
        { name: 'material', persianName: 'جنس' },
        { name: 'supplier', persianName: 'تامین کننده' },
        { name: 'maker', persianName: 'سازنده' },
        { name: 'qc', persianName: 'کنترل کیفیت' },
        { name: 'number', persianName: 'تعداد', type: 'number' },
        { name: 'date', persianName: 'تاریخ', type: 'date' },
        { name: 'plant', persianName: 'کارخانه' }
      ]
    },
    {
      name: 'اموال',
      hasBottomNumber: true,
      inputs: [
        { name: 'name', persianName: 'نام' },
        { name: 'product-code', persianName: 'کد کالا', type: 'code' },
        { name: 'order-num', persianName: 'شماره سفارش', type: 'number' },
        { name: 'property-num', persianName: 'کد اموال', type: 'number', isQrBottomNum: true },
        { name: 'supplier', persianName: 'تامین کننده' },
        { name: 'user', persianName: 'استفاده کننده' },
        { name: 'qc', persianName: 'کنترل کیفیت' },
        { name: 'life-time', persianName: 'طول عمر', type: 'number' },
        { name: 'date', persianName: 'تاریخ', type: 'date' },
        { name: 'plant', persianName: 'کارخانه' }
      ]
    },
    {
      name: 'تجهیزات تعمیر شده',
      inputs: [
        { name: 'name', persianName: 'نام' },
        { name: 'product-code', persianName: 'کد کالا', type: 'code' },
        { name: 'order-num', persianName: 'شماره سفارش', type: 'number' },
        { name: 'postage-date', persianName: 'تاریخ پست', type: 'date' },
        { name: 'delivery-date', persianName: 'تاریخ تحویل', type: 'date' },
        { name: 'service-provider', persianName: 'سرویس کار' },
        { name: 'qc', persianName: 'کنترل کیفیت' },
        { name: 'number', persianName: 'تعداد', type: 'number' },
        { name: 'price', persianName: 'قیمت',  type: 'number' },
        { name: 'plant', persianName: 'کارخانه' }
      ]
    },
  ];
}

export default getForms();