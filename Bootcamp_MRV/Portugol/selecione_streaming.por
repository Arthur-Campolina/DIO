programa
{
	
	funcao inicio()
	{
		escreva ("Selecione uma das opções:" + "\n" + "1 - Netflix; 2 - Amazon Prime; 3 - HBO GO; 4 - Sair do menu")
		inteiro menu = 0
		escreva("\n" + "Digite somente o número:")
		leia (menu)

		escolha (menu)
		{
			caso 1: 
			escreva ("Ok! Abrindo Netflix...")
			pare

			caso 2: 
			escreva ("Ok! Abrindo Amazon Prime...")
			pare

			caso 3: 
			escreva ("Ok! Abrindo HBO GO...")
			pare

			caso 4:
			escreva ("Ok! Saindo do menu...")
			pare

			caso contrario: 
			escreva ("Você deve escolher a opção 1, 2, 3 ou 4." + "\n" + "Digite somente o número:")
			leia (menu)
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 387; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */