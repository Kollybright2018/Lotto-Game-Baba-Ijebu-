// Get my elements
        let form = document.getElementById('lotto-form');
        let sure = document.getElementById('sure')
        let direct = document.getElementById('direct');
        let third_no = document.getElementById('third-no');
        let con = document.getElementById('con');
        let error = document.getElementById('error');
    //    console.log(con.classList);

function getId(id, text){
id = document.getElementById(id);
id.innerHTML = text
}

function validate(id){
    let input = form[id].value.trim()
    if (input == '') {
          getId('error', "Box caanot be empty");
          return false
       }
if(isNaN(input)){
        getId('error', "Decimal Number or Alphabet are not allowed")  
        return false
       }
       return input
}


// Work on 2 sure button
   sure.onclick =  (sure) =>{
   sure.checked== true
 con.classList.remove('d-none')
third_no.classList.add("d-none")
getId('error', "")   }
form.addEventListener('submit', (e)=>{
       e.preventDefault();
       let user_input = []
       let generate  = []
        let inp_1 = validate('first_no')
        let inp_2 = validate("second_no")
        console.log(inp_1);
        console.log(inp_2);
        // check for the input Weather its valid
        if (inp_1 ==false || inp_2 ==false ) {
            getId('error', "Pls Read the instruction very well");
        }else{
            user_input.push(Number(inp_1))
            user_input.push(Number(inp_2))

            // Generate My Lotto Number
         for(let i=0; i<5; i++ ){
             rand = Math.floor(Math.random() * 100);
             generate.push(rand)
           } //i       

        //  To check weather the input is in the lotto number  
        if (generate.includes(user_input[0]) && generate.includes(user_input[1]) ) {
            getId("input_nos", "<b> Your Input :  " + user_input.toString().replace(",", " , ") + "</b>")
              getId("generated_no", "<b> Lotto Number :  " + generate.toString().replace(",", " ,") + "</b>" )
              getId("status", '<b> Status </b>: You win  '  )
              getId("game_result-h", '<b> Result Details: </b>')
              getId("error", '')
             }else{ 
                getId("error", '')
                getId("input_nos", "<b> Your Input :  " + user_input.toString().replace(",", " , ") + "</b>")
              getId("generated_no", "<b> Lotto Number :  " + generate.toString().replace(",", " ,") + "</b>" )
              getId("status", '<b> Status </b>: You Loose  '  )
              getId("game_result-h", '<b> Result Details: </b>')
             } 
        } //else        
  })



//   When Clicked on three direct
   direct.onclick =  (direct) =>{
   direct.checked == true;
 con.classList.remove('d-none');
third_no.classList.remove("d-none");
getId('error', "")
form.addEventListener('submit', (e)=>{
       e.preventDefault();
       let user_input = []
       let generate  = []
       let inp_1 = validate('first_no')
        let inp_2 = validate("second_no")
        let inp_3 = validate("third_no")
    //   Check for the input error
        if (inp_1 ==false & inp_2 ==false & inp_3 == false ) {
            getId('error', "Pls Read the instruction very well");
        }else{
            user_input.push(Number(inp_1))
            user_input.push(Number(inp_2))
            user_input.push(Number(inp_3))

            // Generate lotto number
            for(let i=0; i<5; i++ ){
             rand = Math.floor(Math.random() * 100);
             generate.push(rand)
           } //i 

        if (generate.includes(user_input[0]) && generate.includes(user_input[1]) && generate.includes(user_input[2]) ) {
              getId("input_nos", "<b> Your Input :  " + user_input.toString().replace(",", " , ") + "</b>")
              getId("generated_no", "<b> Lotto Number :  " + generate.toString().replace(",", " ,") + "</b>" )
              getId("status", '<b> Status </b>: You win  '  )
              getId("game_result-h", '<b> Result Details: </b>')
              getId("error", '')
             }else{
                getId("error", '')
                getId("input_nos", "<b> Your Input :  " + user_input.toString().replace(",", " , ") + "</b>")
              getId("generated_no", "<b> Lotto Number :  " + generate.toString().replace(",", " ,") + "</b>" )
              getId("status", '<b> Status </b>: You Loose  '  )
              getId("game_result-h", '<b> Result Details: </b>')
             } //else
}
        
  }) // Event closed 
   } // OnClicked