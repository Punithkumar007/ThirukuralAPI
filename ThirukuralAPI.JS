var number = document.getElementById("serial").value;

            var kuralURl='https://api-thirukkural.vercel.app/api?num='+number;
            fetch(kuralURl)
            .then(res=>{
                return res.json();
            })
            .then(result=>{

              console.log(result);
            })
            .catch(error=>{
                document.body.append(error);
            })

