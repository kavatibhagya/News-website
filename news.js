function newsFetch() {
    fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ca46e164792a44e897560ff6f4a577e1")
    .then(response => response.json())
    .then(data =>{
        
         const newsData = document.getElementById("newsData");
         for(var i=1; i<6; i++){
         

        const title = document.createElement("div");
        title.innerText = data.articles[i].title;
        title.classList.add('titleName');

        const authorName = document.createElement("div");
        authorName.innerText = data.articles[i].author;
        authorName.classList.add('authors');

        const image = document.createElement('img');
        image.setAttribute("src", data.articles[i].urlToImage);
        // image.setAttribute("height", "500");
        // image.setAttribute("width" , "1000"); 
        image.classList.add('images');
        
        const newsContent = document.createElement("div");
        newsContent.innerText = data.articles[i].content;
        newsContent.classList.add('contents');

        newsData.appendChild(title);
        newsData.appendChild(authorName);
        newsData.appendChild(image);
        newsData.appendChild(newsContent);
         }

    }) 
    }
  newsFetch();