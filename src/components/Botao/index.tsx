import style from './Botao.module.scss';

function Botao ({ children, onClick, type }: { children: string, onClick?: () => void , type?: "submit" | "reset" | "button" }) {
    return (
      <button  onClick={onClick} type={type} className={style.botao}>
        {children}
      </button>
    )
  }

export default Botao;