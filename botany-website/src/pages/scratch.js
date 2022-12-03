// import React, { Component } from 'react';
// import {withRouter} from './withRouter';
// import '../App.css';
// import axios from 'axios'


// class GardenPhotos extends Component{
   
//     state = {
//         selectedFile : null
//     }
    
//     fileSelectedHandler = event =>{
//         this.setState({
//             selectedFile : event.target.files[0]
//         })
//     }

//     fileUploadHandler = () => {
//         const fd = new FormData;
//         fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
//         axios.post('http://localhost:8080/garden-image/add' ,fd)
//         .then(res => {
//             console.log(res)
//         });

//     }



//     render()
//     {
//         return(
           
//             <div className="App" >
//             <header>Upload Uour Garden Pictures Here</header>
//             <input type= "file" onChange={this.fileSelectedHandler} />
//             <button onClick ={this.fileUploadHandler}>Upload</button>
//             </div>
        
//         )
//     }
// }

// export default GardenPhotos;