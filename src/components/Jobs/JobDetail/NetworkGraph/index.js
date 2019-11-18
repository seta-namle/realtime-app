import React from 'react';
import Graph from 'react-graph-vis';
import styles from '../styles.scss';
import { graph } from '../mockData';

const NetworkGraph = () => {
  const options = {
    height: '220px'
  };

  const events = {
    select: function(event) {
      const { nodes, edges } = event;
      console.log('Selected nodes:');
      console.log(nodes);
      console.log('Selected edges:');
      console.log(edges);
    }
  };
  return (
    <Graph
      className={styles['task-detail-right']}
      graph={graph}
      options={options}
      events={events}
      // autoResize
      // getNetwork={network => {
      //     console.log('network', network);
      //     //  if you want access to vis.js network api you can set the state in a parent component using this property
      // }}
    />
  );
};

export default NetworkGraph;
