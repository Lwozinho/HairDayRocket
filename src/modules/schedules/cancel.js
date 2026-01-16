import { scheduleCancel } from "../../services/schedule-cancel";
import {schedulesDay} from "./load.js"

const periods = document.querySelectorAll('.period');



//Gerar evento de clique para cada lista
periods.forEach((period) => {
    //Captura o evento de clique
    period.addEventListener('click', async (event) => {
        if(event.target.classList.contains('cancel-icon')) {
            const item = event.target.closest("li")

            const {id} = item.dataset;


            if(id) {
                const isConfirm = confirm(
                    "Deseja realmente cancelar este agendamento?"
                );

                if(isConfirm) {
                    await scheduleCancel({id})
                    
                    schedulesDay();
                }
            }
        }
})
})