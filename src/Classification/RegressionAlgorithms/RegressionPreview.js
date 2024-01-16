import React from 'react'
import '../../Cluster/myCluster.css'
import { Link } from 'react-router-dom';
import RegressionToolbar from './RegressionToolbar'
import { Jumbotron } from 'react-bootstrap';

const RegressionPreview = () => (

    <div className="d-flex">
        <RegressionToolbar />
        <div class="container-fluid">
            <div>
                <p>
                    This page describes regression
                    algorithms in MLlib.
                    Below show up details about each algorithm
                </p>

                <Jumbotron>
                <h1>Linear Regression</h1>
                <p>
                    In statistics, linear regression is a linear approach to modeling the relationship
                    between a scalar response (or dependent variable)
                    and one or more explanatory variables (or independent variables).
                </p>
                <a href="https://en.wikipedia.org/wiki/Linear_regression" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-secondary mr-1">Info</button></a>
                <Link to='/regression/LinearRegression'><button type="button" class="btn btn-primary">Run algorithm</button></Link>
                </Jumbotron>

                <Jumbotron>
                <h1>Random Forest Regression</h1>
                <p>
                    Random forests combine many decision trees in order to reduce the risk of overfitting
                </p>
                <a href="https://en.wikipedia.org/wiki/Random_forest" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-secondary mr-1">Info</button></a>
                <Link to='/regression/RandomForestRegression'><button type="button" class="btn btn-primary">Run algorithm</button></Link>
                </Jumbotron>

                <Jumbotron>
                <h1>Gradient-Boosted Tree Regression</h1>
                <p>
                    Gradient-Boosted Trees (GBTs) are ensembles of decision trees.
                </p>
                <a href="https://en.wikipedia.org/wiki/Gradient_boosting" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-secondary mr-1">Info</button></a>
                <Link to='/regression/GradientBoostedTreeRegressor'><button type="button" class="btn btn-primary">Run algorithm</button></Link>
                </Jumbotron>

                <Jumbotron>
                <h1>Isotonic Regression</h1>
                <p>
                    Isotonic
                </p>
                <a href="https://en.wikipedia.org/wiki/Isotonic_regression" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-secondary mr-1">Info</button></a>
                <Link to='/regression/IsotonicRegression'><button type="button" class="btn btn-primary">Run algorithm</button></Link>
                </Jumbotron>
                <Jumbotron>
                <h1>Factorization Machines Regressor</h1>
                <p>
                Factorization Machines Regressor
                </p>
                <a href="https://www.csie.ntu.edu.tw/~b97053/paper/Rendle2010FM.pdf" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-secondary mr-1">Info</button></a>
                <Link to='/regression/FMRegressor'><button type="button" class="btn btn-primary">Run algorithm</button></Link>
                </Jumbotron>
                <Jumbotron>
                <h1>Generalized Linear Regression</h1>
                <p>
                    In statistics, a generalized linear model (GLM) is a flexible generalization of ordinary linear regression.<br />
                    The GLM generalizes linear regression by allowing the linear model to be related to the response variable via a link function <br />
                    and by allowing the magnitude of the variance of each measurement to be a function of its predicted value.
                </p>
                <a href="https://en.wikipedia.org/wiki/Generalized_linear_model" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-secondary mr-1">Info</button></a>
                <Link to='/regression/GeneralizedLinearRegression'><button type="button" class="btn btn-primary">Run algorithm</button></Link>
                </Jumbotron>
                <Jumbotron>
                <h1>Decision Tree Regression</h1>
                <p>
                    Decision trees are a popular family of classification and regression methods.<br />
                    More information about the spark.ml implementation can be found further in the section on decision trees.
                </p>
                <a href="https://en.wikipedia.org/wiki/Decision_tree_learning" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-secondary mr-1">Info</button></a>
                <Link to='/regression/DecisionTreeRegression'><button type="button" class="btn btn-primary">Run algorithm</button></Link>
                </Jumbotron>
                <Jumbotron>
                <h1>Survival Regression</h1>
                <p>
                    Survival Regression
                </p>
                <a href="https://en.wikipedia.org/wiki/Accelerated_failure_time_model" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-secondary mr-1">Info</button></a>
                <Link to='/regression/SurvivalRegression'><button type="button" class="btn btn-primary">Run algorithm</button></Link>
                </Jumbotron>
            </div>
        </div>
    </div>
)

export default RegressionPreview;