const Payments = ({ payment }) => {

    return (
        <div className=" flex justify-between mx-4 py-3 border-b border-solid border-gray-200">
            <div className="flex flex-col items-start">
                <p className="text-red-400 text-xs font-thin rounded-full">{payment.date}</p>
                <p className="text-normal font-normal text-gray-800">{payment.name}</p>
            </div>
            <p className="text-sm font-normal text-gray-800"> - {payment.cost} руб.</p>
        </div>


        )
    }


export default Payments