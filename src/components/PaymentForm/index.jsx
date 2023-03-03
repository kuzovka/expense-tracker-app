import Button from "components/Button"
import { useState } from "react"

const names = ["Еда", "Аренда", "Одежда", "Образование", "Путешествия", "Развлечения"]

const PaymentForm = (props) => {

    const {addPayment} = props
    const [cost, setCost] = useState('')
    const [name, setName] = useState('')


    const handleClick = event => {
        event.preventDefault()

        const payment = {
            // date: new Date(),
            cost: cost,
            name: name


        }

        addPayment(payment)
        setCost('00.00')
        setName('')


    }

    return (
            <div>
                <form className="grid grid-cols-5 gap-x-4 rounded mt-8 p-6">
                    <div className="col-span-2">
                        <input
                            onChange={(event) => setCost(event.target.value)}
                            value={cost}
                            name="name"
                            type="text"
                            placeholder="00.00"
                            className="w-full shadow-md border border-gray-300 bg-white text-left rounded-md px-4 py-1 cursor-pointer text-gray-800 focus:border-2 focus:border-indigo-500 focus:outline-none"
                        />
                    </div>

                    <div className="col-span-2 relative">
                        <select
                            onChange={(event) => setName(event.target.value)}
                            value={name}
                            className="relative w-full border border-solid  border-gray-300 bg-white text-left rounded-md px-4 py-1 cursor-pointer shadow-md outline-none text-gray-800 dropdown focus:border-2 focus:border-indigo-500">

                            {names.map(item => {
                            return (
                                <option key={item}>{item}</option>
                            )
                        })}
                        </select>

                    </div>
                    <Button title="Добавить" handleClick={handleClick} type="submit" />

                </form>
            </div>
        )
    }




export default PaymentForm