const ratingCircle = document.getElementsByClassName('grabber');




for (i = 0; i < ratingCircle.length; i++) {
    ratingCircle[i].addEventListener('click', function() {
        for (i = 0; i < ratingCircle.length; i++) {
                ratingCircle[i].classList.remove('clickedRating');
            }
    
            this.classList.add('clickedRating');
    
       
      
        
    })
}







