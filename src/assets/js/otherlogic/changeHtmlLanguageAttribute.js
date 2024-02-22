export default function changeLangAttribute(language){
    if(language === "jp"){
        document.documentElement.lang = 'jp';
    }
    else if (language === "en"){
        document.documentElement.lang = 'en';
    }
}