$(document).ready(function(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=74c88037b87f4a468f4b920354edcd49";
    $.ajax({
        url:url,
        method: "GET",
        dataType: "Json",
        success: function(news){
            let output= "";
            let latestNews = news.articles;
            for(var i in latestNews)
            {
                output +=`<div class="av" style="height="150px, width="100px">
                <div class="card" style="width: 18rem">
        <img src="${latestNews[i].urlToImage}" class="card-img-top" alt="..." height="220px">
        <div class="card-body">
          <h5 class="card-title">${latestNews[i].title}</h5>
          <a href="${latestNews[i].url}" target="_blank" class="stretched-link"></a>
        </div>
      </div> 
                </div>
                `
                ;
            }
            if(output !== "")
            {
                $("#newsResults").html(output);
            }
        },
        error: function(){
            alert("unable to fetch news");
        }
    })
    });