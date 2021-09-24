import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoNewsApiHeaders = {
   
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': '1a3390022dmsh66d219868f2abcbp1eb947jsn02e4a72595c5'
      
}

const baseUrl =  'https://bing-news-search1.p.rapidapi.com'
const createRequest = (url) => ({url,headers:cryptoNewsApiHeaders})

export const cryptoNewsApi= createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count})=> createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        }),
      
}),
})


export const {
    useGetCryptoNewsQuery
} = cryptoNewsApi