package cliente;
import java.util.Scanner;

public class CondicaoSimples {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int Hora;
		
		System.out.println("Quantas Horas? ");
		Hora = scanner.nextInt();
		
		if (Hora <= 12) {
		System.out.println("Bom dia"); /*Nesse caso é recomendação quando tem mais de duas possibilidades*/
		} else {
			if(Hora  < 18) {
				System.out.println("Boa Tarde");
			} else {
				System.out.println("Boa Noite");
			} 
		}
		
		scanner.close();
		
		
	}

}
