import { scheduleFetchByDay } from "../../services/schedules-fetch-by-day.js";
import {schedulesShow} from "../schedules/show.js";
import {hoursLoad} from "../form/hours-load.js";

const selectedDate = document.getElementById("date");

export async function schedulesDay() {
    const date = selectedDate.value;

    //Busca na API os agendamentos do dia
    const dailySchedules = await scheduleFetchByDay({date});
    schedulesShow({dailySchedules});


    //Renderiza os horários disponíveis
    hoursLoad({date, dailySchedules});
}