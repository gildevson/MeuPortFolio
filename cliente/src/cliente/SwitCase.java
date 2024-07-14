package cliente;
import java.util.Scanner;
public class SwitCase {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int DiaDaSemana = scanner.nextInt();
		String dia = "Dia";
		
		switch (DiaDaSemana) {
		case 1:
			dia = "Domingo";
			break;
		case 2: 
			dia = "Segunda";
			break;
		case 3:
			dia = "Terça-feira";
			break;
		case 4:
			dia = "Quarta-feira";
			break;
		case 5:
			dia = "Quinta-feira";
			break;
		case 6:
			dia = "sexta-feira";
			break;
		case 7: 
			dia = "Sabado";
			break;
		default: 
			dia = "Dia Invalido";
			break;
		}
		System.out.println("Dia da semana: " + dia);
		scanner.close();
	}

}
