const Statistics = () => {


    return (
            <div className="flex justify-between mt-10 gap-x-3 max-w-2xl m-auto">

                <div className="flex flex-col gap-y-2 ">
                    <div className="bg-slate-200 text-slate-500 px-3 rounded-xl">
                        <p>Еда: 8 500 руб.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-y-2 m-6">
                    <div className="bg-gray-200 text-slate-500 flex flex-row">
                        <div className="bg-slate-300 px-3 py-3"></div>
                        <p className="px-3 py-2">Еда: <strong>8 500</strong> руб.</p>
                    </div>
                    <div className="bg-gray-200 text-slate-500 flex flex-row">
                        <div className="bg-orange-200 px-3 py-3"></div>
                        <p className="px-3 py-2">Аредна: <strong>8 500</strong> руб.</p>
                    </div>
                    <div className="bg-gray-200 text-slate-500 flex flex-row">
                        <div className="bg-green-200 px-3 py-3"></div>
                        <p className="px-3 py-2">Одежда: <strong>8 500</strong> руб.</p>
                    </div>
                    <div className="bg-gray-200 text-slate-500 flex flex-row">
                        <div className="bg-sky-200 px-3 py-3"></div>
                        <p className="px-3 py-2">Образование: <strong>8 500</strong> руб.</p>
                    </div>
                    <div className="bg-gray-200 text-slate-500 flex flex-row">
                        <div className="bg-violet-200 px-3 py-3"></div>
                        <p className="px-3 py-2">Путешествия: <strong>8 500</strong> руб.</p>
                    </div>
                    <div className="bg-gray-200 text-slate-500 flex flex-row">
                        <div className="bg-rose-200 px-3 py-3"></div>
                        <p className="px-3 py-2">Развлечения: <strong>8 500</strong> руб.</p>
                    </div>
                </div>
            </div>
        )
    }


export default Statistics