import React, { Component } from 'react'
import '../Algorithms.css'
import LoadingBar from 'react-top-loading-bar'
import FileSaver from 'file-saver';
import JSZip from 'jszip'
import Myforms from './form'
import { Link } from 'react-router-dom';
import ClusterToolbar from '../../ClusterToolbar'
import { Jumbotron, Form } from 'react-bootstrap'



function submitForm() {
  let myK = "val lda = new LDA()";
  if (document.getElementById("checkpointIntervalID").value !== "") {
    myK = (myK.concat(".", "setCheckpointInterval(" + document.getElementById("checkpointIntervalID").value + ")"));
  }
  if (document.getElementById("docConcentrationID").value !== "") {
    myK = (myK.concat(".", "setDocConcentration(" + document.getElementById("docConcentrationID").value + ")"));
  }
  if (document.getElementById("featuresColID").value !== "") {
    myK = (myK.concat(".", `setFeaturesCol("${document.getElementById("featuresColID").value}")`));
  }
  if (document.getElementById("kID").value !== "") {
    myK = (myK.concat(".", "setK(" + document.getElementById("kID").value + ")"));
  }
  if (document.getElementById("maxIterID").value !== "") {
    myK = (myK.concat(".", "setMaxIter(" + document.getElementById("maxIterID").value + ")"));
  }
  if (document.getElementById("optimizerID").value !== "") {
    myK = (myK.concat(".", `setOptimizer("${document.getElementById("optimizerID").value}")`));
  }
  if (document.getElementById("seedID").value !== "") {
    myK = (myK.concat(".", "setSeed(" + document.getElementById("seedID").value + ")"));
  }
  if (document.getElementById("subsamplingRateID").value !== "") {
    myK = (myK.concat(".", "setSubsamplingRate(" + document.getElementById("subsamplingRateID").value + ")"));
  }
  if (document.getElementById("topicConcentrationID").value !== "") {
    myK = (myK.concat(".", "setTopicConcentration(" + document.getElementById("topicConcentrationID").value + ")"));
  }
  if (document.getElementById("topicDistributionColID").value !== "") {
    myK = (myK.concat(".", "setTopicDistributionCol(" + document.getElementById("topicDistributionColID").value + ")"));
  }
  return (myK);
}

class LDA extends Component {

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
    theshowup: 0,
    pivot: 0,
    theToggle: false,
    percentage: 0,
    showbutton: false,
    libs: ["import org.apache.spark.ml.clustering.LDA\nimport org.apache.spark.sql.SparkSession\nobject\t"],
    name: [this.makeid()],
    basic: ["{\n def main(args: Array[String]): Unit = { \n\tval spark = SparkSession\n\t\t.builder\n\t\t.appName(s\"${this.getClass.getSimpleName}\")\n\t\t.getOrCreate()\n\tval dataset = spark.read.format(\"libsvm\").load(\"dataSet.csv\")"],
    trainning: ["\n\tval lda = new LDA()\n"],
    continue: ["\n\tval model = lda.fit(dataset)\n\n\tval ll = model.logLikelihood(dataset)\n\tval lp = model.logPerplexity(dataset)\n\tprintln(s\"The lower bound on the log likelihood of the entire corpus: $ll\")\n\tprintln(s\"The upper bound on perplexity: $lp\")\n"],
    topics: ["\n\tval topics = model.describeTopics("],
    printTopics: [")\n\tprintln(\"The topics described by their top-weighted terms:\")\n\ttopics.show(false)\n"],
    results: ["\n\tval transformed = model.transform(dataset)\n\ttransformed.show(false)\n\tspark.stop()\n }\n}"],
    selectedFile: "",
    isFilePicked: false
  }

  myToggler = (e) => {  //this is for next button
    e.preventDefault();
    const myToggle = this.state.theToggle;
    this.setState({ theToggle: !myToggle });
    this.setState({ percentage: this.state.percentage + 10 });
  }

  handleEdit = () => { //this is for default params in  train
    console.log(this.state.showbutton)
    this.setState({
      showbutton: true,
      mycolor: 'beige',
      theshowup: 1,
    });
    if (this.state.percentage <= 39) {
      this.setState({ percentage: this.state.percentage + 30 });
    }
  };

  callbackFunction = (childData) => { //this is for progress bar
    this.setState({
      percentage: childData,
      theshowup: 1
    });
  }

  mytopic = (e) => {
    e.preventDefault();
    this.setState({ percentage: this.state.percentage + 30 });
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


  downloadTxtFile = () => { //this is the file (downloading zip)
    this.setState({ percentage: this.state.percentage + 30 });
    this.setState({ pivot: this.state.pivot + 1 });
    //const element = document.createElement("a");
    const file = [
      new Blob([this.state.libs], { type: 'text/plain' }),
      new Blob([this.state.name], { type: 'text/plain' }),
      new Blob([this.state.basic], { type: 'text/plain' }),
      this.state.showbutton === true ? new Blob([this.state.trainning]) : new Blob([submitForm()]),
      new Blob([this.state.continue]),
      new Blob([this.state.topics]),
      new Blob([document.getElementById('topicID').value], { type: 'text/plain' }),
      new Blob([this.state.printTopics]),
      new Blob([this.state.results]),

    ];
    var parts = new File(file, "myfile")
    //element.href = URL.createObjectURL(parts);
    //element.download = "myFile.txt";
    var zip = new JSZip();
    zip.file("build.sbt", "name :=" + "\"" +localStorage.getItem('Name')+ "\"" + "\n\nversion := " + "\"" + localStorage.getItem('Version') + "\"" + "\n\nscalaVersion :=" + '\"' +  localStorage.getItem('ScalaVersion') + '\"\n\n' + "libraryDependencies ++= Seq( \n" + "\t\"org.apache.spark\" %% \"spark-sql\" % " + "\"" + localStorage.getItem('SparkVersion') + "\"," + "\n\t\"org.apache.spark\" %% \"spark-mllib\" % " + "\"" + localStorage.getItem('SparkVersion') + "\"\n)");
    zip.file("src/main/scala/LDA.scala", parts);
    zip.file("src/main/scala/dataSet.csv", this.selectedFile);
    zip.generateAsync({ type: "blob" }).then(function (content) {
      // see FileSaver.js
      FileSaver.saveAs(content, "LDA.zip");
    });
  }



  render() {
    return (
      <div className="d-flex">
        <ClusterToolbar />
        <div className="welcome">
          <h1> Latent Dirichlet Allocation Algorithm</h1>
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
          <LoadingBar height={10} loaderSpeed={1000} transitionTime={100} color='#00008B' progress={this.state.percentage} onLoaderFinished={() => this.state.percentage} />

          {/*<ProgressBar value={this.state.percentage} max={100}/>*/}
          {
            this.state.theToggle === true ?
              <div>
                <Jumbotron>
                  <h2> Train your LDA model </h2>
                  <br />
                  <button type="submit" class="btn btn-primary mr-1" onClick={this.handleEdit}>
                    default parameters
                  </button>
                  <br />
                  <br />
                  <Myforms percentage={this.state.percentage} parentCallback={this.callbackFunction} />
                </Jumbotron>
                {
                  this.state.theshowup === 1 ?
                    <div>
                      <Jumbotron>
                        <h2> Choose the ideal number of topic </h2>
                        <br />
                        <Form onSubmit={this.mytopic}>
                          <Form.Group controlId="topicID">
                            <Form.Control min = "0" name="Topic" type="number" required={true} placeholder="Number of topics" />
                          </Form.Group>
                          <button type="submit" class="btn btn-primary">Validation</button>
                        </Form>
                      </Jumbotron>
                      <div>
                        <button disabled={this.state.percentage <= 69} type="submit" class="btn btn-primary mr-1" onClick={this.downloadTxtFile}>Download</button>
                        {this.state.pivot === 1 ?
                          <Link to='/cluster'><button type="submit" class="btn btn-primary">Return to menu </button></Link> 
                          : null
                        }
                      </div>
                    </div> : null
                }
              </div> : null
          }
        </div>
      </div>
    );
  }
}


export default LDA;