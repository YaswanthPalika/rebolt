import React from 'react';
import Tree from 'react-hierarchy-tree-graph';
 
const myTreeData = [
  {
    name: 'Top Level',
    attributes: {
      keyA: 'val A',
      keyB: 'val B',
      keyC: 'val C',
    },
    children: [
      {
        name: 'Level 2: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
      },
      {
        name: 'Level 2: B',
      },
    ],
  },
];

const svgSquare = {
  shape: 'rect',
  shapeProps: {
    width: 20,
    height: 20,
    x: -10,
    y: -10,
  }
}
 
class MyComponent extends React.Component {
  render() {
    return (
      
      <div id="treeWrapper" style={{width: '50em', height: '20em'}}>
 
        <Tree data={myTreeData} nodeSvgShape={svgSquare} />
 
      </div>
    );
  }
}
export default MyComponent