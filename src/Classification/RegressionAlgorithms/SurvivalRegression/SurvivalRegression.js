import React, { useState } from 'react'
import '../../../Cluster/Algorithms/Algorithms.css'
import LoadingBar from 'react-top-loading-bar'
import FileSaver from 'file-saver'
import JSZip from 'jszip'
import { Link } from 'react-router-dom';
import TheForm from './SrForm'
import { Jumbotron, Form } from 'react-bootstrap'
import RegressionToolbar from '../RegressionToolbar'

//text 
const submitForm = () => {
  let myK = ")\n\n\tval ir = new AFTSurvivalRegression()";
  if (document.getElementById("censorColID").value !== "") {
    myK = (myK.concat(".", "setCensorCol(" + document.getElementById("censorColID").value + ")"));
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
  if (document.getElementById("maxIterID").value !== "") {
    myK = (myK.concat(".", "setMaxIter(" + document.getElementById("maxIterID").value + ")"));
  }
  if (document.getElementById("predictionColID").value !== "") {
    myK = (myK.concat(".", `setPredictionCol("${document.getElementById("predictionColID").value}")`));
  }
  if (document.getElementById("quantilesColID").value !== "") {
    myK = (myK.concat(".", `setQuantilesCol("${document.getElementById("quantilesColID").value}")`));
  }
  if (document.getElementById("tolID").value !== "") {
    myK = (myK.concat(".", "setTol(" + document.getElementById("tolID").value + ")"));
  }
  return (myK);
}

function SurvivalRegression() {

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
const [libs] = useState('import org.apache.spark.ml.linalg.Vectors\nimport org.apache.spark.ml.regression.AFTSurvivalRegression\nimport org.apache.spark.sql.SparkSession\n\nobject ');
const [name] = useState(makeid());
const [basic] = useState('{\n\tdef main(args: Array[String]): Unit = {\n\tval spark = SparkSession\n\t\t.builder()\n\t\t.appName(s\"${this.getClass.getSimpleName}\")\n\t\t.getOrCreate()');
const [training] = useState('\n\tval training = = spark.createDataFrame(Seq(\n\t(1.218, 1.0, Vectors.dense(1.560, -0.605)),\n\t(2.949, 0.0, Vectors.dense(0.346, 2.158)),\n\t(3.627, 0.0, Vectors.dense(1.380, 0.231)),\n\t(0.273, 1.0, Vectors.dense(0.520, 1.151)),\n\t(4.199, 0.0, Vectors.dense(0.795, -0.226))\n)).toDF("label", "censor", "features")');
const [quantileProb] = useState('\nval quantileProbabilities = Array(');
const [comma] = useState(',');
const [survival] = useState(')\n\n\tval aft = new AFTSurvivalRegression()');
const [fitting] = useState('\n\n\tval Model = aft.fit(training)');
const [printer] = useState('\n\n\tprintln(s"Coefficients: ${model.coefficients}")\n\tprintln(s"Intercept: ${model.intercept}")\n\tprintln(s"Scale: ${model.scale}")');
const [thepredict] = useState('\n\n\tmodel.transform(training).show(false)\n\n\tspark.stop()\n }\n}');

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

  const downloadTxtFile = () => { //this is the file (downloading zip)
    setPercentage(currPercentage => currPercentage + 40);
    setPivot(currPivot => currPivot + 1);

    const file = [
      new Blob([libs], { type: 'text/plain' }),
      new Blob([name], { type: 'text/plain' }),
      new Blob([basic], { type: 'text/plain' }),
      new Blob([training], { type: 'text/plain' }),
      new Blob([quantileProb], { type: 'text/plain' }),
      new Blob([document.getElementById('trainID').value / 100], { type: 'text/plain' }),
      new Blob([comma], { type: 'text/plain' }),
      new Blob([(100 - document.getElementById('trainID').value) / 100], { type: 'text/plain' }),
      showbutton === true ? new Blob([survival]) : new Blob([submitForm()]),
      new Blob([fitting], { type: 'text/plain' }),
      new Blob([printer], { type: 'text/plain' }),
      new Blob([thepredict], { type: 'text/plain' }),
    ];
    var parts = new File(file, "myfile")
    var zip = new JSZip();
    zip.file("build.sbt", "name :=" + "\"" +localStorage.getItem('Name')+ "\"" + "\n\nversion := " + "\"" + localStorage.getItem('Version') + "\"" + "\n\nscalaVersion :=" + '\"' +  localStorage.getItem('ScalaVersion') + '\"\n\n' + "libraryDependencies ++= Seq( \n" + "\t\"org.apache.spark\" %% \"spark-sql\" % " + "\"" + localStorage.getItem('SparkVersion') + "\"," + "\n\t\"org.apache.spark\" %% \"spark-mllib\" % " + "\"" + localStorage.getItem('SparkVersion') + "\"\n)");
    zip.file("src/main/scala/SurvivalRegression.scala", parts);
    zip.generateAsync({ type: "blob" }).then(function (content) {
      // see FileSaver.js
      FileSaver.saveAs(content, "survivalR.zip");
    });
  }
  return (
    <div className="d-flex">
      <RegressionToolbar />
      <div className="welcome">
        <h1> Survival Regression Algorithm </h1>
        <br />
        <Jumbotron>
            <h2> Please split your dataset into training and test sets </h2>
            <br />
            <Form onSubmit={myToggler}>
                <Form.Group controlId="trainID">
                    <Form.Control type="number" required={true} name="Train" max="100" placeholder="Write the percentage of train model and we will calculate the percentage of the test model" />
                </Form.Group>
                <button type="submit" class="btn btn-primary"> Validation </button>
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
export default SurvivalRegression