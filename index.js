var myFunction =()=>{
    var dis=document.getElementById("dropdown-content").style.display
    console.log(dis);
    if (dis==="flex"){
        dis="none"
    }else{
        dis="flex"
    }
    document.getElementById("dropdown-content").style.display = dis
    document.getElementById("dropdown-content-1").style.display = dis
}
var mySearch = ()=>{
    const Notfound = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKewRCzIwdCY9g5efTKKAuIAYV6stILuZN0g&usqp=CAU"

    var search_value = document.getElementById("search").value
    if (search_value){
        document.querySelector(".container").style.display="none"
            data =d1[0]
            string_obj=""
            string_obj+=`<h2>YourSearch: ${search_value}</h2>
            
            <div class="card-container""> `
            search_value = search_value.toLowerCase();
            for (let book of data) {
                if(book.title.toString().toLowerCase().search(search_value)!==-1|| book.authors.toString().toLowerCase().search(search_value)!==-1){
                    string_obj+=`<div class="card">
                    <div class="thumbnail">
                    <img src="${book.thumbnailUrl?book.thumbnailUrl:Notfound}"}"/>
                    <div class="discripation"
                    <h3>${book.title?book.title:"Not-found"}</h3>
                    <p>${book.authors.toString()}</p>
                    </div>
                    </div>
                    </div>`
                    console.log("ok");

                }
                
            }
            string_obj+="</div>";
            console.log(string_obj);
            document.querySelector(".container-search").innerHTML=string_obj  
            document.querySelector(".container-search").style.display="block"
  

    }else{
        document.querySelector(".container").style.display="block"
        document.querySelector(".container-search").style.display="none"

    }
}

var d1 =[]
fetch("./Data/book.json").then(response => {
    return response.json();
}).then(data => {
    d1.push(data)
    const allCategories = [
        
        "Java",
        "Software Engineering",
        "Internet",
        "Web Development",
        "Microsoft .NET",
        "Microsoft",
        "PowerBuilder",
        "Client-Server",
        "Computer Graphics",
        "Object-Oriented Programming",
        "S",
        "Networking",
        "Theory",
        "Programming",
        "Python",
        "Mobile Technology",
        "Business",
        "P",
        "XML",
        "Perl",
        "java",
        "Miscella",
        "Object-Technology Programming",
        "internet",
        ".NET",
        "Algorithmic Art",
        "PHP",
        "SOA",
        "Computer Graph",
        "Client Server",
        "In Action",
        "Software Development",
        "Open Source",
        "Next Generation Databases",
        "Miscellaneous",
        "Mobile",
        "other"
    ]
    const Notfound = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKewRCzIwdCY9g5efTKKAuIAYV6stILuZN0g&usqp=CAU"
    const categoriesId = ['java', 'software-engineering', 'internet', 'web-development',  'microsoft-.net', 'microsoft',  'powerbuilder', 'client-server', 'computer-graphics', 'object-oriented-programming', 's', 'networking', 'theory', 'programming', 'python', 'mobile-technology', 'business', 'p', 'xml', 'perl', 'java', 'miscella', 'object-technology-programming', 'internet', '.net', 'algorithmic-art', 'php', 'soa', 'computer-graph', 'client-server', 'in-action', 'software-development', 'open-source', 'next-generation-databases','miscellaneous','mobile', 'other']
    
    
    const populateBooks = (bookList) => {
        string_obj=""
        for (let i =0; i<categoriesId.length; i++) {
            string_obj+=`<h2> ${allCategories[i]}</h2>
            <div class="card-container" id="${categoriesId[i]}"> `
   
            for (let book of bookList) {
                
                if(book.categories.includes(allCategories[i])){
                    string_obj+=`<div class="card">
                    <div class="thumbnail">
                    <img src="${book.thumbnailUrl?book.thumbnailUrl:Notfound}" alt="${allCategories[i]}"/>
                    <div class="discripation"
                    <h3>${book.title?book.title:"Not-found"}</h3>
                    <p>${book.authors.toString()}</p>
                    </div>
                    </div>
                    </div>`

                }
                
            }
            string_obj+="</div>";
        };
        return string_obj
    }

    document.querySelector(".container").innerHTML=populateBooks(data)



    })
