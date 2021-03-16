/********************************************/
//Global scope
//Define book object here 
var  books=[{name:"The Vanishing Half",author: "Brit Bennett", price:9.99,orgin:"USA"},
{name:"The Art of Seduction",author: "Robert Greene", price:45.99,orgin:"USA"},
{name:"The Hunger Games",author: "Suzanne Collins", price:9.99,orgin:"USA"},
{name:"Kitchen",author: "Banna Yoshimoto", price:20.50,orgin:"Japan"},
{name:"Autobiography of Yogi",author: "Parmaahansa Yogananda", price:15.00,orgin:"India"},
{name:"The Handmaid's Tale",author: "Margaret Atwood", price:13.59,orgin:"Canada"},
{name:"Three Day Road",author: "Joseph Boyden", price:15.00,orgin:"Canada"},
{name:"Middlemarch",author: "George Eliot", price:3.95,orgin:"UK"},
{name:"Harry Potter and the Sorcerer's Stone",author: "JK Rowling", price:11.47,orgin:"UK"},
{name:"Great Expectations",author: "Charles Dickends", price:20.98,orgin:"UK"},
{name:"Nineteen Eighty-Four",author: "George Orwell", price:9.45,orgin:"UK"},
{name:"The Hobbit",author: "JRR Tolken", price:15.99,orgin:"UK"},
{name:"The Catcher in the Rye",author: "JD Salinger", price:9.99,orgin:"USA"},
{name:"And Then There Were None",author: "Agatha Christie", price:19.99,orgin:"USA"},
{name:"Heidi",author: "Johanna Spyri", price:6.99,orgin:"Swiss"},
{name:"The Tale of Peter Rabbit",author: "Beatrix Potter", price:19.99,orgin:"UK"},
{name:"Cosmos",author: "Carl Sagan", price:15.99,orgin:"USA"},
{name:"The Great Gatsby",author: "F.Scott Fitzgerald", price:9.99,orgin:"USA"},
{name:"The Kite Runner ",author: "Khaled Hosseini", price:25.99,orgin:"USA"},
{name:"Pride and Prejudice",author: "Jane Austen", price:9.59,orgin:"UK"},


];



/********************************************/
function getDiscountedPrices()
{
    
    
    books.forEach(function(p){

       
        var discount =getDiscountPercent(p.orgin);
         p.saleprice= p.price-(p.price*discount);
         console.log("\n name:"+p.name+" "+"author:"+p.author+" "+"price:$"+p.price+" "+"saleprice:"+p.saleprice);
         
    });
}

function getDiscountPercent(orgin)
{
    if(orgin=="USA"){
        return .10;
    }
    else if(orgin=="Canada"){
        
        return .12;
    }
    else if (orgin =="UK")
    {
       return .05;
    }
    else
    {
        return .15
    }

}