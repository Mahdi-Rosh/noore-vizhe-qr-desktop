export type QrData = {
  formName: string;
  values: Record<string, string>;
}

export const dataToQrForm = (formName: string, vals: string[], names: string[]): QrData => {
  const values: Record<string, string> = {};
  vals.forEach((v,i) => values[names[i]] = v);
  return { formName, values };
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
export const addBottomText = async (imgSrc: string, text: string) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const img = await loadImg(imgSrc);
  if (!ctx) return '';

  const extraHeight = 30;
  const fontSize = 30;

  canvas.width = img.width;
  canvas.height = img.height + extraHeight;
  ctx.drawImage(img, 0, 0);
  ctx.fillStyle = 'white';
  ctx.fillRect(0, img.height, img.width, extraHeight);

  ctx.fillStyle = 'black';
  ctx.font = `${fontSize}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText(text, img.width / 2, img.height);

  return canvas.toDataURL('image/png', 1.0);
};