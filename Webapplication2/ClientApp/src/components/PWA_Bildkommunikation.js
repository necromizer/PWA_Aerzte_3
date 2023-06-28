import React, {
    Component,
    useState,
    useEffect,
    useRef
} from 'react';
import './PWA.css';
import { Button, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { QrReader } from "react-qr-reader";
import * as QRious from "qrious";




//storage geht mit window.localStorage. (key, setItem, GetItem, removeItem, clear, als jsonArray speichern )



export function UI() {
    const [data, setData] = useState('No Result');
    const [sizes, setSizes] = useState(200);
    const [legitResult, setLegitResult] = useState(false);
    const [iSize, setISize] = useState(100);
    const [temp, setTemp] = useState("");
    
    const [activeTab, setActiveTab] = useState('1');

    const toggle = (tabIndex) => {
        if (activeTab !== tabIndex) setActiveTab(tabIndex);
        console.log(tabIndex);
    };

    const increaseActiveTab = () => {
        const tabIndex = parseInt(activeTab);
        console.log(tabIndex, typeof tabIndex);
        if (tabIndex == (tabs.length - 1)) {
            setActiveTab('1');
        } else {
            setActiveTab((tabIndex + 1).toString());
        }
        console.log(activeTab);
    };

    const decreaseActiveTab = () => {
        const tabIndex = parseInt(activeTab);
        console.log(tabIndex);
        if (tabIndex == 1) {
            setActiveTab((tabs.length - 1).toString());
        } else {
            setActiveTab((tabIndex - 1).toString());
        }
        
    };


    const [tabs, setTabs] = useState([
        {
            title: 'First Tab',
            content: (
                <TabPane tabId="1">
                    
                        
                            <div >
                        <QrReader
                            onResult={(result, error) => {
                                if (!!result) {
                                    setData(result?.text);
                                    setLegitResult(true);
                                    saveQR(data);
                                    function getall(data, sizes) {

                                        let values = [];
                                        let keys = Object.keys(window.localStorage);
                                        let i = keys.length;
                                        while (i--) {
                                            values.push(localStorage.getItem(keys[i]));
                                            addTab();
                                            Qr_toImage3(data, sizes);
                                        }

                                    }
                                } if (!!error) {
                                    console.info();
                                }
                            }} />
                            </div>

                    {legitResult ? (
                            <h1 style={{ backgroundColor: "green" }}>successfully scanned the Qr-Code</h1>
                    ) : null}
                    <div
                        className={'idiv'}>
                        <img
                            src='./left_arrow.png'
                            width={iSize}
                            height={iSize}
                            alt="Left Arrow"
                            onClick={decreaseActiveTab}
                        />
                        <img
                            src='./right_arrow.png'
                            width={iSize}
                            height={iSize}
                            alt="Right Arrow"
                            onClick={increaseActiveTab}
                        />
                    </div>
                        
                    <h1>{temp}</h1>
                        <Button
                        onClick={() => {

                        }}
                        color="success"
                        type="button"
                        size="lg"
                        block={true}
                        >
                            scan
                        </Button>
                        <Button
                        onClick={() => {

                        }}
                        color="success"
                        type="button"
                        size="lg"
                        block={true}
                        >
                            existing codes
                        </Button>
                    
                </TabPane>
            ),
            id: '1'
        }
    ]);

   

    function addTab() {
        const newTabIndex = tabs.length+1;
        const newTabs = [
            ...tabs,
            {
                title: `Tab ${newTabIndex}`,
                content: (
                    <TabPane tabId={newTabIndex.toString()}>
                        <React.Fragment>
                            <canvas id={`qr+${newTabIndex}`}></canvas>
                            <div className={'idiv' } >
                                <img
                                    src='./left_arrow.png'
                                    alt="Left Arrow"
                                    width={iSize}
                                    height={iSize}
                                    onClick={decreaseActiveTab}
                                />
                                <canvas id={`qr+${newTabIndex}`}></canvas>
                                <img
                                    src='./right_arrow.png'
                                    width={iSize}
                                    height={iSize}
                                    alt="Right Arrow"
                                    onClick={increaseActiveTab}
                                />
                            </div>
                            
                        </React.Fragment>
                    </TabPane>
                ),
                id: `${newTabIndex}`
            }
        ];
        setTabs(newTabs);
        setActiveTab(newTabIndex.toString());
    };

    

    //useEffect(() => {
    //    if (isClicked === true) {
    //        Qr_toImage3(data, sizes);
    //    }
    //}, [data]);

    useEffect(() => {
        Qr_toImage3("", 0);
    }, []);

    return (
        <div>
            <Nav tabs>
                {tabs.map(tab => (
                    <NavItem key={tab.id}>
                        <NavLink
                            className={activeTab === tab.id ? 'active' : ''}
                            onClick={() => toggle(tab.id)}
                        >
                            {tab.title}
                        </NavLink>
                    </NavItem>
                ))}
                <NavItem>
                    <button onClick={addTab} >+</button>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                {tabs.map(tab => (
                    <TabPane key={tab.id} tabId={tab.id}>
                        {tab.content}
                    </TabPane>
                ))}
            </TabContent>
        </div>
    );
}

function Qr_toImage3(data, d, i) {
    var qr = new QRious({
        element: document.getElementById(`qr+${i}`),
        value: data,
        size: d
    });
}

function saveQR(data) {
    
    
    let keys = Object.keys(window.localStorage);
    let i = keys.length + 1;

  
    window.localStorage.setItem(i.toString, data);
    console.log(keys, data);
    
}




    

