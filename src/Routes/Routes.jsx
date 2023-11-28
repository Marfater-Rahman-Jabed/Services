import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Images from "../Pages/Images/Images";
import BarCode from "../Pages/BarCode/BarCode";
import Invoice from "../Pages/Invoice/Invoice";
import Excel from "../Pages/Excel/Excel";
import CardMaker from "../Pages/CardMaker/CardMaker";
import SpeechToText from "../Pages/SpeechToText/SpeechToText";
import TypeSpeed from "../Pages/TypeSpeed/TypeSpeed";
import QRCodesLogo from "../Pages/QRCodes/QRCodesLogo";
import QRCodeswithoutLogo from "../Pages/QRCodes/QRCodeswithoutLogo";
import BarCodesGenerate from "../Pages/BarCode/BarCodesGenerate";
import CardTemp1 from "../Pages/CardMaker/CardTemp1";
import CardTemp2 from "../Pages/CardMaker/CardTemp2";
import CardTemp3 from "../Pages/CardMaker/CardTemp3";
import InvoiceTemp1 from "../Pages/Invoice/InvoiceTemp1";
import CardTemp4 from "../Pages/CardMaker/CardTemp4";
import CropedImages from "../Pages/Images/CropedImages/CropedImages";
import ImageGenerate from "../Pages/Images/ImageGenerate/ImageGenerate";
import ResizeImage from "../Pages/Images/ResizeImage/ResizeImage";
import ImageToText from "../Pages/Images/ImageToText/ImageToText";
import ExcelRemaining from "../Pages/Excel/ExcelRemaining/ExcelRemaining";
import ExcelStep from '../Pages/Excel/ExcelRemaining/ExcelStep'
import CompareExcelValue from "../Pages/Excel/CompareExcelValue/CompareExcelValue";
import ExcelMatching from "../Pages/Excel/ExcelMatching/ExcelMatching";
import ExcelReplace from "../Pages/Excel/ExcelReplace/ExcelReplace";
import InvoiceTemp2 from "../Pages/Invoice/InvoiceTemp2";
import InvoiceTemp3 from "../Pages/Invoice/InvoiceTemp3";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/image',
        element: <Images></Images>
    },
    {
        path: '/cropImage',
        element: <CropedImages></CropedImages>
    },
    {
        path: '/resizeImage',
        element: <ResizeImage></ResizeImage>
    },
    {
        path: '/imageToText',
        element: <ImageToText></ImageToText>
    },
    {
        path: '/generateImage',
        element: <ImageGenerate></ImageGenerate>
    },
    {
        path: '/bar&qr',
        element: <BarCode></BarCode>
    },
    {
        path: '/bar&qr/qrLogo',
        element: <QRCodesLogo></QRCodesLogo>
    },
    {
        path: '/bar&qr/qroutLogo',
        element: <QRCodeswithoutLogo></QRCodeswithoutLogo>
    },
    {
        path: '/bar&qr/barcode',
        element: <BarCodesGenerate></BarCodesGenerate>
    },
    {
        path: '/invoice',
        element: <Invoice />
    },
    {
        path: '/invoiceTemp1',
        element: <InvoiceTemp1></InvoiceTemp1>
    },
    {
        path: '/invoiceTemp2',
        element: <InvoiceTemp2></InvoiceTemp2>
    },
    {
        path: '/invoiceTemp3',
        element: <InvoiceTemp3></InvoiceTemp3>
    },
    {
        path: '/excel',
        element: <Excel></Excel>
    },
    {
        path: '/excelRemainingDate',
        element: <ExcelRemaining></ExcelRemaining>
    },
    {
        path: '/excelCompare',
        element: <CompareExcelValue></CompareExcelValue>
    },
    {
        path: '/excelMatching',
        element: <ExcelMatching></ExcelMatching>
    },
    {
        path: '/excelReplace',
        element: <ExcelReplace></ExcelReplace>
    },
    {
        path: '/excelStep',
        element: <ExcelStep></ExcelStep>
    },
    {
        path: '/cardmaker',
        element: <CardMaker></CardMaker>
    },
    {
        path: '/cardTemp1',
        element: <CardTemp1></CardTemp1>
    },
    {
        path: '/cardTemp2',
        element: <CardTemp2></CardTemp2>
    },
    {
        path: '/cardTemp3',
        element: <CardTemp3></CardTemp3>
    },
    {
        path: '/cardTemp4',
        element: <CardTemp4></CardTemp4>
    },
    {
        path: '/speechtotext',
        element: <SpeechToText></SpeechToText>
    },
    {
        path: '/typespeed',
        element: <TypeSpeed></TypeSpeed>
    },


])