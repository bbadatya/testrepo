      // globalSetup.js

// This array will store the test results
//let testResults = [];
const fs = require('fs');

module.exports = async config => {
  
  //testResults = [];
  /*if (fs.existsSync('./screenshots')) {
    fs.rm('./screenshots', { recursive: true });
  }

  // Create a new ./screenshots folder
  //fs.mkdir('./screenshots',{ recursive: true });
  //console.log("initialized global setup...!!!!!!!!!!!!!")

/*
  fs.mkdir('./screenshots', { recursive: true }, function (err) {
    if (err) {
      console.log('Error creating directory:', err);
    } else {
      console.log('Directory created successfully.');
    }
  });
 */

  //new
  // Check if the screenshots directory exists.
  if (fs.existsSync('./screenshots')) {
    // Delete the screenshots directory if it exists.
    await fs.promises.rm('./screenshots', { recursive: true });
  }

  // Create the screenshots directory if it does not exist.
  await fs.promises.mkdir('./screenshots', { recursive: true });

  //creating folder for integrated Reports 
  if (fs.existsSync('./integratedReports/')) {
    // Delete the screenshots directory if it exists.
    await fs.promises.rm('./integratedReports/', { recursive: true });
  }

  // Create the screenshots directory if it does not exist.
  await fs.promises.mkdir('./integratedReports/', { recursive: true });

  console.log('Directory created successfully.');



  
};