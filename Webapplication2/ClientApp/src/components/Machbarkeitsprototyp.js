import React, {
    Component,
    useState,
    useEffect,
    useRef
} from 'react';
import { Button } from "reactstrap";
import { QrReader } from "react-qr-reader";
import * as QRious from "qrious";


//storage geht mit window.localStorage. (key, setItem, GetItem, removeItem, clear, )


export function UITest() {


    const [data, setData] = useState('No Result');
    const [sizes, setSizes] = useState(200);
    const [isClicked, setIsClicked] = useState(false);
    const [scanClicked, setScanClicked] = useState(false);
    const [temp, setTemp] = useState("");
    let c = newFunction();
    const [sw, setSw] = useState(c);
    const [savedV, setSavedV] = useState("");
    let v;

    useEffect(() => {
        if (isClicked == true) {
            Qr_toImage3(data, sizes)
        }
        
    }, [data]);
    useEffect(() => {
        Qr_toImage3("", 0)
    }, []);
    console.log("counter rendered")

    return <div>
        <div id='box'>
                    <QrReader
                        onResult={(result, error) => {
                            if (!!result) {
                                setTemp(result?.text);
                                saveQR(temp);
                            } if (!!error) {
                                console.info();
                            }
                        }} />
        </div>
        <Button
            onClick={() => {
                setScanClicked(true);
            }}
            color="success" type="button" size="lg" block={true}
        >scan</Button>
            <Button
            onClick={() => {
                setIsClicked(true);
                setData(temp);
                console.log('success');
            }}
            color="success" type="button" size="lg" block={true}
        >Create</Button>
        <div style={{ marginLeft: sw }}  >
            {/*canvas zeichnet qr-code */}
            <canvas id="qr" ></canvas>
        </div>
        <button onClick={() => {
            saveQR(temp);

        }}
        >save</button>
        <h1>{savedV}</h1>
        <h1>{temp}</h1>

        {/* <Button
                onClick={() => { SetCount(count + 1) }}
                color="success" type="button" size="lg" block='true'
            >Click</Button>
            <h1> {count}</h1>
            <Button
                onClick={() => { SetHW(count + " * Hello World") }}
                color="success" type="button" size="lg" block="true"
            > hello</Button>
            <h1 id='toCenter' alignitem='center' > {hw} </h1>
            <Button
                onClick={() => {
                    SetCount(0);
                    SetHW("Button wasn't pressed yet");
                    setData("No result");
                    console.log("Counter resetted");
                }}

                color="success" size="lg" block="true"
        >Reset</Button>*/}
    </div>
       
    

    //gibt die Hälfte der Breite des Bildschirm minus die Breite des Qr-codes in Pixel zurück.
    function newFunction() {
        return window.screen.width / 2 - sizes;
    }
}

// erzeugt Qr-code und übergibt diesen an das canvas-element
function Qr_toImage3(c, d) {
    var qr = new QRious({
        element: document.getElementById('qr'),
        value: c,
        size: d
    });
}
function saveQR(data) {


    let keys = Object.keys(window.localStorage);
    let i = keys.length + 1;


    window.localStorage.setItem(i.toString, data);
    console.log(keys, data);

}



