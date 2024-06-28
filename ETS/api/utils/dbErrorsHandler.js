import {Prisma} from "../db.js";

const dbErrorsHandler = (e) => {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
        switch (e.code) {
            case "P2002":
                return "Невозможно создать запись с такими данными";
            case "P1001":
                return "Нет подключения с БД";
            case "P2025":
                return "Одна или несколько записей, которые были необходимы не найдены";
            case "P2003":
                return "Один из указанных id не найден";
            case "P2014":
                return "Изменение, которое вы пытаетесь внести, нарушит требуемое отношение.";
            default:
                return "Необрабатываемая ошибка";
        }
    } else return "Неизвестная ошибка"
}
export default dbErrorsHandler;