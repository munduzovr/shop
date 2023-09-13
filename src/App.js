import { useState } from 'react';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
function App() {

let [cards,setCards] = useState([]);


//добавляем карточки
function handleBook(newObj){
  let newList = [...cards];
  newList.push(newObj);
  setCards(newList);
}

function deleteProduct(id){
  let delCards = cards.filter((item)=> item.id !== id)
  setCards(delCards);
}

//edit
const[isVisible,setIsVisible] = useState(false);

const showModal = () => {
  setIsVisible(true);
};

const hideModal = () => {
  setIsVisible(false);
};


console.log(cards);
  return (
    <div className="App">
      <Header/>
      <Content handleBook={handleBook} deleteProduct={deleteProduct} cards={cards} />
      <Cards handleBook={handleBook}  cards={cards} deleteProduct={deleteProduct}  showModal={showModal} hideModal={hideModal} isVisible={isVisible}/>
    </div>
  );
}

export default App;