


let converter = {
   /* Declaring the variables. */
    option1: undefined,
    option2: undefined,
    input: undefined,
    kilometers: undefined,
    result: undefined,
    /* A function that is called when the button is clicked. */
    calculate: function(){
        /* Getting the value of the select element. */
        this.option1 = document.getElementById("option1").value;
        this.option2 = document.getElementById("option2").value;
        this.input = document.getElementById("input").value;
        /* Converting the input to kilometers. */
        switch(this.option1){
            case"meter":
            this.kilometers =input.value*0.001;
            this.output(this.kilometers);
            break;
            case"kilometer":
            this.kilometers = input.value*1;
            this.output(this.kilometers);
            break;
            case"centimeter":
            this.kilometers = input.value*0.00001;
            this.output(this.kilometers);
            break;
            case"milimeter":
            this.kilometers = input.value*0.000001;
            this.output(this.kilometers);
            break;
            case"mile":
            this.kilometers = input.value*1.60935;
            this.output(this.kilometers);
            break;
            case"yard":
            this.kilometers = input.value*0.0009144;
            this.output(this.kilometers);
            break;
            case"foot":
            this.kilometers = input.value*0.0003048;
            this.output(this.kilometers);
            break;
            case"inch":
            this.kilometers = input.value*0.0000254;
            this.output(this.kilometers);
            break;
            case"lightYear":
            this.kilometers = input.value*9460660000000;
            this.output(this.kilometers);
            break;
        }
    },
    /* Converting the kilometers to the selected unit. */
    output: function(kilometers){
        switch(this.option2){
            case"meter":
            this.result = this.kilometers/0.001;
            document.getElementById("output").value=converter.result
            break;
            case"kilometer":
            this.result = this.kilometers/1;
            document.getElementById("output").value=converter.result
            break;
            case"centimeter":
            this.result = this.kilometers/0.00001;
            document.getElementById("output").value=converter.result
            break;
            case"milimeter":
            this.result = this.kilometers/0.000001;
            document.getElementById("output").value=converter.result
            break;
            case"mile":
            this.result = this.kilometers/1.60935;
            document.getElementById("output").value=converter.result
            break;
            case"yard":
            this.result = this.kilometers/0.0009144;
            document.getElementById("output").value=converter.result
            break;
            case"foot":
            this.result = this.kilometers/0.0003048;
            document.getElementById("output").value=converter.result
            break;
            case"inch":
            this.result = this.kilometers/0.0000254;
            document.getElementById("output").value=converter.result
            break;
            case"lightYear":
            this.result = this.kilometers/9460660000000;
            document.getElementById("output").value=converter.result
            break;
        }
    }
}