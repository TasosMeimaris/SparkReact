import React, { Component } from 'react'
import '../Algorithms.css'
import LoadingBar from 'react-top-loading-bar'
import FileSaver from 'file-saver'
import JSZip from 'jszip'
import TheForm from './TheForm'
import { Link } from 'react-router-dom';
import ClusterToolbar from '../../ClusterToolbar'
import { Jumbotron } from 'react-bootstrap'

function submitForm() {
  let myK = "val model = new PowerIterationClustering()";
  if (document.getElementById("dstColID").value !== "") {
    myK = (myK.concat(".", `setDstCol("${document.getElementById("dstColID").value}")`));
  }
  if (document.getElementById("kID").value !== "") {
    myK = (myK.concat(".", "setK(" + document.getElementById("kID").value + ")"));
  }
  if (document.getElementById("maxIterID").value !== "") {
    myK = (myK.concat(".", "setMaxIter(" + document.getElementById("maxIterID").value + ")"));
  }
  if (document.getElementById("srcColID").value !== "") {
    myK = (myK.concat(".", `setSrcCol("${document.getElementById("srcColID").value}")`));
  }
  if (document.getElementById("weightColID").value !== "") {
    myK = (myK.concat(".", `setWeightCol("${document.getElementById("weightColID").value}")`));
  }
  if (document.getElementById("initModeID").value !== "") {
    myK = (myK.concat(".", `setInitMode("${document.getElementById("initModeID").value}")`));
  }
  return (myK);
}


class PIC extends Component {

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
    libs: ["import org.apache.spark.ml.clustering.PowerIterationClustering\nimport org.apache.spark.sql.SparkSession\nobject\t"],
    name: [this.makeid()],
    basic: ["{\n def main(args: Array[String]): Unit = { \n\tval spark = SparkSession\n\t\t.builder\n\t\t.appName(s\"${this.getClass.getSimpleName}\")\n\t\t.getOrCreate()\n\tval dataset = spark.createDataFrame(Seq(\n "],
    dataset: ["\t\t(0L, 1L, 1.0),\n\t\t(0L, 2L, 1.0), \n\t\t(1L, 2L, 1.0), \n\t\t(3L, 4L, 1.0), \n\t\t(4L, 0L, 0.1)\n\t)).toDF(\"src\", \"dst\", \"weight\")) \n\t"],
    trainning: ["\n\tval model = new PowerIterationClustering()\n"],
    prediction: ["\n\tval prediction = model.assignClusters(dataset).select(\"id\", \"cluster\")\n"],
    results: ["\n\tprediction.show(false)\n\tspark.stop()\n }\n}"],
  }

  handleEdit = () => { //this is for default params in kmeans train
    console.log(this.state.showbutton)
    this.setState({
      showbutton: true,
      mycolor: 'beige',
    });
    if (this.state.percentage <= 39) {
      this.setState({ percentage: this.state.percentage + 70 });
    }
  };

  callbackFunction = (childData) => { //this is for progress bar
    this.setState({ percentage: childData })
  }

  downloadTxtFile = () => { //this is the file (downloading zip)
    this.setState({ percentage: this.state.percentage + 30 });
    this.setState({ pivot: this.state.pivot + 1 });
    //const element = document.createElement("a");
    const file = [
      new Blob([this.state.libs], { type: 'text/plain' }),
      new Blob([this.state.name], { type: 'text/plain' }),
      new Blob([this.state.basic], { type: 'text/plain' }),
      new Blob([this.state.dataset], { type: 'text/plain' }),
      this.state.showbutton === true ? new Blob([this.state.trainning]) : new Blob([submitForm()]),
      new Blob([this.state.prediction]),
      new Blob([this.state.results]),

    ];
    var parts = new File(file, "myfile")
    //element.href = URL.createObjectURL(parts);
    //element.download = "myFile.txt";
    var zip = new JSZip();
    zip.file("build.sbt", "name :=" + "\"" +localStorage.getItem('Name')+ "\"" + "\n\nversion := " + "\"" + localStorage.getItem('Version') + "\"" + "\n\nscalaVersion :=" + '\"' +  localStorage.getItem('ScalaVersion') + '\"\n\n' + "libraryDependencies ++= Seq( \n" + "\t\"org.apache.spark\" %% \"spark-sql\" % " + "\"" + localStorage.getItem('SparkVersion') + "\"," + "\n\t\"org.apache.spark\" %% \"spark-mllib\" % " + "\"" + localStorage.getItem('SparkVersion') + "\"\n)");
    zip.file("src/main/scala/PIC.scala", parts);
    zip.generateAsync({ type: "blob" }).then(function (content) {
      // see FileSaver.js
      FileSaver.saveAs(content, "PIC.zip");
    });
  }
  
  render() {
    return (
      <div className="d-flex">
        <ClusterToolbar />
        <div className="welcome">
          <h1> Power Iteration Clustering Algorithm </h1>
          <LoadingBar height={10} loaderSpeed={1000} transitionTime={100} color='#00008B' progress={this.state.percentage} onLoaderFinished={() => this.state.percentage} />
          <div>
            <br />
            <Jumbotron>
              <h2> Train your PIC model </h2>
              <br />
              <button class="btn btn-primary" onClick={this.handleEdit}>
                default parameters
              </button>
              <br />
              <br />
              <TheForm percentage={this.state.percentage} parentCallback={this.callbackFunction} />
            </Jumbotron>
            <br />
            <button disabled={this.state.percentage <= 69}  class="btn btn-primary mr-1" onClick={this.downloadTxtFile}>Download</button>
            {this.state.pivot === 1 ?
              <Link to='/cluster'><button class="btn btn-primary" >Return to menu </button> </Link>
              : null
            }
          </div>
        </div>
      </div>
    );
  }

}

export default PIC 