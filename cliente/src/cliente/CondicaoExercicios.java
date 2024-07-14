package cliente;

import java.util.Scanner;

public class CondicaoExercicios {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int numero = scanner.nextInt();
		
		
		if (numero >= 0) 
		System.out.println("Numero Positivo");
		else {
			System.out.println("Numero Negativo");
		}
		scanner.close();

	}

}
