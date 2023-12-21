import { useEffect, useState } from 'react';
import signatures from '../../assets/signature.png'
import SignatureCanvas from 'react-signature-canvas'

// import Item from 'antd/es/list/Item';
const InvoiceTemp1 = () => {

    const [displayItem, setDisplayItem] = useState([]);
    const [displayTerms, setDisplayTerms] = useState([]);
    const [tremItem, setTermItem] = useState('')
    const [tax, setTax] = useState(0)
    const [qty, setQty] = useState(0)
    const [unitprice, setUnitPrice] = useState(0)
    const [description, setDescription] = useState('')


    const [companyName, setCompanyname] = useState('East Repair Inc.')
    const [companyAddress, setCompanyAddress] = useState('123 street, Bounte')
    const [companyAddress2, setCompanyAddress2] = useState('New York, USA')
    const [billTo, setBillTo] = useState('123 street, Bounte')
    const [billToAddress, setBillToAddress] = useState('123 street, Bounte')
    const [billToAddress2, setBillToAddress2] = useState('New York, USA')
    const [shipTo, setShipTo] = useState('123 street, Bounte')
    const [shipToAddress, setShipToAddress] = useState('123 street, Bounte')
    const [shipToAddress2, setShipToAddress2] = useState('New York, USA')
    const [invoice, setInvoice] = useState(123456)
    const [invoiceDate, setInvoiceDate] = useState('12/12/12')
    const [po, setPO] = useState(123456789)
    const [dueDate, setDueDate] = useState('12/12/12')
    const [signature, setSignature] = useState('')
    const [uploadedImage, setUploadedImage] = useState('')


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

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className="flex justify-between">
            <div className="w-1/2 print:w-0 print:hidden bg-purple-400 pt-10 px-6">
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
                            <span className="label-text">Company Address </span>

                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setCompanyAddress2((e.target.value))} />

                    </div>
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
                        <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setBillToAddress2((e.target.value))} />

                    </div>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Ship To</span>

                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full " onChange={(e) => setShipTo((e.target.value))} />

                </div>
                <div className='flex gap-4'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Ship Address</span>

                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setShipToAddress((e.target.value))} />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Ship Address</span>

                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setShipToAddress2((e.target.value))} />

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
                </div>
                <div className='flex gap-4'>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">P.O.</span>

                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setPO((e.target.value))} />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Due Date</span>

                        </label>
                        <input type="date" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setDueDate((e.target.value))} />

                    </div>
                </div>
                <div className='flex justify-between gap-4'>
                    <div className='form-control w-full py-2 pt-4'>
                        <button className='w-full btn btn-secondary' onClick={() => document.getElementById('my_modal_3').showModal()}>Upload Item</button>



                    </div>
                    <div className='pt-4'>
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
            <div className="w-1/2 print:w-full">
                <div className="flex justify-between py-12 px-10">
                    <div>
                        <h3 className="text-2xl font-bold">{companyName}</h3><br />
                        <p className="font-semibold">{companyAddress}</p>
                        <p className="font-semibold">{companyAddress2}</p>
                    </div>
                    <div>
                        <h2 className="font-bold">INVOICE</h2>
                    </div>
                </div>
                <div className="px-10 py-6 flex justify-between">
                    <div className="w-3/5 flex justify-between gap-4">
                        <span>
                            <h3 className="font-semibold text-xl">Bill To</h3>
                            <p className="font-semibold">{billTo}</p>
                            <p className="font-semibold">{billToAddress}</p>
                            <p className="font-semibold">{billToAddress2}</p>
                        </span>
                        <span>
                            <h3 className="font-semibold text-xl">Ship To</h3>
                            <p className="font-semibold">{shipTo}</p>
                            <p className="font-semibold">{shipToAddress}</p>
                            <p className="font-semibold">{shipToAddress2}</p>
                        </span>
                    </div>
                    <div className="w-2/5 flex justify-end gap-4 font-bold">
                        <div>
                            <p className="text-right"> Invoice # :</p>
                            <p className="text-right"> Invoice Date :</p>
                            <p className="text-right"> P.O # :</p>
                            <p className="text-right"> Due Date # :</p>
                        </div>
                        <div>
                            <p>{invoice}</p>
                            <p>{invoiceDate}</p>
                            <p>{po}</p>
                            <p>{dueDate}</p>
                        </div>

                    </div>
                </div>

                <div className='px-10'>
                    <div className="overflow-x-auto   pt-6 pb-2">
                        <table className="table border-2 border-solid font-bold">
                            {/* head */}
                            <thead>
                                <tr className="bg-slate-100">
                                    <th className="border-2 border-solid">QTY</th>
                                    <th className="border-2 border-solid">DESCRIPTION</th>
                                    <th className="border-2 border-solid">UNIT PRICE</th>
                                    <th className="border-2 border-solid">AMOUNT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}

                                {
                                    displayItem?.map((item, i) => <tr key={i}>
                                        <th className="border-2 border-solid">{item?.Qty}</th>
                                        <td className="border-2 border-solid">{item?.Description}</td>
                                        <td className="border-2 border-solid text-right">{item?.UnitPrice}</td>
                                        <td className="border-2 border-solid text-right">{item?.UnitPrice * item?.Qty}</td>
                                    </tr>)
                                }
                                {/* row 2 */}

                            </tbody>
                        </table>

                    </div>
                    {
                        displayItem.length > 0 && <div className="flex justify-end gap-10 pe-4 font-bold">
                            <span> <h3>SubTotals:</h3>
                                <p>Tax ({tax}%):</p>
                                <p> Total:</p></span>
                            <span>
                                <h3 className='text-right'>{sum.toFixed(2)}</h3>
                                <h3 className='text-right'>{taxCalculation.toFixed(2)}</h3>
                                <h3 className='text-right'>{(sum + taxCalculation).toFixed(2)}</h3>
                            </span>
                        </div>
                    }
                </div>
                <div className='flex justify-end px-10 pt-4'>
                    <img src={uploadedImage ? uploadedImage : signatures} alt="" className='h-20 w-48' />
                </div>
                <div className='pt-20 px-10  pb-10'>
                    <h3 className='font-bold pb-2'>Term & Conditions:</h3>

                    {
                        displayTerms?.map((term, i) => <p key={i} className='font-semibold text-sm pb-2 '>({i + 1})
                            {
                                term?.term
                            }
                        </p>)
                    }
                </div>

                <div className='flex justify-center py-6 print:hidden'>
                    <button className='btn btn-secondary' onClick={handlePrint}>Print Now</button>
                </div>

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

export default InvoiceTemp1;