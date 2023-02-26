import Tesseract from 'tesseract.js';
import {useState} from "react"
import "./translate.css"
const Translate=()=>{
    const [data,setData]=useState();
    const [lang,setLang]=useState("");
    const [text,setText]=useState("");
    const handleClick=()=>{
        Tesseract.recognize(
            data,
            'hin',
            { logger: m => console.log(m) }
          ).then(({ data: { text } }) => {
            const encodedParams = new URLSearchParams();
encodedParams.append("q", text);
encodedParams.append("target", "en");

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': '3e475e08afmshde2af4cd71c759ap173dcdjsna25728d8bb62',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body: encodedParams
};

fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
	.then(response => response.json())
	.then(response => setText(response.data.translations[0].translatedText))
	.catch(err => console.error(err));
          })
    }
    return(
        <div className='translation'>
        <input type="file" onChange={(e)=>setData(URL.createObjectURL(e.target.files[0]))}/>
        <input type="text" onChange={(e)=>setLang(e.target.value)} placeholder="enter lang"/>
        <button onClick={handleClick}>Convert</button>

        <textarea className="form-control" rows="15" value={text} onChange={(e)=>setText(e.target.value)}></textarea>
        </div>
    )
}
export default Translate;