const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? 'from-red-400 to-red-600' : 'from-lime-400 to-lime-600' } bg-gradient-to-r text-center p-3 text-white uppercase font-bold rounded-xl text-sm mb-6`}>
        {alerta.msg}
    </div>
  )
}

export default Alerta