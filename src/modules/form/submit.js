import dayjs from "dayjs";

const form = document.querySelector('form');
const clientName = document.getElementById("client");
const selectedDate = document.getElementById('date');

// Date atual para o input
const inputToday = dayjs(new Date()).format('YYYY-MM-DD');

//Carrega a data atual
selectedDate.value = inputToday;

//Define a data mínima como a data atual
selectedDate.min = inputToday;

form.onsubmit = (event) => {
    event.preventDefault();

    try{
        //Recupera o nome do cliente
        const name = clientName.value.trim();
        if(!name) {
            return alert("Por favor, insira o nome do cliente.");
        }

        //Recupera o horário selecionado
        const hourSelected = document.querySelector(".hour.selected");
        
        if(!hourSelected) {
            return alert("Por favor, selecione um horário.");
        }

        const [hour] = hourSelected.innerText.split(":");

        //Inserir a hora na data selecionada
        const when = dayjs(selectedDate.value).add(hour, "hour")

        //Gera um ID
        const id = new Date().getTime();
        
    } catch (error) {
        alert("Ocorreu um erro ao processar o formulário. Por favor, tente novamente.");
    }
}