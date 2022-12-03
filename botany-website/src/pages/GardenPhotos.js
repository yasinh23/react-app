import React, { Component } from 'react';
import {withRouter} from './withRouter';
import '../App.css';
import axios from 'axios'





// const image_input = document.querySelector("#image-input");
// image_input.addEventListener("change", function() {
//   const reader = new FileReader();
//   reader.addEventListener("load", () => {
//     const uploaded_image = reader.result;
//     document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
//   });
//   reader.readAsDataURL(this.files[0]);
// }); 

// class GardenPhotos extends Component{
   
    // state = {
    //     selectedFile : null
    // }
    
    // fileSelectedHandler = event =>{
    //     this.setState({
    //         selectedFile : event.target.files[0]
    //     })
    // }

    // fileUploadHandler = () => {
    //     const fd = new FormData;
    //     fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    //     axios.post('/GardenPhots' ,fd)
    //     .then(res => {
    //         console.log(res)
    //     });

    // }
    



class GardenPhotos extends Component {

	state = {

	// Initially, no file is selected
	selectedFile: null
	};
	
	// On file select (from the pop up)
	onFileChange = event => {
	
	// Update the state
	this.setState({ selectedFile: event.target.files[0] });
	
	};
	
	// On file upload (click the upload button)
	onFileUpload = () => {
	
	// Create an object of formData
	const formData = new FormData();
	
	// Update the formData object
	formData.append(
		"myFile",
		this.state.selectedFile,
		this.state.selectedFile.name
	);
	
	// Details of the uploaded file
	console.log(this.state.selectedFile);
	
	// Request made to the backend api
	// Send formData object
	axios.post("/Users/yasinhagos/ReactApp/botany-website/src/pages/scratch.js", formData);
	};
	
	// File content to be displayed after
	// file upload is complete
	fileData = () => {
	
	if (this.state.selectedFile) {
		
		return (
		<div>
			<h2>File Details:</h2>
			<p>File Name: {this.state.selectedFile.name}</p>

			<p>File Type: {this.state.selectedFile.type}</p>

			<p>
			Last Modified:{" "}
			{this.state.selectedFile.lastModifiedDate.toDateString()}
			</p>

		</div>
		);
	} else {
		return (
		<div>
			<br />
			<h4>Choose before Pressing the Upload button</h4>
		</div>
		);
	}
	};
	
	render() {
	
	return (
		<div>
			<h1>
			GeeksforGeeks
			</h1>
			<h3>
			File Upload using React!
			</h3>
			<div>
				<input type="file" onChange={this.onFileChange} />
				<button onClick={this.onFileUpload}>
				Upload!
				</button>
			</div>
		{this.fileData()}
		</div>
	);
	}
}

export default GardenPhotos;

    




//     render()
//     {
//         return(
           
//             // <div className="App" >
//             // <header>Upload Uour Garden Pictures Here</header>
//             // <input type= "file" onChange={this.fileSelectedHandler} />
//             // <button onClick ={this.fileUploadHandler}>Upload</button>
//             // </div>
//             <div className="App" >
//             <input type="file" id="image-input" accept="image/jpeg, image/png, image/jpg"/>
//             <div id="display-image"></div>
//             </div>
//         )
//     }
// }

// export default GardenPhotos;