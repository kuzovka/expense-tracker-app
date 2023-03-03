function Button({ title, handleClick, type }) {
    return (
        <button type={type} onClick={event => handleClick(event)} className="border border-solid border-color-white rounded-lg text-sm text-white px-4 py-2 shadow-md font-semibold bg-indigo-500 hover:bg-indigo-700 ">
            {title}
        </button>
    )
}

export default Button