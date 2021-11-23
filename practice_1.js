let fruit_list= ['사과','감','감','배','포도','포도','딸기','포도','감','수박','딸기']
count = 0;
fruit_list.map((value)=>{
    if(value == '딸기'){
        count += 1
    }
})
console.log(count);


function checkEmail(email){
    if(email.split('@').length == 2){
        console.log("이메일이 맞습니다.");
    }
    else{
        console.log("이메일이 아닙니다.");
    }
}

checkEmail("eogus1954@naver.com")
checkEmail("eogus1954#naver.com")


