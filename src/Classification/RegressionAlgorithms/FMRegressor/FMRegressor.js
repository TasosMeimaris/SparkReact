import React, { useState } from 'react'
import '../../../Cluster/Algorithms/Algorithms.css'
import LoadingBar from 'react-top-loading-bar'
import FileSaver from 'file-saver'
import JSZip from 'jszip'
import Splitter from '../../ClassificationAlgorithms/NaiveBayes/Splitter'
import { Link } from 'react-router-dom';
import RightForm from './RightForm'
import MinMaxScaler from '../../ClassificationAlgorithms/FMClassifier/MinMaxScaler'
import RegressionEval from '../RandomForestRegression/RegressionEval'
import { Jumbotron, Form } from 'react-bootstrap'
import RegressionToolbar from '../RegressionToolbar'

const submitForm = () => {
    let myK = "))\n\n\tval fm = new FMRegressor()";
    if (document.getElementById("factorSizeID").value !== "") {
        myK = (myK.concat(".", "setFactorSize(" + document.getElementById("factorSizeID").value + ")"));
    }
    if (document.getElementById("featuresColID").value !== "") {
        myK = (myK.concat(".", `setFeaturesCol("${document.getElementById("featuresColID").value}")`));
    }
    if (document.getElementById("fitInterceptID").value !== "") {
        myK = (myK.concat(".", `setFitIntercept("${document.getElementById("fitInterceptID").value}")`));
    }
    if (document.getElementById("fitLinearID").value !== "") {
        myK = (myK.concat(".", `setFitLinear("${document.getElementById("fitLinearID").value}")`));
    }
    if (document.getElementById("initStdID").value !== "") {
        myK = (myK.concat(".", "setInitStd(" + document.getElementById("initStdID").value + ")"));
    }
    if (document.getElementById("labelColID").value !== "") {
        myK = (myK.concat(".", `setLabelCol("${document.getElementById("labelColID").value}")`));
    }
    if (document.getElementById("maxIterID").value !== "") {
        myK = (myK.concat(".", "setMaxIter(" + document.getElementById("maxIterID").value + ")"));
    }
    if (document.getElementById("minBatchFractionID").value !== "") {
        myK = (myK.concat(".", "setMinBatchFraction(" + document.getElementById("minBatchFractionID").value + ")"));
    }
    if (document.getElementById("predictionColID").value !== "") {
        myK = (myK.concat(".", `setPredictionCol("${document.getElementById("predictionColID").value}")`));
    }
    if (document.getElementById("regParamID").value !== "") {
        myK = (myK.concat(".", "setRegParam(" + document.getElementById("regParamID").value + ")"));
    }
    if (document.getElementById("seedID").value !== "") {
        myK = (myK.concat(".", "setSeed(" + document.getElementById("seedID").value + "L)"));
    }
    if (document.getElementById("solverID").value !== "") {
        myK = (myK.concat(".", `setSolver("${document.getElementById("solverID").value}")`));
    }
    if (document.getElementById("stepSizeID").value !== "") {
        myK = (myK.concat(".", "setStepSize(" + document.getElementById("stepSizeID").value + "L)"));
    }
    if (document.getElementById("tolID").value !== "") {
        myK = (myK.concat(".", "setTol(" + document.getElementById("tolID").value + "L)"));
    }
    if (document.getElementById("weightColID").value !== "") {
        myK = (myK.concat(".", `setWeightCol("${document.getElementById("weightColID").value}")`));
    }
    return (myK);
}

const myMinMaxScaler = () => {
    let myK = '")\n\n\tval featureScaler = new MinMaxScaler().fit(data)';
    if (document.getElementById("inputColID").value !== "") {
        myK = (myK.concat(".", `setInputCol("${document.getElementById("inputColID").value}")`));
    }
    if (document.getElementById("maxID").value !== "") {
        myK = (myK.concat(".", `setMax("${document.getElementById("maxID").value}")`));
    }
    if (document.getElementById("minID").value !== "") {
        myK = (myK.concat(".", `setMin("${document.getElementById("minID").value}")`));
    }
    if (document.getElementById("outputColID").value !== "") {
        myK = (myK.concat(".", `setOutputCol("${document.getElementById("outputColID").value}")`));
    }
    return (myK);
}

const evalForm = () => {
    let myK = "\n\n\tpredictions.select(\"prediction\", \"label\", \"features\").show(5)";
    if (document.getElementById("metricNameID").value !== "") {
        myK = (myK.concat(".", `setMetricName("${document.getElementById("metricNameID").value}")`));
    }
    if (document.getElementById("labelColID").value !== "") {
        myK = (myK.concat(".", `setLabelCol("${document.getElementById("labelColID").value}")`));
    }
    if (document.getElementById("predictionColID").value !== "") {
        myK = (myK.concat(".", `setPredictionCol("${document.getElementById("predictionColID").value}")`));
    }
    if (document.getElementById("weightColID").value !== "") {
        myK = (myK.concat(".", `setWeightCol("${document.getElementById("weightColID").value}")`));
    }
    return (myK);
}

function FMRegerssor() {

    const makeid = () => { //make the name of the programm
        var name = '';
        var characters = 'abcdefghijklmnopqrstuvwxyz';
        var length = 7;
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            name += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return name;
    }

    const [skipB, setskipB] = useState(false);
    const [evalColor, setevalColor] = useState('darkgoldenrod');
    const [evalbutt, setevalbutt] = useState(false);
    const [DecisionButton, setDecisionButton] = useState(false);
    const [nextStep, setNextStep] = useState(false);
    const [theNext, setTheNext] = useState(false);
    const [mycolor, setMycolor] = useState('darkgoldenrod');
    const [thisColor, setThisColor] = useState('darkgoldenrod');
    const [thecolor, setThecolor] = useState('darkgoldenrod');
    const [IndexColor, setIndexColor] = useState('darkgoldenrod');
    const [showbutton, setShowbutton] = useState(false);
    const [mybutton, setMyButton] = useState(false);
    const [pivot, setPivot] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [toggle, setToggle] = useState(false);
    const [libs] = useState('import org.apache.spark.ml.Pipeline\nimport org.apache.spark.ml.classification.{FMRegressionModel, FMRegressor}\nimport org.apache.spark.ml.feature.MinMaxScaler\nimport org.apache.spark.sql.SparkSession');
    const [changer] = useState('\nimport org.apache.spark.ml.evaluation.RegressionEvaluator');
    const [first] = useState('\n\nobject ');
    const [name] = useState(makeid());
    const [basic] = useState('{\n\tdef main(args: Array[String]): Unit = {\n\tval spark = SparkSession\n\t\t.builder()\n\t\t.appName(s\"${this.getClass.getSimpleName}\")\n\t\t.getOrCreate()');
    const [dataset] = useState('\n\tval data = spark.read.format("libsvm").load("dataSet.csv');
    const [myscaler] = useState('")\n\n\tval featureScaler  = new MinMaxScaler().fit(data)');
    const [splits] = useState('\n\n\tval Array(trainingData, testData) = data.randomSplit(Array(');
    const [comma] = useState(',');
    const [FactorizationMachinesModel] = useState('))\n\n\tval fm = new FMRegressor()');
    const [mypipeline] = useState('\n\n\tval pipeline = new Pipeline().setStages(Array(labelIndexer, featureScaler , fm, labelConverter))');
    const [mymodel] = useState('\n\n\tval model = pipeline.fit(trainingData)\n\n\tval predictions = model.transform(testData)\n\n\tpredictions.select("predictedLabel", "label", "features").show(5)');
    const [evaluator] = useState('\n\n\tval evaluator = new RegressionEvaluator()');
    const [stopper] = useState('\n\n\tval rmse = evaluator.evaluate(predictions)\n\tprintln(s"Root Mean Squared Error (RMSE) on test data = $rmse")\n\n\tval fmModel = model.stages(1).asInstanceOf[FMRegressionModel]\n\n\tprintln(s"Factors: ${fmModel.factors} Linear: ${fmModel.linear} " + s"Intercept: ${fmModel.intercept}")\n\n\tspark.stop()\n }\n}')
    const [altEnd] = useState('\n\n\tval fmModel = model.stages(1).asInstanceOf[FMRegressionModel]\n\n\tprintln(s"Factors: ${fmModel.factors} Linear: ${fmModel.linear} " + s"Intercept: ${fmModel.intercept}")\n\n\tspark.stop()\n }\n}')
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
      };
    
      const handleSubmission = () => {
        const formData = new FormData();
    
        formData.append("File", selectedFile);
    
        fetch("https://httpbin.org/post", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((result) => {
            console.log("Success:", result);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      };

    const downloadTxtFile = () => { //this is the file (downloading zip)
        setPercentage(currPercentage => currPercentage + 40);
        setPivot(currPivot => currPivot + 1);

        const file = [
            new Blob([libs], { type: 'text/plain' }),
            new Blob([changer], { type: 'text/plain' }),
            new Blob([first], { type: 'text/plain' }),
            new Blob([name], { type: 'text/plain' }),
            new Blob([basic], { type: 'text/plain' }),
            new Blob([dataset], { type: 'text/plain' }),
            mybutton === false ? new Blob([myscaler]) : new Blob([myMinMaxScaler()]),
            new Blob([splits], { type: 'text/plain' }),
            new Blob([document.getElementById('trainID').value / 100], { type: 'text/plain' }),
            new Blob([comma], { type: 'text/plain' }),
            new Blob([(100 - document.getElementById('trainID').value) / 100], { type: 'text/plain' }),
            DecisionButton === false ? new Blob([FactorizationMachinesModel]) : new Blob([submitForm()]),
            new Blob([mypipeline], { type: 'text/plain' }),
            new Blob([mymodel], { type: 'text/plain' }),
            evalbutt === true ? new Blob([evaluator]) : new Blob([evalForm()]),
            new Blob([stopper], { type: 'text/plain' }),

        ];
        var parts = new File(file, "myfile")
        var zip = new JSZip();
        zip.file("build.sbt", "name :=" + "\"" + localStorage.getItem('Name') + "\"" + "\n\nversion := " + "\"" + localStorage.getItem('Version') + "\"" + "\n\nscalaVersion :=" + '\"' + localStorage.getItem('ScalaVersion') + '\"\n\n' + "libraryDependencies ++= Seq( \n" + "\t\"org.apache.spark\" %% \"spark-sql\" % " + "\"" + localStorage.getItem('SparkVersion') + "\"," + "\n\t\"org.apache.spark\" %% \"spark-mllib\" % " + "\"" + localStorage.getItem('SparkVersion') + "\"\n)");
        zip.file("src/main/scala/FMRegressor.scala", parts);
        zip.file("src/main/scala/dataSet.csv", selectedFile);
        zip.generateAsync({ type: "blob" }).then(function (content) {
            // see FileSaver.js
            FileSaver.saveAs(content, "FMRegressor.zip");
        });
    }

    const notDefaultFile = () => { //this is the file (downloading zip)
        setPercentage(currPercentage => currPercentage + 40);
        setPivot(currPivot => currPivot + 1);

        const file = [
            new Blob([libs], { type: 'text/plain' }),
            new Blob([first], { type: 'text/plain' }),
            new Blob([name], { type: 'text/plain' }),
            new Blob([basic], { type: 'text/plain' }),
            new Blob([dataset], { type: 'text/plain' }),
            mybutton === false ? new Blob([myscaler]) : new Blob([myMinMaxScaler()]),
            new Blob([splits], { type: 'text/plain' }),
            new Blob([document.getElementById('trainID').value / 100], { type: 'text/plain' }),
            new Blob([comma], { type: 'text/plain' }),
            new Blob([(100 - document.getElementById('trainID').value) / 100], { type: 'text/plain' }),
            DecisionButton === false ? new Blob([FactorizationMachinesModel]) : new Blob([submitForm()]),
            new Blob([mypipeline], { type: 'text/plain' }),
            new Blob([mymodel], { type: 'text/plain' }),
            new Blob([altEnd], { type: 'text/plain' }),

        ];
        var parts = new File(file, "myfile")
        var zip = new JSZip();
        zip.file("build.sbt", "name :=" + "\"" + localStorage.getItem('Name') + "\"" + "\n\nversion := " + "\"" + localStorage.getItem('Version') + "\"" + "\n\nscalaVersion :=" + '\"' + localStorage.getItem('ScalaVersion') + '\"\n\n' + "libraryDependencies ++= Seq( \n" + "\t\"org.apache.spark\" %% \"spark-sql\" % " + "\"" + localStorage.getItem('SparkVersion') + "\"," + "\n\t\"org.apache.spark\" %% \"spark-mllib\" % " + "\"" + localStorage.getItem('SparkVersion') + "\"\n)");
        zip.file("src/main/scala/FMRegressor.scala", parts);
        zip.file("src/main/scala/dataSet.csv", selectedFile);
        zip.generateAsync({ type: "blob" }).then(function (content) {
            // see FileSaver.js
            FileSaver.saveAs(content, "FMRegressor.zip");
        });
    }

    const myToggler = (e) => {  //this is for next button
        e.preventDefault();
        setToggle(true);
        if (percentage <= 9) {
            setPercentage(currPercentage => currPercentage + 10);
        }
    }

    const theReturnFunction = () => {
        if (percentage <= 11) {
            setPercentage(currPercentage => currPercentage + 10);
        }
        setShowbutton(true);
    }

    const callbackFunction = () => { //this is for progress bar
        if (percentage <= 21) {
            setPercentage(currPercentage => currPercentage + 10);
        }
        setMyButton(true);
        setNextStep(true);
    }

    const theString = () => { //this is for default params in train
        //setShowModel(true);
        setThecolor('beige');
        if (percentage <= 21) {
            setPercentage(currPercentage => currPercentage + 10);
        }
        setNextStep(true);
    };

    const mytopic = (e) => {
        e.preventDefault();
        if (percentage <= 31) {
            setPercentage(currPercentage => currPercentage + 10);
        }
        setTheNext(true);
    }

    const trainFunction = () => {
        setThisColor('beige');
        if (percentage <= 41) {
            setPercentage(currPercentage => currPercentage + 30);
        }
    };

    const modelMyFunction = () => {
        if (percentage <= 51) {
            setPercentage(currPercentage => currPercentage + 10);
        }
        setDecisionButton(true);
    };


    const evalFunction = () => { //this is for progress bar
        setPercentage(currPercentage => currPercentage + 10);
    }

    const evalEdit = () => { //this is for evaluation with default params
        setevalbutt(true);
        setevalColor('beige');
        if (percentage <= 69) {
            setPercentage(currPercentage => currPercentage + 10);
        }
    };

    const skipEval = () => { //this is for skipping evalutation
        setskipB(true);
        if (percentage <= 69) {
            setPercentage(currPercentage => currPercentage + 20);
        }
    }


    return (
        <div className="d-flex">
            <RegressionToolbar />
            <div className="welcome">
                <h1> Factorization Machines Algorithm</h1>
                <br />
                <Jumbotron className="myInput">
          <h2>Please Upload your DataSet(.csv) first</h2>
          <Form onSubmit={myToggler}>
            <Form.Group controlId="myInput" />
            <input
              class="btn btn-primary"
              type="file"
              name="file"
              onChange={changeHandler}
            />
            {isFilePicked ? (
              <div>
                <p>Filename: {selectedFile.name}</p>
                <p>Filetype: {selectedFile.type}</p>
                <p>Size in bytes: {selectedFile.size}</p>
                <p>
                  lastModifiedDate:{" "}
                  {selectedFile.lastModifiedDate.toLocaleDateString()}
                </p>
              </div>
            ) : (
              <p>Select a file to show details</p>
            )}
            <div>
              <button
                type="submit"
                class="btn btn-primary"
                onClick={handleSubmission}
              >
                Next Step
              </button>
            </div>
          </Form>
        </Jumbotron>
                <br />
                <LoadingBar height={10} loaderSpeed={1000} transitionTime={100} color='#00008B' progress={percentage} onLoaderFinished={() => setPercentage} />
                {
                    toggle === true ?
                        <div>
                            <Jumbotron>
                                <h2>MinMaxScaler</h2>
                                <br />
                                <MinMaxScaler percentage={percentage} parentCallback={callbackFunction} />
                                <br />
                                <button class="btn btn-primary" onClick={theString}>
                                    Default parameters
                                </button>
                            </Jumbotron>
                            {
                                nextStep === true ?
                                    <div>
                                        <Jumbotron>
                                            <h2> Please split your dataset into training and test sets and check the parameters </h2>
                                            <br />
                                            <Form onSubmit={mytopic}>
                                                <Form.Group controlId="trainID">
                                                    <Form.Control type="number" required={true} name="Train" max="100" placeholder="Write the percentage of train model and we will calculate the percentage of the test model" />
                                                </Form.Group>
                                                <button type="submit" class="btn btn-primary"> Validation </button>
                                            </Form>
                                            <br />
                                            <Splitter showbutton={showbutton} percentage={percentage} parentCallback={theReturnFunction} />
                                        </Jumbotron>
                                        {
                                            theNext === true ?
                                                <div>
                                                    <Jumbotron>
                                                        <h2> Train your model with </h2>
                                                        <br />
                                                        <button class="btn btn-primary" onClick={trainFunction}>
                                                            Default parameters
                                                        </button>
                                                        <br />
                                                        <br />
                                                        <RightForm percentage={percentage} parentCallback={modelMyFunction} />
                                                    </Jumbotron>
                                                    <Jumbotron>
                                                        <h2>Evaluate your model with</h2>
                                                        <br/>
                                                        <button class="btn btn-primary mr-1" onClick={evalEdit}>
                                                                Default parameters
                                                        </button>
                                                        <button type="submit" class="btn btn-primary" onClick={skipEval}>
                                                                Skip Evaluation
                                                        </button>
                                                        <br/>
                                                        <br/>
                                                        <RegressionEval percentage={percentage} parentCallback={evalFunction} />
                                                    </Jumbotron>
                                                        {
                                                            skipB === true ?
                                                                <div>
                                                                    <button disabled={percentage <= 69} type="submit" class="btn btn-primary mr-1" onClick={notDefaultFile}> Download </button>
                                                                    {pivot === 1 ?
                                                                        <Link to='/classification/AlgorithmsClassification'> <button class="btn btn-primary"> Return to menu </button></Link>
                                                                        : null
                                                                    }
                                                                </div> :
                                                                <div>
                                                                    <button disabled={percentage <= 69} type="submit" class="btn btn-primary mr-1" onClick={downloadTxtFile}> Download</button>
                                                                    {pivot === 1 ?
                                                                        <Link to='/classification'> <button class="btn btn-primary"> Return to menu </button> </Link>
                                                                        : null
                                                                    }
                                                                </div>
                                                        }
                                                    </div> : null
                                        }
                                    </div> : null
                                        }
                                    </div> : null
                            }
                        </div>
        </div>

    );
}

export default FMRegerssor 