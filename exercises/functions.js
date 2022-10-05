// https://app.rocketseat.com.br/discover/course/o-guia-estelar-de-java-script/funcoes/functions

//Check if Fever (Mild, High, and Very High) or Healthy, given a temperature.
let temperature
const checkTemperature = function(temperature){
    let temperature_is_string = (typeof temperature === String);
    let temperature_is_underfined = temperature == undefined || temperature === "" || temperature === null;
    let hipothermia = temperature <= 35;
    let healthy = temperature > 35 && temperature < 38;
    let feverMidle = temperature >= 38 && temperature < 39;
    let feverHigh = temperature >=39 && temperature < 40;
    let feverXHigh = temperature >=40;
    if (temperature_is_underfined) {
        console.log(
            `
            The script malfuntioned with 'empty' (or 'undefined') value for temperature.")
            DEBUG temperature=" ${temperature} " ; type= " ${typeof temperature} "
            `
        )
    } else if (temperature_is_string) {
        console.log("Insert a temperature number with 2 digits. Eg: 37.")
    } else if (hipothermia) {
        console.log("You're probably with hipothermia, seek immediate medical help.")
    } else if (healthy) {
        console.log("You're probably healthy, but check with your doctor anyway.")
    } else if (feverMidle){
        console.log("You're probably with a mild fever, check with your doctor.")
    } else if (feverHigh) {
        console.log("You're probably with a high fever, check with your doctor right away.")
    } else if (feverXHigh){
        console.log("You're probably with a very high fever, seek immediate medical help.")
    } else {
        console.log(
            `The script didn't function as expected, please contact the administrator.
            DEBUG temperature=" ${temperature} " ; type= " ${typeof temperature} "
            ` 
        )
    }
}
checkTemperature(35)