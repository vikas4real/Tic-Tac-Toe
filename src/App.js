import React, {useState} from 'react';
import Icon from './components/icon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Card,Button, CardBody,Container, Col, Row,Spinner} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const itemArray = new Array(9).fill("empty")
const App = () => {
  const[isCross,setisCross] = useState(false);
  const[winMessage, setwinMessage] = useState("");

  const reloadGame = () => {
    setisCross(false);
    setwinMessage("");
    itemArray.fill("empty", 0, 9);
  };

  const checkTie = (itemNumber) => {
    if (itemArray[0]!=="empty" && itemArray[1]!=="empty" && itemArray[2]!=="empty" && itemArray[3]!=="empty" && itemArray[4]!=="empty" && itemArray[5]!=="empty" && itemArray[6]!=="empty" && itemArray[7]!=="empty" && itemArray[8]!=="empty") {
      setwinMessage(<h1 className="text-center text-light">Game is Tie</h1>)
    }
  };
  const checkIsWinner =(itemNumber) => {
    if (itemArray[0]===itemArray[1] && itemArray[0]===itemArray[2] && itemArray[0]!=="empty")
    {
      setwinMessage(`${itemArray[0]} Won`)
    }
    else if(itemArray[3]===itemArray[4] && itemArray[3]===itemArray[5] && itemArray[3]!=="empty") {
      setwinMessage(`${itemArray[3]} Won`)
    }
    else if(itemArray[6]===itemArray[7] && itemArray[6]===itemArray[8] && itemArray[6]!=="empty") {
      setwinMessage(`${itemArray[6]} Won`)
    }
    else if(itemArray[0]===itemArray[3] && itemArray[0]===itemArray[6] && itemArray[0]!=="empty") {
      setwinMessage(`${itemArray[0]} Won`)
    }
    else if(itemArray[1]===itemArray[4] && itemArray[1]===itemArray[7] && itemArray[1]!=="empty") {
      setwinMessage(`${itemArray[1]} Won`)
    }
    else if(itemArray[2]===itemArray[5] && itemArray[2]===itemArray[8] && itemArray[2]!=="empty") {
      setwinMessage(`${itemArray[2]} Won`)
    }
    else if(itemArray[0]===itemArray[4] && itemArray[0]===itemArray[8] && itemArray[0]!=="empty") {
      setwinMessage(`${itemArray[0]} Won`)
    }
    else if(itemArray[2]===itemArray[4] && itemArray[2]===itemArray[6] && itemArray[2]!=="empty") 
    {
      setwinMessage(`${itemArray[2]} Won`)
    }
  };

  const changeItem = itemNumber => {
    if(winMessage){
      return toast(winMessage, {type:"success"}); 
     }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross":"circle";
      setisCross(!isCross);
    }
    else{
      return toast("already filled", {type: "error"} );
    }
    checkIsWinner();
    checkTie();
  };
  return (
          <Container className="p-5">
            <ToastContainer position="bottom-center"/>
            <Row>
              <Col md={6} className="offset-md-3">
                {winMessage ? (
                  <div className="mb-2 mt-2">
                    <h1 className="text-primary text-uppercase text-center">{winMessage}</h1>
                    <Button color="primary" block onClick={reloadGame}>Reload the Game</Button>
                  </div>
                ): (
                  <h1 className="text-center text-light">
                    {isCross ? "Cross":"Circle"} Turns
                  </h1>
                )}
              <div className="grid">
                {itemArray.map((item, index) => (
                  <Card color="warning" onClick={() => changeItem(index)}>
                    <CardBody className="box">
                      <Icon name={item}/>
                    </CardBody>
                  </Card>
                ))}
              </div>
              </Col>
            </Row>
            <br/><br/>
            <div>
            
              <h3 className="text-center"><Spinner type="grow" color="danger" />Developed by <a href="www.instagram.com/vikas.byte">Vikas Pandey</a><Spinner type="grow" color="danger" /></h3>
              
          </div>
          </Container>
          
  );
};

export default App;
