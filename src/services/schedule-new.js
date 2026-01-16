import { apiConfig } from "./api-config.js";

export async function scheduleNew({id, name, when }) {
   try {
    await fetch(`${apiConfig.baseUrl}/schedules`, {
        method: "POST",
        headers: {
        "content-type": "application/json",
     },
     body: JSON.stringify({ id, name, when }),
     })

     alert("Agendamento realizado com sucesso!")
    } catch(error) { 
        consolelog(error)
        alert("Não foi possível completar o agendamento.")
    }
        }