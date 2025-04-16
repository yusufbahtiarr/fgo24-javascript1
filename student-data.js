const studentData = [
    {
        name: "John",
        score: 80
    },
    {
        name: "Ari",
        score: 99
    },
    {
        name: "deni",
        score: 60
    },
    {
        name: "Jane",
        score: 85
    },
    {
        name: "Edie",
        score: 82
    },
    {
        name: "Dino",
        score: 95
    }
    ,
    {
        name: "Han",
        score: 63
    }
]

result = 0
max = 0
low = 0
for(let i=0; i < studentData.length; i++){
    // console.log(studentData[i].name);
    result += studentData[i].score
    if(max == 0 ){
        max = studentData[0].score
    }else if(max < studentData[i].score){
        max = studentData[i].score 
    }else{ 
        max = max}


    if(low == 0 ){
        low = studentData[0].score
    }else if(low > studentData[i].score){
        low = studentData[i].score 
    }else{ 
        low = low}
}
console.log("Nilai rata-rata:", result / studentData.length);
console.log("Nilai dengan nilai tertinggi:", tinggi);
console.log("Nilai dengan nilai terendah:", low);
