import React from 'react';

import Toolbar from './Toolbar'
import Mycluster from './Cluster/myCluster'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Myabout from './About/about'
import Kmeans from './Cluster/Algorithms/Kmeans/Kmeans'
import LDA from './Cluster/Algorithms/LDA/LDA'
import PIC from './Cluster/Algorithms/PIC/PIC'
import ClassificationPreview from './Classification/ClassificationAlgorithms/ClassificationPreview';
import GMM from './Cluster/Algorithms/GMM/GMM'
import BisectingKmeans from './Cluster/Algorithms/BisectingKmeans/BisectingKmeans'
import LinearSVM from './Classification/ClassificationAlgorithms/LinearSVM/LinearSVM';
import RegressionPreview from './Classification/RegressionAlgorithms/RegressionPreview';
import NaiveBayes from './Classification/ClassificationAlgorithms/NaiveBayes/NaiveBayes';
import MultiLayerPerceptron from './Classification/ClassificationAlgorithms/MultilayerPerceptron/MultiLayerPerceptron';
import DecisionTree from './Classification/ClassificationAlgorithms/DecisionTree/DecisionTree';
import LinearRegression from './Classification/RegressionAlgorithms/LinearRegression/LinearRegression';
import RandomForestRegression from './Classification/RegressionAlgorithms/RandomForestRegression/RandomForestRegression';
import FMRegressor from './Classification/RegressionAlgorithms/FMRegressor/FMRegressor';
import GradientBoostedTreeRegressor from './Classification/RegressionAlgorithms/GradientBoostedTreeRegressor/GradientBoostedTreeRegressor'
import IsotonicRegression from './Classification/RegressionAlgorithms/IsotonicRegression/IsotonicRegression';
import RandomForestClassification from './Classification/ClassificationAlgorithms/RandomForestClassification/RandomForestClassification';
import FMClassifier from './Classification/ClassificationAlgorithms/FMClassifier/FMClassifier';
import GradientBoostedTreeClassifier from './Classification/ClassificationAlgorithms/GradientBoostedTreeClassifier/GradientBoostedTreeClassifier'
import BinomialLogisticRegression from './Classification/ClassificationAlgorithms/BinomialLogisticRegression/BinomialLogisticRegression'
import GeneralizedLinearRegression from './Classification/RegressionAlgorithms/GeneralizedLinearRegression/GeneralizedLinearRegression';
import DecisionTreeRegression from './Classification/RegressionAlgorithms/DecisionTreeRegression/DecisionTreeRegression';
import SurvivalRegression from './Classification/RegressionAlgorithms/SurvivalRegression/SurvivalRegression';
import OneVsRest from './Classification/ClassificationAlgorithms/OneVsRest/OneVsRest';
//test
function App() {
  return (
    <BrowserRouter>
      <div className="App d-flex">
        <Toolbar />
        <div id="page-content-wrapper">
          <div class="container-fluid p-0">
            <Switch>
              <Route path="/" component={Myabout} exact />
              <Route path="/cluster" component={Mycluster} exact />
              <Route path="/cluster/Kmeans" component={Kmeans} exact />
              <Route path="/cluster/LDA" component={LDA} exact />
              <Route path="/cluster/PIC" component={PIC} exact />
              <Route path="/cluster/GMM" component={GMM} exact />
              <Route path="/cluster/BKmeans" component={BisectingKmeans} exact />
              <Route path="/about" component={Myabout} exact />
              <Route path="/classification" component={ClassificationPreview} exact />
              <Route path="/classification/LinearSVM" component={LinearSVM} exact />
              <Route path="/classification/NaiveBayes" component={NaiveBayes} exact />
              <Route path="/classification/MultilayerPerceptron" component={MultiLayerPerceptron} exact />
              <Route path="/classification/DecisionTree" component={DecisionTree} exact />
              <Route path="/classification/OneVsRest" component={OneVsRest} exact />
              <Route path="/classification/RandomForestClassification" component={RandomForestClassification} exact />
              <Route path="/classification/FMClassifier" component={FMClassifier} exact />
              <Route path="/classification/GradientBoostedTreeClassifier" component={GradientBoostedTreeClassifier} exact />
              <Route path="/classification/BinomialLogisticRegression" component={BinomialLogisticRegression} exact />
              <Route path="/regression" component={RegressionPreview} exact />
              <Route path="/regression/LinearRegression" component={LinearRegression} exact />
              <Route path="/regression/RandomForestRegression" component={RandomForestRegression} exact />
              <Route path="/regression/GradientBoostedTreeRegressor" component={GradientBoostedTreeRegressor} exact />
              <Route path="/regression/DecisionTreeRegression" component={DecisionTreeRegression} exact />
              <Route path="/regression/IsotonicRegression" component={IsotonicRegression} exact />
              <Route path="/regression/FMRegressor" component={FMRegressor} exact />
              <Route path="/regression/GeneralizedLinearRegression" component={GeneralizedLinearRegression} exact />
              <Route path="/regression/SurvivalRegression" component={SurvivalRegression} exact />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
