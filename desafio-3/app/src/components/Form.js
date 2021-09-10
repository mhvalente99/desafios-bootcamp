function Form() {
    const url = "http://localhost:3333/cars"

    function handleSubmit(e) {
        e.preventDefault()
        
        const dadosCarro = {
            image: e.target.elements.image.value,
            brandModel: e.target.elements.model.value,
            year: e.target.elements.year.value,
            plate: e.target.elements.licensePlate.value,
            color: e.target.elements.color.value
        }
        console.log(dadosCarro);

        cadastrarCarro(dadosCarro)

    }

    async function cadastrarCarro(dados) {
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dados)
        })
        .then(
          console.log("buscar novos carros")
        )
        .catch(err => {console.log(err);})
      }

    return(
        <form name="form-car" onSubmit={handleSubmit}>
            <p>Cadastro de Carro</p>
            <label htmlFor="image">URL Imagem</label>
            <input type="url" name="image" id="image"/>
            <br/>
            <label htmlFor="model">Modelo</label>
            <input type="text" name="model" id="model"/>
            <br/>
            <label htmlFor="year">Ano</label>
            <input type="number" name="year" id="year"/>
            <br/>
            <label htmlFor="licensePlate">Placa</label>
            <input type="text" name="licensePlate" id="licensePlate"/>
            <br/>
            <label htmlFor="color">Cor</label>
            <input type="color" name="color" id="color"/>
            <br/>
            <br/>
            <button type="submit">Salvar</button>
        </form>        
    )
}

export default Form
