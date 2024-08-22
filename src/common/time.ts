function tempoParaSegundos(tempo: string) {
    const[horas = "0", minutos = "0", segundos = "0"] = tempo.split(":"); // divide o tempo em três partes

    const horasEmSegundos = Number(horas) * 3600 // 1 hora tem 3600 segundos
    const minutosEmSegundos = Number(minutos) * 60

    return horasEmSegundos + minutosEmSegundos + Number(segundos)
}

export default tempoParaSegundos