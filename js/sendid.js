


function el(css){
	return document.querySelector(css);
};
// let comment = document.getElementsByClassName('img-hover');




//  function sendClassNameToB() {
//    let classNameToSend = 'active'; // Replace "desiredClassName" with the class name you want to pass
//    localStorage.setItem('className', classNameToSend);
//  }
// // el('#send').addEventListener('onclick', sendClassNameToB);


// for (var i = 0; i < comment.length; i++) {
//   comment[i].addEventListener('click', sendClassNameToB);
// }



 document.getElementById('button1').addEventListener('click', function () {
   sendDataToB('div1', 'active');
 });
  // Event listener function for Button 2
 document.getElementById('button2').addEventListener('click', function () {
   sendDataToB('div2', 'active');
 });
 document.getElementById('button3').addEventListener('click', function () {
   sendDataToB('div3', 'active');
 });
 document.getElementById('button4').addEventListener('click', function () {
   sendDataToB('div4', 'active');
 });



 // Function to handle sending data to b.html using Local Storage
 function sendDataToB(targetId, newClassName) {
   let dataToSend = {
     id: targetId,
     className: newClassName,
   };
   localStorage.setItem('data', JSON.stringify(dataToSend));
   window.location.href = '/pages/project-one.html'; // Navigate to b.html after setting the data in Local Storage
 }