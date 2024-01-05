export default function QrDisplay({ url }: { url: string }) {  
  const sendToPrint = () => {
    const ipcRenderer = require('electron').ipcRenderer;
    ipcRenderer.send('print', url);
  };
  const btnClass = `bg-red-600 text-white rounded-sm p-2 flex justify-center
    hover:scale-105 hover:shadow-lg hover:translate-y-1 transition-transform`;
  return (
    <div className="flex p-4 justify-center w-full bg-red-500">
      <div className="flex flex-col w-36 sm:w-52">
        <img src={url} />
        <div className="grid grid-cols-2">
          <a className={btnClass} download='QR.png' href={url}>ذخیره کد QR</a>
          <button onClick={sendToPrint} className={btnClass}>پرینت</button>
        </div>
      </div>
    </div>
  );
}