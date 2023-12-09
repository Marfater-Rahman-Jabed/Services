import { useState } from 'react';
import QRCode from 'qrcode';
import DefaultQR from '../../assets/DevelQRCode.png'
import useClipboard from 'react-use-clipboard';

const QRCodeswithoutLogo = () => {
    const [url, setUrl] = useState('')
    const [show, setShow] = useState('')
    const [qrcode, setQrcode] = useState('')
    const [isCopied, setCopied] = useClipboard(qrcode);
    const GenereteQR = () => {
        QRCode.toDataURL(url, (err, urls) => {
            if (err) return console.log(err)
            console.log(urls)
            setQrcode(urls)
            setShow(url)
            setUrl('')
        })
    }

    return (
        <div className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-36 '>
            {qrcode && <div className='flex justify-center gap-6 py-1'><h3 className='text-white text-center'>QR Code for <span className='text-black font-bold text-xl'>{show}</span></h3><div >
                {/* <p>{qrcode?.slice(0, 23)}</p> */}
                <button className="btn btn-success btn-xs" onClick={setCopied} >
                    {isCopied ? 'Copied QR Code url' : 'Copy QR Url'}
                </button>
            </div><br /></div>}


            <div className='flex justify-center gap-4  '>
                <div>
                    <textarea className="textarea textarea-secondary w-60 h-60" placeholder="Write Something..." value={url} onChange={(e) => setUrl(e.target.value)}></textarea><br />
                    <div className='flex justify-center'>
                        <button onClick={GenereteQR} className='btn btn-accent mt-3 px-20'>Generate</button>
                    </div>
                </div>
                <div>

                    <>

                        <img src={qrcode ? qrcode : DefaultQR} alt="" className='w-60 h-60' />



                        <div className='flex justify-center'>
                            <a className='btn btn-primary mt-4 px-20' href={qrcode} download={`${show.slice(0, 5)}QRCode.png`}>Download</a>
                        </div>
                    </>


                </div>

            </div>
            {/* <input type="text"  /> */}
        </div>
    );
};

export default QRCodeswithoutLogo;