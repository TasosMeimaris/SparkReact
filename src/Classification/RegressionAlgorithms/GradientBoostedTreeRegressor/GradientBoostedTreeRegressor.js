import React, { useState } from 'react'
import '../../../Cluster/Algorithms/Algorithms.css'
import LoadingBar from 'react-top-loading-bar'
import VectorIndexer from '../../ClassificationAlgorithms/DecisionTree/VectorIndexer'
import FileSaver from 'file-saver'
import JSZip from 'jszip'
import Splitter from '../../ClassificationAlgorithms/NaiveBayes/Splitter'
import { Link } from 'react-router-dom';
import RegressionEval from '../RandomForestRegression/RegressionEval'
import GradientForm from './GradientForm'
import { Jumbotron, Form } from 'react-bootstrap'
import RegressionToolbar from '../RegressionToolbar'

const submitForm = () => {
    let m = "\n\n\tval gbt = new GBTRegressor()";
    if (document.getElementById("checkpointIntervalID").value !== "") {
        m = (m.concat(".", "setCheckpointInterval(" + document.getElementById("checkpointIntervalID").value + ")"));
    }
    if (document.getElementById("featureSubsetStrategyID").value !== "") {
        m = (m.concat(".", `setFeatureSubsetStrategy("${document.getElementById("featureSubsetStrategyID").value}")`));
    }
    if (document.getElementById("featuresColID").value !== "") {
        m = (m.concat(".", `setFeaturesCol("${document.getElementById("featuresColID").value}")`));
    }
    if (document.getElementById("impurityID").value !== "") {
        m = (m.concat(".", `setImpurity("${document.getElementById("impurityID").value}")`));
    }
    if (document.getElementById("labelColID").value !== "") {
        m = (m.concat(".", `setLabelCol("${document.getElementById("labelColID").value}")`));
    }
    if (document.getElementById("leafColID").value !== "") {
        m = (m.concat(".", `setLeafCol("${document.getElementById("leafColID").value}")`));
    }
    if (document.getElementById("lossTypeID").value !== "") {
        m = (m.concat(".", `setLossType("${document.getElementById("lossTypeID").value}")`));
    }
    if (document.getElementById("maxBinsID").value !== "") {
        m = (m.concat(".", "setMaxBins(" + document.getElementById("maxBinsID").value + ")"));
    }
    if (document.getElementById("maxDepthID").value !== "") {
        m = (m.concat(".", "setMaxDepth(" + document.getElementById("maxDepthID").value + ")"));
    }
    if (document.getElementById("maxIterID").value !== "") {
        m = (m.concat(".", "setMaxIter(" + document.getElementById("maxIterID").value + ")"));
    }
    if (document.getElementById("minInfoGainID").value !== "") {
        m = (m.concat(".", "setMinInfoGain(" + document.getElementById("minInfoGainID").value + ")"));
    }
    if (document.getElementById("minInstancesPerNodeID").value !== "") {
        m = (m.concat(".", "setMinInstancesPerNode(" + document.getElementById("minInstancesPerNodeID").value + ")"));
    }
    if (document.getElementById("minWeightFractionPerNodeID").value !== "") {
        m = (m.concat(".", "setMinWeightFractionPerNode(" + document.getElementById("minWeightFractionPerNodeID").value + ")"));
    }
    if (document.getElementById("predictionColID").value !== "") {
        m = (m.concat(".", `setPredictionCol("${document.getElementById("predictionColID").value}")`));
    }
    if (document.getElementById("seedID").value !== "") {
        m = (m.concat(".", "setSeed(" + document.getElementById("seedID").value + "L)"));
    }
    if (document.getElementById("stepSizeID").value !== "") {
        m = (m.concat(".", "setStepSize(" + document.getElementById("stepSizeID").value + ")"));
    }
    if (document.getElementById("subsamplingRateID").value !== "") {
        m = (m.concat(".", " setSubsamplingRate(" + document.getElementById("subsamplingRateID").value + ")"));
    }
    if (document.getElementById("validationIndicatorColID").value !== "") {
        m = (m.concat(".", `setValidationIndicatorCol("${document.getElementById("validationIndicatorColID").value}")`));
    }//DEN EXEI MPEI validationTol
    if (document.getElementById("weightColID").value !== "") {
        m = (m.concat(".", `setWeightCol("${document.getElementById("weightColID").value}")`));
    }
    return (m);
}

const mysplit = () => {
    let myK = "";
    if (document.getElementById("weightsSplitID").value !== "" && (document.getElementById("seedSplitID").value === "")) {
      myK = (myK.concat("),", "weights = " + document.getElementById("weightsSplitID").value + ")"));
    }
    if (document.getElementById("weightsSplitID").value !== "" && (document.getElementById("seedSplitID").value !== "")) {
      myK = (myK.concat("),", "weights = " + document.getElementById("weightsSplitID").value));
    }
    if (document.getElementById("seedSplitID").value !== "" && (document.getElementById("weightsSplitID").value === ""))  {
      myK = (myK.concat("),", "seed = " + document.getElementById("seedSplitID").value + "L)"));
    }
    if (document.getElementById("seedSplitID").value !== "" && (document.getElementById("weightsSplitID").value !== ""))  {
        myK = (myK.concat(",", "seed = " + document.getElementById("seedSplitID").value + "L)"));
      }
    return (myK);
  }

const evalForm = () => {
    let myK = "\n\n\tval evaluator = new RegressionEvaluator()";
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

const myVectorIndexer = () => {
    let my = "\")\n\n\tval featureIndexer  = new VectorIndexer().fit(data)";
    if (document.getElementById("handleInvalidID").value !== "") {
        my = (my.concat(".", `setHandleInvalid("${document.getElementById("handleInvalidID").value}")`));
    }
    if (document.getElementById("inputColID").value !== "") {
        my = (my.concat(".", `setInputCol("${document.getElementById("inputColID").value}")`));
    }
    if (document.getElementById("outputColID").value !== "") {
        my = (my.concat(".", "setOutputCol(" + document.getElementById("outputColID").value + ")"));
    }
    if (document.getElementById("maxCategoriesID").value !== "") {
        my = (my.concat(".", "setMaxCategories(" + document.getElementById("maxCategoriesID").value + ")"));
    }
    return (my);
}

function GradientBoostedTreeRegressor() {

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
    const [formColor, setformColor] = useState('darkgoldenrod');
    const [formButton, setformButton] = useState(false);
    const [evalColor, setevalColor] = useState('darkgoldenrod');
    const [showButtonIndex, setshowButtonIndex] = useState(false);
    const [showbutton, setShowbutton] = useState(false);
    const [vectorButton, setvectorButton] = useState(false);
    const [pivot, setPivot] = useState(0);
    const [toggle, setToggle] = useState(false);
    const [thecolor, setthecolor] = useState('darkgoldenrod')
    const [percentage, setPercentage] = useState(0);
    const [libs] = useState('import org.apache.spark.ml.Pipeline\nimport org.apache.spark.ml.feature.VectorIndexer\nimport org.apache.spark.ml.regression.{RandomForestRegressionModel, RandomForestRegressor}\nimport org.apache.spark.sql.SparkSession');
    const [changer] = useState('\nimport org.apache.spark.ml.evaluation.RegressionEvaluator');
    const [first] = useState('\n\nobject ')
    const [name] = useState(makeid());
    const [basic] = useState('{\n\tdef main(args: Array[String]): Unit = {\n\tval spark = SparkSession\n\t\t.builder()\n\t\t.appName(s\"${this.getClass.getSimpleName}\")\n\t\t.getOrCreate()');
    const [dataset] = useState('\n\tval data = spark.read.format("libsvm").load("dataSet.csv');
    const [myvector] = useState('")\n\n\tval featureIndexer = new VectorIndexer().fit(data)');
    const [thesplitter] = useState('\n\n\tval Array(trainingData, testData) = data.randomSplit(Array(');
    const [comma] = useState(',');
    const [con] = useState('))');
    const [thetrainer] = useState('\n\n\tval gbt = new GBTRegressor()');
    const [thepipeline] = useState('\n\n\tval pipeline = new Pipeline().setStages(Array(featureIndexer, gbt))');
    const [themodel] = useState('\n\n\tval model = pipeline.fit(trainingData)');
    const [thepredict] = useState('\n\n\tval predictions = model.transform(testData)\n\n\tpredictions.select("prediction", "label", "features").show(5)');
    const [theEvaluator] = useState('\n\n\tval evaluator = new RegressionEvaluator()');
    const [ending] = useState('\n\tval rmse = evaluator.evaluate(predictions)\n\tprintln(s"Error on test data = $rmse")\n\n\tval gbtModel = model.stages(1).asInstanceOf[GBTRegressionModel]\n\tprintln(s"Learned regression GBT model: ${gbtModel.toDebugString}")\n\n\tspark.stop()\n }\n}');
    const [notEval] = useState('\n\n\tval gbtModel = model.stages(1).asInstanceOf[GBTRegressionModel]\n\tprintln(s"Learned regression GBT model: ${gbtModel.toDebugString}")\n\n\tspark.stop()\n }\n}');
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const myToggler = (e) => {  //this is for next button
        e.preventDefault();
        setToggle(true);
        setPercentage(currPercentage => currPercentage + 10);
    }

    const callbackFunction = () => {
        if (percentage <= 19) {
            setPercentage(currPercentage => currPercentage + 10);
        }
        setvectorButton(true);
    }

    const theString = () => { //this is for default params in train
        setthecolor('beige');
        if (percentage <= 19) {
            setPercentage(currPercentage => currPercentage + 10);
        }
        //setNextStep(true);
    };

    const mytopic = (e) => {
        e.preventDefault();
        setPercentage(currPercentage => currPercentage + 10);
    }

    const theReturnFunction = () => {
        setPercentage(currPercentage => currPercentage + 10);
        setShowbutton(true);
    }

    const evalEdit = () => { //this is for evaluation with default params
        setshowButtonIndex(true);
        setevalColor('beige');
        if (percentage <= 69) { //needs change
            setPercentage(currPercentage => currPercentage + 20);
        }
    };

    const theEvalFunction = () => {
        if (percentage <= 69) { //needs change
            setPercentage(currPercentage => currPercentage + 20);
        }

    }

    const theFormFunction = () => {
        if (percentage <= 49) { //needs change
            setPercentage(currPercentage => currPercentage + 30);
        }

    }

    const handleEdit = () => { //this is for default params in train
        setformColor('beige');
        setformButton(true);
        if (percentage <= 49) {
            setPercentage(currPercentage => currPercentage + 30);
        }
    };

    const skipEval = () => { //this is for skipping evalutation
        setskipB(true);
        if (percentage <= 69) {
            setPercentage(currPercentage => currPercentage + 20);
        }
    }

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

    const notDefaultFile = () => {  //this is the file after skipping evalutation
        setPercentage(currPercentage => currPercentage + 20);
        setPivot(currPivot => currPivot + 1);
        //const element = document.createElement("a");
        const file = [
          new Blob([libs], { type: 'text/plain' }),
          new Blob([first], {type: 'text/plain' }),
          new Blob([name], { type: 'text/plain' }),
          new Blob([basic], { type: 'text/plain' }),
          new Blob([dataset], { type: 'text/plain' }),
          vectorButton === false ? new Blob([myvector]) : new Blob([myVectorIndexer()]),
          new Blob([thesplitter], { type: 'text/plain' }),
          new Blob([document.getElementById('trainID').value / 100], { type: 'text/plain' }),
          new Blob([comma], { type: 'text/plain' }),
          new Blob([(100 - document.getElementById('trainID').value) / 100], { type: 'text/plain' }),
          showbutton === false ? new Blob([con]) : new Blob([mysplit()]),
          formButton === true ? new Blob([thetrainer]) : new Blob([submitForm()]),
          new Blob([thepipeline], { type: 'text/plain' }),
          new Blob([themodel], { type: 'text/plain' }),
          new Blob([thepredict], { type: 'text/plain' }),
          new Blob([notEval], { type: 'text/plain' }),
    
        ];
        var parts = new File(file, "myfile")
        var zip = new JSZip();
        zip.file("build.sbt", "name :=" + "\"" +localStorage.getItem('Name')+ "\"" + "\n\nversion := " + "\"" + localStorage.getItem('Version') + "\"" + "\n\nscalaVersion :=" + '\"' +  localStorage.getItem('ScalaVersion') + '\"\n\n' + "libraryDependencies ++= Seq( \n" + "\t\"org.apache.spark\" %% \"spark-sql\" % " + "\"" + localStorage.getItem('SparkVersion') + "\"," + "\n\t\"org.apache.spark\" %% \"spark-mllib\" % " + "\"" + localStorage.getItem('SparkVersion') + "\"\n)");
        zip.file("src/main/scala/GradientBoostedTreeRegressor.scala", parts);
        zip.file("src/main/scala/dataSet.csv", selectedFile);
        zip.generateAsync({ type: "blob" }).then(function (content) {
          // see FileSaver.js
          FileSaver.saveAs(content, "GradientBTR.zip");
        });
    }

    const downloadTxtFile = () => { //this is the file (downloading zip)
        setPercentage(currPercentage => currPercentage + 20);
        setPivot(currPivot => currPivot + 1);

        const file = [
            new Blob([libs], { type: 'text/plain' }),
            new Blob([changer], {type: 'text/plain' }),
            new Blob([first], {type: 'text/plain' }),
            new Blob([name], { type: 'text/plain' }),
            new Blob([basic], { type: 'text/plain' }),
            new Blob([dataset], { type: 'text/plain' }),
            vectorButton === false ? new Blob([myvector]) : new Blob([myVectorIndexer()]),
            new Blob([thesplitter], { type: 'text/plain' }),
            new Blob([document.getElementById('trainID').value / 100], { type: 'text/plain' }),
            new Blob([comma], { type: 'text/plain' }),
            new Blob([(100 - document.getElementById('trainID').value) / 100], { type: 'text/plain' }),
            showbutton === false ? new Blob([con]) : new Blob([mysplit()]),
            formButton === true ? new Blob([thetrainer]) : new Blob([submitForm()]),
            new Blob([thepipeline], { type: 'text/plain' }),
            new Blob([themodel], { type: 'text/plain' }),
            new Blob([thepredict], { type: 'text/plain' }),
            //showButtonIndex === true ? new Blob([theEvaluator]) : new Blob([evalForm()]),
            showButtonIndex === true ? new Blob([theEvaluator]) : new Blob([evalForm()]),
            new Blob([ending], { type: 'text/plain' }),

        ];
        var parts = new File(file, "myfile")
        var zip = new JSZip();
        zip.file("build.sbt", "name :=" + "\"" +localStorage.getItem('Name')+ "\"" + "\n\nversion := " + "\"" + localStorage.getItem('Version') + "\"" + "\n\nscalaVersion :=" + '\"' +  localStorage.getItem('ScalaVersion') + '\"\n\n' + "libraryDependencies ++= Seq( \n" + "\t\"org.apache.spark\" %% \"spark-sql\" % " + "\"" + localStorage.getItem('SparkVersion') + "\"," + "\n\t\"org.apache.spark\" %% \"spark-mllib\" % " + "\"" + localStorage.getItem('SparkVersion') + "\"\n)");
        zip.file("src/main/scala/GradientBoostedTreeRegressor.scala", parts);
        zip.file("src/main/scala/dataSet.csv", selectedFile);
        zip.generateAsync({ type: "blob" }).then(function (content) {
            // see FileSaver.js
            FileSaver.saveAs(content, "GradientBTR.zip");
        });
    }

    return (
        <div className="d-flex">
            <RegressionToolbar />
            <div className="welcome">
                <h1> Gradient Boosted Tree Regression Algorithm </h1>
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
                <LoadingBar height={10} loaderSpeed={1000} transitionTime={100} color='#00008B' progress={percentage} onLoaderFinished={() => setPercentage} />
                {
                    toggle === true ?
                        <div>
                            <Jumbotron>
                                <h2>Indexing categorical feature columns in a dataset of Vector with Vector Indexer.</h2>
                                <br/>
                                <VectorIndexer percentage={percentage} parentCallback={callbackFunction} />
                                <br/>
                                <button class="btn btn-primary" onClick={theString}>
                                    Default parameters
                                </button>
                            </Jumbotron>
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
                            <Jumbotron>
                                <h2>Train your model with </h2>
                                <br/>
                                <button class="btn btn-primary" onClick={handleEdit}>
                                    Default parameters
                                </button>
                                <br/>
                                <br/>
                                <GradientForm percentage={percentage} parentCallback={theFormFunction} />
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
                                <RegressionEval percentage={percentage} parentCallback={theEvalFunction} />
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
                                        <Link to='/regression'> <button class="btn btn-primary"> Return to menu </button> </Link>
                                        : null
                                    }
                                </div>
                            }
                        </div> : null
                }
            </div>
        </div>
    )
}

export default GradientBoostedTreeRegressor