import React, { useState } from 'react';
import axios from "axios";

const Abcd = ({setTrigger}) => {

  
const [file, setFile] = useState(null);
const [caption, setCaption] = useState(null); 


const handleFileChange = (e) => {
    setFile(e.target.files);
    console.log(file)
}

const handleCaptionChange = (e) => {
  setCaption(e.target.value);
  console.log(caption)
}

const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for(var x = 0; x<file.length; x++) {
        data.append('file', file[x])
    }
    axios.post("http://localhost:3000/upload", data)
    .then(async(res) => { 
      // const option = {
      //   method:"post",
      //   withCredentials:true,
      //   url:"http://localhost:3000/api/auth/post",
      //   credentials:"include",
      //   data:{
      //     link:res.data.link,
      //     caption,
      //   }
      // }
      // fetch("http://localhost:3000/api/auth/post",option)
      // })
      const options = {
        method: "POST",
        url: "http://localhost:3000/api/auth/post",
        withCredentials: true, 
        credentials :"include",
        data: {
          link: res.data.link,
          caption: caption, 
        },
      };
      
      try {
        const userDetailsResponse = await axios(options);
        console.log(userDetailsResponse.data);
        setTrigger((prev )=>prev+1)
      } catch (error) {
        console.error('Error:', error);
      }
    })
      
      
}

  return (
    <form >
      <div className="flex justify-center mt-8">
    <div className="max-w-2xl rounded-lg shadow-xl bg-gray-50">
        <div className="m-4">
            <label className="inline-block mb-2 text-gray-500">Photo Upload</label>
            <div className="flex items-center justify-center w-full">
                <label
                    className="flex flex-col w-full h-32 border-4 border-amber-100 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div className="flex flex-col items-center justify-center pt-7">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg> */}
                        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Add Photo</p>
                    </div>
                    <input
                     type="file"
                     name="img"
                     onChange={handleFileChange}
                     className="opacity-0" />
                </label>
            </div>
            <label className="inline-block mb-2 text-gray-500">Caption</label>
            <div className="mt-2">
                <input
                  name="caption"
                  type="text"
                  onChange={handleCaptionChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
        </div>
        <div className="flex justify-center p-2">
            <button onClick={handleSubmit} className="w-full px-4 py-2 text-white bg-black hover:bg-amber-400 hover:text-black rounded shadow-xl">POST</button>
        </div>
    </div>
</div> 
      {/* <div >
      <label htmlFor="file">Upload File:</label>
        <input
          type='file' 
          name='img' 
          placeholder='File' 
          onChange={handleFileChange}>
        </input>
        <input
          type='text'
          name='caption'
          placeholder='Caption'
          onChange={handleCaptionChange}>
        </input>
      </div>
      <button 
            onClick={handleSubmit}>
            SUBMIT
      </button> */}
    </form>
  )
}


export default Abcd