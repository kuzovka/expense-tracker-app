
import PaymentForm from "components/PaymentForm";
import Statistics from "components/Statistics";
import Payments from "components/Payments";

import { useState } from "react";

function App() {

  const [payments, setPayments] = useState([
    {
      date: "23 января 2023",
      name: "Путешествия",
      cost: 17000,
      id: 1
    },
    {
      date: "30 января 2023",
      name: "Одежда",
      cost: 7400,
      id: 2
    },
    {
      date: "10 февраля 2023",
      name: "Развлечения",
      cost: 500,
      id: 3
    },
    {
      date: "26 февраля 2023",
      name: "Развлечения",
      cost: 42000,
      id: 4
    },
    {
      date: "01 марта 2023",
      name: "Образование",
      cost: 10000,
      id: 5
    },
    {
      date: "01 марта 2023",
      name: "Еда",
      cost: 2320,
      id: 6
    }

  ])

  const addPayment = (payment) => {
    const newPayments = [...payments, payment]
    setPayments(newPayments)
}

  return (
    <div>
      <div className="max-w-xl min-h-screen mx-auto bg-gray-50 rounded-md shadow-md my-7">
        <h1 className="text-3xl text-center font-extrabold pt-8 text-gray-900">Учет расходов</h1>
        <PaymentForm addPayment={addPayment} />
        <Statistics />
        <div className="mt-10">
          <h2 className="text-center font-semibold text-xl mb-8">История операций:</h2>
          {payments.map((payment) => {
            return (
              <Payments key={payment.id} payment={payment} />
            )
          })}

        </div>
      </div>
  </div>
  );
}

export default App;

