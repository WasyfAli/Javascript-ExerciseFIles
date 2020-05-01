let getMyGrade = function(currentmarks, totalMarks) {
let myPercent = (currentmarks/totalMarks) * 100;
let myGrade= '';
if(myPercent >= 90){
    myGrade ="A";
}else if(myPercent >= 80){
myGrade='B';
}else if(myPercent >= 70){
    myGrade='C';
    }else if(myPercent >= 60){
        myGrade='D';
        }else if(myPercent >= 50){
            myGrade='E';
            }else{
                myGrade='F';
                
            }

            return `Your grade is ${myGrade} and percent is ${myPercent}`;

           
            
        }
        let yourResult = getMyGrade(76, 190);
        console.log(yourResult);