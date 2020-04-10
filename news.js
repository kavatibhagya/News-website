function newsFetch() {
    fetch("http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ca46e164792a44e897560ff6f4a577e1")
    .then(response => response.json())
    .then(data =>{
        
         const newsData = document.getElementById("newsData");
         const mainContent = document.getElementById("mainContent");
         for(var i=0; i<data.articles.length; i++){
         const authorName = document.createElement("div");
         
        authorName.innerText = data.articles[i].author;

        const title = document.createElement("div");
        title.innerText = data.articles[i].title;
        title.classList.add('titleName');

        const image = document.createElement('img');
        image.setAttribute("src", data.articles[i].urlToImage);
        image.setAttribute("height", "500");
        image.setAttribute("width" , "500"); 
        
        const newsContent = document.createElement("div");
        newsContent.innerText = data.articles[i].content;


        newsData.appendChild(authorName);
         newsData.appendChild(title);
         newsData.appendChild(image);
         mainContent.appendChild(newsContent)
         }

    }) 
    }
  newsFetch();