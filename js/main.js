'use stript';

{
  const open=document.getElementById("open");
  const sp=document.querySelector(".spmenu");
  const close=document.getElementById("close");

  open.addEventListener("click",()=>{
   sp.classList.add("appear")
  });
  close.addEventListener("click",()=>{
   sp.classList.remove("appear")
  });
}
{
  const img = document.querySelectorAll(".art");
  const close=document.querySelectorAll("#closeko");
  img.forEach(click=>{
   click.addEventListener("click",()=>{
    document.getElementById(click.dataset.id).classList.add("show");
   });
  });
  close.forEach(click=>{
   click.addEventListener("click",()=>{
    document.getElementById(click.dataset.id).classList.remove("show");
   });
  });
}
{
  const options = {
    threshold: 0.8,
  };
  const target=document.querySelectorAll(".art");
  const observer=new IntersectionObserver(callback,options);
  function callback(entry,obs){
    entry.forEach(entries=>{
      if(!entries.isIntersecting){
        return;
      }
      entries.target.classList.add('app');
        obs.unobserve(entries.target);
    });
  }
  target.forEach(targets=>{
    observer.observe(targets);

  });
}