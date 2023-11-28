// import { useState } from 'react';
import defaultLogo from '../../assets/Tick.png'
import { Watermark } from 'antd'
import { useState } from 'react';
import { IoIosMailUnread } from "react-icons/io";
import { MdAddLocationAlt } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";


// import signatures from '../../assets/signature.png'
import SignatureCanvas from 'react-signature-canvas'
const InvoiceTemp3 = () => {
    const [displayItem, setDisplayItem] = useState([]);
    const [displayTerms, setDisplayTerms] = useState([]);
    const [tremItem, setTermItem] = useState('')
    const [tax, setTax] = useState(0)
    const [qty, setQty] = useState(0)
    const [unitprice, setUnitPrice] = useState(0)
    const [description, setDescription] = useState('')


    const [companyName, setCompanyname] = useState('East Repair Inc.')
    const [watermark, setWatermark] = useState('East Repair Inc.')
    const [companyAddress, setCompanyAddress] = useState('123 street, Bounte')
    const [companyAddress2, setCompanyAddress2] = useState('01811772358')
    const [billTo, setBillTo] = useState('David Warner')
    const [billToAddress, setBillToAddress] = useState('123 street, Bounte')
    const [billToAddress2, setBillToAddress2] = useState('01827717200')

    const [invoice, setInvoice] = useState(123456)
    const [invoiceDate, setInvoiceDate] = useState('12/12/12')

    const [dueDate, setDueDate] = useState('12/12/12')
    const [signature, setSignature] = useState('')
    const [uploadedImage, setUploadedImage] = useState('')
    const [uploadedLogo, setUploadedLogo] = useState('')
    const [companyEmail, setCompanyEmail] = useState('abcd@gmail.com')
    const [billEmail, setBillEmail] = useState('abcd@gmail.com')


    const handleSignature = () => {
        // console.log(signature.getTrimmedCanvas().toDataURL('image/png'))
        setUploadedImage(signature.getTrimmedCanvas().toDataURL('image/png'))
    }


    const handleSignatureClear = () => {
        signature.clear()

    }



    console.log(signature)

    const handlePrint = () => {
        window.print()
    }

    let sum = 0;
    displayItem.forEach(item => {
        sum += (item?.Qty) * (item?.UnitPrice);
    })

    let taxCalculation = sum * (tax / 100)
    const handleData = () => {
        const ModalObject = {
            Qty: qty,
            UnitPrice: unitprice,
            Description: description
        }
        // setDisplayItem(ModalObject)
        console.log('clicked')
        setDisplayItem([...displayItem, ModalObject])

    }

    const handleTerm = () => {

        const termObject = {
            term: tremItem
        }
        setDisplayTerms([...displayTerms, termObject])
    }


    return (
        <div className='flex justify-between '>
            <div className='w-1/2 print:hidden '>
                <div className=" print:w-0 print:hidden bg-purple-400 pt-10 pb-6 px-6">
                    <h3 className='text-3xl text-center font-bold text-black'>Fill Up the form</h3>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Company Name</span>

                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full " onChange={(e) => setCompanyname((e.target.value))} />

                    </div>
                    <div className='flex gap-4'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Company Address</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setCompanyAddress((e.target.value))} />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone Number </span>

                            </label>
                            <input type="number" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setCompanyAddress2((e.target.value))} />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone Number </span>

                            </label>
                            <input type="email" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setCompanyEmail((e.target.value))} />

                        </div>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Set Watermark </span>

                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full " onChange={(e) => setWatermark((e.target.value))} />

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Bill To</span>

                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full " onChange={(e) => setBillTo((e.target.value))} />

                    </div>
                    <div className='flex gap-4'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Bill Address</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setBillToAddress((e.target.value))} />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Bill Address</span>

                            </label>
                            <input type="number" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setBillToAddress2((e.target.value))} />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Customer Email</span>

                            </label>
                            <input type="email" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setBillEmail((e.target.value))} />

                        </div>
                    </div>


                    <div className='flex gap-4'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Invoice</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setInvoice((e.target.value))} />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Invoice Date</span>

                            </label>
                            <input type="date" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setInvoiceDate((e.target.value))} />

                        </div>



                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Due Date</span>

                            </label>
                            <input type="date" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setDueDate((e.target.value))} />

                        </div>

                    </div>


                    <div className='flex justify-between gap-4'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Choose Image</span>

                            </label>
                            <input type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" onChange={(e) => setUploadedLogo(URL.createObjectURL(e.target.files[0]))} />

                        </div>
                        <div className='form-control w-full py-2 pt-9'>
                            <button className='w-full btn btn-secondary' onClick={() => document.getElementById('my_modal_3').showModal()}>Upload Item</button>



                        </div>
                        <div className='pt-9'>
                            <button className='btn btn-secondary ' onClick={() => setDisplayItem([])}>Clear Items</button>
                        </div>
                    </div>
                    <div className='flex justify-between gap-2'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Tax amount</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setTax((e.target.value))} />

                        </div>
                        <div className="form-control w-full pt-9">

                            <button className='w-full btn btn-secondary' onClick={() => document.getElementById('my_modal_4').showModal()}>Upload Terms & Conditions</button>

                        </div>
                        <div className='pt-9'>
                            <button className='btn btn-secondary ' onClick={() => setDisplayTerms([])}>Clear Terms</button>
                        </div>

                    </div>
                    <div className='flex gap-4'>
                        <div className="form-control w-full  bg-white mt-9 mb-3">
                            <label className="label bg-slate-700">
                                <span className="label-text font-bold text-white">Your Signature</span>

                            </label>
                            {/* <input type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs mb-1" name='image' onChange={handleSignature} /> */}
                            <SignatureCanvas penColor='black'
                                canvasProps={{ width: 450, height: 150, className: 'sigCanvas' }}
                                ref={data => setSignature(data)}
                            />


                        </div>
                        <div >
                            <div className="form-control w-full max-w-xs">
                                <div className='pt-10'>
                                    <button className='btn btn-primary ' onClick={handleSignature}>Upload sign</button>
                                </div>

                            </div>
                            <div className="form-control w-full max-w-xs ">
                                <div className='pt-4'>
                                    <button className='btn btn-secondary ' onClick={handleSignatureClear}>Clear Sign</button>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>
            </div>
            <div className='w-1/2 print:w-full border-8 border-solid border-blue-700 ' >
                <Watermark content={watermark} gap={[40, 40]} offset={[70, 70]}>
                    <div >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 100"><path fill="#5000ca" fillOpacity="1" d="M0,64L120,53.3C240,43,480,21,720,10.7C960,0,1200,0,1320,0L1440,0L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
                    </div>

                    <div className='flex justify-between gap-2   px-6'>
                        <div>
                            <span className='font-semibold'>
                                <h3 className='font-bold text-3xl mb-2'>{companyName}</h3>

                                <span className='flex justify-normal gap-1'><MdAddLocationAlt className='text-2xl pt-1'></MdAddLocationAlt><p>{companyAddress}</p></span>
                                <span className='flex justify-normal gap-1'><FaSquarePhone className='text-2xl pt-1'></FaSquarePhone><p>{companyAddress2}</p></span>

                                <span className='flex justify-normal gap-1'><IoIosMailUnread className='text-2xl pt-1'></IoIosMailUnread><p>{companyEmail}</p></span>
                            </span> <br /><br />
                            <span className='font-semibold'>
                                <p className='italic font-semibold mb-2'>Delivered To</p>
                                <h3 className='text-2xl font-bold mb-2'>{billTo}</h3>
                                <span className='flex justify-normal gap-1'><MdAddLocationAlt className='text-2xl pt-1'></MdAddLocationAlt><p>{billToAddress}</p></span>
                                <span className='flex justify-normal gap-1'><FaSquarePhone className='text-2xl pt-1'></FaSquarePhone><p>{billToAddress2}</p></span>

                                <span className='flex justify-normal gap-1'><IoIosMailUnread className='text-2xl pt-1'></IoIosMailUnread><p>{billEmail}</p></span>



                            </span>
                        </div>
                        <div className='flex justify-center items-center '>
                            <h3 className='font-bold text-3xl'>INVOICE</h3>
                        </div>
                        <div>
                            <img src={uploadedLogo ? uploadedLogo : defaultLogo} alt="" className='w-40 h-40 rounded-full ' /> <br /><br /><br /><br />
                            <span className='flex justify-between gap-2'>
                                <span className='font-semibold '>
                                    <h3><span className='text-right'>Invoice No</span></h3>
                                    <h3><span className='text-right'>Invoice Date</span></h3>
                                    <h3><span className='text-right'>Due Date</span></h3>
                                </span>
                                <span className='font-semibold'>
                                    <p>: {invoice}</p>
                                    <p>: {invoiceDate}</p>
                                    <p>: {dueDate}</p>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className='px-6'>
                            <div className="overflow-x-auto   pt-6 pb-2">
                                <table className="table  border-2 border-solid border-blue-700 font-bold">
                                    {/* head */}
                                    <thead>
                                        <tr className="bg-blue-700 text-white">
                                            <th className="border-2 border-solid border-purple-300">DESCRIPTION</th>
                                            <th className="border-2 border-solid border-purple-300">QTY</th>
                                            <th className="border-2 border-solid border-purple-300">UNIT PRICE</th>
                                            <th className="border-2 border-solid border-purple-300">AMOUNT</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}

                                        {
                                            displayItem?.map((item, i) => <tr key={i} className='hover:bg-blue-600 hover:text-white'>
                                                <td className="border-2 border-solid border-purple-300">{item?.Description}</td>
                                                <th className="border-2 border-solid border-purple-300">{item?.Qty}</th>
                                                <td className="border-2 border-solid border-purple-300 text-right">{item?.UnitPrice}</td>
                                                <td className="border-2 border-solid border-purple-300 text-right">{item?.UnitPrice * item?.Qty}</td>
                                            </tr>)
                                        }
                                        {/* row 2 */}

                                    </tbody>
                                </table>

                            </div>
                            {
                                displayItem.length > 0 && <div className="flex justify-end gap-10 pe-4 ">
                                    <span> <h3 className='font-semibold'>SubTotals:</h3>
                                        <p className='font-semibold'>Tax ({tax}%):</p>
                                        <p className='font-bold'> Total:</p></span>
                                    <span>
                                        <h3 className='text-right font-semibold'>{sum.toFixed(2)}</h3>
                                        <h3 className='text-right font-semibold'>{taxCalculation.toFixed(2)}</h3>
                                        <h3 className='text-right font-bold'>{(sum + taxCalculation).toFixed(2)}</h3>
                                    </span>
                                </div>
                            }
                        </div>
                        <div className='flex justify-between gap-4'>
                            <div className='pt-16 px-10  '>
                                <h3 className='font-bold pb-2'>Term & Conditions:</h3>

                                {
                                    displayTerms?.map((term, i) => <p key={i} className='font-semibold text-sm pb-2 '>({i + 1})
                                        {
                                            term?.term
                                        }
                                    </p>)
                                }
                            </div>
                            <div className='pe-4'>
                                <span className='text-center'> <img src={uploadedImage} alt="" className='pt-16' /></span>
                                <hr />
                                <span className='text-center'><p>Author Signature</p></span>
                            </div>
                        </div>


                    </div>

                    <div className='flex justify-center pt-8 pb-2 print:hidden'>
                        <button className='btn btn-primary px-10' onClick={handlePrint}>Print Now</button>
                    </div>
                </Watermark>
            </div>

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form action="" method="dialog" className='py-4'>
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                        <h3 className='text-center font-bold'>Upload Item Details</h3>

                        <div className='flex justify-center gap-2'>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">QTY</span>

                                </label>
                                <input type="number" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setQty(e.target.value)} />

                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Unit Price</span>

                                </label>
                                <input type="tel" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setUnitPrice(e.target.value)} />

                            </div>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Item Description</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full " onChange={(e) => setDescription(e.target.value)} />

                        </div>
                        <div className="form-control w-full mt-3">

                            <input type="submit" value='Submit' className="btn btn-secondary w-full " onClick={handleData} />

                        </div>
                    </form>
                </div>
            </dialog>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box">
                    <form action="" method="dialog" className='py-4'>
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                        <h3 className='text-center font-bold'>Upload Item Details</h3>

                        <div className='gap-2 pt-6'>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Set Your terms & Condition</span>

                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full " onChange={(e) => setTermItem(e.target.value)} />

                            </div>
                            <div className="form-control w-full mt-3">

                                <input type="submit" value='Submit' className="btn btn-secondary w-full " onClick={handleTerm} />

                            </div>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default InvoiceTemp3;