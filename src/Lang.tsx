import React, { ChangeEvent} from "react";
import { Language } from './enums/Language.ts';

const Lang = (props : any) => {
    
    let changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
        let language = event.target.value;
 
        switch (language) {
            case Language.EN:
                
                props.onLanguageChange(Language.EN);
                break;
            case Language.FR:
            default:
                
                props.onLanguageChange(Language.FR);
                break;
        }
    }

    let styleLang = {
        position: "fixed",
        top: "4rem",
        left: "2rem",
        height: "26px",
        width: "50px",
        zIndex: 1000
    }
 
    return (
        <div>
            <div className="" style={styleLang}>
                <select value={props.language} name="language" onChange={changeLanguage}>
                    <option value={Language.FR}>FR</option>
                    <option value={Language.EN}>EN</option>
                </select>
            </div>
        </div>
    )
}
 
export default Lang;