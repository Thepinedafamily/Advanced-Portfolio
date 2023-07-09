//template_y7nqfo9
//service_cer4w4h
//HP7q5PkjqI0LlKzB6

function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.model__overlay--loading')
    const success = document.querySelector('.model__overlay--success')
    loading.classList += ' model__overlay--visible'
 emailjs
 .sendForm(
   'service_cer4w4h',
   'template_y7nqfo9',
   event.target,
   'HP7q5PkjqI0LlKzB6'
 ).then(() => {
    
    loading.classList.remove('model__overlay--visible')
    success.classList += ' model__overlay--visible'
   
 }).catch(() => {
    loading.classList.remove('model__overlay--visible')
    alert(
        'The email service is temporarily unavailable. Please contact me directly at geremypineda@gmail.com'
    )
    
 })

}
let isModelOpen = false
function toggleModel(){
   isModelOpen = !isModelOpen
    if (isModelOpen){
        isModelOpen = false
        return document.body.classList.remove('model--open')
    }
    isModelOpen = true
document.body.classList += 'model--open'

}