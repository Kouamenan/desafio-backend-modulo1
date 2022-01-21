function solucao(texto) {
    // Seu código aqui
    const palavras = texto.trim().split(" ");

    //existem casos de teste em que tem vários espaços seguidos
    // por ex: "Eu    sou    legal"
    // por isso ao dar split por espaços ficam varios elementos nulos,
    // que precisam ser removidos

    let contador = 0;

    for (let palavra of palavras){
        if (palavra){
            contador++;
        }
    }

    console.log(contador);
}