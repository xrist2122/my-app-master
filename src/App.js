import logo from './logo.svg';
import './App.css';

function App() {
  const arr=[
    <li>vacuum</li>,
    <li>yagodisa</li>,
    <li>kolenka</li>,
    <li>lokot</li>,
    <li>sheep</li>,
    <li>poleno</li>,
  ];
  const res=arr.map(function(item) {
    return <span>{item}</span>
  })

  
  
  return <>{res}</>
    
  ;

}

export default App;
