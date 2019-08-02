
document.getElementById('txtFileUpload').addEventListener('change', upload, false);


function showDataOnPage(csvData) {
    let container = document.getElementById('csv-data');
    container.innerHTML = JSON.stringify(csvData);
}


function dfFromCSV(csvData) {
  let DataFrame = dfjs.DataFrame;
  // let columns = [];
  const df = new DataFrame(csvData);

  let cols = df.listColumns();

  console.log("Columns:", cols);

  console.log("\nDataframe:");
  df.show();


}


function upload(evt) {

  var data = null;
  var file = evt.target.files[0];
  var reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function(event) {
  var csvData = event.target.result;

  var data = Papa.parse(csvData, {header : true});

  console.log("Parsed CSV file: ", data);

  showDataOnPage(data['data']);
  dfFromCSV(data['data']);

  };
  reader.onerror = function() {
  alert('Unable to read ' + file.fileName);
  };

}
















// if (inputType == "local")
// 		{
// 			if (!$('#files')[0].files.length)
// 			{
// 				alert("Please choose at least one file to parse.");
// 				return enableButton();
// 			}
//
// 			$('#files').parse({
// 				config: config,
// 				before: function(file, inputElem)
// 				{
// 					start = now();
// 					console.log("Parsing file...", file);
// 				},
// 				error: function(err, file)
// 				{
// 					console.log("ERROR:", err, file);
// 					firstError = firstError || err;
// 					errorCount++;
// 				},
// 				complete: function()
// 				{
// 					end = now();
// 					printStats("Done with all files");
// 				}
// 			});

//
// <script src="./papaparse.min.js"></script>
// <script src="./jquery-2.1.1.min.js"></script>
// <script>
//   var data;
//
//   function handleFileSelect(evt) {
//     var file = evt.target.files[0];
//
//     Papa.parse(file, {
//       header: true,
//       dynamicTyping: true,
//       complete: function(results) {
//         data = results;
//       }
//     });
//   }
//
//   $(document).ready(function(){
//     $("#csv-file").change(handleFileSelect);
//   });
// </script>
// <input type="file" id="csv-file" name="files"/>
