let title = document.getElementById('title');
let price = document.getElementById('price');
let category = document.getElementById('category');
let description = document.getElementById('description');
let submit = document.getElementById('submit');

let datapro=[];

if(localStorage.getItem('products') != null)
{
    datapro = JSON.parse(localStorage.getItem('products'));
    showdata();
}


function addProduct(){ 


    if (validationtitle()==true) {
        let  newpro={
            title:title.value,
            price:price.value,
            category:category.value,
            description:description.value,
            

    }
    
    datapro.push(newpro);
   localStorage.setItem('products' , JSON.stringify(datapro))
   showdata();
     clearProduct();
   
    }else{
        document.getElementById('validmess').innerHTML = 'Invalid title';
    }
   
   
}

function clearProduct(){
   title.value ="";
    price.value ="";
    category.value ="";
    description.value ="";
}


function showdata(){
    let table=``;
    for (let i = 0; i < datapro.length; i++) {
        table +=`
        <tr>
        <td>${i}</td>
        <td>${datapro[i].title}</td>
        <td>${datapro[i].price}</td>
        <td>${datapro[i].category}</td>
        <td>${datapro[i].description}</td>
        <td><button onclick='deleteProudcts(${i})'>Delete</button></td>
        <td><button onclick='setdata(${i})'>update</button></td>  
    </tr>
    `
    }

    document.getElementById('tablebody').innerHTML = table;

}

function deleteProudcts(indexProduct)
{
    datapro.splice(indexProduct,1)
    localStorage.setItem('products' , JSON.stringify(datapro))
    showdata();

}
function searchterm(term)

{
    let table=``;
    for (let i = 0; i < datapro.length; i++) 
    { if (datapro[i].title.toLowerCase().includes(term.toLowerCase())==true) {

        
            table +=`
            <tr>
            <td>${i}</td>
            <td>${datapro[i].title}</td>
            <td>${datapro[i].price}</td>
            <td>${datapro[i].category}</td>
            <td>${datapro[i].description}</td>
            <td><button onclick='deleteProudcts(${i})'>Delete</button></td>  
            <td><button onclick='setdata(${i})'>update</button></td>
        </tr>
        `
        }
    
        document.getElementById('tablebody').innerHTML = table;
    }
}
updata=0;
function setdata(id){
updata=id;
    document.getElementById('title').value=datapro[id].title;
    document.getElementById('price').value=datapro[id].price;
    document.getElementById('category').value=datapro[id].category;
    document.getElementById('description').value=datapro[id].description;
    
}
function updatedata(){


    datapro[updata].title=document.getElementById('title').value;
   datapro[updata].price= document.getElementById('price').value;
   datapro[updata].category= document.getElementById('category').value;
   datapro[updata].description= document.getElementById('description').value;
     
   showdata()
}


function validationtitle(){
var regex=/^[a-z]{3,8}$/
if (regex.test(title.value)==true) {
    return true
    
}
else{
    return false
}



}