import React, { useEffect, useState } from 'react'
import { InputText } from 'primereact/inputtext'

const Busca = (props) => {
    const [termoDeBusca, setTermoDeBusca] = useState('')
    const atualizarTermoDeBusca = (e) => {
        setTermoDeBusca(e.target.value)
    }

    const { onBuscaRealizada } = props

    useEffect(() => {
        let timeoutID
        if (termoDeBusca && termoDeBusca.length >= 3)
            timeoutID = setTimeout(() => onBuscaRealizada(termoDeBusca), 2000)
        return () => {
            clearTimeout(timeoutID)
        }

    }, [termoDeBusca, onBuscaRealizada])
    return (
            <div className="flex flex-column">
                {/* ícone à esquerda, largura máxima */}
                <span className="p-input-icon-left w-full">
                    <i className="pi pi-search"/>
                    <InputText
                        value={termoDeBusca}
                        //largura máxima
                        className="w-full"
                        onChange={atualizarTermoDeBusca}
                        placeholder={props.dica}
                    />
                </span>                
            </div>
    )
}

export default Busca
// export default class Busca extends Component {
//     state = {
//         termoDeBusca: ''
//     }
//     onTermoAlterado = (event) => {
//         console.log(event.target.value)
//         this.setState({termoDeBusca: event.target.value})
//     }

//     onFormSubmit = (event) => {
//         //não deixa o navegador submeter o form
//         event.preventDefault()
//         this.props.onBuscaRealizada(this.state.termoDeBusca)

//     }

//     render() {
//         return (
//             <form onSubmit={this.onFormSubmit}>
//                 {/* empilhando os filhos */}
//                 <div className="flex flex-column">
//                     {/* ícone à esquerda, largura máxima */}
//                     <span className="p-input-icon-left w-full">
//                         <i className="pi pi-search"/>
//                         <InputText
//                             value={this.state.termoDeBusca}
//                             //largura máxima
//                             className="w-full"
//                             onChange={this.onTermoAlterado}
//                             placeholder={this.props.dica}
//                         />
//                     </span>                
//                     <Button 
//                         label="OK"
//                         className="p-button-outlined mt-2" 
//                     />
//                 </div>
//             </form>
//         )
//     }
// }

Busca.defaultProps ={
    dica: 'Digite algo que deseja ver...'
}