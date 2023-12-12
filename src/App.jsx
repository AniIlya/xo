import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Square} from "./Square"
import { useEffect } from 'react'
import icon from "./assets/free-icon-updating-2990003.png"
function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [cnt, setCnt] = useState(0);
  const [pobeda,setPobeda]=useState(false)
  function handleClick(i) {

    const nextSquares = squares.slice();
    if (nextSquares[i]) {
       return;
    } 
     setCnt(cnt + 1);
    if (cnt % 2 == 0) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
  }

  useEffect(() => {
    if (
      (["XXX", "000"].includes(squares[0] + squares[1] + squares[2]) ) ||
      (["XXX", "OOO"].includes(squares[3] + squares[4] + squares[5]) ) ||
      (["XXX", "OOO"].includes(squares[6] + squares[7] + squares[8]) ) ||
      (["XXX", "OOO"].includes(squares[0] + squares[3] + squares[6]) ) ||
      (["XXX", "OOO"].includes(squares[1] + squares[4] + squares[7]) ) ||
      (["XXX", "OOO"].includes(squares[2] + squares[5] + squares[8]) ) ||
      (["XXX", "OOO"].includes(squares[2] + squares[4] + squares[6]) ) ||
      (["XXX", "OOO"].includes(squares[0] + squares[4] + squares[8]) )
    ) {
      setPobeda(true);
    }
  }, [squares]);
  return (
    <> <button className="icon" onClick={()=>{setSquares(Array(9).fill(null)); setPobeda(false)}}><img width={"46px"} src={icon} alt="" /></button>

    <div className="container">
     
    <div className="box">

    {["XXX","000"].includes(squares[0] + squares[1] + squares[2]) && (
      <div className="Pobeda1"></div>
     )}
    {["XXX","OOO"].includes(squares[3] + squares[4] + squares[5]) && (
      <div className="Pobeda2"></div>
    )}
    { ["XXX","OOO"].includes(squares[6] + squares[7] + squares[8] )&& (
      <div className="Pobeda3"></div>
    )}
    { ["XXX","OOO"].includes(squares[0] + squares[3] + squares[6])  && (
      <div className="Pobeda4"></div>
    ) }
    { ["XXX","OOO"].includes(squares[1] + squares[4] + squares[7] )  && (
      <div className="Pobeda5"></div>
    ) }
    {  ["XXX","OOO"].includes(squares[2] + squares[5] + squares[8]) && (
      <div className="Pobeda6"></div>
    ) }
    { ["XXX","OOO"].includes(squares[2] + squares[4] + squares[6]) && (
      <div className="Pobeda7"></div>
    ) }
    { ["XXX","OOO"].includes(squares[0] + squares[4] + squares[8]) && (
      <div className="Pobeda8"></div>
 )}

    

    <div className="grid">
      <Square onSquareClick={() => handleClick(0)} value={squares[0]} disBtn={pobeda} />
      <Square onSquareClick={() => handleClick(1)} value={squares[1]} disBtn={pobeda}/>
      <Square onSquareClick={() => handleClick(2)} value={squares[2]} disBtn={pobeda}/>
    </div>
    <div className="grid">
      <Square onSquareClick={() => handleClick(3)} value={squares[3]} disBtn={pobeda}/>
      <Square onSquareClick={() => handleClick(4)} value={squares[4]} disBtn={pobeda}/>
      <Square onSquareClick={() => handleClick(5)} value={squares[5]} disBtn={pobeda}/>
    </div>
    <div className="grid">
      <Square onSquareClick={() => handleClick(6)} value={squares[6]} disBtn={pobeda}/>
      <Square onSquareClick={() => handleClick(7)} value={squares[7]} disBtn={pobeda}/>
      <Square onSquareClick={() => handleClick(8)} value={squares[8]} disBtn={pobeda}/>

    </div>
</div>
</div>
   


</>  )
}

export default App
