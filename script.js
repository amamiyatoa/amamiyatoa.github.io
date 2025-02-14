function displayTime() {
    const date = new Date();
    const month = date.getMonth();
    const day =  date.getDate();
    const hour = date.getHours();
    const minute =  date.getMinutes();
    const second = date.getSeconds();
    const year = date.getFullYear();
    const currentTime = `${year}/${month}/${day}/${hour}/${minute}/${second}`;
    document.querySelector('.clock').textContent = currentTime;
}
setInterval(
    displayTime,1000
)