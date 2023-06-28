import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import './PWA.css';

export function UITabs() {


    return (

        <div className={'idiv'}>
            <button>hello</button>
            <button>hello</button>
        </div>


    );
}




//    const [activeTab, setActiveTab] = useState('1');
//    const [tabs, setTabs] = useState([
//        {
//            title: 'First Tab',
//            content: (
//                <img
//                    src="https://picsum.photos/200"
//                    alt="Random Placeholder Image"
//                />
//            ),
//            id: '1'
//        }
//    ]);
//    const toggle = tab => {
//        if (activeTab !== tab) setActiveTab(tab);
//    };

//    const addNewTab = () => {
//        const newTabIndex = tabs.length + 1;
//        const newTabs = [
//            ...tabs,
//            {
//                title: `Tab ${newTabIndex}`,
//                content: `This is Tab ${newTabIndex}.`,
//                id: `${newTabIndex}`
//            }
//        ];
//        setTabs(newTabs);
//        setActiveTab(`${newTabIndex}`);
//    };

//    return (
//        <div>
//            <Nav tabs>
//                {tabs.map(tab => (
//                    <NavItem key={tab.id}>
//                        <NavLink
//                            className={activeTab === tab.id ? 'active' : ''}
//                            onClick={() => toggle(tab.id)}
//                        >
//                            {tab.title}
//                        </NavLink>
//                    </NavItem>
//                ))}
//                <NavItem>
//                    <button onClick={addNewTab}>+</button>
//                </NavItem>
//            </Nav>
//            <TabContent activeTab={activeTab}>
//                {tabs.map(tab => (
//                    <TabPane key={tab.id} tabId={tab.id}>
//                        {tab.content}
//                    </TabPane>
//                ))}
//            </TabContent>
//        </div>
//    );


{/*    {isQrActive ? <div id='box'>*/ }
{/*        <QrReader*/ }
{/*            onResult={(result, error) => {*/ }
{/*                if (!!result) {*/ }
{/*                    setData(result?.text);*/ }
{/*                    setScanClicked(true);*/ }

{/*                }*/ }

{/*                if (!!error) {*/ }
{/*                    console.error(error);*/ }
{/*                }*/ }
{/*            }} />*/ }

{/*    </div> : null}*/ }
{/*    {scanClicked && isQrActive ? < h1 style={{ backgroundColor: "green" }}>successfully scanned the Qr-Code</h1> : null}*/ }
{/*    <img src='./ressources/left_arrow.jpg' style={{  }}></img><img src='./ressources/right_arrow.jpg'></img>*/ }
{/*    <Button*/ }
{/*        onClick={() => {*/ }

{/*            setIsQrActive(!isQrActive);*/ }

{/*        }}*/ }
{/*        color="success" type="button" size="lg" block='true'*/ }
{/*    >scan</Button>*/ }
{/*    <Button*/ }
{/*        onClick={() => {*/ }
{/*            setIsClicked(true);*/ }
{/*            setData(temp);*/ }
{/*            console.log('success');*/ }
{/*        }}*/ }
{/*        color="success" type="button" size="lg" block='true'*/ }
{/*    >Create</Button>*/ }
{/*    <div style={{ marginLeft: width1 }}  >*/ }
{/*        canvas zeichnet qr-code */ }
{/*        <canvas id="qr" ></canvas>*/ }
{/*    </div>*/ }
{/*    <button onClick={() => {*/ }
{/*        console.log(data, 'data');*/ }


{/*        window.localStorage.setItem('1', data);*/ }

{/*        setSavedV(window.localStorage.getItem('1'));*/ }

{/*    }}*/ }
{/*        color="success" type="button" size="lg" block='true'*/ }
{/*    >save</button>*/ }
{/*    <h1>{savedV}</h1>*/ }
{/*    <h1>{temp}</h1>*/ }


