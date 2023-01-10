import { Stage, Layer, Circle, Line, Text } from "react-konva";
import {useState, useEffect} from 'react';
import ssnArray from '../../../utils/tempSnn';
import Konva from "konva";

let width_g = 1400;
let height_g = 150;


const NetTest = ({ idArray }) => {
  
  // useEffect(() => {
  //   // let array = [];
  //   // for (let i =0; i<ssnArray.length; i++){
  //   //   if (idArray.includes(String(ssnArray[i].id)))
  //   //   {array.push(ssnArray[i])}
  //   //   console.log('ssn',array)
    
   
    
  // })
  console.log(idArray)
  function generateShapes(){
    const shapes=[];
    for (let i=0 ; i<idArray.length; i++)
    {if (idArray.includes(String(ssnArray[i].id)))
    {shapes.push({
      id: ssnArray[i].id,
      x: Math.random() * width_g,
      y:  Math.random() * height_g,
      name_abonent: ssnArray[i].cx1
    })}console.log(ssnArray[i])
    console.log(i)}
    return shapes;
    
  }
  const INITIAL = generateShapes()
  const [shapes, setShapes] = useState(INITIAL);
  const [connectors, setConnectors] = useState([]);
  const [fromShapeId, setFromShapeId] = useState(null);
  return (
  
    <Stage width={width_g} height={height_g} >
      <Layer>
      {connectors.map(con => {
          const from = shapes.find(s => s.id === con.from);
          const to = shapes.find(s => s.id === con.to);
        
         
          return (
            <Line
              key={con.id}
              points={[from.x, from.y, to.x, to.y]}
              stroke="black"
            />
          );
        })}
        {shapes.map(shape => (
          <Circle
            x={shape.x}
            y={shape.y}
          
            key={shape.id}
            fill={"yellow"}
            radius={20}
            shadowBlur={10}
            onClick={() => {
              if (fromShapeId) {
                const newConnector = {
                  from: fromShapeId,
                  to: shape.id,
                  id: connectors.length
                };
                setConnectors(connectors.concat([newConnector]));
                setFromShapeId(null);
              } else {
                setFromShapeId(shape.id);
              }
            }}
          />
          
        ))} 
       
      {shapes.map(shape => (  <Text  x={shape.x+10}
            y={shape.y+20}  key={shape.id} text={shape.name_abonent}/>))}
      </Layer>
    </Stage>
  )

}
export default NetTest;

// let ab_name = array.map (function(e) {return e.cx1})
// console.log('aaaaa',ab_name)

//     let stage = new Konva.Stage({
//       container: 'container',
//       width: width_g,
//       height: height_g,
//     });

//     let layer = new Konva.Layer();
//     stage.add(layer);

//     function generateTargets() {
//       let number = array.length;
//       let result = [];
//       console.log('length', number)
//       console.log('idarray',array.length)
//       while (result.length < number) {
//         result.push({
//           id: 'target-' + result.length,
//           x: stage.width() * Math.random(),
//           y: stage.height() * Math.random(),
//         });
       
//       }
//       console.log('result',result)
//       return result;
//     }

//     // function generateTargets(){
//     //     let result = [];
//     //     for (let i =0; i <ssnArray.length; i++){
//     //         if (idArray.includes(String(ssnArray[i].id))){
//     //             result.push({
//     //                 id: 'target-' + result.length,
//     //                  x: stage.width() * Math.random(),
//     //                  y: stage.height() * Math.random(),
//     //             });
//     //         }
//     //     }
//     //     return result;
//     // }

//     let targets = generateTargets();

//     function generateConnectors() {
//         let number = array.length;
//         let result = [];
//         console.log('length', number)
//       while (result.length < number) {
//         let from = 'target-' + Math.floor(Math.random() * targets.length);
//         let to = 'target-' + Math.floor(Math.random() * targets.length);
//         if (from === to) {
//           continue;
//         }
//         result.push({
//           id: 'connector-' + result.length,
//           from: from,
//           to: to,
//         });
//       }
//       console.log(result)
//       return result;
//     }
    
//     function getConnectorPoints(from, to) {
//       const dx = to.x - from.x;
//       const dy = to.y - from.y;
//       let angle = Math.atan2(-dy, dx);
//       console.log('angle',angle)
//       const radius = 20;
  
//       return [
//         from.x + -radius * Math.cos(angle + Math.PI),
//         from.y + radius * Math.sin(angle + Math.PI),
//         to.x + -radius * Math.cos(angle),
//         to.y + radius * Math.sin(angle),
//       ];
//     }
  
//     var connectors = generateConnectors();
  
//      // update all objects on the canvas from the state of the app
//      function updateObjects() {
//       targets.forEach((target) => {
//         let node = layer.findOne('#' + target.id);
//         node.x(target.x);
//         node.y(target.y);
//       });
//       console.log(connectors)
//       connectors.forEach((connect) => {
//         let line = layer.findOne('#' + connect.id);
//         let fromNode = layer.findOne('#' + connect.from);
//         let toNode = layer.findOne('#' + connect.to);
//   console.log('connectors',connectors)
//         const points = getConnectorPoints(
//           fromNode.position(),
//           toNode.position()
//         );
//         line.points(points);
//       });
//     }
  
//     // generate nodes for the app
//     connectors.forEach((connect) => {
//         let line = new Konva.Arrow({
//         stroke: 'black',
//         id: connect.id,
//         fill: 'black',
//       });
//       layer.add(line);
//     });
  
//     targets.forEach((target) => {
//         let node = new Konva.Circle({
//         id: target.id,
//         fill: 'yellow',
//         radius: 20,
//         shadowBlur: 10,
//         draggable: true,
//       });
//       layer.add(node);
  
//       node.on('dragmove', () => {
//         // mutate the state
//         target.x = node.x();
//         target.y = node.y();
  
//         // update nodes from the new state
//         updateObjects();
//       });
//     });
//     updateObjects();

//   },[])


