// const messagesRef = firebase.database().ref('contactData');

// $('#contactForm').submit(function (e) {
//     e.preventDefault();

//     const newMessageRef = messagesRef.push();
//     newMessageRef.set({
//         name: $('.fullname').val(),
//         message: $('.message').val()
//     });

//     $('.success-message').show();

//     $('#contactForm')[0].reset();
// });

// const submitBtn = document.querySelector("#submit");

// let userName = document.querySelector("#userName");
// let userMessage = document.querySelector("#userMessage");

// const db = firebase.database().ref("contactData");

// submitBtn.addEventListener('click', function(){
//     let userNameInput = userName.value;
//     let userMessageInput = userMessage.value;

//     db.doc().set({
//         name: userNameInput,
//         message : userMessageInput
//     }).then(function(){
//         console.log("saved data");
//     }).catch(function(err){
//         console.log(err);
//     })

// });