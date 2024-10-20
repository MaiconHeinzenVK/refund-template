//Selecionar elementos do formulario
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")

const expenseList = document.querySelector("ul")


amount.oninput = () => {
  let value = amount.value.replace(/\D/g, "")

  value = Number(value) / 100

  amount.value = formatCurrencyBrl(value)
}

function formatCurrencyBrl(value) {
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })

  return value
}

form.onsubmit = (event) => {
  event.preventDefault()

  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),
  }

  expenseAdd(newExpense)
}

function expenseAdd(newExpense) {
  try{
    //Cria o elemento para adicionar na lista
    const expenseItem = document.createElement("li")
    expenseItem.classList.add("expense")

    const expenseIcon = document.createElement("img")
    expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`)
    expenseIcon.setAttribute("alt", newExpense.category_name)

    expenseItem.append(expenseIcon)
    expenseList.append(expenseItem)
    
  } catch (error) {
    alert("Não foi possivel atualizar a lista de despensas")
    console.log(error)
  }
}