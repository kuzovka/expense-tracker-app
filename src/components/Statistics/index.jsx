const Statistics = () => {


    return (
            <div className="flex justify-around mt-10 gap-x-3">
                <div className="">
                    {/* Здесь будет график */}
                </div>
                <div className="flex flex-col gap-y-2">
                    <div className="bg-slate-200 text-slate-500 px-3 rounded-xl">
                        <p>Еда: 8 500 руб.</p>
                    </div>
                    <div className="bg-orange-200 text-orange-500 px-3 rounded-xl">
                        <p>Аредна: 17 500 руб.</p>
                    </div>
                    <div className="bg-green-200 text-green-500 px-3 rounded-xl">
                        <p>Одежда: 10 000 руб.</p>
                    </div>
                    <div className="bg-sky-200 text-sky-500 px-3 rounded-xl">
                        <p>Образование: 36 000 руб.</p>
                    </div>
                    <div className="bg-violet-200 text-violet-500 px-3  rounded-xl">
                        <p>Путешествия: 67 000 руб.</p>
                    </div>
                    <div className="bg-rose-200 text-rose-500  px-3 rounded-xl">
                        <p>Развлечения: 1 200 руб.</p>
                    </div>
                    <div className="bg-gray-200 text-gray-500  px-3 rounded-xl">
                        <p>Всего: 655 454 руб.</p>
                    </div>



                </div>
            </div>
        )
    }


export default Statistics