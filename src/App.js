
import './App.css';
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data.js' //we normally extract data from api calls not data files

function App() {
  console.log(data)
  const cards = data.map(item=> {
    return (
      <Card 
        key = {item.id}
        img = {item.coverImg}
        rating = {item.stats.rating}
        reviewCount = {item.stats.reviewCount}
        location = {item.location}
        title = {item.title}
        price = {item.price}
        openSpots = {item.openSpots}
      />
    )
  })
    
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  );
}

export default App;
