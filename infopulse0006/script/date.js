var today = new Date()
    ,months = ["jan", "feb", "mar", "apr", "may", "june", "july", "aug"]
    ,week = ["su", "mo", "tu", "we", "th", "fr", "sa"]
    ;
console.log(today);
console.log(today.getDate(), months[today.getMonth()], today.getFullYear(), week[today.getDay()]);
console.log(today.getHours(), today.getMinutes(), today.getSeconds());