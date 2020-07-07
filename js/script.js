document.addEventListener("DOMContentLoaded",
function(event){

	function intro (event) {
		console.log(event);
	this.textContent="said it!";
	var name = document.getElementById("name").value;
	var message = "<h2>hello "+name+"!</h2>";
	document
	.getElementById("content")
	.innerHTML = message;

	if(name==="rati")
	{
		var title=
		document
		   .querySelector("#title")
		   .textContent;
		   title="chi bohot ganda nam hai";
		   document
		   .querySelector("#title")
		   .textContent=title;
	}
}
document
      .querySelector("button")
      .addEventListener("click",intro);
document.querySelector("body")
      .addEventListener("mousemove",
    function(event) {
    	if(event.shiftKey===true) {
    	console.log("x:"+event.clientX);
    	console.log("y:"+event.clientY);
          }
       }
    );
  }
);

/*var names = ["Aman", "Praveen", "Jain","jeson","robert","Johnsnow","Alexa","jordan"];

console.log("here is the Array containing names are:- "+names)

console.log("    ")

console.log("Output:-")

console.log("    ")
for(var i=0; i<names.length; i++) {

	if(names[i][0] == "j" || names[i][0] == "J")
            {
	         console.log("Goodbye "+names[i]);
	        }
    else
            {
             console.log("Hello "+names[i]);
            }

}*/
/*console.log(
	document.getElementById("title")
	);*/