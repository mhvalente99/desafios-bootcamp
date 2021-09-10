function Form() {
    return(
        <form name="form-car">
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
