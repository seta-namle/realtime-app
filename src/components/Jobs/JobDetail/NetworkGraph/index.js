import React from "react";
import Graph from "react-graph-vis";
import styles from '../styles.scss'

const NetworkGraph = () => {
    const graph = {
        nodes: [
            { id: 1, label: "Webstream\nAdapter", shape: "diamond", size: 30, color: "#15c853" },
            { id: 2, label: "Stream\nIngestion", shape: "dot", size: 30, color: "#15c853" },
            { id: 3, label: "Speech\nmatic", shape: "dot", size: 30, color: "#FFA807" }
        ],
        edges: [
            { from: 1, to: 2, value: 0.5, color: { inherit: "to" } },
            { from: 2, to: 3, value: 0.5, color: { inherit: "to" } }
        ]
    };

    const options = {
        height: "220px"
    };

    const events = {
        select: function (event) {
            const { nodes, edges } = event;
            console.log("Selected nodes:");
            console.log(nodes);
            console.log("Selected edges:");
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
}


export default NetworkGraph