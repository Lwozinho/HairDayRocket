//Seleciona o input de data
import { schedulesDay } from "../schedules/load"
const selectedDate = document.getElementById('date');


//Recarrega a lista de horários ao mudar a data
selectedDate.onchange = () => schedulesDay()