
import PaymentForm from "components/PaymentForm";
import Payments from "components/Payments";
import Statistics from "components/Statistics";
import { useState } from "react";
import { v4 as uuidv4} from "uuid";


function App() {

  const [payments, setPayments] = useState([
    {
      date: new Date(2023, 3, 12),
      name: "Путешествия",
      cost: 17000,
      id: uuidv4()
    },
    {
      date: new Date(2023, 3, 1),
      name: "Одежда",
      cost: 7400,
      id: uuidv4()
    },
    {
      date: new Date(2023, 2, 23),
      name: "Развлечения",
      cost: 500,
      id: uuidv4()
    },
    {
      date: new Date(2023, 1, 15),
      name: "Развлечения",
      cost: 42000,
      id: uuidv4()
    },
    {
      date: new Date(2023, 0, 18),
      name: "Образование",
      cost: 10000,
      id: uuidv4()
    },
    {
      date: new Date(2023, 1, 10),
      name: "Еда",
      cost: 2320,
      id: uuidv4()
    }
  ])

  const [curretnCategory, setCurrentCategory] = useState()

  const addPayment = (payment) => {
    const newPayments = [payment, ...payments]
    setPayments(newPayments)
}

  const filtredPayments = curretnCategory === "Все расходы" || !curretnCategory  ? payments : payments.filter(p => p.name === curretnCategory)



  return (

    <div>
      <Statistics payments={payments} setCurrentCategory={setCurrentCategory}/>
      <div className="bg-neutral-200 flex justify-center items-center border-b border-solid border-gray-100 py-8">
        <PaymentForm addPayment={addPayment} />
      </div>
      <div className="max-w-xl mx-auto my-7">
          <h2 className="text-center font-semibold text-xl mb-8">История операций:</h2>
          {filtredPayments.map((payment) => {
            return (
              <Payments key={payment.id} payment={payment} />
            )
          })}
      </div>
  </div>
  );
}

export default App;

