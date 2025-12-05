let load =document.querySelector('#load')
window.addEventListener('load',function(){
      setTimeout(() => {
        load.style.display = 'none';
        load.style.opacity
        // Re-enable scrolling
        document.body.style.overflow = 'auto';
    }, 2000);
})