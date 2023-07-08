const getLatestNews = ()=>{
    let url = new URL('https://api.newscatcherapi.com/v2/search?q=sports&from=2023/7/7&countries=KR&page_size=2');
    let header = new Headers({'x-api-key':'XQNVSKgxJNZSLRXolhDIVFlC2Wy9ZozRSgtCaFRyJJg'});
    let response = fetch(url,{headers:header});
    
}

getLatestNews();