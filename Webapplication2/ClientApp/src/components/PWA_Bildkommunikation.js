import React, { Component, useState, useEffect, useRef } from 'react';
import { Button, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { QrReader } from "react-qr-reader";
import * as QRious from "qrious";


export function UI() {
    const [data, setData] = useState('No Result');
    const [sizes, setSizes] = useState(200);
    const [isClicked, setIsClicked] = useState(false);
    const [isQrActive, setIsQrActive] = useState(false);
    const [scanClicked, setScanClicked] = useState(false);
    const [temp, setTemp] = useState("");
    const [width1, setWidth1] = useState(window.screen.width / 2 - sizes);
    const [activeTab, setActiveTab] = useState('1');
    const [tabs, setTabs] = useState([
        {
            title: 'First Tab',
            content: (
                <TabPane tabId="1">
                    {isQrActive ? (
                        <div id='box'>
                            <QrReader
                                onResult={(result, error) => {
                                    if (!!result) {
                                        setData(result?.text);
                                        setScanClicked(true);
                                    }

                                    if (!!error) {
                                        console.error(error);
                                    }
                                }}
                            />
                        </div>
                    ) : null}
                    {scanClicked && isQrActive ? (
                        <h1 style={{ backgroundColor: "green" }}>successfully scanned the Qr-Code</h1>
                    ) : null}
                   
                    <Button
                        onClick={() => {
                            setIsQrActive(!isQrActive);
                        }}
                        color="success"
                        type="button"
                        size="lg"
                        block='true'
                    >
                        scan
                    </Button>
                    <Button
                        onClick={() => {

                        }}
                        color="success"
                        type="button"
                        size="lg"
                        block="true"
                    >
                        existing codes
                    </Button>
                    <img
                        src='./ressources/left_arrow.png'
                        style={{}}
                        alt="Left Arrow"
                        onClick={() => {
                            if (activeTab === '1') {
                                setActiveTab((tabs.length - 1).toString());
                            } else {
                                const tabIndex = parseInt(activeTab) - 1;
                                setActiveTab(tabIndex.toString());
                            }
                        }}
                    />
                    <img
                        src='./ressources/right_arrow.png'
                        width="200px"
                        height="200px"
                        alt="Right Arrow"
                        onClick={() => {
                            if (activeTab === (tabs.length - 1).toString()) {
                                setActiveTab('1');
                            } else {
                                const tabIndex = parseInt(activeTab) + 1;
                                setActiveTab(tabIndex.toString());
                            }
                        }}
                    />
                </TabPane>
            ),
            id: '1'
        }
    ]);

    const increaseActiveTab = () => {
        setActiveTab((prevActiveTab) => {
            const newActiveTab = parseInt(prevActiveTab) + 1;
            if (newActiveTab >= tabs.length) {
                return '1'; // Wrap around to the first tab
            }
            return newActiveTab.toString();
        });
    };

    const decreaseActiveTab = () => {
        setActiveTab((prevActiveTab) => {
            const newActiveTab = parseInt(prevActiveTab) - 1;
            if (newActiveTab <= 0) {
                return (tabs.length - 1).toString(); // Wrap around to the last tab
            }
            return newActiveTab.toString();
        });
    };

    const toggle = (tabIndex) => {
        if (activeTab !== tabIndex) setActiveTab(tabIndex);
    };

    const addTab = () => {
        const newTabIndex = tabs.length;
        const newTabs = [
            ...tabs,
            {
                title: `Tab ${newTabIndex + 1}`,
                content: (
                    <TabPane tabId={newTabIndex.toString()}>
                        <p>
                            <canvas id='qr'></canvas>
                            <img
                                src='./ressources/left_arrow.png'
                                alt="Left Arrow"
                                onClick={() => {
                                    if (activeTab === newTabIndex.toString()) {
                                        setActiveTab((tabs.length - 1).toString());
                                    } else {
                                        const tabIndex = parseInt(activeTab) - 1;
                                        setActiveTab(tabIndex.toString());
                                    }
                                }}
                            />
                            <img
                                src='./ressources/right_arrow.png'
                                width="200px"
                                height="200px"
                                alt="Right Arrow"
                                onClick={() => {
                                    if (activeTab === (tabs.length - 1).toString()) {
                                        setActiveTab('1');
                                    } else {
                                        const tabIndex = parseInt(activeTab) + 1;
                                        setActiveTab(tabIndex.toString());
                                    }
                                }}
                            />
                        </p>
                    </TabPane>
                    
                )
            }
        ];
        setTabs(newTabs);
        setActiveTab(newTabIndex);
    };


    const [savedV, setSavedV] = useState("");

    useEffect(() => {
        if (isClicked === true) {
            Qr_toImage3(data, sizes);
        }
    }, [data]);

    useEffect(() => {
        Qr_toImage3("", 0);
    }, []);

    return (
        <div>
            <Nav tabs>
                {tabs.map((tab, index) => (
                    <NavItem key={index}>
                        <NavLink
                            className={activeTab === index.toString() ? 'active' : ''}
                            onClick={() => toggle(index.toString())}
                        >
                            {tab.title}
                        </NavLink>
                    </NavItem>
                ))}
                <NavItem>
                    <Button color="link" onClick={addTab}>
                        Add Tab
                    </Button>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1"></TabPane>
                {tabs.map((tab, index) => (
                    <TabPane key={index} tabId={index}>
                        <p>{tab.content}</p>
                       
                    </TabPane>
                ))}
            </TabContent>
        </div>
    );
}

function Qr_toImage3(data, d) {
    var qr = new QRious({
        element: document.getElementById('qr'),
        value: data,
        size: d
    });
}
