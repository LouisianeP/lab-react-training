import React from 'react'

export default function Greetings(props) {
    let stringLang = JSON.stringify(props.lang)
    let gruss =""
    if (stringLang='de') gruss = "Hallo"
    else if (stringLang='fr') gruss = "Salut"
    else if (stringLang='es') gruss = "Hola"
    else if (stringLang='en') gruss = "Hi"
    return (
        <div>
            <h1>{gruss} {props.children}</h1>
        </div>
    )
}

