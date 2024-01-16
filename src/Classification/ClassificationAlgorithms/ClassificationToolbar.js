import React from 'react'
import { Link } from 'react-router-dom';

const ClassificationToolbar = () => (
    
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">
                <h1>Classification</h1>
            </div>
            <div className="list-group list-group-flush">
                <Link className="list-group-item list-group-item-action bg-light" to='/classification/DecisionTree'>Decision tree</Link>
                <Link className="list-group-item list-group-item-action bg-light" to='/classification/MultilayerPerceptron'>Multilayer perceptron</Link>
                <Link className="list-group-item list-group-item-action bg-light" to='/classification/LinearSVM'>Linear Support Vector Machine</Link>
                <Link className="list-group-item list-group-item-action bg-light" to='/classification/NaiveBayes'>Naive Bayes</Link>
                <Link className="list-group-item list-group-item-action bg-light" to='/classification/RandomForestClassification'>Random Forest</Link>
                <Link className="list-group-item list-group-item-action bg-light" to='/classification/FMClassifier'>Factorization Machines</Link>
                <Link className="list-group-item list-group-item-action bg-light" to='/classification/GradientBoostedTreeClassifier'>Gradient Boosted Tree</Link>
                <Link className="list-group-item list-group-item-action bg-light" to='/classification/BinomialLogisticRegression'>Binomial Logistic Regression</Link>
                <Link className="list-group-item list-group-item-action bg-light" to='/classification/OneVsRest'>One Vs Rest</Link>
            </div>
        </div>
    
)

export default ClassificationToolbar