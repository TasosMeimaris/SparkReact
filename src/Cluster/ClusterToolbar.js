import React from 'react'
//import './myCluster.css'
import { Link } from 'react-router-dom';

const ClusterToolbar = () => (
    
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">
                <h1>Clustering</h1>
            </div>
            <div className="list-group list-group-flush">
                <Link className="list-group-item list-group-item-action bg-light" to="/cluster/Kmeans">Kmeans</Link>
                <Link className="list-group-item list-group-item-action bg-light" to="/cluster/LDA">Latent Dirichlet allocation (LDA)</Link>
                <Link className="list-group-item list-group-item-action bg-light" to="/cluster/PIC">Power Iteration Clustering (PIC)</Link>
                <Link className="list-group-item list-group-item-action bg-light" to="/cluster/GMM">Gaussian Mixture Model (GMM)</Link>
                <Link className="list-group-item list-group-item-action bg-light" to="/cluster/BKmeans">Bisecting k-means</Link>
            </div>
        </div>
    
)

export default ClusterToolbar