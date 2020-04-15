const strawberry = document.getElementById('berry');
strawberry.style.backgroundColor = "red";
const orange = document.querySelector('li[data-foodtype="squishy"]');
orange.style.backgroundColor = "orange";
const list = document.getElementsByTagName('li');
console.log(list);


for (let i = 0; i < list.length; i++){
    console.log(list[i]);
    list[i].style.width = "100px";
    list[i].style.listStyleType = "none";

    if(list[i].innerText === "Pear"){
        list[i].style.backgroundColor = "green"
    }
    console.log(list[i].innerText);
}

const list2 = document.querySelectorAll('li');
console.log(list2);

list2.forEach((element) =>{
    element.style.border = "solid";
    element.style.borderWidth = "1px";
    console.log(element.innerText);
});