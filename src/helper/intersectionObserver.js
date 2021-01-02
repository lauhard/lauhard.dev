
    let observe = function (_target, callback) {
     let options = {
          rootMargin: '0px',
          threshold: 1
     };
     let handler = (entries, observer) => {
          entries.forEach(entry => {
               callback(entry)    
          });
     };
     let observer = new IntersectionObserver(handler, options);
     console.log(observer)
     let target = document.querySelector(_target);
     observer.observe(target);
}
     
export default observe;
     