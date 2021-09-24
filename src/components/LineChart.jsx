
// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import { Col, Row, Typography } from 'antd';

// const { Title } = Typography;

// const coinPrice = [];
//   const coinTimestamp = [];
// let data = [];
// let options=[]

// // //////////////////////////////////
// // normal fetch 


// async function getHistory () {
    
//     try{
//     let response = await fetch("https://coinranking1.p.rapidapi.com/coin/1/history/7d", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "coinranking1.p.rapidapi.com",
// 		"x-rapidapi-key": "1a3390022dmsh66d219868f2abcbp1eb947jsn02e4a72595c5"
// 	}
// })
// let data= await response.json()
//  for (let i = 0; i < 100; i ++ ) {
// coinPrice.push(data?.history[i].price)}
// console.log(coinPrice)

// } catch {
//   console.log("error")
// }
// getHistory()

//   // coinPrice = data.data.history.
//     // for (let i = 0; i < 100; i ++ ) {
//     //    if(data.data.history===undefined){return} else {coinPrice.push(data?.history[i].price)}
        
//     // }console.log(coinPrice)
    
//     //   for (let i = 0; i < data?.history.length; i += 1) {
//     //     coinTimestamp.push(new Date(data?.history[i].timestamp).toLocaleDateString());
//     //   }
//       console.log("sa")

// }



// //////


// const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  


//   if (coinPrice.length>50) { data = {
//     labels: coinTimestamp,
//     datasets: [
//       {
//         label: 'Price In USD',
//         data: coinPrice,
//         fill: false,
//         backgroundColor: '#0071bd',
//         borderColor: '#0071bd',
//       },
//     ],
//   };

//   options = {
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//           },
//         },
//       ],
//     },
//   };
//   }
//   return (
//     <>
//       <Row className="chart-header">
//         <Title level={2} className="chart-title">{coinName} Price Chart </Title>
//         <Col className="price-container">
//           <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
//           <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
//         </Col>
//       </Row>
//       <Line data={data} options={options} />
//     </>
//   );
// };

// export default LineChart;