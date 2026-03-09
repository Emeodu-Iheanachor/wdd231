const courses = [

{code:"WDD 130",credits:2,completed:true,type:"WDD"},
{code:"WDD 131",credits:2,completed:true,type:"WDD"},
{code:"WDD 231",credits:2,completed:false,type:"WDD"},
{code:"CSE 110",credits:2,completed:false,type:"CSE"},
{code:"CSE 111",credits:2,completed:false,type:"CSE"}

];

const container = document.querySelector("#courses");
const creditDisplay = document.querySelector("#credits");

function displayCourses(list){

container.innerHTML="";

list.forEach(course=>{

const div=document.createElement("div");

div.classList.add("course");

if(course.completed){
div.classList.add("completed");
}

div.textContent = course.code;

container.appendChild(div);

});

const total = list.reduce((sum,c)=>sum+c.credits,0);

creditDisplay.textContent = total;

}

displayCourses(courses);

document.querySelector("#all").addEventListener("click",()=>displayCourses(courses));

document.querySelector("#wdd").addEventListener("click",()=>{
displayCourses(courses.filter(c=>c.type==="WDD"));
});

document.querySelector("#cse").addEventListener("click",()=>{
displayCourses(courses.filter(c=>c.type==="CSE"));
});