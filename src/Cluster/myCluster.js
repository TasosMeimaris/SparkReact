import React from 'react'
//import './myCluster.css'
import { Link } from 'react-router-dom';
import ClusterToolbar from './ClusterToolbar';
import { Jumbotron } from 'react-bootstrap';

const Mycluster = () => (

    <div className="d-flex">
        <ClusterToolbar />
        <div class="container-fluid">
            <div>
                <p> This page describes clustering algorithms in MLlib.
                    Below show up details about each algorithm </p>
                <Jumbotron>
                    <h1>Kmeans</h1>
                    <p> 
                        One of the most commonly used clustering algorithms
                        that clusters the data points into a predefined number of clusters 
                    </p>
                    <a href="https://en.wikipedia.org/wiki/K-means_clustering" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-secondary mr-1">Info</button></a>
                    <Link to='/cluster/Kmeans'><button type="button" class="btn btn-primary">Run algorithm</button></Link>
                </Jumbotron>

                <Jumbotron>
                    <h1> Latent Dirichlet allocation (LDA) </h1>
                    <p>
                        A generative statistical model
                        that allows sets of observations to be
                        explained by unobserved groups that explain why some parts of the data are similar.
                    </p>
                    <a href="https://en.wikipedia.org/wiki/Latent_Dirichlet_allocation" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-secondary mr-1">Info</button></a>
                    <Link to='/cluster/LDA'><button type="button" class="btn btn-primary">Run algorithm</button></Link>
                </Jumbotron>

                <Jumbotron>
                    <h1>Bisecting k-means</h1>
                    <p> A kind of hierarchical clustering
                        using a divisive (or “top-down”) approach:<br />
                        all observations start in one cluster, and splits
                        are performed recursively as one moves down the hierarchy.<br />
                        Bisecting K-means can often be much faster than regular K-means,
                        but it will generally produce a different clustering.
                    </p>
                    <a href="https://en.wikipedia.org/wiki/Hierarchical_clustering" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-secondary mr-1">Info</button></a>
                    <Link to='/cluster/BKmeans'><button type="button" class="btn btn-primary">Run algorithm</button></Link>
                </Jumbotron>

                <Jumbotron>
                    <h1>Gaussian Mixture Model </h1>
                    <p>
                        Represents a composite distribution
                        whereby points are drawn from one of k Gaussian sub-distributions,
                        each with its own probability.<br />
                        The spark.ml implementation uses the expectation-maximization
                        algorithm to induce the maximum-likelihood model given a set of samples.
                    </p>
                    <a href="https://en.wikipedia.org/wiki/Mixture_model#Multivariate_Gaussian_mixture_model" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-secondary mr-1">Info</button></a>
                    <Link to='/cluster/GMM'><button type="button" class="btn btn-primary">Run algorithm</button></Link>
                </Jumbotron>

                <Jumbotron>
                    <h1>Power Iteration Clustering (PIC) </h1>
                    <p>
                        A scalable graph clustering algorithm developed by Lin and Cohen.<br />
                        From the abstract: PIC finds a very low-dimensional
                        embedding of a dataset using truncated power iteration
                        on a normalized pair-wise similarity matrix of the data.
                    </p>
                    <a href="http://www.cs.cmu.edu/~frank/papers/icml2010-pic-final.pdf" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-secondary mr-1">Info</button></a>
                    <Link to='/cluster/PIC'><button type="button" class="btn btn-primary">Run algorithm</button></Link>
                </Jumbotron>
            </div>
        </div>
    </div>
)



export default Mycluster;