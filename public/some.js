const python_s = require('child_process').spawn('python', ['../nlp.py']);

function show(){
   
python_s.stdout.on('data',function(output_data){
   
    console.log(output_data)
    

});


}

show();