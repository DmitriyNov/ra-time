export default function DateTimePretty(Component, adjustedDate) {

    const DateTimePretty = (props) => {
        const date = new Date(adjustedDate).getTime();
        const currentDate = new Date().getTime();
        let time = null;
        let editedDate = null;
        const difference = currentDate - date;

        if (difference < 60 * 1000) {
            editedDate = "Сейчас";
        } else if (difference < 3600 * 1000) {
            time = Math.round(difference / (60 * 1000));
            editedDate = time + (time === 1 ? " минута назад" : time <= 4 ? " минуты назад" : " минут назад");
        } else if (difference < 86400 * 1000) {
            time = Math.round(difference / (3600 * 1000))
            editedDate = time + (time === 1 ? " час назад" : time <= 4 ? " часа назад" : " часов назад");
        } else if (difference < 2678400 * 1000) {
            time = Math.round(difference / (86400 * 1000))
            editedDate = time + (time === 1 ? " день назад" : time <= 4 ? " дня назад" : " дней назад");
        } else if (difference < 32140800 * 1000) {
            time = Math.round(difference / (2678400 * 1000))
            editedDate = time + (time === 1 ? " месяц назад" : time <= 4 ? " месяца назад" : " месяцев назад");
        } else if (difference >= 32140800 * 1000) {
            time = Math.round(difference / (32140800 * 1000))
            editedDate = time + (time === 1 ? " год назад" : time <= 4 ? " года назад" : " лет назад");
        }

        return (
            <Component {...props} date={editedDate}/>
        )
    }

    const componentName = Component.displayName || Component.name;
    DateTimePretty.displayName = `${componentName}Pretty`;

    return DateTimePretty;
}
