import React from "react";
import Graph from "react-graph-vis";
import styles from '../styles.scss'

const NetworkGraph = () => {
    const graph = {
        nodes: [
            { id: 1, label: "Node 1", color: "#e09c41" },
            { id: 2, label: "Things", color: "white" },
            { id: 3, label: "Node 3", color: "#e0df41" },
            { id: 4, label: "Node 4", color: "#e09c41" },
            { id: 5, label: "Node 5", color: "#e09c41" }
        ],
        edges: [
            { from: 1, to: 2 },
            { from: 1, to: 3 },
            { from: 2, to: 4 },
            { from: 2, to: 5 }
        ]
    };

    const options = {
        layout: {
            hierarchical: true
        },
        edges: {
            color: "#000000"
        },
        height: "500px"
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
            autoResize
            // getNetwork={network => {
            //     console.log('network', network);
            //     //  if you want access to vis.js network api you can set the state in a parent component using this property
            // }}
        />
    );
}


export default NetworkGraph