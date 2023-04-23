import Button from "components/Button"
import { useState } from "react"
import { v4 as uuidv4} from "uuid"

const names = ["Еда", "Аренда", "Одежда", "Образование", "Путешествия", "Развлечения"]

const PaymentForm = (props) => {

    const {addPayment} = props
    const [cost, setCost] = useState('')
    const [name, setName] = useState(names[0])


    const handleClick = event => {
        event.preventDefault()

        const payment = {
            date: new Date(),
            cost: cost,
            name: name,
            id: uuidv4()
        }

        addPayment(payment)
        setCost('')
        setName(names[0])


    }

    return (

                <form className="flex justify-start items-center">
                        <input
                            onChange={(event) => setCost(event.target.value.replace(/\D/, ""))}
                            value={cost}
                            name="name"
                            type="text"
                            placeholder="Сумма"
                            className="w-32 border h-1/2 border-gray-300 rounded-md bg-white text-left px-4 py-4 cursor-pointer text-base text-gray-800 mr-4 focus:border-2 focus:border-slate-600 focus:outline-none"
                        />
                        <select
                            onChange={(event) => setName(event.target.value)}
                            value={name}
                            className=" w-80 border h-1/2 border-gray-300 rounded-md bg-white text-left px-4 py-4 cursor-pointer text-base text-gray-800 mr-4 outline-none dropdown focus:border-2 focus:border-slate-600">

                            {names.map(item => {
                            return (
                                <option key={item}>{item}</option>
                            )
                        })}
                        </select>
                    <Button title="Добавить" handleClick={handleClick} type="submit" />

                </form>

        )
    }




export default PaymentForm