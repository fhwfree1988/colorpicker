import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [color, setColor] = useState();

    useEffect(() => {
        debugger;
        const pickr = Pickr.create({
            el: "#color_input",
            theme: "monolith",
            components: {
                preview: true,
                opacity: true,
                hue: true,
                // Input / output Options
                interaction: {
                    hex: true,
                    rgba: true,
                    hsla: true,
                    hsva: true,
                    cmyk: true,
                    input: true,
                    clear: true,
                    save: true
                }
            }
        });
        window.dd = pickr;
        pickr.on("change", function (e) {
            setColor(e.toRGBA());
        });
        pickr.on("show", function (e) {
            pickr.setColor(color);
        });
    }, []);

    return (
        <div>
            <div id="color_input">

            </div>
            <input value={color}/>
        </div>
    );
}

export default App;
