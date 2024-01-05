export const objectToQrJsonString = (v: any) => JSON.stringify(v, undefined, 2);

export const dataToQrForm = (formName: string, vals: string[], names: string[]) => {
  const obj: Record<string, string> = { formName };
  vals.forEach((v,i) => obj[names[i]] = v);
  return obj;
};

export const arrayMatch = (v1: string[], v2: string[]) => {
  if (v1.length !== v2.length) return false;
  for (let i = 0; i < v1.length; i++)
    if (v1[i] !== v2[i]) return false;
  return true;
};

export const loadImg = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

const TXT_EXTRA_HEIGHT = 30;
const NUM_EXTRA_HEIGHT = 30;
const FONT_SIZE = 30;

export const addBottomText = async (imgSrc: string, text: string) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const img = await loadImg(imgSrc);
  if (!ctx) return '';

  canvas.width = img.width;
  canvas.height = img.height + TXT_EXTRA_HEIGHT + NUM_EXTRA_HEIGHT;
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0);

  ctx.fillStyle = 'black';
  ctx.font = `${FONT_SIZE}px Arial`;
  ctx.textAlign = 'center';

  ctx.textBaseline = 'alphabetic';
  ctx.fillText('شرکت نور ویژه', canvas.width / 2, img.height + TXT_EXTRA_HEIGHT / 2);
  ctx.textBaseline = 'middle'
  ctx.fillText(text, canvas.width / 2, img.height + TXT_EXTRA_HEIGHT + NUM_EXTRA_HEIGHT / 2);

  return canvas.toDataURL('image/png', 1.0);
};