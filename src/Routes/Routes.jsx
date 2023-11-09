import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Images from "../Pages/Images/Images";
import BarCode from "../Pages/BarCode/BarCode";
import Invoice from "../Pages/Invoice/Invoice";
import Excel from "../Pages/Excel/Excel";
import CardMaker from "../Pages/CardMaker/CardMaker";
import SpeechToText from "../Pages/SpeechToText/SpeechToText";
import TypeSpeed from "../Pages/TypeSpeed/TypeSpeed";

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
        path: '/bar&qr',
        element: <BarCode></BarCode>
    },
    {
        path: '/invoice',
        element: <Invoice />
    },
    {
        path: '/excel',
        element: <Excel></Excel>
    },
    {
        path: '/cardmaker',
        element: <CardMaker></CardMaker>
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