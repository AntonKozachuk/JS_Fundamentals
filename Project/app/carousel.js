    class Carousel {
				
        constructor(element) {
            // this.couple = 
            this.board = element;
            // add first two cards programmatically
            this.push()
            this.push()
            
            // handle gestures
            this.handle()
        }
        
        handle() {
            // list all cards
            this.cards = this.board.querySelectorAll('.card')
            
            // get top card
            this.topCard = this.cards[this.cards.length-1]

            this.likeTag = this.topCard.querySelector('.likeTag')
            this.nopeTag = this.topCard.querySelector('.nopeTag')
            this.likeBtn = this.topCard.querySelector('.likeBtn')
            this.nopeBtn = this.topCard.querySelector('.nopeBtn')

            this.nopeBtn.addEventListener('click', () => {
                this.topCard.style.transition = 'transform 800ms ease-out'
                if (this.nextCard) this.nextCard.style.transition = 'transform 200ms linear'

                this.topCard.style.transform =
                        'translateX(-2000px) translateY(-500px) rotate(-45deg)'
                        
                this.nopeTag.style.display = 'block'
            
                    // wait transition end
                    setTimeout(() => {
                        // remove swiped card
                        this.board.removeChild(this.topCard)
                        // add new card
                        this.push()
                        // handle gestures on new top card
                        this.handle()
                    }, 200)
            })

            this.likeBtn.addEventListener('click', () => {
                this.topCard.style.transition = 'transform 800ms ease-out'
                if (this.nextCard) this.nextCard.style.transition = 'transform 200ms linear'

                this.topCard.style.transform =
                        'translateX(2000px) translateY(-800px) rotate(45deg)'
                        
                this.likeTag.style.display = 'block'
   
                    // wait transition end
                    setTimeout(() => {
                        // remove swiped card
                        this.board.removeChild(this.topCard)
                        // add new card
                        this.push()
                        // handle gestures on new top card
                        this.handle()
                    }, 200)

                    let like = {}
                    like.name = this.topCard.querySelector('.card-title').textContent;
                    like.ulocation =  this.topCard.querySelector('#location').textContent;
                    like.img = window.getComputedStyle(this.topCard.querySelector('.img-top')).backgroundImage;
                    like.email =  this.topCard.querySelector('#email').textContent;
                    like.gender =  this.topCard.querySelector('#gender').textContent;
                    localStorage.setItem('like', JSON.stringify(like));
                    setTimeout(() => {
                        window.open('match.html', '_blank')
                    }, 200)
            })

            // get next card
            this.nextCard = this.cards[this.cards.length-2]
            
            // if at least one card is present
            if (this.cards.length > 0) {
                
                // set default top card position and scale
                this.topCard.style.transform =
                    'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)'
                
                // destroy previous Hammer instance, if present
                if (this.hammer) this.hammer.destroy()
                
                // listen for tap and pan gestures on top card
                this.hammer = new Hammer(this.topCard)
                this.hammer.add(new Hammer.Tap())
                this.hammer.add(new Hammer.Pan({
                    position: Hammer.position_ALL, threshold: 0
                }))
                
                // pass events data to custom callbacks
                this.hammer.on('tap', (e) => { this.onTap(e) })
                this.hammer.on('pan', (e) => { this.onPan(e) })
                
            }
            
        }
        
        onTap(e) {
            
            // get finger position on top card
            let propX = (e.center.x - e.target.getBoundingClientRect().left) / e.target.clientWidth
            
            // get degree of Y rotation (+/-15 degrees)
            let rotateY = 15 * (propX < 0.05 ? -1 : 1)
            
            // change the transition property
            this.topCard.style.transition = 'transform 100ms ease-out'
            
            // rotate
            this.topCard.style.transform =
                'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(' + rotateY + 'deg) scale(1)'
  
            // wait transition end
            setTimeout(() => {
                // reset transform properties
                this.topCard.style.transform =
                    'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)'
            }, 100)
            
        }
        
        onPan(e) {
            
            if (!this.isPanning) {
                
                this.isPanning = true
                
                // remove transition properties
                this.topCard.style.transition = null
                if (this.nextCard) this.nextCard.style.transition = null
                
                // get top card coordinates in pixels
                let style = window.getComputedStyle(this.topCard)
                let mx = style.transform.match(/^matrix\((.+)\)$/)
                this.startPosX = mx ? parseFloat(mx[1].split(', ')[4]) : 0
                this.startPosY = mx ? parseFloat(mx[1].split(', ')[5]) : 0
                
                // get top card bounds
                let bounds = this.topCard.getBoundingClientRect()
                
                // get finger position on top card, top (1) or bottom (-1)
                this.isDraggingFrom =
                    (e.center.y - bounds.top) > this.topCard.clientHeight / 2 ? -1 : 1
                 
            }
            
            // calculate new coordinates
            let posX = e.deltaX + this.startPosX
            let posY = e.deltaY + this.startPosY
         
            // get ratio between swiped pixels and the axes
            let propX = e.deltaX / this.board.clientWidth
            let propY = e.deltaY / this.board.clientHeight
            
            // get swipe direction, left (-1) or right (1)
            let dirX = e.deltaX < 0 ? -1 : 1
            
            if(dirX === 1){
                this.likeTag.style.display = 'block'
            } 
            if(dirX === -1){
                this.nopeTag.style.display = 'block'
            }
                
            if(window.getComputedStyle(this.likeTag,null).display === 'block') {
                this.nopeTag.style.display = 'none'
            }
            if(window.getComputedStyle(this.nopeTag,null).display === 'block') {
                this.likeTag.style.display = 'none'
            }

            // calculate rotation, between 0 and +/- 45 deg
            let deg = this.isDraggingFrom * dirX * Math.abs(propX) * 45
            
            // calculate scale ratio, between 95 and 100 %
            let scale = (95 + (5 * Math.abs(propX))) / 100
            
            // move top card
            this.topCard.style.transform =
                'translateX(' + posX + 'px) translateY(' + posY + 'px) rotate(' + deg + 'deg) rotateY(0deg) scale(1)'

            // scale next card
            if (this.nextCard) this.nextCard.style.transform =
                'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(' + scale + ')'
            
            if (e.isFinal) {
                
                this.isPanning = false
                
                let successful = false

                this.likeTag.style.display = 'none'
                this.nopeTag.style.display = 'none'

                // set back transition properties
                this.topCard.style.transition = 'transform 200ms ease-out'
                if (this.nextCard) this.nextCard.style.transition = 'transform 100ms linear'
                
                // check threshold
                if (propX > 0.25 && e.direction == Hammer.DIRECTION_RIGHT) {
          
                    successful = true
                    // get right border position
                    posX = this.board.clientWidth;
           
                } else if (propX < -0.25 && e.direction == Hammer.DIRECTION_LEFT) {
          
                    successful = true
                    // get left border position
                    posX = - (this.board.clientWidth + this.topCard.clientWidth)
           
                } else if (propY < -0.25 && e.direction == Hammer.DIRECTION_UP) {
          
                    successful = true
                    // get top border position
                    posY = - (this.board.clientHeight + this.topCard.clientHeight)        
                }
                
                if (successful) {

                    // throw card in the chosen direction
                    this.topCard.style.transform =
                        'translateX(' + posX + 'px) translateY(' + posY + 'px) rotate(' + deg + 'deg)'
                    
                    // wait transition end
                    setTimeout(() => {
                        // remove swiped card
                        this.board.removeChild(this.topCard)
                        // add new card
                        this.push()
                        // handle gestures on new top card
                        this.handle()
                    }, 200)

                    if(posX > 0) {
                        let like = {}
                        like.name = this.topCard.querySelector('.card-title').textContent;
                        like.ulocation =  this.topCard.querySelector('#location').textContent;
                        like.img = window.getComputedStyle(this.topCard.querySelector('.img-top')).backgroundImage;
                        like.email =  this.topCard.querySelector('#email').textContent;
                        like.gender =  this.topCard.querySelector('#gender').textContent;
                        localStorage.setItem('like', JSON.stringify(like));
                        window.open('match.html', '_blank')
                    }
               
                } else {
          
                    // reset cards position
                    this.topCard.style.transform =
                        'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)'
                    if (this.nextCard) this.nextCard.style.transform =
                        'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(0.95)'
          
                }
        
            }
            
        }
        
        push() {
            let card = document.createElement('div')
            card.classList.add('card')

        
            let div = document.createElement('div');
            div.className = "card-body";
            div.innerHTML = `<h4 class="card-title"></h4>
            <p class="card-text" id='location'></p>
            <p class="card-text" id='email'></p>   
            <p class="card-text" id='gender'></p>            
            <div class="dvButtons">
                <div id="btnNope" class="nopeBtn button"><i class="fa fa-times" aria-hidden="true"></i></div>
                <div id="btnLike" class="likeBtn button"><i class="fa fa-heart" aria-hidden="true"></i></div>
                <div class="clearBoth"></div>
            </div>`;

            let div2 = document.createElement('div');
            div2.className = "img-top";
            div2.innerHTML = '<div class="likeTag tag">Like</div><div class="nopeTag tag">Nope</div>';
            
            card.appendChild(div2);
            card.appendChild(div);
                            
            if (this.board.firstChild) {
                this.board.insertBefore(card, this.board.firstChild)
            } else {
                this.board.append(card)
            }

            let allProfiles = new Profiles;
            let title = document.querySelector('.card-title'),
                ulocation = document.getElementById('location'),
                img = document.querySelector('.img-top'),
                email = document.getElementById('email'),
                gender = document.getElementById('gender');


            allProfiles.getProfiles()
            .then(profiles => {
                for(let i = 0; i < profiles.results.length; i++) {
                        if(profiles.results[i].dob.age <= Number(active_user.ageTo) && profiles.results[i].dob.age >= Number(active_user.ageFrom)) {
                        title.textContent = profiles.results[i].name.first + ' ' + profiles.results[i].name.last + ', ' + profiles.results[i].dob.age;
                        ulocation.textContent = profiles.results[i].location.city + ', ' + profiles.results[i].location.country;
                        email.textContent = profiles.results[i].email;
                        gender.textContent = profiles.results[i].gender;
                        img.style.backgroundImage = `url(${profiles.results[i].picture.large})`;
                    ;}}
            });           
        }
        
        
    }

    let board = document.querySelector('#board')
    let carousel = new Carousel(board)
    
