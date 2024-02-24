const translate = require('@iamtraction/google-translate');
const readytranslate = (req,res)=>{
    res.send("Ready to Translate!")
}
const englishToFrensh = async (req,res)=>{
    try {
        const {text} = req.body;
        if(text.length==0){
            res.status(400).send("Data not found!")
        }else{
            console.log("Text",text)
            let ans = await translate(text,{to:'fr'})
            res.status(200);
            res.json({"translation":ans.text})
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}


module.exports ={readytranslate,englishToFrensh};

