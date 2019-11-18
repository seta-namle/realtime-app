import React from 'react';
import Graph from 'react-graph-vis';
import styles from '../styles.scss';
import { graph } from '../mockData';

class NetworkGraph extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperGraph = React.createRef();
    const { nodes, edges } = graph;
    this.state = {
      graph: {
        nodes,
        edges
      }
    };
  }

  options = {
    height: '220px',
    layout: {
      randomSeed: 2
    },
    groups: {
      complete: {
        shape: 'dot',
        color: "#15c853"
      },
      running: {
        shape: 'dot',
        color: "#FFA807"
      },
      failed: {
        shape: "dot",
        color: "red"
      },
    }
  };
  componentDidMount() {
    const { clientHeight, clientWidth } = this.wrapperGraph.current;
    const x = clientWidth - (clientWidth / 2);
    const y = -clientHeight + 120;
    const step = 80;
    const sizeLegend = 5;

    const legend = [
      {
        id: 1000,
        label: 'complete',
        size: sizeLegend,
        group: 'complete',
        value: 1,
        fixed: true,
        physics: false,
        x: x,
        y: y,
      },
      {
        id: 1001,
        label: 'running',
        size: sizeLegend,
        group: 'running',
        value: 1,
        fixed: true,
        physics: false,
        x: x,
        y: y + step,
      },
      {
        id: 1002,
        label: 'failed',
        size: sizeLegend,
        group: 'failed',
        value: 1,
        fixed: true,
        physics: false,
        x: x,
        y: y + step * 2,
      },
    ];

    this.setState(prevState => {
      return {
        ...prevState,
        graph: {
          ...prevState.graph,
          nodes: [
            ...prevState.graph.nodes,
            ...legend
          ]
        }
      }
    });
  }

  events = {
    select: function (event) {
      const { nodes, edges } = event;
      console.log('Selected nodes:');
      console.log(nodes);
      console.log('Selected edges:');
      console.log(edges);
    }
  };

  render() {
    return (
      <div ref={this.wrapperGraph}>
        <Graph
          className={styles['task-detail-right']}
          graph={this.state.graph}
          options={this.options}
          events={this.events}
        // autoResize
        // getNetwork={network => {
        //     console.log('network', network);
        //     //  if you want access to vis.js network api you can set the state in a parent component using this property
        // }}
        />
      </div>
    );
  }
};

export default NetworkGraph;
