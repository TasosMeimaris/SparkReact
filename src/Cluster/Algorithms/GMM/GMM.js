import React, { Component } from 'react'
import '../Algorithms.css'
import FileSaver from 'file-saver'
import JSZip from 'jszip'
import Myform from './Myform'
import LoadingBar from 'react-top-loading-bar'
import { Link } from 'react-router-dom';
import ClusterToolbar from '../../ClusterToolbar'
import { Jumbotron,Form } from 'react-bootstrap'

function submitForm() {
  let myK = "val gmm = new GaussianMixture()";
  if (document.getElementById("kname").value !== "") {
    myK = (myK.concat(".", "setK(" + document.getElementById("kname").value + ")"));
    //this.setState({pivot: this.state.pivot + 1});
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
  if (document.getElementById("aggregationDepthID").value !== "") {
    myK = (myK.concat(".", "setAggregationDepth(" + document.getElementById("aggregationDepthID").value + ")"));
  }
  if (document.getElementById("weightColname").value !== "") {
    myK = (myK.concat(".", "setWeightCol(\"" + document.getElementById("weightColname").value + "\")"));
  }
  if (document.getElementById("probabilityColID").value !== "") {
    myK = (myK.concat(".", "setProbabilityCol(\"" + document.getElementById("probabilityColID").value + "\")"));
  }

  return (myK);

}

class GMM extends Component {

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
    pivot: 0,
    theToggle: false,
    percentage: 0,
    mycolor: 'darkgoldenrod',
    showbutton: false,
    libs: ["import org.apache.spark.ml.clustering.GaussianMixture\nimport org.apache.spark.sql.SparkSession\nobject\t"],
    name: [this.makeid()],
    basic: ["{\n def main(args: Array[String]): Unit = { \n\tval spark = SparkSession\n\t\t.builder\n\t\t.appName(s\"${this.getClass.getSimpleName}\")\n\t\t.getOrCreate()\n\tval dataset = spark.read.format(\"libsvm\").load(\"dataSet.csv\")"],
    trainning: ["\n\tval gmm = new GaussianMixture()\n"],
    theFor: ["\n\tfor (i <- 0 until model.getK) {"],
    fitmodel: ["\n\tval model = gmm.fit(dataset)\n"],
    mix: ["\n\t\tprintln(s\"Gaussian $i:\\nweight=${model.weights(i)}\\n\" +\n\t\t\ts\"mu=${model.gaussians(i).mean}\\nsigma=\\n${model.gaussians(i).cov}\\n\")"],
    results: ["\n\t}\n\tspark.stop()\n }\n}"],
    selectedFile: "",
    isFilePicked: false
  }

  myToggler = (e) => {  //this is for next button
    e.preventDefault();
    const myToggle = this.state.theToggle;
    this.setState({ theToggle: !myToggle });
    this.setState({ percentage: this.state.percentage + 20 });
  }

  handleEdit = () => { //this is for default params in kmeans train
    console.log(this.state.showbutton)
    this.setState({
      showbutton: true,
      mycolor: 'beige',
    });
    if (this.state.percentage <= 39) {
      this.setState({ percentage: this.state.percentage + 50 });
    }
  };

  callbackFunction = (childData) => { //this is for progress bar
    this.setState({ percentage: childData })
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
σ

  downloadTxtFile = () => { //this is the file (downloading zip)
    this.setState({ percentage: this.state.percentage + 30 });
    this.setState({ pivot: this.state.pivot + 1 });
    //const element = document.createElement("a");
    const file = [
      new Blob([this.state.libs], { type: 'text/plain' }),
      new Blob([this.state.name], { type: 'text/plain' }),
      new Blob([this.state.basic], { type: 'text/plain' }),
      this.state.showbutton === true ? new Blob([this.state.trainning]) : new Blob([submitForm()]),
      new Blob([this.state.fitmodel]),
      new Blob([this.state.theFor]),
      new Blob([this.state.mix]),
      new Blob([this.state.results]),

    ];
    var parts = new File(file, "myfile")
    var zip = new JSZip();
    zip.file("build.sbt", "name :=" + "\"" +localStorage.getItem('Name')+ "\"" + "\n\nversion := " + "\"" + localStorage.getItem('Version') + "\"" + "\n\nscalaVersion :=" + '\"' +  localStorage.getItem('ScalaVersion') + '\"\n\n' + "libraryDependencies ++= Seq( \n" + "\t\"org.apache.spark\" %% \"spark-sql\" % " + "\"" + localStorage.getItem('SparkVersion') + "\"," + "\n\t\"org.apache.spark\" %% \"spark-mllib\" % " + "\"" + localStorage.getItem('SparkVersion') + "\"\n)");
    zip.file("src/main/scala/GMM.scala", parts);
    zip.file("src/main/scala/dataSet.csv", this.selectedFile);
    zip.generateAsync({ type: "blob" }).then(function (content) {
      // see FileSaver.js
      FileSaver.saveAs(content, "GMM.zip");
    });
  }
  
  render() {
    return (
      <div className="d-flex">
        <ClusterToolbar />
        <br />
        <div className="welcome">
          <h1> Gaussian Mixture Model Algorithm </h1>
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
                    <h2> Train your GMM model with </h2>
                    <br />
                    <button class="btn btn-primary" onClick={this.handleEdit}>
                      default parameters
                    </button>
                    <br />
                    <br />
                    <Myform percentage={this.state.percentage} parentCallback={this.callbackFunction} />
                </Jumbotron>
                <br />
                <div>
                  <button disabled={this.state.percentage <= 69} class="btn btn-primary mr-1" onClick={this.downloadTxtFile}>Download</button>
                  {this.state.pivot === 1 ?
                    <Link to='/cluster'><button class="btn btn-primary"> Return to menu  </button></Link>
                    : null
                  }
                </div>
              </div> : null
          }
        </div>
      </div>
    );
  }
}

export default GMM 