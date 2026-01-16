import dayjs from "dayjs"
import { apiConfig } from "./api-config"

export async function  scheduleFetchByDay({date}) {
    try {
        //Buscando a requisição 
        const response = await fetch(`${apiConfig.baseUrl}/schedules`)

        const data = await response.json()

        //Filtra os agendamentos pela data
        const dailySchedules = data.filter((schedule) =>
             dayjs(date).isSame(schedule.when, "day") 
    )

    return dailySchedules
    } catch (error) {
        console.log(error)
        alert("Não foi possível carregar os agendamentos do dia.")
    }

}