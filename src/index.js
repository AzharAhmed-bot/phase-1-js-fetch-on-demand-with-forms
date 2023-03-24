const init = () => {
    const formito=document.querySelector('form')
    formito.addEventListener('submit',(e)=>{
    e.preventDefault()
    const input=e.target.searchByID.value
    console.log(input);

  fetch(`http://localhost:3000/movies/${input}`)
  .then(resp=>resp.json())
  .then(data=>{
   const title=document.querySelector('h4');
   const summary=document.querySelector('p');
    title.innerText=data.title;
    summary.innerText=data.summary
   })
})
}


document.addEventListener('DOMContentLoaded', init);