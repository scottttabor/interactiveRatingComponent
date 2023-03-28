const ratingCircle = document.getElementsByClassName('grabber');

const submitButton = document.getElementById('submitFormBtn');

const ratingCard = document.getElementById('ratingCardEntry');
const postRatingCard = document.getElementById('postRatingCard');



for (i = 0; i < ratingCircle.length; i++) {
    ratingCircle[i].addEventListener('click', function() {
        for (i = 0; i < ratingCircle.length; i++) {
                ratingCircle[i].classList.remove('clickedRating');
            }
    
            this.classList.add('clickedRating');
    
       
      
        
    })
}


submitButton.addEventListener('click', () => {
    ratingCard.classList.add('displayOff');
    postRatingCard.classList.remove('displayOff');
})






