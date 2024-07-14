package cliente;

import java.util.Scanner;

public class Exercicio01 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("Digite o seu numero: ");
		int entrada = scanner.nextInt();
		System.out.print("Digite o seu numero 2: ");
		int entrada2 = scanner.nextInt();
		
		int soma = entrada + entrada2;
		
		
		System.out.print( "SOMA = " + soma);
		
		
		scanner.close();
	}

}
