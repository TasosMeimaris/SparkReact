import React, { Component } from 'react'
import '../Algorithms.css'
import Myforms from './form'
import EvalForm from './EvaluationForm'
import LoadingBar from 'react-top-loading-bar'
import FileSaver from 'file-saver';
import JSZip from 'jszip'
import { Link } from 'react-router-dom';
import ClusterToolbar from '../../ClusterToolbar'
import { Jumbotron, Form } from 'react-bootstrap'



function submitForm() {
  let myK = "val kmeans = new KMeans()";
  if (document.getElementById("kname").value !== "") {
    myK = (myK.concat(".", "setK(" + document.getElementById("kname").value + ")"));
  }
  if (document.getElementById("maxname").value !== "") {
    myK = (myK.concat(".", "setMaxIter(" + document.getElementById("maxname").value + ")"));
  }
  if (document.getElementById("featuresColname").value !== "") {
    myK = (myK.concat(".", `setFeaturesCol("${document.getElementById("featuresColname").value}")`));
  }
  if (document.getElementById("predictionColname").value !== "") {
    myK = (myK.concat(".", "setPredictionCol(\"" + document.getElementById("predictionColname").value + "\")"));
  }
  if (document.getElementById("seedname").value !== "") {
    myK = (myK.concat(".", "setSeed(" + document.getElementById("seedname").value + "L)"));
  }
  if (document.getElementById("tolname").value !== "") {
    myK = (myK.concat(".", "setTol(" + document.getElementById("tolname").value + ")"));
  }
  if (document.getElementById("distanceMeasurename").value !== "") {
    myK = (myK.concat(".", "setDistanceMeasure(\"" + document.getElementById("distanceMeasurename").value + "\")"));
  }
  if (document.getElementById("weightColname").value !== "") {
    myK = (myK.concat(".", "setWeightCol(\"" + document.getElementById("weightColname").value + "\")"));
  }
  if (document.getElementById("initModename").value !== "") {
    myK = (myK.concat(".", "setInitMode(\"" + document.getElementById("initModename").value + "\")"));
  }
  if (document.getElementById("initStepsname").value !== "") {
    myK = (myK.concat(".", "setInitSteps(\"" + document.getElementById("initStepsname").value + "\")"));
  }

  return (myK);

}

function myevalForm() {
  let myeval = "\tval evaluator = new ClusteringEvaluator()";

  if (document.getElementById("predictionColName").value !== "") {
    myeval = (myeval.concat(".", "setPredictionCol(\"" + document.getElementById("predictionColName").value + "\")"));
  }
  if (document.getElementById("mymetricName").value !== "") {
    myeval = (myeval.concat(".", "setMetricName(\"" + document.getElementById("mymetricName").value + "\")"));
  }
  if (document.getElementById("distanceMeasureName").value !== "") {
    myeval = (myeval.concat(".", "setDistanceMeasure(\"" + document.getElementById("distanceMeasureName").value + "\")"));
  }
  if (document.getElementById("featuresColName").value !== "") {
    myeval = (myeval.concat(".", `setFeaturesCol("${document.getElementById("featuresColName").value}")`));
  }

  return (myeval);
}

class Kmeans extends Component {

  makeid = () => { //make the name of the programm
    var name = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var length = 7;
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      name += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return name;
  }

  state = {
    pressed: 0,
    pivot: 0,
    theToggle: false,
    percentage: 0,
    evalColor: 'darkgoldenrod',
    mycolor: 'darkgoldenrod',
    skipcolor: 'darkgoldenrod',
    showbutton: false,
    showButtonIndex: false,
    skipbutton: false,
    changeLibs: ["import org.apache.spark.ml.clustering.KMeans"],
    libs: ["import org.apache.spark.ml.clustering.KMeans\nimport org.apache.spark.ml.evaluation.ClusteringEvaluator"],
    standars: ["\nimport org.apache.spark.sql.SparkSession\nobject\t"],
    name: [this.makeid()],
    basic: ["{\n def main(args: Array[String]): Unit = { \n\tval spark = SparkSession\n\t\t.builder\n\t\t.appName(s\"${this.getClass.getSimpleName}\")\n\t\t.getOrCreate()\n\tval dataset = spark.read.format(\"libsvm\").load(\"dataSet.csv"],
    constructor: ["\")\n\tval kmeans = new KMeans()\n"],
    predictions: ["\n\tval model = kmeans.fit(dataset)\n\tval predictions = model.transform(dataset)\n"],
    evaluator: ["\n\tval evaluator = new ClusteringEvaluator()\n"],
    silhouette: ["\n\tval silhouette = evaluator.evaluate(predictions)\n\tprintln(s\"Silhouette with squared euclidean distance = $silhouette\")\n"],
    results: ["\n\tprintln(\"Cluster Centers: \")\n\tmodel.clusterCenters.foreach(println)\n\tspark.stop()\n }\n}"],
    selectedFile: "",
    isFilePicked: false
  }


  handleEdit = () => { //this is for default params in LDA train
    console.log(this.state.showbutton)
    this.setState({
      showbutton: true,
      mycolor: 'beige',
    });
    this.setState({ pressed: this.state.pressed + 1 });
    if (this.state.percentage <= 39) {
      this.setState({ percentage: this.state.percentage + 30 });
    }
    window.scrollTo({
          top: 1000,
          behavior: 'smooth'
    })
 
  };

  evalEdit = () => { //this is for evaluation with default params
    this.setState({
      showButtonIndex: !this.state.showButtonIndex,
      evalColor: 'beige',
    });
    if (this.state.percentage <= 69) {
      this.setState({ percentage: this.state.percentage + 30 });
    }
  };

  callbackFunction = (childData) => { //this is for progress bar
    this.setState({ percentage: childData })
    this.setState({ pressed: this.state.pressed + 1 })
  }

  myToggler = (e) => {  //this is for next button
    e.preventDefault();
    const myToggle = this.state.theToggle;
    this.setState({ theToggle: !myToggle });
    if (this.state.percentage <= 9) {
      this.setState({ percentage: this.state.percentage + 10 });
    }
  }

  skipEval = () => { //this is for skipping evalutation
    this.setState({
      skipbutton: true,
      skipcolor: 'beige',
    });
    if (this.state.percentage <= 69) {
      this.setState({ percentage: this.state.percentage + 30 });
    }
  }

  changeHandler = (event) => {
    this.setState({selectedFile: event.target.files[0]});
    this.setState({isFilePicked: true});
  };

   handleSubmission = () => {
    const formData = new FormData();

    formData.append("File", this.selectedFile);

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


  notDefaultFile = () => {  //this is the file after skipping evalutation
    this.setState({ percentage: this.state.percentage + 30 });
    this.setState({ pivot: this.state.pivot + 1 });
    //const element = document.createElement("a");
    const file = [
      new Blob([this.state.changeLibs], { type: 'text/plain' }),
      new Blob([this.state.standars], { type: 'text/plain' }),
      new Blob([this.state.name], { type: 'text/plain' }),
      new Blob([this.state.basic], { type: 'text/plain' }),
      this.state.showbutton === true ? new Blob([this.state.constructor]) : new Blob([submitForm()]),
      new Blob([this.state.predictions]),
      new Blob([this.state.results]),

    ];
    var parts = new File(file, "myfile")
    var zip = new JSZip();
    zip.file("build.sbt", "name :=" + "\"" +localStorage.getItem('Name')+ "\"" + "\n\nversion := " + "\"" + localStorage.getItem('Version') + "\"" + "\n\nscalaVersion :=" + '\"' +  localStorage.getItem('ScalaVersion') + '\"\n\n' + "libraryDependencies ++= Seq( \n" + "\t\"org.apache.spark\" %% \"spark-sql\" % " + "\"" + localStorage.getItem('SparkVersion') + "\"," + "\n\t\"org.apache.spark\" %% \"spark-mllib\" % " + "\"" + localStorage.getItem('SparkVersion') + "\"\n)");
    zip.file("src/main/scala/Kmeans.scala", parts);
    zip.file("src/main/scala/dataSet.csv", this.selectedFile);
    zip.generateAsync({ type: "blob" }).then(function (content) {
      // see FileSaver.js
      FileSaver.saveAs(content, "Kmeans.zip");
    });
  }

  downloadTxtFile = () => { //this is the file after evalutation
    this.setState({ percentage: this.state.percentage + 30 });
    this.setState({ pivot: this.state.pivot + 1 });
    //const element = document.createElement("a");
    const file = [
      new Blob([this.state.libs], { type: 'text/plain' }),
      new Blob([this.state.standars], { type: 'text/plain' }),
      new Blob([this.state.name], { type: 'text/plain' }),
      new Blob([this.state.basic], { type: 'text/plain' }),
      this.state.showbutton === true ? new Blob([this.state.constructor]) : new Blob([submitForm()]),
      new Blob([this.state.predictions]),
      this.state.showButtonIndex === true ? new Blob([this.state.evaluator]) : new Blob([myevalForm()]),
      new Blob([this.state.silhouette]),
      new Blob([this.state.results]),

    ];
    var parts = new File(file, "myfile")
    //element.href = URL.createObjectURL(parts);
    //element.download = "myFile.txt";
    var zip = new JSZip();
    zip.file("build.sbt", "name :=" + "\"" +localStorage.getItem('Name')+ "\"" + "\n\nversion := " + "\"" + localStorage.getItem('Version') + "\"" + "\n\nscalaVersion :=" + '\"' +  localStorage.getItem('ScalaVersion') + '\"\n\n' + "libraryDependencies ++= Seq( \n" + "\t\"org.apache.spark\" %% \"spark-sql\" % " + "\"" + localStorage.getItem('SparkVersion') + "\"," + "\n\t\"org.apache.spark\" %% \"spark-mllib\" % " + "\"" + localStorage.getItem('SparkVersion') + "\"\n)");
    zip.file("src/main/scala/Kmeans.scala", parts);
    zip.file("src/main/scala/dataSet.csv", this.selectedFile);
    zip.generateAsync({ type: "blob" }).then(function (content) {
      // see FileSaver.js
      FileSaver.saveAs(content, "Kmeans.zip");
    });

    //document.body.appendChild(element); // Required for this to work in FireFox
    //element.click();
  }

  render() {
    return (
      <div className="d-flex">
        <ClusterToolbar />
        <div className="welcome">
          <h1> KMeans Algorithm </h1>
          <br />
          <Jumbotron className="myInput">
          <h2>Please Upload your DataSet(.csv) first</h2>
          <Form onSubmit={this.myToggler}>
            <Form.Group controlId="myInput" />
            <input
              class="btn btn-primary"
              type="file"
              name="file"
              onChange={this.changeHandler}
            />
            {this.isFilePicked ? (
              <div>
                <p>Filename: {this.selectedFile.name}</p>
                <p>Filetype: {this.selectedFile.type}</p>
                <p>Size in bytes: {this.selectedFile.size}</p>
                <p>
                  lastModifiedDate:{" "}
                  {this.selectedFile.lastModifiedDate.toLocaleDateString()}
                </p>
              </div>
            ) : (
              <p>Select a file to show details</p>
            )}
            <div>
              <button
                type="submit"
                class="btn btn-primary"
                onClick={this.handleSubmission}
              >
                Next Step
              </button>
            </div>
          </Form>
        </Jumbotron>
          <br />
          <LoadingBar height={10} loaderSpeed={1000} transitionTime={100} color='#00008B' progress={this.state.percentage} onLoaderFinished={() => this.state.percentage} />
          {
            this.state.theToggle === true ?
              <div>
                <Jumbotron>
                  <h2> Train your K-means model </h2>
                  <br />
                  <button type="submit" class="btn btn-primary mr-1" onClick={this.handleEdit}>
                    Default Parameters
                  </button>
                  <br />
                  <br />
                  <Myforms percentage={this.state.percentage} parentCallback={this.callbackFunction} />
                </Jumbotron >
                <br />
                {
                  this.state.pressed >= 1 ?
                    <Jumbotron ref={this.statsRef}>
                      <h2> Evaluate your K-means model </h2>
                      <br />
                      <button type="submit" class="btn btn-primary mr-1" onClick={this.evalEdit}>
                        Default Parameters
                      </button>
                      <button type="submit" class="btn btn-primary" onClick={this.skipEval}>
                        Skip Evaluation
                      </button>
                      <br />
                      <br />
                      <EvalForm percentage={this.state.percentage} parentCallback={this.callbackFunction} />
                    </Jumbotron>
                    : null
                }
                <br />
                {
                  this.state.skipbutton === true ?
                    <div>
                      <button disabled={this.state.percentage <= 69} type="submit" class="btn btn-primary mr-1" onClick={this.notDefaultFile}> Download </button>
                      {this.state.pivot === 1 ?
                        <Link to='/cluster'> <button class="btn btn-primary"> Return to menu </button></Link>
                        : null
                      }
                    </div> :
                    <div>
                      <button disabled={this.state.percentage <= 69} type="submit" class="btn btn-primary mr-1" onClick={this.downloadTxtFile}> Download</button>
                      {this.state.pivot === 1 ?
                        <Link to='/cluster'> <button class="btn btn-primary"> Return to menu </button> </Link>
                        : null
                      }
                    </div>
                }
                <br />
              </div> : null
          }

        </div>
      </div>
    );
  }
}



export default Kmeans;