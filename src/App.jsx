import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import RatedCard from './components/RatedCard';

function App() {
  const [rating, setRating] = useState(null);
  const [showRatedCard, setShowRatedCard] = useState(false);

  const handleRating = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmit= (rating) => {
    setRating(rating);
    setShowRatedCard(true);
  };

  return (
    <div className='App'>
    {showRatedCard ? (
        <RatedCard rating={rating} />
      ) : (
        <Card onRating={handleRating} submitRating={handleSubmit} rating={rating} /> 
      )}
    </div>
  );
}

export default App;