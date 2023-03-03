const Payments = ({ payment }) => {

    return (
        <div className="bg-gray-50 flex justify-between mx-4 py-2 border-b border-solid border-gray-200">
            <div className="flex flex-col items-start">
                <p className="bg-indigo-100 text-indigo-800 text-xs font-thin rounded-full px-2">{payment.date}</p>
                <p className="text-normal font-normal text-gray-800">{payment.name}</p>
            </div>
            <p className="text-normal font-normal text-gray-800"> - {payment.cost} руб.</p>
        </div>


        )
    }


export default Payments