let js = 'Amazing';
        js = 'Boring'
        if (js === 'Amazing') alert("JS is fun")

        function colorChange() {
            var body = document.body;
            body.style.backgroundColor = 'Black'
        }

        let country= 'Pakistan';
        let continent='Asia';
        let population= "200 Millions"

        console.log(country)
        console.log(continent)
        console.log(population)


        // String Litterals 
document.write("<br> <br>")
        document.write(`This is a String literals`)

        const name= 'Abdul Majid';
        const age= 25;
        const job= "Engineer";

        document.write("<br> <br>")

        document.write(`I'm ${name} and ${age} and the Profession is ${job}`)
        document.write("<br> <br>")


        const sarah=15;

        if (sarah>=18) {
            document.write("Sarah can drive yahooo")
        }
        else {
            const remaining= 18 -sarah;
            document.write(`She has to wait for atlease next ${remaining} years `)
        }