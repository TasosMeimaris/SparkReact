import React, { useState } from 'react'
import '../../../Cluster/Algorithms/Algorithms.css'
import LoadingBar from 'react-top-loading-bar'
import FileSaver from 'file-saver'
import JSZip from 'jszip'
import { Link } from 'react-router-dom';
import TheForm from './TheForm'
import { Jumbotron, Form } from 'react-bootstrap'
import RegressionToolbar from '../RegressionToolbar'

const submitForm = () => {
  let myK = "\")\n\n\tval glr = new GeneralizedLinearRegression()";
  if (document.getElementById("familyID").value !== "") {
    myK = (myK.concat(".", `setFamilyCol("${document.getElementById("familyID").value}")`));
  }
  if (document.getElementById("featuresColID").value !== "") {
    myK = (myK.concat(".", `setFeaturesCol("${document.getElementById("featuresColID").value}")`));
  }
  if (document.getElementById("fitInterceptID").value !== "") {
    myK = (myK.concat(".", "setFitIntercept(" + document.getElementById("fitInterceptID").value + ")"));
  }
  if (document.getElementById("labelColID").value !== "") {
    myK = (myK.concat(".", `setLabelCol("${document.getElementById("labelColID").value}")`));
  }
  if (document.getElementById("linkID").value !== "") {
    myK = (myK.concat(".", `setLink("${document.getElementById("linkID").value}")`));
  }
  if (document.getElementById("linkPowerID").value !== "") {
    myK = (myK.concat(".", `setLinkPower("${document.getElementById("linkPowerID").value}")`));
  }
  if (document.getElementById("linkPredictionColID").value !== "") {
    myK = (myK.concat(".", `setLinkPredictionCol("${document.getElementById("linkPredictionColID").value}")`));
  }
  if (document.getElementById("maxIterID").value !== "") {
    myK = (myK.concat(".", "setMaxIter(" + document.getElementById("maxIterID").value + ")"));
  }
  if (document.getElementById("offsetColID").value !== "") {
    myK = (myK.concat(".", `setOffsetCol("${document.getElementById("offsetColID").value}")`));
  }
  if (document.getElementById("predictionColID").value !== "") {
    myK = (myK.concat(".", `setPredictionCol("${document.getElementById("predictionColID").value}")`));
  }
  if (document.getElementById("regParamID").value !== "") {
    myK = (myK.concat(".", "setRegParam(" + document.getElementById("regParamID").value + ")"));
  }
  if (document.getElementById("solverID").value !== "") {
    myK = (myK.concat(".", `setSolver("${document.getElementById("solverID").value}")`));
  }
  if (document.getElementById("tolID").value !== "") {
    myK = (myK.concat(".", "setTol(" + document.getElementById("tolID").value + ")"));
  }
  if (document.getElementById("variancePowerID").value !== "") {
    myK = (myK.concat(".", "setVariancePower(" + document.getElementById("variancePowerID").value + ")"));
  }
  if (document.getElementById("weightColID").value !== "") {
    myK = (myK.concat(".", `setWeightCol("${document.getElementById("weightColID").value}")`));
  }
  return (myK);
}

function GeneralizedLinearRegression() {

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

  const [pivot, setPivot] = useState(0);
  const [showbutton, setShowbutton] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [mycolor, setMycolor] = useState('darkgoldenrod');
  const [toggle, setToggle] = useState(false);
  const [libs] = useState('import org.apache.spark.ml.regression.GeneralizedLinearRegression\nimport org.apache.spark.sql.SparkSession\n\nobject ');
  const [name] = useState(makeid());
  const [basic] = useState('{\n\tdef main(args: Array[String]): Unit = {\n\tval spark = SparkSession\n\t\t.builder\n\t\t.appName(s\"${this.getClass.getSimpleName}\")\n\t\t.getOrCreate()');
  const [dataset] = useState('\n\tval training = spark.read.format("libsvm").load("dataSet.csv');
  const [Linear] = useState('")\n\n\tval glr = new GeneralizedLinearRegression()');
  const [fitting] = useState('\n\n\tval glrModel = glr.fit(training)');
  const [printer] = useState('\n\n\t println(s"Coefficients: ${glrModel.coefficients} Intercept: ${glrModel.intercept}")');
  const [Summarize] = useState('\n\n\tval Summary = glrModel.summary\n\tprintln(s"Coefficient Standard Errors: ${summary.coefficientStandardErrors.mkString(",")}")\n\tprintln(s"T Values: ${summary.tValues.mkString(",")}")\n\tprintln(s"Dispersion: ${summary.dispersion}")\n\tprintln(s"P Values: ${summary.pValues.mkString(",")}")\n\tprintln(s"Null Deviance: ${summary.nullDeviance}")\n\tprintln(s"Residual Degree Of Freedom Null: ${summary.residualDegreeOfFreedomNull}")\n\tprintln(s"Deviance: ${summary.deviance}")\n\tprintln(s"Residual Degree Of Freedom: ${summary.residualDegreeOfFreedom}")\n\tprintln(s"AIC: ${summary.aic}")\n\tprintln("Deviance Residuals: ")\n\tSummary.residuals.show()\n\n\tspark.stop()\n }\n}');
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const myToggler = (e) => {  //this is for next button
    e.preventDefault();
    setToggle(true);
    setPercentage(currPercentage => currPercentage + 10);
  }

  const handleEdit = () => { //this is for default params in train
    setShowbutton(true);
    setMycolor('beige');
    if (percentage <= 19) {
      setPercentage(currPercentage => currPercentage + 50);
    }
  };

  const callbackFunction = () => { //this is for progress bar
    setPercentage(currPercentage => currPercentage + 50);
    //setPercentage(newValue);
    //setPivot(currPivot => currPivot + 1);
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

  const downloadTxtFile = () => { //this is the file (downloading zip)
    setPercentage(currPercentage => currPercentage + 40);
    setPivot(currPivot => currPivot + 1);

    const file = [
      new Blob([libs], { type: 'text/plain' }),
      new Blob([name], { type: 'text/plain' }),
      new Blob([basic], { type: 'text/plain' }),
      new Blob([dataset], { type: 'text/plain' }),
      showbutton === true ? new Blob([Linear]) : new Blob([submitForm()]),
      new Blob([fitting], { type: 'text/plain' }),
      new Blob([printer], { type: 'text/plain' }),
      new Blob([Summarize], { type: 'text/plain' }),
    ];
    var parts = new File(file, "myfile")
    var zip = new JSZip();
    zip.file("build.sbt", "name :=" + "\"" +localStorage.getItem('Name')+ "\"" + "\n\nversion := " + "\"" + localStorage.getItem('Version') + "\"" + "\n\nscalaVersion :=" + '\"' +  localStorage.getItem('ScalaVersion') + '\"\n\n' + "libraryDependencies ++= Seq( \n" + "\t\"org.apache.spark\" %% \"spark-sql\" % " + "\"" + localStorage.getItem('SparkVersion') + "\"," + "\n\t\"org.apache.spark\" %% \"spark-mllib\" % " + "\"" + localStorage.getItem('SparkVersion') + "\"\n)");
    zip.file("src/main/scala/GeneralizedLinearRegression.scala", parts);
    zip.file("src/main/scala/dataSet.csv", selectedFile);
    zip.generateAsync({ type: "blob" }).then(function (content) {
      // see FileSaver.js
      FileSaver.saveAs(content, "GenLinearR.zip");
    });
  }

  return (
    <div className="d-flex">
      <RegressionToolbar />
      <div className="welcome">
        <h1> Generalized Linear Regression Algorithm </h1>
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
                <h2>Train your model with </h2>
                <br/>
                <button class="btn btn-primary" onClick={handleEdit}>
                  Default parameters
                </button>
                <br/>
                <br/>
                <TheForm percentage={percentage} parentCallback={callbackFunction} />
              </Jumbotron>
              <div>
                <button class="btn btn-primary mr-1" disabled={percentage <= 59} onClick={downloadTxtFile}>Download</button>
                {pivot === 1 ?
                  <Link to='/regression'><button class="btn btn-primary"> Return to menu </button></Link> 
                  : null
                }
              </div>
            </div> : null
        }
      </div>
      </div>
    );
}

export default GeneralizedLinearRegression 
