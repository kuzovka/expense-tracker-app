
import PaymentForm from "components/PaymentForm";
import Payments from "components/Payments";
import Header from "components/Header";
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
      <Header />
      <div className="bg-neutral-200 flex justify-center items-center border-b border-solid border-gray-100 py-8">
        <PaymentForm addPayment={addPayment} />
      </div>
      <div className="max-w-xl mx-auto my-7">
          <h2 className="text-center font-semibold text-xl mb-8">История операций:</h2>
          {payments.map((payment) => {
            return (
              <Payments key={payment.id} payment={payment} />
            )
          })}
      </div>
  </div>
  );
}

export default App;

