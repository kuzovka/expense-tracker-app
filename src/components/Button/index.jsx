function Button({ title, handleClick, type }) {
    return (
        <button type={type} onClick={event => handleClick(event)} className="w-26 h-12 rounded-md text-sm text-white px-4 uppercase font-medium bg-slate-900 hover:bg-slate-700 ease-linear">
            {title}
        </button>
    )
}

export default Button