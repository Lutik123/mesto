

 

class Card {
    constructor (data,templateSelector,cardConfig,showPicture) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._cardConfig = cardConfig;
        this._showPicture = showPicture;
    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._templateSelector)
        .content.querySelector(this._cardConfig.cardElement)
        .cloneNode(true);

    return cardElement;
    }

    generateCard () {
        this._element = this._getTemplate();
        this._pic = this._element.querySelector(this._cardConfig.picElement);
        this._likeButton = this._element.querySelector(this._cardConfig.likeElement);
        this._trashButton = this._element.querySelector(this._cardConfig.trashElement);
        this._setEventListeners();

        this._pic.src = this._link;
        this._pic.alt = this._name;
        this._element.querySelector(this._cardConfig.textElement).textContent = this._name;

        return this._element;
    }
    _hendelOpenPopup () {
        this._showPicture(this._name,this._link);
       // this._opemImage(this._name,this._link);
    }
    _elementRemove () {
        this._element.remove();
    }
    _likeButtons () {
        this._likeButton.classList.toggle('element__button-active');
    }
    _setEventListeners() {
        this._pic.addEventListener('click', () => {
            this._hendelOpenPopup();
        });
        this._trashButton.addEventListener('click', () => {
            this._elementRemove();
        });
        this._likeButton.addEventListener('click', () => {
             this._likeButtons();
        })
    }
}


export {Card};