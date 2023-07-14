let news = [];
let menus = document.querySelectorAll(".menus button");
menus.forEach(menu => menu.addEventListener("click", getNewsByTopic));

let searchButton = document.getElementById("search-button");


// const getLatestNews = async()=>{
//     let url = new URL('https://api.newscatcherapi.com/v2/search?q=sports&from=2023/7/7&countries=KR&page_size=2');
//     let header = new Headers({'x-api-key':'XQNVSKgxJNZSLRXolhDIVFlC2Wy9ZozRSgtCaFRyJJg'});
//     let response = await fetch(url,{headers:header});
//     let data = await response.json()
//     news = data.articles;
//     console.log(news);

//     render();
// };

function getNewsByTopic(event) {
    console.log("클릭됨", event.target.textContent);
}

const getNewsByKeyword = () =>{
    let keyword = document.getElementById("search-input").value;
    console.log(keyword);
}

// const render = () => {
//     let newsHTML = "";
//     newsHTML = news.map((item) => {
//         return `<div class="row news">
//         <div class="col-lg-4">
//             <img class="news-img-size" src="${item.media}" alt="">
//         </div>
//         <div class="col-lg-8">
//             <h2>${item.title}</h2>
//             <p>
//                 ${item.summary}
//             </p>
//             <div>
//                 ${item.published_date}
//             </div>
//         </div>
//     </div>`;
//     }).join("");

//     console.log(newsHTML);

//     document.getElementById("news-board").innerHTML=newsHTML;
// }

// getLatestNews();

searchButton.addEventListener("click", getNewsByKeyword);