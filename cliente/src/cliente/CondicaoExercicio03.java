package cliente;

import java.util.Scanner;

public class CondicaoExercicio03 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Digite numero multiplo por : ? ");
		int NumeroMultiplo = scanner.nextInt();
		
		System.out.println("Digite numero multiplo por : ? ");
		int NumeroMultiplo2 = scanner.nextInt();
		
		
		if (NumeroMultiplo % NumeroMultiplo2 == 0 || NumeroMultiplo2 % NumeroMultiplo == 0 ) {
			System.out.println("Esss numero é multiplo");
		} else {
			System.out.println("numero não multiplo");
		}
		
		System.out.println("Esse numero não ");
		scanner.close();

	}

}
