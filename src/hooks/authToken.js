
const authToken = (email) => {
const currentUser = {
email:email , 
}
console.log(currentUser);
fetch(`https://scholar-net-subrota.vercel.app/jwt` , {
method:"POST" ,
headers:{
"Content-Type" : "application/json"
} ,
body:JSON.stringify(currentUser)  , 
}) 
.then(res => res.json()) 
.then(data => localStorage.setItem("scholar-net" , data.token ))
};

export default authToken;