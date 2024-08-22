import style from './Lista.module.scss';
import Item from './Item';
import ITarefa from '../../types/ITarefas';

interface Props {
  tarefas: ITarefa []
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void // agora precisa passar para o Item aqui embaixo e no próprio Item
}

function Lista({tarefas, selecionaTarefa} : Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map(item => (
          <Item
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;