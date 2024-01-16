import React from 'react'
import '../../Cluster/myCluster.css'
import { Link } from 'react-router-dom';
import '../../Cluster/Algorithms/Algorithms.css'
import ClassificationToolbar from './ClassificationToolbar'
import { Jumbotron } from 'react-bootstrap';

const ClassificationPreview = () => (

    <div className="d-flex">
        <ClassificationToolbar />
        <div class="container-fluid">
            <div>
                <p>
                    This page describes classification
                    algorithms in MLlib.
                    Below show up details about each algorithm
                </p>
                <Jumbotron>
                    <h1>Decision tree</h1>
                    <p> 
                        Decision trees and their ensembles are popular methods for the machine learning
                        tasks of classification and regression.<br />
                        Decision trees are widely used since they are easy to interpret,
                        handle categorical features,
                        extend to the multiclass classification setting,
                        do not require feature scaling,
                        and are able to capture non-linearities and feature interactions.
                    </p>
                    <a href="https://en.wikipedia.org/wiki/Decision_tree_learning" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-secondary mr-1">Info</button></a>
                    <Link to="/classification/DecisionTree"><button type="button" class="btn btn-primary">Run algorithm</button></Link>
                </Jumbotron>

                <Jumbotron>
                    <h1>Multilayer perceptron</h1>
                    <p> 
                        Multilayer perceptron classifier (MLPC) is a classifier based on the feedforward artificial
                        neural network. <br />
                        MLPC consists of multiple layers of nodes.
                        Each layer is fully connected to the next layer in the network.
                        Nodes in the input layer represent the input data.
                    </p>
                    <a href="https://en.wikipedia.org/wiki/Feedforward_neural_network" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-secondary mr-1">Info</button></a>
                    <Link to="/classification/MultilayerPerceptron"><button type="button" class="btn btn-primary">Run algorithm</button></Link>
                </Jumbotron>

                <Jumbotron>    
                    <h1>Linear Support Vector Machine</h1>
                    <p>
                        A support vector machine constructs a hyperplane or set of hyperplanes
                        in a high- or infinite-dimensional space,
                        which can be used for classification, regression, or other tasks.
                    </p>
                    <a href="https://en.wikipedia.org/wiki/Support_vector_machine" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-secondary mr-1">Info</button></a>
                    <Link to="/classification/LinearSVM"><button type="button" class="btn btn-primary">Run algorithm</button></Link>
                </Jumbotron>

                <Jumbotron>    
                    <h1>Naive Bayes</h1>
                    <p>
                        Naive Bayes classifiers are a family of simple probabilistic, multiclass classifiers based on applying Bayes’ theorem <br />with strong (naive) independence assumptions between every pair of features.<br/>
                        Naive Bayes can be trained very efficiently. <br />
                        With a single pass over the training data, it computes the conditional probability distribution of each feature given each label. <br />
                        For prediction, it applies Bayes’ theorem to compute the conditional probability distribution of each label given an observation.
                    </p>
                    <a href="https://en.wikipedia.org/wiki/Naive_Bayes_classifier" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-secondary mr-1">Info</button></a>
                    <Link to="/classification/NaiveBayes"><button type="button" class="btn btn-primary">Run algorithm</button></Link>
                </Jumbotron>

                <Jumbotron>    
                    <h1>Random Forest Classification</h1>
                    <p>
                        RFC
                    </p>
                    <a href="https://en.wikipedia.org/wiki/Random_forest" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-secondary mr-1">Info</button></a>
                    <Link to="/classification/RandomForestClassification"><button type="button" class="btn btn-primary">Run algorithm</button></Link>
                </Jumbotron>

                <Jumbotron>    
                    <h1>Factorization Machines</h1>
                    <p>
                            Factorization Machines(FM) are a new model class that combines
                            the advantages of Support Vector Machines (SVM) with factorization models.
                    </p>
                    <a href="https://www.csie.ntu.edu.tw/~b97053/paper/Rendle2010FM.pdf" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-secondary mr-1">Info</button></a>
                    <Link to="/classification/FMClassifier"><button type="button" class="btn btn-primary">Run algorithm</button></Link>
                </Jumbotron>

                <Jumbotron>    
                    <h1>Gradient Boosted Tree</h1>
                    <p>
                    Gradient-Boosted Trees (GBTs) are ensembles of decision trees. GBTs iteratively train decision trees in order to minimize a loss function. <br />
                    The spark.ml implementation supports GBTs for binary classification and for regression, using both continuous and categorical features.
                    </p>
                    <a href="https://en.wikipedia.org/wiki/Gradient_boosting" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-secondary mr-1">Info</button></a>
                    <Link to="/classification/GradientBoostedTree"><button type="button" class="btn btn-primary">Run algorithm</button></Link>
                </Jumbotron>
                <Jumbotron>    
                    <h1>Logistic Regression</h1>
                    <p>
                    ogistic regression is a popular method to predict a categorical response. It is a special case of Generalized Linear models that predicts the probability of the outcomes.<br />
                    In spark.ml logistic regression can be used to predict a binary outcome by using binomial logistic regression, or it can be used to predict a multiclass outcome by using multinomial logistic regression.<br />
                    Use the family parameter to select between these two algorithms, or leave it unset and Spark will infer the correct variant.
                    </p>
                    <a href="https://en.wikipedia.org/wiki/Generalized_linear_model" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-secondary mr-1">Info</button></a>
                    <Link to="/classification/BinomialLogisticRegression"><button type="button" class="btn btn-primary">Run algorithm</button></Link>
                </Jumbotron>
                <Jumbotron>    
                    <h1>One Vs Rest</h1>
                    <p>
                    One-vs.-rest(OvR or one-vs.-all, OvA or one-against-all, OAA) strategy involves training a single classifier per class, <br />
                    with the samples of that class as positive samples and all other samples as negatives. This strategy requires the base classifiers to <br />
                    produce a real-valued confidence score for its decision, rather than just a class label; discrete class labels alone can lead to ambiguities, <br />
                    where multiple classes are predicted for a single sample.
                    </p>
                    <a href="https://en.wikipedia.org/wiki/Multiclass_classification#One-vs.-rest" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-secondary mr-1">Info</button></a>
                    <Link to="/classification/OneVsRest"><button type="button" class="btn btn-primary">Run algorithm</button></Link>
                </Jumbotron>

            </div>
        </div>
    </div>

)

export default ClassificationPreview;