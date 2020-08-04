const bouton1 = document.querySelector('#card1');
bouton1.addEventListener('click', open);
    function open(){
        const popup = document.querySelector('.popup');
        popup.classList.add('popup-actif');
    }
    const boutonClose = document.querySelector('.close');
boutonClose.addEventListener('click', close);
    function close(){
        const popup = document.querySelector('.popup');
        popup.classList.remove('popup-actif');
    }

    const bouton2 = document.querySelector('#card2');
    bouton2.addEventListener('click', open);
        function open(){
            const popup = document.querySelector('.popup');
            popup.classList.add('popup-actif');
        }

        const bouton3 = document.querySelector('#card3');
        bouton3.addEventListener('click', open);
            function open(){
                const popup = document.querySelector('.popup');
                popup.classList.add('popup-actif');
            }
            
            const bouton4 = document.querySelector('#card4');
    bouton4.addEventListener('click', open);
        function open(){
            const popup = document.querySelector('.popup');
            popup.classList.add('popup-actif');
        }



