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
            <h1>Cadastro de Carro</h1>

            <input type="url" name="image" id="image" placeholder="URL da Imagem"/>
            <input type="text" name="model" id="model" placeholder="Modelo"/>
            <input type="number" name="year" id="year" placeholder="Ano"/>
            <input type="text" name="licensePlate" id="licensePlate" placeholder="Placa"/>
            <input type="color" name="color" id="color" placeholder="Cor"/>
            <button type="submit" className="button">Salvar</button>
        </form>        
    )
}

export default Form
