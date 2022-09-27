export const formatTitle = (text:string) => {

    return text.split(" ")
    .map((string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    })
    .join(" ");
}


export const formatTime = (time:Date) => {

    const hora = new Date()
    const minutos = Math.floor(
        (hora.getTime() - time.getTime()) / 60000);

    return minutos
    
}