package cliente;

import java.util.Scanner;

public class CondicaoExecicios02 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int numero = scanner.nextInt();
		
		if (numero % 2 == 0) {
			System.out.println("Numero é par");
		} else {
			System.out.println("Esse é impar");
		}
		
		scanner.close();

	}

}
