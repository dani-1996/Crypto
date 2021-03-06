import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../services/cryptoApi';
import cryptoApi from "../services/cryptoApi"

import LineChart from "./LineChart"

const {Title, Text} = Typography
const {Option} = Select
const Cryptodetails = () => {


   
    const coinId  = useParams();
    const [timeperiod, setTimeperiod] = useState("7d")
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId[Object.keys(coinId)[0]])
    const { data: coinHistory} = useGetCryptoHistoryQuery({coinId, timeperiod});
    const cryptoDetails = data?.data?.coin;
    

 
    if(isFetching) return "Loading..."
    console.log(coinHistory?.data?.coin)
    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];
let stats=[]
let genericStats=[]
 if(cryptoDetails){  stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails.price && millify(cryptoDetails.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptoDetails.volume && millify(cryptoDetails.volume)}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`, icon: <TrophyOutlined /> },
  ];

    genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptoDetails.approvedSupply ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${millify(cryptoDetails.totalSupply)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${millify(cryptoDetails.circulatingSupply)}`, icon: <ExclamationCircleOutlined /> },
  ];}
if (!cryptoDetails) return <h1>"Loading..."</h1>
    return (
        
       <Col className="coin-detail-container">
           <Col className="coin-heading-container">
               <Title level={2} className="coin-name"> 
               {cryptoDetails.name} ({cryptoDetails.slug})
               </Title>
               <p>
               {cryptoDetails.name} aktueller Preis : {millify(cryptoDetails.price)}
               </p>
           </Col>
           {/* <Select defaultValue ="7d"
            className="select-timeperiod"
            placeholder="W??hle einen Zeitraum"
            onChange={(value)=>setTimeperiod(value)}
            >
               {time.map((date)=>
                   <Option key={date} >{date}</Option>
               )} 
            </Select> */}

               {/* <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails.price)} coinName={cryptoDetails.name} /> */}

            <Col className="stats-container" >
                <Col className="coin-value-statistics">
                    <Col className="coin-value-statistics-heading">
                    <Title level={3} className="coin-details-heading">
                        {cryptoDetails.name} Value Statistics
                    </Title>
                    <p>??berblick ??ber die Statistiken von {cryptoDetails.name}</p>
                    </Col>
                    {stats.map(({icon, title, value}) =>
                    <Col className="coin-stats">
                        <Col className="coin-stats-name">
                            <Text>{icon}</Text>
                            <Text>{title}</Text>
                        </Col>
                        <Text className="stats" >{value}</Text>
                    </Col> )}
                </Col>
                

                <Col className="other-stats-info">
                    <Col className="coin-value-statistics-heading">
                    <Title level={3} className="coin-details-heading">
                        andere Statistiken
                    </Title>
                    {/* <p>??berblick ??ber Statistiken aller Kryptow??hrungen</p> */}
                    </Col>
                    {genericStats.map(({icon, title, value}) =>
                    <Col className="coin-stats">
                        <Col className="coin-stats-name">
                            <Text>{icon}</Text>
                            <Text>{title}</Text>
                        </Col>
                        <Text className="stats" >{value}</Text>
                    </Col> )}
                </Col>



            </Col>
            <Col className="coin-desc-link">
                <Row  className="coin-desc">
                    <Title level={3} className="coin-details-heading">
                        Was ist {cryptoDetails.name}?
                        {HTMLReactParser(cryptoDetails.description)}

                    </Title>
                </Row>
                <Col className="coin-links">
                    <Title level={3} className="coin-details-heading">
                        {cryptoDetails.name} Links were
                    </Title>
                    {cryptoDetails.links.map((link)=>(
                    <Row className="coin-link" key={link.name} >
                        <Title level={5} className="link-name">
                            {link.type}
                        </Title>
                        <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
                    </Row>))}
                </Col>
            </Col>
       </Col>
    )
}

export default Cryptodetails
