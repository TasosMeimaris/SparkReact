import React, { useState } from 'react'
import '../../../Cluster/Algorithms/Algorithms.css'
import LoadingBar from 'react-top-loading-bar'
import FileSaver from 'file-saver'
import JSZip from 'jszip'
import { Link } from 'react-router-dom';
import TheForm from './IrForm'
import { Jumbotron, Form } from 'react-bootstrap'
import RegressionToolbar from '../RegressionToolbar'

//text 
const submitForm = () => {
  let myK = "\")\n\n\tval ir = new IsotonicRegression()";
  if (document.getElementById("featureIndexID").value !== "") {
    myK = (myK.concat(".", "setFeatureIndex(" + document.getElementById("featureIndexID").value + ")"));
  }
  if (document.getElementById("featuresColID").value !== "") {
    myK = (myK.concat(".", `setFeaturesCol("${document.getElementById("featuresColID").value}")`));
  }
  if (document.getElementById("isotonicID").value !== "") {
    myK = (myK.concat(".", `setIsotonic("${document.getElementById("isotonicID").value}")`));
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

function IsotonicRegression() {

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
const [libs] = useState('import org.apache.spark.ml.regression.IsotonicRegression\nimport org.apache.spark.sql.SparkSession\n\nobject ');
const [name] = useState(makeid());
const [basic] = useState('{\n\tdef main(args: Array[String]): Unit = {\n\tval spark = SparkSession\n\t\t.builder()\n\t\t.appName(s\"${this.getClass.getSimpleName}\")\n\t\t.getOrCreate()');
const [dataset] = useState('\n\tval dataset = spark.read.format("libsvm").load("dataSet.csv');
const [Isotonic] = useState('")\n\n\tval ir = new IsotonicRegression()');
const [fitting] = useState('\n\n\tval irModel = ir.fit(dataset)');
const [printer] = useState('\n\n\tprintln(s"Boundaries in increasing order: ${irModel.boundaries}")\n\tprintln(s"Predictions associated with the boundaries: ${irModel.predictions}")');
const [thepredict] = useState('\n\n\tmodel.transform(dataset).show()\n\n\tspark.stop()\n }\n}');
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
      showbutton === true ? new Blob([Isotonic]) : new Blob([submitForm()]),
      new Blob([fitting], { type: 'text/plain' }),
      new Blob([printer], { type: 'text/plain' }),
      new Blob([thepredict], { type: 'text/plain' }),
    ];
    var parts = new File(file, "myfile")
    var zip = new JSZip();
    zip.file("build.sbt", "name :=" + "\"" +localStorage.getItem('Name')+ "\"" + "\n\nversion := " + "\"" + localStorage.getItem('Version') + "\"" + "\n\nscalaVersion :=" + '\"' +  localStorage.getItem('ScalaVersion') + '\"\n\n' + "libraryDependencies ++= Seq( \n" + "\t\"org.apache.spark\" %% \"spark-sql\" % " + "\"" + localStorage.getItem('SparkVersion') + "\"," + "\n\t\"org.apache.spark\" %% \"spark-mllib\" % " + "\"" + localStorage.getItem('SparkVersion') + "\"\n)");
    zip.file("src/main/scala/IsotonicRegression.scala", parts);
    zip.file("src/main/scala/dataSet.csv", selectedFile);
    zip.generateAsync({ type: "blob" }).then(function (content) {
      // see FileSaver.js
      FileSaver.saveAs(content, "IsotonicR.zip");
    });
  }
  return (
    <div className="d-flex">
      <RegressionToolbar />
      <div className="welcome">
        <h1> Isotonic Regression Algorithm </h1>
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
export default IsotonicRegression