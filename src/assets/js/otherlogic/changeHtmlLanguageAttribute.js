export default function changeLangAttribute(language){
    if(language === "jp"){
        document.documentElement.lang = 'ja';
    }
    else if (language === "en"){
        document.documentElement.lang = 'en';
    }
}