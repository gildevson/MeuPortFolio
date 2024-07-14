package cliente;

import java.util.Scanner;

public class Exercicios03 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int A = scanner.nextInt();
		int B = scanner.nextInt();
		int C = scanner.nextInt();
		int D = scanner.nextInt();
		
		System.out.print(A * B - C * D);
		
		
		scanner.close();

	}

}
